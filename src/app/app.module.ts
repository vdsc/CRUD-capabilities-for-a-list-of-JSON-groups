import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { GroupdetailsComponent } from './groupdetails/groupdetails.component';

import { GetjsonService} from './getjson.service';
import { CategoryPipe } from './category.pipe';

// Define the routes
const ROUTES = [
  // {
  //   path: '',
  //   redirectTo: 'group',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'group',
  //   component: GroupComponent,
    
  // },
  {  
    path:'groupdetails/:id',
    component:GroupdetailsComponent,    
  },      
  
];

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupdetailsComponent,
    CategoryPipe,
    
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [GetjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
