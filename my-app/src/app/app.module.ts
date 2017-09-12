import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './appComponent/app.component';
import { HeroDetailComponent } from './heroDetail/hero-detail.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { DashboardComponent } from './DashboardComponent/dashboard.component';
import { HeroService } from './hero/hero.service';

import { AppRoutingModule } from './app-routing.module';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

let isDone:string = 'hhhhh'
console.log(isDone)
let arr:Array<number>  = [1,2,3,4]
console.log(arr)
let str:[number,string];
str = [1,'rr']

enum Color {Red, Green, Blue}
let c:Color = Color.Green
console.log(c)

let dd:any = 88 ;
  console.log(dd)
  dd = 'pp'
  console.log(dd)
let  arr1 = [1,2,'tt']
console.log(arr1)
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    NewCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
