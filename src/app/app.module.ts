import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";
import { FrameworkPollComponent } from "./framework-poll/framework-poll.component";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

const config = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "..."
};

@NgModule({
  declarations: [AppComponent, FrameworkPollComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FrameworkPollComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FrameworkPollComponent, {
      injector: this.injector
    });
    customElements.define("framework-poll", el);
  }
}
