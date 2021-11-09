import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { patientData } from './patientData';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http : HttpClient) { }

  
url: any = 'https://try.smilecdr.com/baseR4/Patient/';

getData()
{
return this.http.get<patientData>(this.url);
}
}
