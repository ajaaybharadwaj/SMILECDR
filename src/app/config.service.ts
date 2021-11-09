import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientData } from './patientData';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http : HttpClient) { }

  
url: any = 'https://try.smilecdr.com/baseR4/Patient/';

getData(): Observable<patientData[]> {
return this.http.get<patientData[]>(this.url);
}
}
