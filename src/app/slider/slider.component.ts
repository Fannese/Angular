import {Component, ElementRef, OnInit, Output, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {NgImageSliderModule} from 'ng-image-slider';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  ngOnInit() {
    this.preload(this.imageObj);
   // console.log(this.imageObj[0])
  }

  @Output('preload')

imageObj:Array<string>=['https://i.pinimg.com/originals/57/7e/c5/577ec5279a42b30e3101d698ec51364c.jpg',"https://i.pinimg.com/originals/27/7f/7d/277f7de296757492750bd3a435040966.jpg","https://3.bp.blogspot.com/-TOB0p76BOw0/WhT4Pl1O52I/AAAAAAAACYg/AmCgAQ01VSU0mD3GqV0meuISBvV9j-NSQCLcBGAs/s1600/DCS09JLtag.jpg","https://1.bp.blogspot.com/-vEBKiB_VBJo/XqyxLyKBkPI/AAAAAAAAO6c/pRLGvck9O_Q5EJ6Y6_sFMvo3CEB9tJHMgCLcBGAsYHQ/s1600/20200501_203017.jpg","https://i.pinimg.com/originals/bc/f4/e1/bcf4e1731965c1f30b0baf882be5be25.jpg"]
totalImages=this.objectLength(this.imageObj);
 current:any=0;
  updateImage(){
    const div=document.querySelector('.item') as HTMLDivElement;
    const image=document.createElement('img') as any;
    image.setAttribute('class','slideImage')
    image.style="width: 50rem;height: 30rem;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);sizes=(max-width: 600px) 100vw";
    const currentPicture=document.querySelector('.item')as HTMLDivElement;
    image.src=this.imageObj[this.current];
   currentPicture.innerText=this.current+1;
   div.appendChild(image);


  }

  objectLength(obj:any) {
    let result:number = 0;
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
}
nextButton(){
  if (this.current+1==this.totalImages)
    return;
  this.current++;
  this.updateImage();
  //console.log('register Prev clickEventImages',this.totalImages);

}
}
