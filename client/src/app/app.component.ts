import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  selectedTemplate;

  constructor(private serverService: ServerService) {
    this.serverService.getApi().then((res: any) => {
      console.log(res);
    });
  }

  setTemplate(template) {
    this.selectedTemplate = template;
  }

  viewHistory() {
    this.serverService.getMadlibs().then((res: any) => {
      console.log(res);
    })
  }
}
