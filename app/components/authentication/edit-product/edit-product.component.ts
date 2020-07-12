import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Accessories } from 'src/app/model/Accessories.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  model: any = {};
  productId: number;
  product: any;
  brandList: any;
  countryList: any;
  category: string;
  private element: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.productId = params['id'];
    });
    this.productsService.getProduct(this.category, this.productId).subscribe(
      data => {this.product = data;
        this.model = data;
      console.log(this.model)});
    this.productsService.getAllBrands().subscribe(
      data => this.brandList = data);
    this.productsService.getAllCountries().subscribe(
      data => this.countryList = data);
  }

  onSubmit() {
    this.productsService.addProduct(this.category, this.model).subscribe(
      data => console.log(data));
    this.router.navigate(['admin-page']).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  onCountryChange(value : any) {
    console.log(value);
    this.model.countryId = value;
  }

  onBrandChange(value : any) {
    console.log(value);
    this.model.brandId = value;
  }
}
