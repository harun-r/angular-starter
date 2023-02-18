import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./about.component";
const routes = <Routes>[
  { path: 'about', component: AboutComponent },
]
@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule
  ]

})
export class AboutModule { }
