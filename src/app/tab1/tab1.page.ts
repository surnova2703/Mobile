import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  a: string = "Name"
  input_field: string = ""
  constructor() {}
 method(){
this.a = this.input_field

 }
}
