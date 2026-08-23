import { commands } from './registry';
import { CommandHistory } from './history';
import { getAutocomplete } from './autocomplete';
import { getCv, getLang } from '../data/cv';

export function initTerminal() {
  const form = document.getElementById('terminal-form') as HTMLFormElement | null;
  const input = document.getElementById('terminal-input') as HTMLInputElement | null;
  const output = document.getElementById('terminal-output') as HTMLDivElement | null;

  if (!form || !input || !output) return;
  
  const history = new CommandHistory();
  let visibleCommands: string[] = []; 

  const scrollToBottom = () => {
    const terminalContainer = output.parentElement;
    if (terminalContainer) {
      terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }
  };

  const appendOutput = (html: string) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'mb-2 animate-fadeIn text-sm sm:text-base';
    wrapper.innerHTML = html;
    output.appendChild(wrapper);
  };

  const appendUserPrompt = (commandText: string) => {
    appendOutput(`
      <div class="flex items-center font-medium mt-1 mb-1">
        <span class="text-[#27c93f] mr-1">camilo@dev</span>
        <span class="text-white mr-1">:</span>
        <span class="text-blue-400 mr-1">~</span>
        <span class="text-white mr-2">$</span>
        <span class="text-gray-200">${commandText}</span>
      </div>
    `);
  };

  const clearTerminal = () => {
    output.innerHTML = '';
    visibleCommands = [];
  };

  const printWelcomeMessage = () => {
    clearTerminal(); 
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', { 
      weekday: 'short', month: 'short', day: '2-digit', 
      hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false 
    }).replace(/,/g, '');

    const { ui } = getCv();
    appendOutput(`
      <div class="text-gray-400 font-medium tracking-wide">Last login: ${formattedDate} on ttys000</div>
      <div class="text-gray-300 mt-2 mb-1">${ui.welcome}</div>
      <div class="text-gray-300 mb-3">${ui.typeHelp.replace('help', '<span class="text-[#27c93f]">\`help\`</span>')}</div>
    `);
    
    scrollToBottom();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawValue = input.value;
    const trimmedValue = rawValue.trim();

    if (trimmedValue) {
      history.push(trimmedValue);
    }
    appendUserPrompt(trimmedValue);
    if (trimmedValue) {
      const [cmdName, ...args] = trimmedValue.split(/\s+/);
      const commandNameLower = cmdName.toLowerCase();
      const { ui } = getCv(); 

      if (commandNameLower === 'clear') {
        clearTerminal();
      }
      else {
        visibleCommands.push(trimmedValue);
        if (commands[commandNameLower]) {
          try {
            const result = commands[commandNameLower].execute(args);
            appendOutput(result);
          } catch (error) {
            appendOutput(`<div class="text-red-400 mb-1">${ui.internalError}</div>`);
          }
        }
        else {
          appendOutput(`
            <div class="text-red-400 mb-1">${ui.notFound} ${commandNameLower}</div>
            <div class="text-gray-400 mb-2">${ui.typeHelp.replace('help', '<span class="text-[#27c93f]">\`help\`</span>')}</div>
          `);
        }
      }
    }
    input.value = '';
    scrollToBottom();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevCmd = history.getPrevious();
      if (prevCmd !== null) input.value = prevCmd;
    }
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextCmd = history.getNext();
      if (nextCmd !== null) input.value = nextCmd;
    }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const currentVal = input.value;
      if (!currentVal) return;
      
      const { completed, options } = getAutocomplete(currentVal);
      
      if (options.length > 0) {
        appendUserPrompt(currentVal);
        appendOutput(`<div class="text-blue-300 font-medium mb-2 flex gap-4">${options.join('  ')}</div>`);
        scrollToBottom();
      } else if (completed !== currentVal) {
        input.value = completed;
      }
    }
    else if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      clearTerminal();
    }
  });

  document.addEventListener('click', () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length === 0) {
      input.focus();
    }
  });

  window.addEventListener('langChange', () => {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', { 
      weekday: 'short', month: 'short', day: '2-digit', 
      hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false 
    }).replace(/,/g, '');
    const { ui } = getCv();
    output.innerHTML = ''; 
    appendOutput(`
      <div class="text-gray-400 font-medium tracking-wide">Last login: ${formattedDate} on ttys000</div>
      <div class="text-gray-300 mt-2 mb-1">${ui.welcome}</div>
      <div class="text-gray-300 mb-3">${ui.typeHelp.replace('help', '<span class="text-[#27c93f]">\`help\`</span>')}</div>
    `);
    visibleCommands.forEach(cmdText => {
      appendUserPrompt(cmdText);
      const [cmdName, ...args] = cmdText.split(/\s+/);
      const commandNameLower = cmdName.toLowerCase();
      if (commands[commandNameLower]) {
        try {
          appendOutput(commands[commandNameLower].execute(args));
        } catch (error) {
          appendOutput(`<div class="text-red-400 mb-1">${ui.internalError}</div>`);
        }
      } else {
        appendOutput(`
          <div class="text-gray-400 font-medium tracking-wide">Last login: ${formattedDate} on ttys000</div>
          <div class="text-red-400 mb-1">${ui.notFound} ${commandNameLower}</div>
          <div class="text-gray-400 mb-2">${ui.typeHelp.replace('help', '<span class="text-[#27c93f]">\`help\`</span>')}</div>
        `);
      }
    });
    scrollToBottom();
  });
  printWelcomeMessage();
}