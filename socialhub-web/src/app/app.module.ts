import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PostSectionComponent } from './post-section/post-section.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule]
})
export class AppModule { }
