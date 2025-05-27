import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router:Router) {
    const access = localStorage.getItem('user_type');

    if(access === 'false') {
      this.router.navigate(['/home/product']);
    } else {
      this.router.navigate(['/home/dashboard'])
    }
  }

    ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }
}
