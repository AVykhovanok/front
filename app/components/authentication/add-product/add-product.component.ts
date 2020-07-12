import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products/products.service';
import { Accessories } from 'src/app/model/Accessories.model';
import { Battery } from 'src/app/model/Battery.model';
import { Boxmod } from 'src/app/model/Boxmod.model';
import { Charger } from 'src/app/model/Charger.model';
import { Complects } from 'src/app/model/Complects.model';
import { Components } from 'src/app/model/Components.model';
import { Consumables } from 'src/app/model/Consumables.model';
import { Liquid } from 'src/app/model/Liquid.model';
import { Mechmod } from 'src/app/model/Mechmod.model';
import { RDA } from 'src/app/model/RDA.model';
import { RDTA } from 'src/app/model/RDTA.model';
import { RTA } from 'src/app/model/RTA.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  model: any = {};
  brandList: any;
  countryList: any;
  category: string;
  private element: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService,
    private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });
    this.productsService.getAllBrands().subscribe(
      data => this.brandList = data);
    this.productsService.getAllCountries().subscribe(
      data => this.countryList = data);
  }

  onSubmit() {
    switch (this.category) {
      case 'accessories': {
        this.element = new Accessories(0, this.model.name, this.model.batteryType,
          this.model.color, this.model.numbOfBat, this.model.diameter, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'battery': {
        this.element = new Battery(0, this.model.name, this.model.batteryType,
          this.model.apm, this.model.price, this.model.desc, this.model.picture,
          this.model.country, this.model.brand);
        break;
      }
      case 'boxmod': {
        this.element = new Boxmod(0, this.model.name, this.model.batteryType,
          this.model.color, this.model.price, this.model.desc, this.model.picture,
          this.model.country, this.model.brand);
        break;
      }
      case 'charger': {
        this.element = new Charger(0, this.model.name, this.model.batteryType,
          this.model.color, this.model.numbOfBat, this.model.apm, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'complects': {
        this.element = new Complects(0, this.model.name, this.model.batteryType,
          this.model.color, this.model.value, this.model.diameter, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'components': {
        this.element = new Components(0, this.model.name, this.model.nic,
          this.model.value, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'consumables': {
        this.element = new Consumables(0, this.model.name, this.model.weight,
          this.model.diameter, this.model.price, this.model.volume,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'liquid': {
        this.element = new Liquid(0, this.model.name, this.model.nic,
          this.model.value, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'mechmod': {
        this.element = new Mechmod(0, this.model.name, this.model.batteryType,
          this.model.color, this.model.diameter, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'rda': {
        this.element = new RDA(0, this.model.name, this.model.typeRefill,
          this.model.color, this.model.diameter, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.brand);
        break;
      }
      case 'rdta': {
        this.element = new RDTA(0, this.model.name, this.model.typeRefill,
          this.model.color, this.model.diameter, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.volume, this.model.brand);
        break;
      }
      case 'rta': {
        this.element = new RTA(0, this.model.name, this.model.typeRefill,
          this.model.color, this.model.diameter, this.model.price,
          this.model.desc, this.model.picture, this.model.country, this.model.volume, this.model.brand);
        break;
      }
    }
    this.productsService.addProduct(this.category, this.element).subscribe(
      data => console.log(data));
    this.router.navigate(['admin-page']).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  onCountryChange(value: any) {
    console.log(value);
    this.model.country = value;
  }

  onBrandChange(value: any) {
    console.log(value);
    this.model.brand = value;
  }

}
