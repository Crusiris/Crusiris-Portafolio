import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
mostrar=true
  constructor() { }

  ngOnInit() {
  }
  handleScroll(element){
    let currentElement = document.getElementById(element)
    console.log(currentElement)
    currentElement.scrollIntoView({ behavior: "smooth" })
  }

  mostrarmenu(){
    console.log('hola mundo')
  }
  
}
