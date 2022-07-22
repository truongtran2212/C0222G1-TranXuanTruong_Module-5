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
    const mean = this.activatedRoute.snapshot.params.mean;
    this.word = this.dictionaryService.findById(mean);
  }

}
