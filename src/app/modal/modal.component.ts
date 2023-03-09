import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DropdownComponent} from "../dropdown/dropdown.component";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {
  }
closeModal():void{
this.dialogRef.close();
  console.log('closed....');
}
confirmModal(){
    this.dialogRef.close('ok');
}
}
