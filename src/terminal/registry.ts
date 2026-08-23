import type { CommandRegistry } from './types';
import { about } from './commands/about';
import { experience } from './commands/experience';
import { projects } from './commands/projects';
import { stack } from './commands/stack';
import { education } from './commands/education';
// import { certifications } from './commands/certifications';
import { contact } from './commands/contact';
// import { clear } from './commands/clear';
import { help } from './commands/help';

export const commands: CommandRegistry = {
  about,
  experience,
  projects,
  stack,
  education,
  // certifications,
  contact,
  // clear,
  help
};