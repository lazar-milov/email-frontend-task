import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmailEditorComponent } from './email-editor/email-editor.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailReaderComponent } from './email-reader/email-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmailEditorComponent,
    EmailListComponent,
    EmailReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
