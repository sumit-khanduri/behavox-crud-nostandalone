import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserInterface} from "./models/user-interface";
import {catchError, find, map, Observable, throwError} from "rxjs";


@Injectable()
export class AppService {

  private users = 'users';
  private associates = 'associates';
  private baseURLUsers = `http://localhost:3000/${this.users}`;
  private baseURLAssociates = `http://localhost:3000/${this.associates}`;
  constructor(public http: HttpClient) {}

  authUser(userName: string, password: string): Observable<any> {
    const base64String = btoa(userName + ':' + password);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64String,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.baseURLUsers, {headers: headers}).
    pipe(map(users => {
      console.log(users)
      const user = users.find((user: any) => user.username === userName && user.password === password);
      console.log(user)
      if (user) {
        return {user: user, jwtToken: base64String};
      } else {
        throw new Error('Invalid credentials');
      }
    })
      //,catchError((err) => throwError(() => new Error('Authentication failed')))
    );
  }
}
