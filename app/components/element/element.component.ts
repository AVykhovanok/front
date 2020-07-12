import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ElementService } from './element.service';
import { Accessories } from 'src/app/model/Accessories.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  element : Accessories;

  constructor(private service: ElementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.getElement(params['id'], params['category']);
      });
  }

  getElement(id: number, category: string){
    this.service.getById(id,category).subscribe(
      data => {
        console.log(data);
        this.element = data;
      }
    )
  }
}
