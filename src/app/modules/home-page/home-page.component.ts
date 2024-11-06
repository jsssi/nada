import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { UserServiceService } from '../../service/user-service.service';
import User from '../../model/user';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, NgFor, NgClass, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  //Bagunça//

  products = [
    { name: 'celular', value: 19, quantity: 1 },
    { name: 'pc', value: 20, quantity: 1, active: false },
    { name: 'pc', value: 20, quantity: 1, active: false },
    { name: 'pc', value: 20, quantity: 1, active: false }
  ]


  @ViewChild('main') mainRef!: ElementRef;
  @ViewChild('register', { static: false }) registerBtnRef!: ElementRef;
  @ViewChild('list', { static: false }) listBtnRef!: ElementRef;
  //modal-expansive-edit-product

  cardIndex: number | null = null;

  constructor(private renderer: Renderer2) {

  }

  //Dom Page//
  ngAfterViewInit() {
    if (this.listBtnRef) {
      this.listBtnRef.nativeElement.addEventListener('click', () => {
        if (this.mainRef) {
          this.renderer.addClass(this.mainRef.nativeElement, 'main-container-overlay')
        }
      })
    }
    if (this.registerBtnRef) {
      this.registerBtnRef.nativeElement.addEventListener('click', () => {
        if (this.mainRef) {
          this.renderer.removeClass(this.mainRef.nativeElement, 'main-container-overlay')
        }
      })
    }

  }
  toggleButton(index: number): void {
    this.cardIndex = this.cardIndex === index ? null : index;
  }
  closeExpansion(): void {
    // Fecha qualquer card expandido
    this.cardIndex = null;
  }

}

