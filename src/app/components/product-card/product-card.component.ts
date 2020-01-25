import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pc-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;

  ngOnInit() {

    if (!this.product.image) {
      this.product.image = 'https://via.placeholder.com/150';
    }
  }
}
