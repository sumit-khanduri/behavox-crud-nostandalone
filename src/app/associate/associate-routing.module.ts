import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListAssociateComponent} from "./component/list-associate/list-associate.component";
import {CreateAssociateComponent} from "./component/create-associate/create-associate.component";
import {AssociateLayoutComponent} from "./component/associate-layout/associate-layout.component";

const routes: Routes=[
  {
    path: '',
    component: AssociateLayoutComponent,
    children: [
      {path: '', component: ListAssociateComponent},
      {
        path: 'list',
        redirectTo: ''
      },
      {
        path: 'create',
        component: CreateAssociateComponent
      }
    ]
  },

  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AssociateRoutingModule{

}
