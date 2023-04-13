import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( public dialog?: MatDialog) {
  }
  ngOnInit() {
   setInterval(()=>{
      const dialogRef = this.dialog?.open(ModalComponent,
      {width: '500px'});
      dialogRef?.afterClosed().toPromise();},20000)
  }
  title = 'Ba-Angular';

}
