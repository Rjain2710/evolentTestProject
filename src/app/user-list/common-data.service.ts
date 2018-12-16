import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor(private http: HttpClient) { }

  getContactList() {
        return this.http.get('./dummy.json');
    }
}
