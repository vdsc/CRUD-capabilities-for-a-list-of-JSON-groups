import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; //map operator
import 'rxjs/Rx';

@Injectable()
export class GetjsonService {
group: any = [];
test: any;

  constructor(private _http:Http) { 
    console.log("service ready....");
  }

 // Get all posts from the API
  getAllPosts() {
    console.log("I am here");
    
    return this._http.get('/api/group')
      .map(res => res.json());
  }
    getdetails(id){
      return this.test = this.group.filter((x => x.id === id))
      //console.log(this.test.members);
      
      //console.log("group",this.group);
      
      //this.group.filter(x => x.value === 2)
    }

}

