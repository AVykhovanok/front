import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryViewService } from './category-view.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  category : string;
  itemList : any;

  constructor(private route: ActivatedRoute, private service : CategoryViewService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.service.getAll(this.category).subscribe(
        data => {
          console.log(data[0].name);
          this.itemList = data;
        }
      );
    });
  }

}
