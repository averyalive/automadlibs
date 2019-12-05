import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  selectedTemplate;
  madlibs = [];

  constructor(private serverService: ServerService) {
    this.serverService.getApi().then((res: any) => {
      console.log(res);
    });
  }

  ngOnInit() {
    
  }

  showNewMadlib(newMadlib) {
    console.log('received new madlib:', newMadlib);
    this.madlibs.unshift(newMadlib);
  }

  viewHistory() {
    this.serverService.getMadlibs().then((data: any[]) => {
      this.madlibs = data;
    });
  }
}
