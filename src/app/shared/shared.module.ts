import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import {RouterLink} from "@angular/router";
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
    exports: [
        HeaderComponent,
        SearchComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }
