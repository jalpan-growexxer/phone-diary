import { Component } from '@angular/core';
import { ContactTableService } from '../services/contact-table.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private dataService: ContactTableService){

  }
  
  getHeading(){
    return this.dataService.heading;
  }
  getCols(){
    return this.dataService.cols;
  }

  getColNames(){
    return this.dataService.colNames;
  }

  getContacts(){
    return this.dataService.contacts;
  }

  deleteRow(index: number){
    this.dataService.deleteRow(index);
  }
}
