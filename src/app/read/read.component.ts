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
  isLoading$: Observable<boolean>;
  playlist$: Observable<Song[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromStore.getSongsLoading);
    this.playlist$ = this.store.select(fromStore.getAllSongs);
    this.store.dispatch(new fromStore.LoadSongs());
  }
}
