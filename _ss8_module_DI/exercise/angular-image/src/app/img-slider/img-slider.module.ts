import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {ImgSliderComponent} from "./img-slider.component";



@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  imports: [
    CommonModule
  ],
  exports: [ImgSliderComponent, ImgSlideComponent]
})
export class ImgSliderModule { }
