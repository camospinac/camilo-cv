import type { Command } from '../types';
import { commands } from '../registry';

export const help: Command = {
  name: 'help',
  description: 'Muestra la lista de todos los comandos disponibles.',
  execute: () => {
    const availableCommands = Object.values(commands);
    const commandsHtml = availableCommands.map(cmd => `
      <div class="flex mt-1">
        <span class="text-[#27c93f] w-32 shrink-0 font-medium">${cmd.name}</span>
        <span class="text-gray-300">${cmd.description}</span>
      </div>
    `).join('');
    return `
      <div class="animate-fadeIn mt-2 mb-2">
        <div class="text-blue-400 font-bold mb-2">Comandos disponibles:</div>
        ${commandsHtml}
        <div class="mt-4 text-gray-400 text-sm italic">
          Tip: También puedes hacer clic en los botones inferiores para ejecutar comandos rápidamente.
        </div>
      </div>
    `;
  }
};