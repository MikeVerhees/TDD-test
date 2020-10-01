import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu.interfaces';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() { }

  ngOnInit() {
  }

}
