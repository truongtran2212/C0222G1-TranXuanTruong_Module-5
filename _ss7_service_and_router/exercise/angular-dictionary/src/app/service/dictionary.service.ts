import {Injectable} from '@angular/core';
import {Word} from "../word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  findById(mean: string): Word {
    const wordList: Word[] = [
      {word: "dog", mean: "con chó"},
      {word: "cat", mean: "con mèo"},
      {word: "bird", mean: "con chim"},
      {word: "fish", mean: "con cá"},
      ];
    return wordList.find(wordObj => wordObj.mean === mean)
  }

  findAll() : Word[] {
    return [
      {word: "dog", mean: "con chó"},
      {word: "cat", mean: "con mèo"},
      {word: "bird", mean: "con chim"},
      {word: "fish", mean: "con cá"},
    ];
  }
}
