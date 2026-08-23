import type { Command } from '../types';
import { getCv } from '../../data/cv';

export const education: Command = {
  name: 'education',
  description: 'My education / Mi educación',
  execute: () => {
    const cv = getCv();
    const { education, ui } = cv;
    if (!education || education.length === 0) {
      return `<div class="text-gray-400">No data available.</div>`;
    }
    const eduHtml = education.map(edu => {
      const statusColor = (edu.status.toLowerCase().includes('curso') || edu.status.toLowerCase().includes('progress')) 
        ? 'text-[#27c93f]' 
        : 'text-gray-400';
      return `
      <div class="mb-5 last:mb-2 animate-fadeIn">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-blue-400 font-bold text-base sm:text-lg">:: ${edu.institution}</span>
        </div>
        <div class="ml-5 border-l-2 border-gray-600 pl-4 py-1 grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-x-2 gap-y-1 text-sm sm:text-base text-gray-300">  
          <span class="text-gray-500 font-medium">${ui.degreeLabel}</span>
          <span>${edu.degree}</span>
          <span class="text-gray-500 font-medium">${ui.statusLabel}</span>
          <span class="${statusColor} font-medium">[ ${edu.status} ]</span>
        </div>
      </div>`;
    }).join('<div class="text-gray-700/50 mb-4 ml-5 pl-4 hidden sm:block select-none tracking-widest">····································</div>');
    return `<div class="mt-4">${eduHtml}</div>`;
  }
};