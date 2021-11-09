import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from './config.service';
import { patientData } from './patientData';

 
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  cardData: any = [];

  ngOnInit() {
   
  //  this.http.get('assets/questionnaire.json')
  //   .subscribe(Response => {
 
  //     // If response comes hideloader() function is called
  //     // to hide that loader
  //     if(Response){ 
  //      // hideloader();
  //     }
  //     console.log(Response)
  //     this.li=Response;
  //     this.lis=this.li.list;
  //   });

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

  onSubmit() {
    this.isActive = true;
    this.result = this.contactForm.value;
    console.log(this.result);
  }
}


