import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './appComponent/app.component';
import { HeroDetailComponent } from './heroDetail/hero-detail.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { DashboardComponent } from './DashboardComponent/dashboard.component';
import { HeroService } from './hero/hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
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
