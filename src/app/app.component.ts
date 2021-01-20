import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce-App';
  currentLanguage: string;
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    this.currentLanguage = 'en';
  }

  changeLanguage(lang: string) {
    if (this.currentLanguage != lang) {
      this.translate.use(lang);
      this.currentLanguage = lang;
    }
  }
}
