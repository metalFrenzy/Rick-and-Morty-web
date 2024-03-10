import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private basseUrl = 'https://rickandmortyapi.com/api';


  constructor(private http: HttpClient) { }

  getCharacters():Observable<any>{
    return this.http.get<any>(`${this.basseUrl}/character`)
  }
}
