import { Action } from "@ngrx/store";

import { Song } from "src/app/models/song.model";

export const LOAD_SONGS = "[Songs] Load";
export const LOAD_SONGS_SUCCESS = "[Songs] Load Success";
export const LOAD_SONGS_FAIL = "[Songs] Load Fail";

export class LoadSongs implements Action {
  readonly type = LOAD_SONGS;
}

export class LoadSongsSuccess implements Action {
  readonly type = LOAD_SONGS_SUCCESS;
  constructor(public payload: Song[]) {}
}

export class LoadSongsFail implements Action {
  readonly type = LOAD_SONGS_FAIL;
  constructor(public payload: string) {}
}

export type SongsLoadAction = LoadSongs | LoadSongsFail | LoadSongsSuccess;
