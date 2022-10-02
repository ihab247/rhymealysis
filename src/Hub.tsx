import React from 'react';
import './Hub.css';
import Word from './Word';

class Hub extends React.Component<{
  words: string
}> {
  props: any = {};

  constructor(props: any) {
    super(props);
    this.props = props;
  }

  renderSyllable(s: string, colour: string, back: string | undefined): JSX.Element {
    return <span style={{"color": colour, backgroundColor: back}}>{s}</span>
  }

  filter(word: string) {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz'-";
    let out = "";
    for (const c of word) {
      if (alphabet.includes(c.toLowerCase())) {
        out += c;
      }
    }
    return out;
  }

  renderWord(word: string): JSX.Element {

    let fileredWord = this.filter(word);

    let colours = new Map<string, string>([
      ["ɪ", "red"],
      ["ɑ", "blue"],
      ["æ", "#4269f5"],
      ["ɛ", "green"],
      ["i", "orange"],
      ["ɝ", "pink"],
      ["ə", "cyan"],
      ["ɪŋ", "fuchsia"],
      ["aʊ", "#FF7676"],
      ["oʊ", "#007475"],
      ["aɪ", "#ccee40"],
      ["eɪ", "black"],
      ["u", "yellow"],
      ["ɔ", "black"],
      ["ʊ", "pink"]
    ]);

    let back = new Map<string, string>([
      ["eɪ", "yellow"],
      ["u", "black"],
      ["ʊ", "black"],
      ["ɔ", "orange"]
    ]);

    let objWord = new Word(fileredWord);
    // console.log(objWord);
    let out: JSX.Element[] = [];

    for (let i = 0; i < objWord.english.length; i++) {
      let c: string = colours.get(objWord.vowels[i]) || "white";
      let b: string | undefined = back.get(objWord.vowels[i]) || undefined;
      out.push(this.renderSyllable(objWord.english[i], c, b));
    }

    return <span id="word">
      {out}
      <span id="tooltip">{objWord.vowels.join("-")}</span>
      <span> </span>
    </span>
  }

  renderSentence(sentence: string): JSX.Element {
    return <>
    <p>
      {
        sentence.split(" ").map(
          (s: string) => this.renderWord(s.trim())
        )
      }
    </p>
    </>
  }

  render() {
    return (
      <div className="Hub">
          {
            this.props.words.split("\n").map(
              (v: string) => this.renderSentence(v)
            )
          }
      </div>
    )
  }
  
}

export default Hub;
