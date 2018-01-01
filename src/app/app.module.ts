import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GraphComponent } from './graph/graph.component';

import { DataService} from './data.service';
import { LinkerDirective } from './linker.directive';
import { NodeParentChildCounterPipe } from './node-parent-child-counter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GraphComponent,
    LinkerDirective,
    NodeParentChildCounterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
