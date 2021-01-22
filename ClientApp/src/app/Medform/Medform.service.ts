import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse , HttpRequest} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, concat, of } from 'rxjs';
import { Medform } from "../Medform/Medform"


@Injectable({
  providedIn: 'root'
})
export class MedformService {
  url: string = '/api/Reservations';
  public medform : Medform[] = [];
  handleResponse: any;

constructor(private http: HttpClient) {
 }

// Getreservation () {
// return this.http.get('/api/Reservations')
//     .pipe(map((res: any[]) => {
//       this.reservations = res;
//       return true;
//   }));
// }
// private handleError(error: Response) {
//     console.error(error);
//     return Observable.throw(error.json().error || 'Server error');
//   }

// getMedform(): Observable<Medform[]> {
//   return this.http.get(this.url)
//     .pipe(map((res: Medform[]) => <Medform[]>res.Medform()
//     .catch(this.handleError)));
// }

adMedform(data: Medform[]): Observable<Medform> {
  let body = JSON.stringify({ data });
  let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  let options = new HttpHeaderResponse({ headers: headers });

  return this.http.post(this.url, body, options)
    .pipe(map(this.handleResponse()));
}


// deleteMedform(id: number): Observable<{}> {
//   const urlDel = `${this.url}/${id}`; // DELETE api/Reservations/4
//   let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
//   let options = new RequestResponse({ headers: headers });
//   return this.http.delete(urlDel, options)
//     .pipe(
//       catchError(this.handleError)
//     );
//}

 
}
