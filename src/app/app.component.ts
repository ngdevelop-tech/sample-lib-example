import { Component } from '@angular/core';
import { LoggerLibService } from 'logger-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-lib';

  constructor(private logger: LoggerLibService) {
    logger.info('Test  Info Log', { a: 10, b: 20 });
    logger.debug('Test  debug Log', { a: 10, b: 20 });
    logger.warning('Test  warning Log', { a: 10, b: 20 });
    logger.error('Test  error Log', { a: 10, b: 20 });
  }
}
