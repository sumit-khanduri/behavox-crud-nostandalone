import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssociateRoutingModule} from "./associate-routing.module";
import { CreateAssociateComponent } from './component/create-associate/create-associate.component';
import { ListAssociateComponent } from './component/list-associate/list-associate.component';
import { AssociateLayoutComponent } from './component/associate-layout/associate-layout.component';
import {SharedModule} from "../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateAssociateComponent,
    ListAssociateComponent,
    AssociateLayoutComponent
  ],
    imports: [
        CommonModule,
        AssociateRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class AssociateModule { }
