import type { Command } from '../types';
import { getCv } from '../../data/cv';

export const contact: Command = {
  name: 'contact',
  description: 'Want to work with me? / ¿Quieres trabajar conmigo?',
  execute: () => {
    const cv = getCv();
    const { contact, ui } = cv;
    const cleanHref = (url: string) => url ? url.replace(/\[|\]/g, '').trim() : '';
    return `
      <div class="animate-fadeIn mt-4 text-sm sm:text-base">
        <div class="text-blue-400 font-bold tracking-widest uppercase">${ui.commLink || 'Communications Link'}</div>
        <div class="text-gray-500 text-xs mb-4">──────────────</div>
        <div class="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-y-3 mb-6">
          <span class="text-gray-500 font-medium">Email:</span>
          <a href="mailto:${cleanHref(contact?.email)}" class="text-[#27c93f] hover:text-white hover:underline decoration-white/30 transition-colors break-all">
            ${contact?.email}
          </a>
          <span class="text-gray-500 font-medium">GitHub:</span>
          <a href="${cleanHref(contact?.github)}" target="_blank" rel="noopener noreferrer" class="text-[#27c93f] hover:text-white hover:underline decoration-white/30 transition-colors break-all">
            ${contact?.github}
          </a>
          <span class="text-gray-500 font-medium">LinkedIn:</span>
          <a href="${cleanHref(contact?.linkedin)}" target="_blank" rel="noopener noreferrer" class="text-[#27c93f] hover:text-white hover:underline decoration-white/30 transition-colors break-all">
            ${contact?.linkedin}
          </a>
        </div>
        <div class="border border-white/10 bg-black/30 p-4 inline-block rounded-md border-l-4 border-l-[#27c93f]">
          <div class="text-gray-400 text-xs mb-2 uppercase tracking-wide">>> Payload available</div>
          <a href="/Camilo_Ospina_CV.pdf" download="Camilo_Ospina_CV.pdf" class="inline-flex items-center gap-3 bg-[#27c93f]/10 text-[#27c93f] border border-[#27c93f]/30 px-4 py-2 rounded hover:bg-[#27c93f]/20 hover:border-[#27c93f] transition-all cursor-pointer group">
            <span class="font-bold text-lg group-hover:animate-bounce">↓</span> 
            <span class="font-mono">${ui.downloadBtn || 'wget Camilo_Ospina_CV.pdf'}</span>
          </a>
        </div>
      </div>
    `;
  }
};