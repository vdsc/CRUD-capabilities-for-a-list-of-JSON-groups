import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { GroupdetailsComponent } from './groupdetails/groupdetails.component';

import { GetjsonService} from './getjson.service';
import { CategoryPipe } from './category.pipe';



// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'group',
    pathMatch: 'full'
  },
 { 
   path: '**', 
   redirectTo: 'home', 
   pathMatch: 'full' 
  },
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
    BrowserAnimationsModule,
    JsonpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  entryComponents: [
    GroupdetailsComponent
  ],
  providers: [GetjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
