import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {


  constructor() { }

  private getCurrentTime(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  log(componentName: string, message: string, level: 'debug' | 'error'): void {
    const timestamp = this.getCurrentTime();
    console.log(`[${timestamp}] ${componentName} ${level.toUpperCase()}: ${message}`);
  }
}
