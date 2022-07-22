import { Component, OnInit } from '@angular/core';
import {Word} from "../word";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  wordList: Word[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.wordList = this.dictionaryService.findAll();
  }
}
