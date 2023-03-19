import { User } from './../types/user.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  usersArray: User[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((data: User[]) => data));
  }
}
