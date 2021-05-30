import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-reader',
  templateUrl: './email-reader.component.html',
  styleUrls: ['./email-reader.component.css']
})
export class EmailReaderComponent implements OnInit {

  @Input() mailToRead?: Email;

  constructor() { }

  ngOnInit(): void {
  }

  markAsRead(): void {
    if (this.mailToRead != undefined) {
      this.mailToRead.isRead = true;
    }
  }

  markAsUndread(): void {
    if (this.mailToRead != undefined) {
      this.mailToRead.isRead = false;
    }
  }

}
