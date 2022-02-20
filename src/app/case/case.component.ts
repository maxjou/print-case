import { Component, OnInit } from '@angular/core';
import { CaseService } from './case-service/case.service';
import { Word } from './word/word';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent{

  constructor(private caseService: CaseService) { }

  formattedWords: Word[] = [];
  currentWord: Word = {}
  onSubmit: any;

  formatWord(event: any){
    let word: Word = this.caseService.formatWord(event.target.value);
    this.currentWord = word;
    this.formattedWords.push(word);
    
  }

  clearWords() {
    this.formattedWords = [];
  }

  changeWord(word: Word) {
    this.currentWord = word;
  }



  copyMessage(val: string) {
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
  }
}

