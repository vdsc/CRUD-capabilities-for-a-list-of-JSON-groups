import { Component, OnInit } from '@angular/core';
import { GetjsonService} from '../getjson.service';
import { CategoryPipe } from '../category.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [CategoryPipe] 
})
export class GroupComponent implements OnInit {

isDesc: boolean = false;
column: string = 'CategoryName';
direction: number;
group: any =[];

  constructor(private _getjsonservice: GetjsonService, private router: Router ) { }

  ngOnInit() {
    console.log("calling from group component");
    
    this._getjsonservice.getAllPosts().subscribe(posts => {
      this._getjsonservice.group = posts;// storing in service to share json with group detail component
      this.group= posts;
     
    });
    console.log(this._getjsonservice.group);
    
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

  goToDetails(id) {
    console.log(id); 
    
  this.router.navigate(['/groupdetails', id]);
}

}
