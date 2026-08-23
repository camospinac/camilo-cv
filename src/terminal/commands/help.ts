import type { Command } from '../types';
import { commands } from '../registry';
import { getCv } from '../../data/cv';

export const help: Command = {
  name: 'help',
  description: 'Available commands / Comandos disponibles', 
  execute: () => {
    const { ui } = getCv();
    const availableCommands = Object.values(commands);
    const commandsHtml = availableCommands.map(cmd => {
      const translatedDesc = (ui.cmdDescriptions as Record<string, string>)?.[cmd.name] || cmd.description;
      return `
      <div class="flex mt-1">
        <span class="text-[#27c93f] w-32 shrink-0 font-medium">${cmd.name}</span>
        <span class="text-gray-300">${translatedDesc}</span>
      </div>
      `;
    }).join('');
    return `
      <div class="animate-fadeIn mt-2 mb-2">
        <div class="text-blue-400 font-bold mb-2">${ui.helpTitle}</div>
        ${commandsHtml}
        <div class="mt-4 text-gray-400 text-sm italic">
          ${ui.helpTip}
        </div>
      </div>
    `;
  }
};