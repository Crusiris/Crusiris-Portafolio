import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handleScroll(element){
    let currentElement = document.getElementById(element)
    console.log(currentElement)
    currentElement.scrollIntoView({ behavior: "smooth" })
  }
}
