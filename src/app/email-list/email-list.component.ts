import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../email';
import { INBOX_EMAILS } from '../mock-emails';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
  animations: [
    trigger('showTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class EmailListComponent implements OnInit {

  @Input() title?: string;
  @Input() showMailList: boolean = false;
  @Input() mails?: Array<Email>;
  @Output() selectedMail = new EventEmitter<Email>();
  mailId?: number;

  constructor() { }

  ngOnInit(): void {
  }

  setMailsToShow($event: Email[] | undefined): void {
    this.mails = $event;
  }

  selectEmail(email: Email): void {
    this.selectedMail.emit(email);
    email.isRead = true;
    this.mailId = email.id;
  }

}
