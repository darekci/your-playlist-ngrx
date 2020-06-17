import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Song } from "../models/song.model";
import { AppState } from "./../app.state";

import * as fromStore from "../store";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent {
  private currentId = 2;

  // Section 1
  constructor(private store: Store<AppState>) {}

  // Section 2
  addSong(title: string, url: string) {
    this.currentId += 1;

    const song: Song = {
      id: this.currentId,
      title: title,
      url: url,
    };

    this.store.dispatch(new fromStore.AddSong(song));
  }
}
