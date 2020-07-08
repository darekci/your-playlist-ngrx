import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

import * as fromSongs from "./songs.reducer";

export interface AppState {
  playlist: fromSongs.PlaylistState;
}

export const reducers: ActionReducerMap<AppState> = {
  playlist: fromSongs.reducer,
};

export const getAppState = createFeatureSelector<AppState>("playlist");

export const getPlaylistState = createSelector(
  getAppState,
  (state: AppState) => state.playlist
);

export const getAllSongs = createSelector(getPlaylistState, fromSongs.getSongs);

export const getSongsLoading = createSelector(
  getPlaylistState,
  fromSongs.getSongsLoading
);
