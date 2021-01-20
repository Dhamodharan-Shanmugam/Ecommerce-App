import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenPageModule } from './modules/open-page/openPage.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TranslationPipe implements TranslateLoader {
  constructor(private http: HttpClient) { }
  getTranslation(languageCode: string): Observable<Object> {
    let languageUrl: string = '';
    languageUrl = '/assets/translation/' + languageCode + '.json';
    return this.http.get(languageUrl);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationPipe
      }
    }),
    AppRoutingModule,
    OpenPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
