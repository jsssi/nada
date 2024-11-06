import { Injectable } from '@angular/core';
import product from '../model/Products';

@Injectable({
  providedIn: 'root'
})

export class productService {
  private products: product[] = [];
  constructor() { }

  private getProductsLocal() {
    const data = localStorage.getItem('products');
    if (data) {
      this.products = JSON.parse(data)
    }
  }
  private saveProductsLocal() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  getAllProducts(): product[] {
    this.getProductsLocal();
    return this.products;
  }
  addProduct(product: product) {
    this.products.push(product);
    this.saveProductsLocal();
  }
  editProduct(Newproduct: product) {
    const index = this.products.findIndex(p => p.id === Newproduct.id);
    if (index > -1) {
      this.products[index] = Newproduct;
      this.saveProductsLocal();
    }
  }
}


