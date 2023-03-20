import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactTableService {
  heading = 'Contact List';
  cols = ['sr','name','phone','gender','dob','action-age','action-delete']
  colNames = ['Sr. No.', 'Name', 'Phone', 'Gender', 'DOB', 'Age', 'Delete'];
  contacts = [
    {
      sr: '1',
      name: 'John Doe',
      phone: '1234567890',
      gender: 'male',
      dob: new Date(2001,11,1)
    },
    {
      sr: '2',
      name: 'Jane Doe',
      phone: '2345678901',
      gender: 'female',
      dob: new Date(1997,11,18)
    },
    {
      sr: '3',
      name: 'James Doe',
      phone: '3456789012',
      gender: 'male',
      dob: new Date(2002,4,12)
    },
    {
      sr: '4',
      name: 'Jack Doe',
      phone: '4567890123',
      gender: 'male',
      dob: new Date(2000,2,1)
    },
    {
      sr: '5',
      name: 'Jen Doe',
      phone: '5678901234',
      gender: 'female',
      dob: new Date(2004,6,24)
    }
  ];

  constructor() { }

  deleteRow(index: number){
    this.contacts.splice(index,1);
  }
}
