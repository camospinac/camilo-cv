import { commands } from './registry';
import { CommandHistory } from './history';
import { getAutocomplete } from './autocomplete';

export function initTerminal() {
  const form = document.getElementById('terminal-form') as HTMLFormElement | null;
  const input = document.getElementById('terminal-input') as HTMLInputElement | null;
  const output = document.getElementById('terminal-output') as HTMLDivElement | null;

  if (!form || !input || !output) return;

  const history = new CommandHistory();
  const scrollToBottom = () => {
    const terminalContainer = output.parentElement;
    if (terminalContainer) {
      terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }
  };

  const appendOutput = (html: string) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'mb-2 animate-fadeIn';
    wrapper.innerHTML = html;
    output.appendChild(wrapper);
  };

  const appendUserPrompt = (commandText: string) => {
    appendOutput(`
      <div class="flex items-center text-sm sm:text-base font-medium">
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

      if (commandNameLower === 'clear') {
        clearTerminal();
      }
      else if (commands[commandNameLower]) {
        try {
          const result = commands[commandNameLower].execute(args);
          appendOutput(result);
        } catch (error) {
          appendOutput(`<div class="text-red-400 mb-1">Error interno al ejecutar el comando.</div>`);
        }
      }
      else {
        appendOutput(`
          <div class="text-red-400 mb-1">zsh: command not found: ${commandNameLower}</div>
          <div class="text-gray-400 mb-2">Type <span class="text-[#27c93f]">\`help\`</span> to see available commands.</div>
        `);
      }
    }
    input.value = '';
    scrollToBottom();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevCmd = history.getPrevious();
      if (prevCmd !== null) {
        input.value = prevCmd;
      }
    }
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextCmd = history.getNext();
      if (nextCmd !== null) {
        input.value = nextCmd;
      }
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
}