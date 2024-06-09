import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {UserInterface} from "../models/user-interface";
import {AssociatesInterface} from "../models/associates.interface";

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  private baseURL = 'http://localhost:3000/associate';
  private jwtToken = localStorage.getItem('jwtToken') || false;
  constructor(private http: HttpClient) { }

  loadData(): Observable<AssociatesInterface[]> {
    return this.http.get<AssociatesInterface[]>(this.baseURL)
      // .pipe(catchError(err => throwError(()=> new Error(err))));
  }

  fetchData(searchTerm: string) {
    // Create a new HttpParams object with the search term as a query parameter
    const params = new HttpParams().set('q', searchTerm);

    // Make the HTTP GET request with the search term as a query parameter
    return this.http.get<any[]>(this.baseURL, { params });
  }

  updateAssociates(associates: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + this.jwtToken,
      'contentType': 'application/json'
    })
    return this.http.put(this.baseURL+ '/100', associates).pipe(
      tap(associates => {
       console.log(associates)
      })
    ).pipe(catchError(
      (error) => {
        return throwError(()=> new Error(error));
      }
    ))
  }
}
