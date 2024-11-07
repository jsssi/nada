import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { UserServiceService } from '../../service/user-service.service';
import User from '../../model/user';
import product from '../../model/Products';
import { productService } from '../../service/product.service';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavBarComponent,
    NgFor,
    NgClass,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  //Bagunça//

  @ViewChild('main') mainRef!: ElementRef;
  @ViewChild('register', { static: false }) registerBtnRef!: ElementRef;
  @ViewChild('list', { static: false }) listBtnRef!: ElementRef;
  //modal-expansive-edit-product

  cardIndex: number | null = null;
  products: product[] = [];

  //Forms
  productForm!: FormGroup;
  editProductForm!: FormGroup;

  constructor(private renderer: Renderer2, private productService: productService) { }
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();

    this.productForm = new FormGroup({
      name: new FormControl(''),
      value: new FormControl(''),
      quantity: new FormControl(''),
    })
    this.editProductForm = new FormGroup({
      NewName: new FormControl(''),
      NewValue: new FormControl(''),
      NewQuantity: new FormControl('')
    })
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
  //----------------------------//
  //adicinando produto
  addProduct() {
    const formData = this.productForm.value
    this.productService.addProduct(formData);
    this.products = this.productService.getAllProducts()
    console.log(this.products)
  }
  //removendo Card da lista
  RemoveCard(index: number) {
    this.productService.deleteProduct(index);
    this.products = this.productService.getAllProducts()
    console.log(this.products)
  }
  //Editando Card
  editCardProduct(index: number) {

    let NewName = this.editProductForm.get('NewName')?.value;
    let NewValue = this.editProductForm.get('NewValue')?.value;
    let NewQuantity = this.editProductForm.get('NewQuantity')?.value;


    let currentProduct = this.products[index];
    let active = currentProduct.active;


    let updatedValues: any = { active };


    if (NewName !== null && NewName !== '') {
      updatedValues.name = NewName;
    } else {
      updatedValues.name = currentProduct.name;
    }

    if (NewValue !== null && NewValue !== '') {
      updatedValues.value = NewValue;
    } else {
      updatedValues.value = currentProduct.value;
    }

    if (NewQuantity !== null && NewQuantity !== '') {
      updatedValues.quantity = NewQuantity;
    } else {
      updatedValues.quantity = currentProduct.quantity;
    }

    this.productService.editProduct(updatedValues, index)
    this.closeExpansion();
  }
}

