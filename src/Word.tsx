import React from "react";
import { ipaRaw } from "./data/ipaRaw";


const vowels = "iyɨʉɯuɪʏʊeøɘɵɤoe̞ø̞əɤ̞o̞ɛœɜɞʌɔæɐaɶäɑɒɝŋ";
const engVowels = "aeiou";
const vowelMap = new Map<string, string[]>();

function vowelize(word: string): string[] {
  let ret: string[] = [];
  let vowelized: string = "";
  for (const c of word) {
	if (vowels.includes(c)) {
	  vowelized += c;
	} else {
	  if (vowelized != "") {
		ret.push(vowelized);
	  }
	  vowelized = "";
	}
  }
  return ret;
}

for (const i of ipaRaw.split("\n")) {
  let e = i;
  let d = e.split(",");
  let word = d[0];
  let ipa = d[1];
  if (ipa === undefined) {
	  continue;
  }
  let vol = vowelize(ipa);
  vowelMap.set(word, vol);
}

class Word {
  english: string[] = [];
  vowels: string[] = [];

  constructor(word: string) {
    let v = vowelMap.get(word);
    if (v == undefined) {
      this.english = [word];
      return;
    }
    this.vowels = v as string[];

    let out: string = "";
    let lastVowel: boolean = false;
    for (const c of word) {
      if (!engVowels.includes(c)) {
        // consonant
        if (lastVowel) {
          lastVowel = false;
          this.english.push(out);
          out = c;
          continue;
        }
        out += c;
        continue;
      } else {
        // vowel
        lastVowel = true;
        out += c;
      }
    }
    this.english[this.english.length - 1] += out;
    if (this.english.length != this.vowels.length) {
      // console.log(this);
      this.english = [word];
      // throw Error(`Vowel Mismatch on ${word}`);
    }
  }
}

export default Word;
