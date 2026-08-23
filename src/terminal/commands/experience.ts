import type { Command } from '../types';
import { getCv } from '../../data/cv';

export const experience: Command = {
  name: 'experience',
  description: 'Muestra mi trayectoria profesional y experiencia laboral.',
  execute: () => {
    const cv = getCv();
    const { experience } = cv;
    if (!experience || experience.length === 0) {
      return `<div class="text-gray-400">No data available.</div>`;
    }
    
    const expHtml = experience.map(exp => {
      const descHtml = exp.description.map(item => `
        <div class="flex mt-1">
          <span class="text-gray-500 mr-2 shrink-0">»</span>
          <span class="text-gray-300">${item}</span>
        </div>
      `).join('');

      return `
      <div class="mb-6 last:mb-2 animate-fadeIn">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-1">
          <div>
            <span class="text-[#27c93f] font-bold text-lg">${exp.company}</span>
            <span class="text-gray-400 mx-2 hidden sm:inline">|</span>
            <span class="text-blue-400 font-bold block sm:inline">${exp.role}</span>
          </div>
        </div>
        <div class="text-gray-400 text-sm mb-2 flex items-center gap-4">
          <span class="flex items-center gap-1"><span class="text-gray-500"></span> ${exp.location}</span>
          <span class="flex items-center gap-1"><span class="text-gray-500"></span> ${exp.duration}</span>
        </div>
        <div class="text-gray-600 mb-2 select-none tracking-widest hidden sm:block">
          --------------------------------------------------
        </div>
        <div class="border-b border-gray-600 border-dashed mb-2 block sm:hidden"></div>
        <div class="text-sm sm:text-base">
          ${descHtml}
        </div>
      </div>`;
    }).join('');
    
    return `<div class="mt-2">${expHtml}</div>`;
  }
};