import type { Command } from '../types';
import { cv } from '../../data/cv';

export const about: Command = {
  name: 'about',
  description: 'Muestra información general sobre mi perfil (estilo neofetch).',
  execute: () => {
    const { profile, experience } = cv;
    const expYears = experience.length > 0 ? experience[0].duration : "Experiencia profesional";
    return `
      <div class="animate-fadeIn my-4 flex justify-center">
        <!-- Contenedor principal estilo ventana (Border) -->
        <div class="w-full max-w-3xl border border-white/20 rounded-md p-4 sm:p-6 bg-black/20">
          <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <div class="hidden sm:flex justify-center text-[#27c93f]">
              <pre class="text-xs sm:text-sm font-bold leading-tight">${profile.ascii}</pre>
            </div>
            <div class="flex flex-col text-sm sm:text-base">
              <div class="mb-2">
                <span class="text-[#27c93f] font-bold">${profile.username}@dev</span>
                <div class="h-[1px] w-full bg-gray-500 my-1"></div>
              </div>
              <div class="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-y-1">
                <span class="text-blue-400 font-bold">OS:</span>
                <span class="text-gray-200">DevOS 2026.1 LTS</span>
                <span class="text-blue-400 font-bold">Host:</span>
                <span class="text-gray-200">${profile.name}</span>
                <span class="text-blue-400 font-bold">Role:</span>
                <span class="text-gray-200">${profile.role}</span>
                <span class="text-blue-400 font-bold">Experience:</span>
                <span class="text-gray-200">${expYears}</span>
                <span class="text-blue-400 font-bold">Location:</span>
                <span class="text-gray-200">${profile.location}</span>
              </div>
              <div class="flex gap-2 mt-4">
                 <div class="w-4 h-4 bg-black rounded-sm"></div>
                 <div class="w-4 h-4 bg-red-500 rounded-sm"></div>
                 <div class="w-4 h-4 bg-green-500 rounded-sm"></div>
                 <div class="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                 <div class="w-4 h-4 bg-blue-500 rounded-sm"></div>
                 <div class="w-4 h-4 bg-purple-500 rounded-sm"></div>
                 <div class="w-4 h-4 bg-cyan-500 rounded-sm"></div>
                 <div class="w-4 h-4 bg-white rounded-sm"></div>
              </div>

            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 text-gray-300 leading-relaxed text-sm sm:text-base">
            ${profile.summary}
          </div>
        </div>
      </div>
    `;
  }
};