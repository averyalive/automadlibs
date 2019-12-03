import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {
  selectorForm;
  templates = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.selectorForm = this.formBuilder.group({
      template: '',
    });
  }

  onSelect(template) {
    // call server service here.
    // should generate a madlib using the selected template.
    console.log(template);
  }

}
