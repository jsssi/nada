import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

   @ViewChild('main') mainRef!:ElementRef;
   @ViewChild('register',{static:false}) registerBtnRef!:ElementRef;
   @ViewChild('list',{static:false}) listBtnRef!:ElementRef;

   constructor(private renderer :Renderer2){}
   ngAfterViewInit(){
     if(this.listBtnRef){
      this.listBtnRef.nativeElement.addEventListener('click',()=>{
        if(this.mainRef){
          this.renderer.addClass(this.mainRef.nativeElement ,'main-container-overlay')
        }
      })
     }
     if(this.registerBtnRef){
      this.registerBtnRef.nativeElement.addEventListener('click',()=>{
        if(this.mainRef){
          this.renderer.removeClass(this.mainRef.nativeElement ,'main-container-overlay')
        }
      })
     }
   }
}
