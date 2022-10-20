import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior: "smooth"});
  }
  toFormacion(){
    document.getElementById('formacion')?.scrollIntoView({behavior: "smooth"});
  }
  toSkills(){
    document.getElementById('skills')?.scrollIntoView({behavior: "smooth"});
  }
  toProjects(){
    document.getElementById('proyectos')?.scrollIntoView({behavior: "smooth"});
  }
}
