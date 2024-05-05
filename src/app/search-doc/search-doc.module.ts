import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDocComponent } from './search-doc.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchDocComponent],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ]
})
export class SearchDocModule { }
