import {Component, ElementRef, OnInit, Output, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {NgImageSliderModule} from 'ng-image-slider';
import slider from 'src/app/fliles/slider.json';
import items from 'src/app/fliles/services.json';
import {DomSanitizer} from "@angular/platform-browser";
import {pipe} from "rxjs";




@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  ngOnInit() {
    this.preload(this.imageObj);
    console.log(this.imageObj[0])
  }

  //@Pipe({name:'safe'})
  @ViewChild('nav') slider: NgImageSliderModule | undefined;
  @Output('preload')

imageObj:Array<any>=['https://i.pinimg.com/originals/57/7e/c5/577ec5279a42b30e3101d698ec51364c.jpg',"https://i.pinimg.com/originals/27/7f/7d/277f7de296757492750bd3a435040966.jpg","https://3.bp.blogspot.com/-TOB0p76BOw0/WhT4Pl1O52I/AAAAAAAACYg/AmCgAQ01VSU0mD3GqV0meuISBvV9j-NSQCLcBGAs/s1600/DCS09JLtag.jpg"]
  //{ image:string}[]=slider;



  //{ image:string}[]=slider;
totalImages=this.objectLength(this.imageObj);
 current:any=0;
  constructor(private el:ElementRef) { }

  updateImage(){
    const div=document.querySelector('.item') as HTMLDivElement;
    const image=document.createElement('img') as any;
    image.setAttribute('class','slideImage')
    image.style="width:500px; height: 350px;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);";
    const currentPicture=document.querySelector('.item')as HTMLDivElement;


        image.src=this.imageObj[this.current];


      currentPicture.innerText=this.current+1;
      div.appendChild(image);


  }

  objectLength(obj:any) {
    let result = 0;
    for(let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result++;
      }
    }
    return result;
  }

preload(i:any){
setTimeout(this.updateImage.bind(this), 100);
  }
 prevButton(){
   if (this.current==0)
     return;
   this.current--;
   this.updateImage();
   console.log('register clickEventImages',this.totalImages);
  /* var elm=this.el.nativeElement.parentElement.children[4];
   console.log(elm)
   var item=elm.getElementsByClassName("slide-wrap");
   console.log(item);
   elm.prepend(item[item.length -1]);*/
}
nextButton(){
  if (this.current+1==this.totalImages)
    return;
  this.current++;
  this.updateImage();
  console.log('register Prev clickEventImages',this.totalImages);
  /*var elm=this.el.nativeElement.parentElement.children[4];
  console.log(elm)
  var item=elm.getElementsByClassName("slide-wrap");
  console.log(item);
  elm.append(item[0])*/
}
}
