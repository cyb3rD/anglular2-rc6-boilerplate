import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})

export class ContentComponent {
  
  sampleStringProperty: string;

  constructor() {
    this.sampleStringProperty = 'Sample String Property for interpolation';
  }

}