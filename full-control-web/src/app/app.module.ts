import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerService } from './manager/service/manager.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ManagerService]
})
export class AppModule { }
