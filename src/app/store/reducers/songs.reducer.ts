import * as fromSongs from "../actions";
import { Song } from "src/app/models/song.model";

export interface PlaylistState {
  data: Song[];
  loading: boolean;
}

export const initialState = {
  data: [],
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromSongs.SongsLoadAction | fromSongs.SongsAddAction
): PlaylistState {
  switch (action.type) {
    case fromSongs.LOAD_SONGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromSongs.LOAD_SONGS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case fromSongs.LOAD_SONGS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case fromSongs.ADD_SONG: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromSongs.ADD_SONG_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case fromSongs.ADD_SONG_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSongsLoading = (state: PlaylistState) => state.loading;
export const getSongs = (state: PlaylistState) => state.data;
