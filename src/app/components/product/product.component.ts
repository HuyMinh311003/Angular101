import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() sanpham: any;

  @Output() onBuyOnce = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onBuyAll = new EventEmitter();

  buyOnce() {
    this.onBuyOnce.emit(this.sanpham);
  }

  deleteOnce() {
    this.onDelete.emit(this.sanpham.id);
  }

  buyAll() {
    this.onBuyAll.emit(this.sanpham);
  }
}
