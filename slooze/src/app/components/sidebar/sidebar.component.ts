import { Component } from '@angular/core';


type DropdownKey = 'dashboard' | 'store' | 'analytic' | 'finances' | 'account' | 'help';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  dropdowns: Record<DropdownKey, boolean> = {
    dashboard: false,
    store: false,
    analytic: false,
    finances: false,
    account: false,
    help: false
  };


  toggleDropdown(name: DropdownKey) {
    this.dropdowns[name] = !this.dropdowns[name];
  }
}