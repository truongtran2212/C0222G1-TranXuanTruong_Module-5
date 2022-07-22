import { Component, OnInit } from '@angular/core';
import {Word} from "../word";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: Word;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const word = this.activatedRoute.snapshot.params.word;
    this.word = this.dictionaryService.findById(word);
  }
}
