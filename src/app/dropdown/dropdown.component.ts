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
  title = 'Dropdown-menü';
 selectedItem: any//Movies;

  itemsList: { id: number, name: string, title: string, description: string, image: string, alt: string }[] = items;

  constructor(public dialog?: MatDialog) {

  }

  async openModal() {

    const dialogRef = this.dialog?.open(ModalComponent,
      {width: '500px'});
    const confirm = await dialogRef?.afterClosed().toPromise();
    /*if (confirm === 'ok') {
      await this.dropdownDetails();
    }*/
  }

  async dropdownDetails() {
   // const element=this.itemsList[this.selectedItem]  //[this.selectedItem]
      this.itemsList.forEach((element) => {
        const div = document.querySelector('.details') as HTMLDivElement;
        const img = document.createElement('img');
        const title = document.createElement('h1');
        const description = document.createElement('h3');
        img.setAttribute('class', 'detailsImage');
        img.setAttribute('alt', element?.alt);
        title.innerText = element?.title;
        //  description.innerText = element.description;
        // img.src = element.image;
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(img);

        /* movieSelected() {
           this.movieSelectedEvent.emit(this.selectedItem);
           console.log('movieSelected', this.movieSelectedEvent.emit(this.selectedItem))
         }*/
      })

    }

}
