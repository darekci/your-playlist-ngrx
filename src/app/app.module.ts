import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { PlaylistData } from "./data/playlist-data";
import { environment } from "../environments/environment";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { reducers, effects } from "./store";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ReadComponent, CreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(PlaylistData),
    StoreModule.forRoot({}),
    StoreModule.forFeature("playlist", reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
