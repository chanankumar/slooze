import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private translate: TranslateService) {}

  logout() {
    localStorage.removeItem('user_admin');
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }
  
  toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');

    if (isDark) {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }

  switchLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    this.translate.use(language);
  }

}
