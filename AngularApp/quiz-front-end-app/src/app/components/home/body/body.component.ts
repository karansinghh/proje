import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  images = ['../../assets/images/school-supplies-7069763_1920.jpg', '../../assets/images/fairy-tale-1077863.jpg', '../../assets/images/school-supplies-7069759_1920.jpg'];

}
