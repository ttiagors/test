import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FullComponent} from './layouts/full/full.component';
import {AppRoutes} from './app.routing';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './demo-material-module';
import {TestComponent} from './view/test/test.component';
import {TestService} from './services/test.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    TestComponent
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
