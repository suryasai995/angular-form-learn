import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import{catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesUserService {

private _url='http://localhost:3000/post';
  constructor(private _http:HttpClient) {
    //HttpClient is a method which act for browers requested
   }

postDetails(use:User){
  //post method can recived observable object data and send to url link
  return this._http.post<any>(this._url,use).pipe(catchError(this.errorHandler));
  //after url link its carey user detail which stored in User model (new object with typecheaker)
}

errorHandler(error:HttpErrorResponse){
  return throwError(error);
}

}
