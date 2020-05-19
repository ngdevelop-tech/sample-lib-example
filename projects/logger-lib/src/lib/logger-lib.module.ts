import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoggerLibComponent } from './logger-lib.component';
import { LoggerConfig } from './logger-lib.service';



@NgModule({
  declarations: [LoggerLibComponent],
  imports: [
  ],
  exports: [LoggerLibComponent]
})
export class LoggerLibModule {
  static forRoot(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule : LoggerLibModule,
      providers: [
        {provide: LoggerConfig, useValue : config || {}}
      ]
    };
  }
}
