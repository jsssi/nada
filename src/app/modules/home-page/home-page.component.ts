import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { UserServiceService } from '../../service/user-service.service';
import User from '../../model/user';
import product from '../../model/Products';
import { productService } from '../../service/product.service';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, NgFor, NgClass, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  //Bagunça//

  @ViewChild('main') mainRef!: ElementRef;
  @ViewChild('register', { static: false }) registerBtnRef!: ElementRef;
  @ViewChild('list', { static: false }) listBtnRef!: ElementRef;
  //modal-expansive-edit-product

  cardIndex: number | null = null;
  products : product[]=[];

  constructor(private renderer: Renderer2 , private productService : productService) {

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
    this.cardIndex = null;
  }
  //Products Service list
  addProduct(){
    const newProduct : product = {
      id: 10,
      name: 'Novo Produto',
      price: 99.99,
      quantity: 10
    }
    this.productService.addProduct(newProduct);
  }
}

