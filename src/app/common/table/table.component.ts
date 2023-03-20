import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() heading:any;
  @Input() cols:any;
  @Input() colNames:any;
  @Input() rows:any;
  @Output() deleteEvent = new EventEmitter<any>();
  
  deleteRow(index: number){
    this.deleteEvent.emit();
  }
}
