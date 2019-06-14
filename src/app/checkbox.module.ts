import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CheckboxComponent ],
  bootstrap:    [ CheckboxComponent ]
})
export class CheckboxModule { }
