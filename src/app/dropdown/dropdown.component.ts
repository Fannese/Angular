import { Component } from '@angular/core';
import items from 'src/app/fliles/services.json';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  title='Dropdown-menü';
  selectedItem:any;
  itemsList:{id: number,name:string,title:string,description:string, image:string,url:string}[]=items;

  //modal initialisierung
 modalShow=false;
  constructor(public dialog: MatDialog) {

  }
 async openModal(){
  const dialogRef=  this.dialog.open(ModalComponent);
console.log('modal opening')
    const confirm = await dialogRef.afterClosed().toPromise();
if (confirm ==='ok'){
  await this.dropdownDetails();
}
    /*dialogRef.afterClosed().subscribe(result=>{
      console.log(`${result}`);
    })*/


  }
 async dropdownDetails(){

    return this.itemsList;
  }

}
