import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit {

  showCC?: boolean = false;
  @Input() newMail?: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  showCCField(): void {
    this.showCC = true;
  }

  hideCCField(): void {
    this.showCC = false;
  }

}
