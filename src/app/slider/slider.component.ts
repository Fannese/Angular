import {Component, ElementRef, Pipe, PipeTransform, ViewChild} from '@angular/core';
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
export class SliderComponent{
  //@Pipe({name:'safe'})
  @ViewChild('nav') slider: NgImageSliderModule | undefined;
imageObj: { image:string, alt:string}[]=slider;
  constructor(private el:ElementRef) { }
 prevButton(){
   var elm=this.el.nativeElement.parentElement.children[5];
   console.log(elm)
   var item=elm.getElementsByClassName("slide-wrap");
   console.log(item);
   elm.prepend(item[item.length -1]);
}
nextButton(){
  var elm=this.el.nativeElement.parentElement.children[5];
  console.log(elm)
  var item=elm.getElementsByClassName("slide-wrap");
  console.log(item);
  elm.append(item[0])
}
}
