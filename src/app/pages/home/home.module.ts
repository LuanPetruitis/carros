import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ScrollingModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
