import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HomePageRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

@NgModule({
  imports: [    CommonModule,
    FormsModule,
    IonicModule,SharedModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
