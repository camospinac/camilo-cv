import type { Command } from '../types';
import { getCv } from '../../data/cv';

export const stack: Command = {
  name: 'stack',
  description: 'Tech stack / Herramientas y tecnologías',
  execute: () => {
    const cv = getCv();
    const stack: any = cv.stack; 
    const renderBlock = (title: string, items: string[]) => {
      if (!items || items.length === 0) return '';
      const itemsList = items.map((item: string) => `
        <div class="text-gray-300 ml-1">
          <span class="text-gray-600 mr-2">·</span>${item}
        </div>
      `).join('');
      
      return `
        <div class="mb-4 break-inside-avoid">
          <div class="text-blue-400 font-bold tracking-widest uppercase text-sm">${title}</div>
          <div class="text-gray-500 text-xs mb-2">──────────────</div>
          <div class="flex flex-col gap-1 text-sm sm:text-base">
            ${itemsList}
          </div>
        </div>
      `;
    };

    return `
      <div class="animate-fadeIn mt-4">
        <div class="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
          ${renderBlock('Languages', stack.languages)}
          ${renderBlock('Backend', stack.backend)}
          ${renderBlock('Frontend', stack.frontend)}
          ${renderBlock('Databases', stack.databases)}
          ${renderBlock('Tools', stack.tools)}
          ${renderBlock('Cloud', stack.cloud)}
        </div>
      </div>
    `;
  }
};