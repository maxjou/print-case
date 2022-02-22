import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CaseService } from './case-service/case.service';
import { Word } from './word/word';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  constructor(private caseService: CaseService) { }

  formattedWords: Word[] = [];
  currentWord: Word = {}
  // onSubmit: any;
  latestCopy: string;

  ngOnInit(): void {
      // this.currentWord.camelCase = "ello"
      this.formattedWords = JSON.parse(sessionStorage.getItem("words") || '{}')
  }

  onSubmit(f: NgForm) {
    console.log(f.value.word)
    let word: Word = this.caseService.formatWord(f.value.word);
    this.currentWord = word;
    this.formattedWords.push(word);
    sessionStorage.setItem("words", JSON.stringify(this.formattedWords))
  }

  clearWords() {
    this.formattedWords = [];
    sessionStorage.clear();
  }

  changeWord(word: Word) {
    this.currentWord = word;
  }

  objectKeys(word: Word) {
    return Object.values(word);
}

  copyMessage(val: any) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.latestCopy = val;
  }
}

