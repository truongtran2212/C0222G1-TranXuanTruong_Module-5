import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {ImgSliderComponent} from "./img-slider.component";
import {ImgSliderRoutingModule} from "./img-slider-routing.module";

@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  imports: [
    CommonModule,
    ImgSliderRoutingModule
  ],
  exports: [
    ImgSliderComponent,
    ImgSlideComponent
  ],
})
export class ImgSliderModule { }
