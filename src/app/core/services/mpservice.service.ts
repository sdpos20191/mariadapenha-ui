import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ocurrence } from '../models/occurrence';

@Injectable({
  providedIn: 'root'
})
export class MpserviceService {

  url: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = `${environment.apiUrl}/`;
  }

  // Adjust according to API
  get() {
    return this._http.get<Ocurrence[]>(this.url);
  }
}
