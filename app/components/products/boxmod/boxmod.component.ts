import { Component, OnInit } from '@angular/core';
import { Boxmod } from 'src/app/model/Boxmod.model';
import { ElementService } from '../../element/element.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/model/Brand.model';
import { Country } from 'src/app/model/Country.model';

@Component({
  selector: 'app-boxmod',
  templateUrl: './boxmod.component.html',
  styleUrls: ['./boxmod.component.css']
})
export class BoxmodComponent implements OnInit {

  element : Boxmod;
  category : string;
  brand: Brand;
  country: Country;

  constructor(private service: ElementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = "boxmod";
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
