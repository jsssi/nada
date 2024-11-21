import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { UserServiceService } from '../../service/user-service.service';
import product from '../../model/Products';
import { productService } from '../../service/product.service';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../model/user';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    
    NgFor,
    NgClass,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive
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
  Users:User[] =[]
  prioridades = [
    {name : "Baixa"},
    {name : "Media"},
    {name: "Alta"}
  ]

  //Forms
  productForm!: FormGroup;
  editProductForm!: FormGroup;

  constructor(private renderer: Renderer2, private productService: productService , private userService:UserServiceService) { }
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();

    this.productForm = new FormGroup({
      descriçao: new FormControl('',[Validators.required]),
      setor: new FormControl('',[Validators.required]),
      usuario: new FormControl('',[Validators.required]),
      prioridade : new FormControl('',[Validators.required])
    })
    this.editProductForm = new FormGroup({
      NewName: new FormControl('',[Validators.required]),
      NewValue: new FormControl('',[Validators.required]),
      NewQuantity: new FormControl('',[Validators.required]),
    })

    this.Users = this.userService.getUsers();
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

    
  }
}

