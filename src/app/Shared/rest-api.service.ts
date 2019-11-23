import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Empoloyee } from './empoloyee';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  http = "http://localhost:3000/Employees";
  constructor(private srv: HttpClient) { }


  httpHeader = {
    headers: new Headers({
      'content-type': 'application/json'
    })
  }
  get(): Observable<Empoloyee> {
    return this.srv.get<Empoloyee>(this.http).pipe(
      retry(1),
      catchError(this.handelError)
    );
  }
  getid(id): Observable<Empoloyee> {
    return this.srv.get<Empoloyee>(this.http + '/' + id).pipe(
      retry(1),
      catchError(this.handelError)
    );
  }
  create(employee): Observable<Empoloyee> {
    return this.srv.post<Empoloyee>(this.http, employee);
    retry(1);
    catchError(this.handelError);
  }
  edit(id, employee): Observable<Empoloyee> {
    return this.srv.put<Empoloyee>(this.http + '/' + id, employee);
    retry(1);
    catchError(this.handelError);
  }
  delete(id): Observable<Empoloyee> {
    return this.srv.delete<Empoloyee>(this.http + '/' + id);
    retry(1);
    catchError(this.handelError);
  }
  handelError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client side error.
      errorMessage = error.error.message;
    }
    else {
      // server side error.
      errorMessage = ' Error code : ${error.status} \n Error Message : ${error.Message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
