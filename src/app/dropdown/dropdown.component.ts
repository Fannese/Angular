import {Component, EventEmitter, Injectable, Output} from '@angular/core';
import items from 'src/app/fliles/services.json';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import {Input} from "@angular/core";
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  title='Dropdown-menü';
@Input() selectedItem:any//Movies;

 itemsList:{id: number,name:string,title:string,description:string, image:string,alt:string}[]=items;

 /* @Output("movieSelected")
  movieSelectedEvent = new EventEmitter<Movies>();*/

  //modal initialisierung
 //modalShow=false;

  constructor(public dialog?: MatDialog) {

  }
 async openModal(){

  const dialogRef= this.dialog?.open(ModalComponent,
    {width:'500px'});
    const confirm = await dialogRef?.afterClosed().toPromise();
   if (confirm ==='ok'){
     //await this.dropdownDetails();
   }
  }

 /* movieSelected() {
    this.movieSelectedEvent.emit(this.selectedItem);
    console.log('movieSelected', this.movieSelectedEvent.emit(this.selectedItem))
  }*/
}
