import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    )
  ]
})
export class CoreModule { }
