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

    this.showmenu()
  }

  showmenu() {
    let divBarIcon3 = document.getElementById("nav-icon3");
    if (!this.mostrar) {
      divBarIcon3.classList.toggle("open");
      (document.getElementById(
        "navbar-responsive"
      ) as HTMLElement).style.transform = "translate3d(0,0,0)";

      this.mostrar = true;
    } else {
      (document.getElementById(
        "navbar-responsive"
      ) as HTMLElement).style.transform = "translate3d(-100%,0,0)";
      this.mostrar = false;
      divBarIcon3.classList.remove("open");
    }
  }
  
}
