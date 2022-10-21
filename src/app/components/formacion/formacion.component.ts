import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}
