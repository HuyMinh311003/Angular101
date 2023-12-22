import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;

  @Output() onBuyOnce = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onBuyAll = new EventEmitter();
  @Output() onDetail = new EventEmitter();

  buyOnce() {
    this.onBuyOnce.emit(this.product);
  }

  deleteOnce() {
    this.onDelete.emit(this.product.id);
  }

  buyAll() {
    this.onBuyAll.emit(this.product);
  }
}
