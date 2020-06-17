import { InMemoryDbService } from "angular-in-memory-web-api";
import { Song } from "../models/song.model";

export class PlaylistData implements InMemoryDbService {
  createDb() {
    const songs: Song[] = [
      {
        id: 1,
        title: "Depeche Mode - Enjoy The Silence",
        url: "https://www.youtube.com/watch?v=aGSKrC7dGcY",
      },
      {
        id: 2,
        title: "Billie Eilish - When The Partys Over",
        url: "https://www.youtube.com/watch?v=pbMwTqkKSps",
      },
    ];
    return { songs };
  }
}
