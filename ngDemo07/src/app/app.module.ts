import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 双向绑定必须引入
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
