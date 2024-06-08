import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociateService} from "../../associate-service.service";
import {AssociatesInterface} from "../../../models/associates.interface";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-create-associate',
  templateUrl: './create-associate.component.html',
  styleUrl: './create-associate.component.scss'
})
export class CreateAssociateComponent {

  router= inject(Router);
  route = inject(ActivatedRoute);
  associateService = inject(AssociateService);
  private unsubscribe$: Subject<any> = new Subject<any>()
  // @ts-ignore
  associate: any = JSON.parse(localStorage.getItem('associate'));

  update() {
    this.associateService.updateAssociates(this.associate).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: result => {
        console.log(result);
      }
    })
  }
}
