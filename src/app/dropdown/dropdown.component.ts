import {Component, Injectable, Output} from '@angular/core';
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
  @Input() selectedItem:any;
  itemsList:{id: number,name:string,title:string,description:string, image:string,url:string}[]=items;

  //modal initialisierung
 //modalShow=false;

  constructor(public dialog?: MatDialog) {

  }
 async openModal(){

  const dialogRef= this.dialog?.open(ModalComponent,
    {width:'350px'});
    const confirm = await dialogRef?.afterClosed().toPromise();

    if (confirm ==='ok'){
    //await this.dropdownDetails();
}
    /*dialogRef.afterClosed().subscribe(result=>{
      console.log(`${result}`);
    })*/


  }
 /*async dropdownDetails(){
const select:any=document.querySelectorAll('app-root');
   const img:HTMLImageElement= document.createElement('img');
   //img.src=this.selectedItem.image;
   select.appendChild(img);
  }*/

}
