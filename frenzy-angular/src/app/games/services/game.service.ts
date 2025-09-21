import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { CreateGameDto, GameDto, UpdateGameDto } from 'src/app/models/game.models';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = `${environment.apiUrl}/api/game`;
  constructor(private http: HttpClient) { }

  getGames(): Observable<GameDto[]> {
    return this.http.get<GameDto[]>(this.baseUrl).pipe(catchError((error) => { throw error; }));
  }

  getGameById(id: string): Observable<GameDto> {
    return this.http.get<GameDto>(`${this.baseUrl}/${id}`).pipe(catchError((error) => { throw error; }));
  }

  addGame(game: CreateGameDto): Observable<GameDto> {
    return this.http.post<GameDto>(this.baseUrl, game).pipe(catchError((error) => { throw error; }));
  }

  deleteGame(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError((error) => { throw error; }));
  }

  updateGame(updatedGame: UpdateGameDto, id: string): Observable<GameDto> {
    return this.http.put<GameDto>(`${this.baseUrl}/${id}`, updatedGame).pipe(catchError((error) => { throw error }));
  }

}
