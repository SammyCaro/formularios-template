import { Component } from '@angular/core';

interface menuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  templateMenuItems: menuItem[] = [
    { name: 'Básicos', path: './template/basicos' },
    { name: 'Dinámicos', path: './template/dinamicos' },
    { name: 'Switches', path: './template/switches' },
  ];

  ReactiveMenuItems: menuItem[] = [
    { name: 'Básicos', path: './reactive/basicos' },
    { name: 'Dinámicos', path: './reactive/dinamicos' },
    { name: 'Switches', path: './reactive/switches' },
  ];
}
