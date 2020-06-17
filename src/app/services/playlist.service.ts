import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of, BehaviorSubject, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { Song } from "../models/song.model";

@Injectable({
  providedIn: "root",
})
export class PlaylistService {
  private playlistUrl = "api/songs";
  private headers = new HttpHeaders({ "Content-Type": "application/json" });

  private selectedSongSource = new BehaviorSubject<Song | null>(null);
  selectedSongChanges$ = this.selectedSongSource.asObservable();

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http
      .get<Song[]>(this.playlistUrl)
      .pipe(catchError((error: string) => Observable.throw(error)));
  }

  createSong(song: Song): Observable<Song> {
    return this.http
      .post<Song>(this.playlistUrl, song, { headers: this.headers })
      .pipe(catchError((error: string) => Observable.throw(error)));
  }

  deleteSong(id: number): Observable<{}> {
    return this.http
      .delete<Song>(`${this.playlistUrl}/${id}`, { headers: this.headers })
      .pipe(catchError((error: string) => Observable.throw(error)));
  }
}
