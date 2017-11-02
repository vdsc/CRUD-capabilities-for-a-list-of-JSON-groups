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
  constructor(private route: ActivatedRoute, private _getjsonservice: GetjsonService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log(this.id);
      
       this.groupdetails = this._getjsonservice.getdetails(this.id);
       this.groupdetails = (this.groupdetails[0].members);
       console.log('groupdetails', (this.groupdetails));
       
       
      
       
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
