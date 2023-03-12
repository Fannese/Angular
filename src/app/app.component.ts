import {Component, Input, Output, ViewChild} from '@angular/core';
import {DropdownComponent} from "./dropdown/dropdown.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ba-Angular';

 detail = new DropdownComponent();
  //@ViewChild(DropdownComponent) msgFromParent1:DropdownComponent;
  @Output() msgFromParent1:any=this.detail.selectedItem
  async dropdownDetails(){
    this.detail.itemsList.forEach((element)=>{
      const select:any=document.querySelector('.card-body');
      const img:HTMLImageElement= document.createElement('img');
       img.src=element.image;
       select.appendChild(img)

        //this.detail.selectedItem=element.name;

    })
   /* const select:any=document.querySelectorAll('.card-body');
    const img:HTMLImageElement= document.createElement('img');
    //img.src=this.selectedItem.image;
    select.append(img)*/
  }
}
