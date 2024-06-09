import {AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, inject, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, from, fromEvent, map, Observable, of, Subscription, switchMap} from "rxjs";
import {AssociateService} from "../../associate/associate-service.service";
import {CommunicateService} from "../communicate.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, DoCheck {
  associateService = inject(AssociateService);
  communicateService = inject(CommunicateService);
  ngOnInit() {
     this.addDebounce();
  }

  addDebounce() {
    const target = document.querySelector('input') as HTMLInputElement;
    this.singlePipeChainOperators(target).subscribe(data => {
    //  console.log(data)
      this.communicateService.broadCastData(data);
    });
  }

  multiplePipeChainOperators(target: HTMLInputElement){
    fromEvent(target, 'input').pipe(
      map(event => (event.target as HTMLInputElement).value)
    ).pipe(
      debounceTime(2000),)
      .pipe(
        distinctUntilChanged()).subscribe(
      data => console.log(data))
  }

  singlePipeChainOperators(target: HTMLInputElement): Observable<any> {
    return fromEvent(target, 'input').pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(2000),
      distinctUntilChanged(),
      switchMap(value => this.associateService.fetchData(value))
    )
  }

  ngDoCheck() {
     // console.log('do check run')
  }
}
