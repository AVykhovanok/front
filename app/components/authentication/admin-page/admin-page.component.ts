import { Component, OnInit } from '@angular/core';
import { CategoryViewService } from '../../category-view/category-view.service';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  selectedCategory: string;
  itemList: any;

  constructor(private service: CategoryViewService, private productService: ProductsService) { }

  ngOnInit() {
    this.selectedCategory = "accessories";
    this.getProducts(this.selectedCategory);
  }

  getProducts(category: string) {
    console.log("category=" + category);
    this.service.getAll(category).subscribe(
      data => {
        this.itemList = data;
        this.selectedCategory = category;
      }
    )
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(this.selectedCategory, id).subscribe(
      value =>
        this.service.getAll(this.selectedCategory).subscribe(
          data => {
            this.itemList = data;
          }
        ));
  }

}
