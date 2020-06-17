import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { PlaylistService } from "src/app/services/playlist.service";

// Section 1
import * as songsActions from "../actions";
import { of } from "rxjs/internal/observable/of";

// Section 2
@Injectable()
export class SongsEffects {
  constructor(
    private actions$: Actions,
    private playlistService: PlaylistService
  ) {}

  // Section 3
  @Effect()
  loadSongs$ = this.actions$.pipe(
    ofType(songsActions.LOAD_SONGS),
    switchMap(() => {
      return this.playlistService.getSongs().pipe(
        map((songs) => new songsActions.LoadSongsSuccess(songs)),
        catchError((error) => of(new songsActions.LoadSongsFail(error)))
      );
    })
  );

  @Effect()
  addSong$ = this.actions$.pipe(
    ofType(songsActions.ADD_SONG),
    switchMap((action: any) => {
      return this.playlistService.createSong(action.payload).pipe(
        map(() => new songsActions.AddSongSuccess()),
        catchError((error: string) => of(new songsActions.AddSongFail(error)))
      );
    })
  );

  @Effect()
  addSongSuccess$ = this.actions$.pipe(
    ofType(songsActions.ADD_SONG_SUCCESS),
    switchMap(() => {
      return this.playlistService.getSongs().pipe(
        map((songs) => new songsActions.LoadSongsSuccess(songs)),
        catchError((error: string) => of(new songsActions.LoadSongsFail(error)))
      );
    })
  );
}
