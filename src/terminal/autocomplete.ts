import { commands } from './registry';

export function getAutocomplete(currentInput: string): { completed: string, options: string[] } {
  const availableCommands = [...Object.keys(commands), 'clear'];
  const trimmedInput = currentInput.trimStart();
  if (!trimmedInput || trimmedInput.includes(' ')) {
    return { completed: currentInput, options: [] };
  }

  const matches = availableCommands.filter(cmd => cmd.startsWith(trimmedInput));
  if (matches.length === 1) {
    return { completed: matches[0], options: [] };
  }
  if (matches.length > 1) {
    return { completed: currentInput, options: matches };
  }
  return { completed: currentInput, options: [] };
}