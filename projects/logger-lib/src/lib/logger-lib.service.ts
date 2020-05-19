import { Injectable, Optional } from '@angular/core';

export enum LogLevel {
  INFO,
  DEBUG,
  WARNING,
  ERROR
}

export class LoggerConfig {
  showTime ?= true;
  logLevel ?= LogLevel.INFO;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerLibService {
  private DEFAULT_CONFIG = new LoggerConfig();
  private config: LoggerConfig;

  constructor(@Optional() private loggerConfig: LoggerConfig) {
    this.config = { ...this.DEFAULT_CONFIG, ...loggerConfig};
  }

  private log(logLevel: LogLevel, ...args: any[]) {
    let method = 'log';
    switch (logLevel) {
      case LogLevel.ERROR : method = 'error'; break;
      case LogLevel.WARNING : method = 'warn'; break;
    }

    if (logLevel < this.config.logLevel){
      return;
    }
    console[method](`${LogLevel[logLevel]} ${this.config.showTime ? new Date().toLocaleString() : ''}`, ...args);
  }

  info(...args: any[]) {
    this.log(LogLevel.INFO, args);
  }
  debug(...args: any[]) {
    this.log(LogLevel.DEBUG, args);
  }
  warning(...args: any[]) {
    this.log(LogLevel.WARNING, args);
  }
  error(...args: any[]) {
    this.log(LogLevel.ERROR, args);
  }
}
