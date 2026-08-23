import type { Command } from '../types';
import { getCv } from '../../data/cv';

export const projects: Command = {
  name: 'projects',
  description: 'My portfolio / Mi portafolio',
  execute: () => {
    const cv = getCv();
    const { projects, ui } = cv;
    
    if (!projects || projects.length === 0) {
      return `<div class="text-gray-400">No data available.</div>`;
    }
    
    const projectsHtml = projects.map((proj: any) => {
      const hasLinks = !!(proj.github || proj.deploy);
      const techString = proj.tech.join(' <span class="text-gray-500">·</span> ');
      const linksArr = [];
      if (proj.github) {
        linksArr.push(`<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors underline decoration-white/30 hover:decoration-white">GitHub ↗</a>`);
      }
      if (proj.deploy) {
        linksArr.push(`<a href="${proj.deploy}" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors underline decoration-white/30 hover:decoration-white">Deploy ↗</a>`);
      }

      return `
      <div class="mb-6 text-sm sm:text-base">
        <div class="flex">
          <div class="text-gray-500 w-6 shrink-0">┌─</div>
          <div class="font-bold text-[#27c93f]">${proj.name}</div>
        </div>
        <div class="text-gray-500">│</div>
        <div class="flex">
          <div class="text-gray-500 w-6 shrink-0">├─</div>
          <div class="text-blue-400 font-bold">${ui.descLabel}</div>
        </div>
        <div class="flex">
          <div class="text-gray-500 w-6 shrink-0">│</div>
          <div class="text-gray-300">${proj.description}</div>
        </div>
        <div class="text-gray-500">│</div>
        <div class="flex">
          <div class="text-gray-500 w-6 shrink-0">${hasLinks ? '├─' : '└─'}</div>
          <div class="text-blue-400 font-bold">${ui.stackLabel}</div>
        </div>
        <div class="flex">
          <div class="text-gray-500 w-6 shrink-0">${hasLinks ? '│' : ''}</div>
          <div class="text-gray-300">${techString}</div>
        </div>
        ${hasLinks ? `
        <div class="text-gray-500">│</div>
        <div class="flex">
          <div class="text-gray-500 w-6 shrink-0">└─</div>
          <div class="text-blue-400 font-bold">${ui.linksLabel}</div>
        </div>
        <div class="flex">
          <div class="w-6 shrink-0"></div>
          <div class="text-[#27c93f]">${linksArr.join('<span class="text-gray-500 mx-2">·</span>')}</div>
        </div>
        ` : ''}
      </div>`;
    }).join('');
    
    return `<div class="animate-fadeIn mt-2">${projectsHtml}</div>`;
  }
};