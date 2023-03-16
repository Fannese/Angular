import {Component, Input, Output, ViewChild} from '@angular/core';
import {DropdownComponent} from "./dropdown/dropdown.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ba-Angular';
 // @Input() selectedItem:any;
 detail = new DropdownComponent();
  //@ViewChild(DropdownComponent) msgFromParent1:DropdownComponent;
 // msgFromParent1:any;
  @Output() msgFromParent1:any=this.detail.selectedItem
  async dropdownDetails(){
    const save=this.detail.selectedItem
    this.detail.itemsList.forEach((element)=>{
      const select:any=document.querySelector('.details');
      const img:HTMLImageElement= document.createElement('img');
      //const titre:string=document.createElement('h1')
      img.setAttribute('class','detailsImage');

        img.src=element.image;
        select.appendChild(img)


      console.log('confirm info')
    })

  }

  /*showMovieDetails(movie:Movies) {
    this.detail.itemsList.forEach((element)=>{
      const select:any=document.querySelector('.details');
      const img:HTMLImageElement= document.createElement('img');
      img.setAttribute('class','detailsImage');
      img.src=element.image;
      select.appendChild(img)
     this.detail.selectedItem=element.name;
     console.log('showMovies:', this.detail.selectedItem)
    })
  }*/
}
