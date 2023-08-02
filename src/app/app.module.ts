import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { PracticeComponent } from "./practice/practice.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessAlert } from './success/success.component';
import { WarningAlert } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PracticeComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
