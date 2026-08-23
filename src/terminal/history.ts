export class CommandHistory {
  private history: string[] = [];
  private currentIndex: number = -1;

  public push(command: string) {
    const trimmed = command.trim();
    if (trimmed === '') return;

    if (this.history[this.history.length - 1] !== trimmed) {
      this.history.push(trimmed);
    }
    
    this.currentIndex = this.history.length;
  }

  public getPrevious(): string | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }

    if (this.currentIndex === 0 && this.history.length > 0) {
      return this.history[0];
    }
    return null;
  }

  public getNext(): string | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    this.currentIndex = this.history.length;
    return '';
  }
}