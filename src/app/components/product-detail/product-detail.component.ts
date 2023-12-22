import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  product: any = {};

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    const id = params['id'];

    this.product = this.productService.getProduct(id);
  }
}
