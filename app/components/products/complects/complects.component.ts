import { Component, OnInit } from '@angular/core';
import { Complects } from 'src/app/model/Complects.model';
import { ElementService } from '../../element/element.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/model/Brand.model';
import { Country } from 'src/app/model/Country.model';

@Component({
  selector: 'app-complects',
  templateUrl: './complects.component.html',
  styleUrls: ['./complects.component.css']
})
export class ComplectsComponent implements OnInit {

  element : Complects;
  category : string;
  brand: Brand;
  country: Country;

  constructor(private service: ElementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = "complects";
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
