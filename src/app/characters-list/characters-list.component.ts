import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Character } from '../interfaces/characters.interface';
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  charactersList: Character[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe((value) => this.charactersList = value.results)
    
  }

}
