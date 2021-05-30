import { Component } from '@angular/core';
import { Email } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showList: boolean = false;
  titleList?: string;
  newMail: boolean = false;
  mailsToList?: Array<Email>;
  selectedMail?: Email;

  title = 'email-frontend';

  changeTitle($event: string | undefined): void {
    this.titleList = $event;
  }

  presentList($event: boolean): void {
    this.showList = $event;
  }

  showNewMailScreen($event: boolean): void {
    this.newMail = $event;
    this.selectedMail = undefined;
  }

  setMailsToList($event: Array<Email>): void {
    this.mailsToList = $event;
  }

  setMailToRead($event: Email | undefined): void {
    this.selectedMail = $event;
  }
}
