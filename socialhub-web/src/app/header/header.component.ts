import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Active-users', icon: 'pi pi-fw pi-calendar'},
      {label: 'News', icon: 'pi pi-fw pi-pencil'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];

  }


}
