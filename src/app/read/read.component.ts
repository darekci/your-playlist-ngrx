import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Song } from "../models/song.model";

import * as fromStore from "../store";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.scss"],
})
export class ReadComponent implements OnInit {
  // Section 1
  playlist$: Observable<Song[]>;

  // Section 2
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.playlist$ = this.store.select(fromStore.getAllSongs);
    this.store.dispatch(new fromStore.LoadSongs());
  }

  // Section 3
  removeSong(index) {
    //   this.store.dispatch(new PlaylistActions.RemoveSong(index));
  }
}
