import {DataSource} from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { patientData } from './patientData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  patientData: any;
  constructor(private http : HttpClient, private getData: ConfigService){

  } 

  title = 'SmileCDR';
result:any;  
li:any;
  lis=[];
isActive: boolean = false;
  contactForm = new FormGroup({
    allergies: new FormControl(),
    gender: new FormControl(),
    dob: new FormControl(),
    country: new FormControl(),
    isMarried: new FormControl(),
    smoke: new FormControl(),
    drink: new FormControl()
  })
  registerForm: any;
  formBuilder: any;
  cardData: any = [];

  ngOnInit() {
   
   this.http.get('assets/questionnaire.json')
    .subscribe(Response => {
 //Fetch data from Json
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });

  this.getData.getData().subscribe
     (
       (response)=>
       {
        this.cardData.push(response);
        console.log(this.cardData)
         this.patientData = response;
       // const datasource = response;
        // console.log(response);
       },
       (error) => console.log(error)
     )

   }

   dataSource = new UserDataSource(this.getData);

  onSubmit() {
    this.isActive = true;
    this.result = this.contactForm.value;
    console.log(this.result);
  }
}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: ConfigService) {
    super();
  }
  connect(): Observable<patientData[]> {
    return this.userService.getData();
  }
  disconnect() {}
}

