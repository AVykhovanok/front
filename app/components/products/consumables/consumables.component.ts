import { Component, OnInit } from '@angular/core';
import { Consumables } from 'src/app/model/Consumables.model';
import { ElementService } from '../../element/element.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/model/Brand.model';
import { Country } from 'src/app/model/Country.model';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.css']
})
export class ConsumablesComponent implements OnInit {

  element : Consumables;
  category : string;
  brand: Brand;
  country: Country;

  constructor(private service: ElementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = "consumables";
      this.getElement(params['id'], this.category);
      });
  }

  getElement(id: number, category: string){
    this.service.getById(id,category).subscribe(
      data => {
        console.log(data);
        this.element = data;
        this.getBrand(this.element.brandId);
        this.getCountry(this.element.countryId);
      }
    )
  }
  getBrand(id: number){
    this.service.getBrandById(id).subscribe(
      data => {
        console.log(data);
        this.brand = data;
      }
    )
  }

  getCountry(id: number){
    this.service.getCountryById(id).subscribe(
      data => {
        console.log(data);
        this.country = data;
      }
    )
  }
}
