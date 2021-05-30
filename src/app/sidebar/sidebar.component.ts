import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Email } from '../email';
import { INBOX_EMAILS, SENT_EMAILS, DELETED_EMAILS } from '../mock-emails';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  newSelected: boolean = false;
  inboxSelected: boolean = false;
  sentSelected: boolean = false;
  binSelected: boolean = false;
  @Output() listTitle = new EventEmitter<string>();
  @Output() showList = new EventEmitter<boolean>();
  @Output() newMail = new EventEmitter<boolean>();
  @Output() mailsToList = new EventEmitter<Array<Email>>();

  constructor() { }

  ngOnInit(): void {
  }

  selectNewMail(): void {
    this.setNavigationData(true, false, false, false);
    this.showList.emit(false);
    this.newMail.emit(true);
  }

  selectInbox(): void {
    this.setNavigationData(false, true, false, false);
    this.listTitle.emit("Inbox");
    this.showList.emit(true);
    this.newMail.emit(false);
    this.mailsToList.emit(INBOX_EMAILS);
  }

  selectSent(): void {
    this.setNavigationData(false, false, true, false);
    this.listTitle.emit("Sent emails");
    this.showList.emit(true);
    this.newMail.emit(false);
    this.mailsToList.emit(SENT_EMAILS);
  }

  selectBin(): void {
    this.setNavigationData(false, false, false, true);
    this.listTitle.emit("Deleted emails");
    this.showList.emit(true);
    this.newMail.emit(false);
    this.mailsToList.emit(DELETED_EMAILS);
  }

  setNavigationData(newMail: boolean, inbox: boolean, sent: boolean, bin: boolean): void {
    this.newSelected = newMail;
    this.inboxSelected = inbox;
    this.sentSelected = sent;
    this.binSelected = bin;
  }


}
