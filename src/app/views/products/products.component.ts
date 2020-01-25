import { Component, Input } from '@angular/core';

@Component({
  selector: 'pc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  @Input() products: any[];
}
