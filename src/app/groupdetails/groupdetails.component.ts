import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GetjsonService} from '../getjson.service';




@Component({
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.css']
})
export class GroupdetailsComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;
  groupdetails: any = [];
  errorMessage: string;
  constructor(private route: ActivatedRoute, private _getjsonservice: GetjsonService) { }

  

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
          this.id = params['id']; 
          //console.log("id", this.id);

          //this.groupdetails = this._getjsonservice.getdetails(this.id).subscribe(posts=>this.groupdetails =posts)
          //this.groupdetails = (this.groupdetails[0].members);
          //console.log('groupdetails', (this.groupdetails));
         
          
          console.log("id yo", this.id);


          this._getjsonservice.getAllPosts().subscribe(posts => {
          //console.log("posts for details",posts);
          this.groupdetails = posts
          this.groupdetails = this.groupdetails.filter((x => x.id === this.id));
          
          
          
          this.groupdetails = (this.groupdetails[0].members);
          console.log(this.groupdetails);

          //error => this.errorMessage = <any>error;
          
          
          });
              
        
          console.log("groupdetails",this.groupdetails);

     });
  }

  

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
