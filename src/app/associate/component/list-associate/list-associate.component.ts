import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AssociateService} from "../../associate-service.service";
import {UserInterface} from "../../../models/user-interface";
import {AssociatesInterface} from "../../../models/associates.interface";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-associate',
  templateUrl: './list-associate.component.html',
  styleUrl: './list-associate.component.scss'
})
export class ListAssociateComponent implements OnInit, OnDestroy{
associateService = inject(AssociateService);
  @ViewChild('myForm') myForm: ElementRef | undefined;
private unsubscribe$: Subject<void> = new Subject<void>();
associatesData: AssociatesInterface[]=[];
private router = inject(Router)
ngOnInit() {
  this.associateService.loadData().pipe(takeUntil(this.unsubscribe$)).subscribe({
    next: result => {
      this.associatesData = result;
    },
    error: error => console.log(error),
  })
}

  edit(associate: AssociatesInterface | undefined){
  localStorage.setItem('associate', JSON.stringify(associate));
  this.router.navigate(['create']);
}

  delete(associate: AssociatesInterface){}

ngOnDestroy() {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
}
