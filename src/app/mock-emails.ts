import { Email } from './email';

export const INBOX_EMAILS: Email[] = [
    {id: 1, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"", sentOn:"10-06-2020", isRead:false},
    {id: 2, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"Viktor Arsov", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 3, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"Johannes M.", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 4, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"01-05-2020", isRead:true},
    {id: 5, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 6, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"Pavel K.", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 7, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"18-09-2020", isRead:false},
    {id: 8, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 9, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"28-05-2020", isRead:false},
    {id: 10, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 11, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 12, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 13, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"23-11-2020", isRead:false},
    {id: 14, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 15, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-01-2021", isRead:false},
    {id: 16, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 17, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 18, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 19, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 20, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 21, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 22, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 23, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 24, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 25, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 26, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 27, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
];

export const SENT_EMAILS: Email[] = [
    {id: 1, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"laz@email.com", body:"Dummy body text", sentOn:"10-06-2020", isRead:true},
    {id: 2, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"Viktor Arsov", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 3, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"Johannes M.", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 4, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"sent@email.com", body:"Dummy body text", sentOn:"01-05-2020", isRead:true},
    {id: 5, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 6, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"Pavel K.", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 7, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"18-09-2020", isRead:true},
    {id: 8, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 9, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"28-05-2020", isRead:true},
    {id: 10, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 11, recipient: "sender@email.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true}
];

export const DELETED_EMAILS: Email[] = [
    {id: 1, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-06-2020", isRead:false},
    {id: 2, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"Viktor Arsov", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 3, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"Johannes M.", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 4, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"01-05-2020", isRead:true},
    {id: 5, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 6, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"Pavel K.", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 7, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"18-09-2020", isRead:false},
    {id: 8, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 9, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"28-05-2020", isRead:false},
    {id: 10, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:true},
    {id: 11, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false},
    {id: 12, recipient: "lazar.milov@mail.com", cc:"", subject:"Dummy subject", sender:"sender@email.com", body:"Dummy body text", sentOn:"10-05-2020", isRead:false}
];