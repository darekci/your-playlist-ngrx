import { Song } from "./models/song.model";

export interface AppState {
  readonly playlist: Song[];
}
