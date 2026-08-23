export interface Command {
  name: string;
  description: string;
  execute: (args?: string[]) => string;
}

export type CommandRegistry = Record<string, Command>;