import {Component, Inject, inject, Input, NgZone, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DropdownComponent} from "../dropdown/dropdown.component";
import {MatDialogRef} from "@angular/material/dialog";
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  //saveElement = new DropdownComponent();
  constructor(public dialogRef: MatDialogRef<ModalComponent>,private ngZone: NgZone){

  }
ngOnDestroy(){
    this.dialogRef.close(this.ngZone)
}
closeModal():void{
    this.ngZone.run(() => {
      this.dialogRef.close({event:'close'});
    });
    console.log('closed....');
  }

  confirmModal(event:any){
  const message=new DropdownComponent();
  this.dialogRef.close({event: 'ok'});
  message.dropdownDetails.bind(this);
console.log('okkkkk',message.dropdownDetails())

}

}
