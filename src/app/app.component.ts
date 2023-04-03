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
 /* async dropdownDetails(){
    //const save=this.detail.selectedItem
    this.detail.itemsList.forEach((element)=>{
      const div=document.querySelector('.details') as HTMLDivElement;
      const img= document.createElement('img');
      const title=document.createElement('h1');
      const description=document.createElement('h3');
      img.setAttribute('class','detailsImage');
      img.setAttribute('alt', element.alt);
      title.innerText =element.title;
      description.innerText=element.description;

        img.src=element.image;
      div.appendChild(title);
      div.appendChild(description);
        div.appendChild(img);


      console.log('confirm info')
    })

  }*/

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
