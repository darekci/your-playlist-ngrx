import { Action } from "@ngrx/store";

import { Song } from "src/app/models/song.model";

// Section 1
export const ADD_SONG = "[Song] Add";
export const ADD_SONG_SUCCESS = "[Song] Add Success";
export const ADD_SONG_FAIL = "[Song] Add Fail";

// Section 2
export class AddSong implements Action {
  readonly type = ADD_SONG;
  constructor(public payload: Song) {}
}

export class AddSongSuccess implements Action {
  readonly type = ADD_SONG_SUCCESS;
  constructor() {}
}

export class AddSongFail implements Action {
  readonly type = ADD_SONG_FAIL;
  constructor(public payload: string) {}
}

// Section 3
export type SongsAddAction = AddSong | AddSongFail | AddSongSuccess;
