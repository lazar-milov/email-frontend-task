export interface Email {
    id: number;
    recipient: string;
    cc: string;
    subject: string;
    sender: string;
    body: string;
    sentOn: string;
    isRead: boolean;
  }