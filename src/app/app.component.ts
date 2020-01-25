import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'pc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedLink = 'general';
  allProducts = [];

  get filteredProducts() {

    return this.selectedLink === 'general'
      ? this.allProducts.filter(prod => prod.hub === 'general')
      : this.allProducts.filter(prod => prod.hub !== 'general');
  }
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.selectedLink = location.hash.split('#')[1] || 'general';
    // To show loading effect
    this.productsService.getProducts().subscribe({
      next: (response) => {
        setTimeout(() => {
          this.allProducts = response;
        }, 1300);
      }
    });
  }

  changeSelection(event: MouseEvent, destination: string) {
    if (this.selectedLink !== destination) {
      this.selectedLink = destination;
    }
  }
}
