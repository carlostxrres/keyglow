// import React from "react"
import "src/components/Keyboards/Hp.css"
import { Key } from "src/components/Key/Key.jsx"

export function Hp() {
  return (
    <>
      <div id="main" role="main">
        <ol id="keyboard" className="macbook-pro">
          <div className="keyboard-row">
            <Key>
              <span>~</span>
            </Key>
            <Key>
              <span>!</span>1
            </Key>
            <Key>
              <span>@</span>2
            </Key>
            <Key>
              <span>#</span>3
            </Key>
            <Key>
              <span>$</span>4
            </Key>
            <Key>
              <span>%</span>5
            </Key>
            <Key>
              <span>^</span>6
            </Key>
            <Key>
              <span>&amp;</span>7
            </Key>
            <Key>
              <span>*</span>8
            </Key>
            <Key>
              <span>(</span>9
            </Key>
            <Key>
              <span>)</span>0
            </Key>
            <Key>
              <span>_</span>-
            </Key>
            <Key>
              <span>+</span>=
            </Key>
            <Key className="special r" id="delete">
              delete
            </Key>
          </div>
          <div className="keyboard-row">
            <Key className="special l" id="tab">
              tab
            </Key>
            <Key>Q</Key>
            <Key>W</Key>
            <Key>E</Key>
            <Key>R</Key>
            <Key>T</Key>
            <Key>Y</Key>
            <Key>U</Key>
            <Key>I</Key>
            <Key>O</Key>
            <Key>P</Key>
            <Key>
              <span>{"{"}</span>[
            </Key>
            <Key>
              <span>{"}"}</span>]
            </Key>
            <Key className="last-key-in-row">
              <span>|</span>\
            </Key>
          </div>
          <div className="keyboard-row">
            <Key className="special l" id="caps-lock">
              caps lock
            </Key>
            <Key>A</Key>
            <Key>S</Key>
            <Key>D</Key>
            <Key>F</Key>
            <Key>G</Key>
            <Key>H</Key>
            <Key>J</Key>
            <Key>K</Key>
            <Key>L</Key>
            <Key>
              <span>:</span>;
            </Key>
            <Key>
              <span>&quot</span>&apos
            </Key>
            <Key className="special r" id="enter">
              <span>enter</span>return
            </Key>
          </div>
          <div className="keyboard-row">
            <Key className="special shift l">shift</Key>
            <Key>Z</Key>
            <Key>X</Key>
            <Key>C</Key>
            <Key>V</Key>
            <Key>B</Key>
            <Key>N</Key>
            <Key>M</Key>
            <Key>
              <span>&lt;</span>,
            </Key>
            <Key>
              <span>&gt;</span>.
            </Key>
            <Key>
              <span>?</span>/
            </Key>
            <Key className="special shift r">shift</Key>
          </div>
          <div className="keyboard-row">
            <Key className="special tall l">fn</Key>
            <Key className="special tall less-padding l">control</Key>
            <Key className="special tall less-padding l">
              <span>alt</span>option
            </Key>
            <Key className="special tall command r">
              <span>&#8984;</span>command
            </Key>
            <Key className="special tall" id="space">
              {" "}
            </Key>
            <Key className="special tall command l">
              <span>&#8984;</span>command
            </Key>
            <Key className="special tall less-padding r">
              <span>alt</span>option
            </Key>
            <div id="arrow-section">
              <div>
                <Key className="arrow invisible">&#8593;</Key>
                <Key className="arrow up">&#8593;</Key>
                <Key className="arrow invisible">&#8593;</Key>
              </div>
              <div>
                <Key className="arrow left">&#8592;</Key>
                <Key className="arrow down">&#8595;</Key>
                <Key className="arrow right">&#8594;</Key>
              </div>
            </div>
          </div>
        </ol>
      </div>
    </>
  )
}
