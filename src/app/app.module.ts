import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { PracticeComponent } from "./practice/practice.component";
import { ServersComponent } from './servers/servers.component';
import { InstructionComponent } from "./instruction/instruction.component";
import { Instruction2Component } from './instruction_2/instruction_2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PracticeComponent,
    ServersComponent,
    InstructionComponent,
    Instruction2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
