import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; //map operator
import 'rxjs/Rx';

@Injectable()
export class GetjsonService {
group: any = [];


  constructor(private _http:Http) { 
    console.log("service ready....");
  }

 // Get all posts from the API
  getAllPosts() {
    //console.log("I am here");
    
    return this._http.get('/api/group')
      .map(res => res.json());
  }


  // getdetails(id){
  //     this.group = this._http.get('/api/group')
  //     .map(res => res.json())

  //     console.log(this.group);
      
  //     return this.group.filter((x => x.id === id));
      
      
      
  //   }

}

