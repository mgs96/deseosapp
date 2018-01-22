import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// servicios
import { ListaDeseosService } from './services/lista-deseos.service';

// componentes
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
