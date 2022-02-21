import { Injectable } from '@angular/core';
import { Word } from '../word/word';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  formatWord(input: string) {
    let value = input.trim()
    let word: Word = {};
    word.value = value;
    word.kebabCase = this.kebabCase(value);
    word.camelCase = this.camelCase(value);
    word.pascalCase = this.pascalCase(value);
    word.snakeCaseAllLowerCase = this.snakeCaseAllLowerCase(value);
    word.snakeCaseAllUpperCase = this.snakeCaseAllUpperCase(value);
    word.snakeCaseFirstLowerRestUpper = this.snakeCaseFirstLowerRestUpper(value);

    return word
  }

  // this-is-an-example
  kebabCase(value: string) {
    return value.replace(/ /g, "-");
  }

  // thisIsAnExample
  camelCase(value: string) {
    return this.firstLowerRestUpper(value).replace(/ /g, "");
  }
  // ThisIsAnExample
  pascalCase(value: string) {
    return this.allUpperCase(value).replace(/ /g, "");
  }

  // this_is_an_example
  snakeCaseAllLowerCase(value: string) {
    return this.allLowerCase(value).replace(/ /g, "_");
  }
  // This_Is_An_Example
  snakeCaseAllUpperCase(value: string) {
    return this.allUpperCase(value).replace(/ /g, "_");
  }
  // this_Is_An_Example
  snakeCaseFirstLowerRestUpper(value: string) {
    return this.firstLowerRestUpper(value).replace(/ /g, "_");
  }



  firstLowerRestUpper(sentence: string) {
    const words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
      if (i == 0) {
        words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);
      } else {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

      }
    }
    return words.join(" ");
  }

  allUpperCase(sentence: string) {
    const words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  allLowerCase(sentence: string) {
    const words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

}
