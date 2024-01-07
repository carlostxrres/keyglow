import React from "react"
import "src/components/keyboards/HPEliteBook.scss"
import { Key } from "src/components/Key.jsx"

import {
  Tab,
  Return,
  Option,
  START,
  Backspace,
  Arrow,
  Flat,
  WindowsLogo,
} from "src/components/Icons.jsx"

export function HPEliteBook() {
  const alsoClickOnReturnPart = (event, returnKeyPart) => {
    console.log("hello")
    event.preventDefault() // Prevent any default behavior of the click
    const selector = `.key.${returnKeyPart}-return`
    const element = document.querySelector(selector)
    if (element) {
      element.click() // Trigger the click
    }
  }

  return (
    <div className="keyboard hp-elitebook">
      <div className="row function-row">
        <Key className="function">
          <span>esc</span>
        </Key>
        <Key className="function">
          <span>F1</span>
        </Key>
        <Key className="function">
          <span>F2</span>
        </Key>
        <Key className="function">
          <span>F3</span>
        </Key>
        <Key className="function">
          <span>F4</span>
        </Key>
        <Key className="function">
          <span>F5</span>
        </Key>
        <Key className="function">
          <span>F6</span>
        </Key>
        <Key className="function">
          <span>F7</span>
        </Key>
        <Key className="function">
          <span>F8</span>
        </Key>
        <Key className="function">
          <span>F9</span>
        </Key>
        <Key className="function">
          <span>F10</span>
        </Key>
        <Key className="function">
          <span>F11</span>
        </Key>
        <Key className="function">
          <span>F12</span>
        </Key>
        <Key className="function">
          <span>ins</span>
        </Key>
        <Key className="function">
          <span>impr pa</span>
        </Key>
        <Key className="function">
          <span>supr</span>
        </Key>
      </div>
      <div className="row">
        <Key className="ordinal three-storeys">
          <span className="crossed">ª</span>
          <span></span>
          <span className="crossed">º</span>
          <span>\</span>
        </Key>
        <Key className="regular">
          <span>1</span>
        </Key>
        <Key className="regular">
          <span>2</span>
        </Key>
        <Key className="regular">
          <span>3</span>
        </Key>
        <Key className="regular">
          <span>4</span>
        </Key>
        <Key className="regular">
          <span>5</span>
        </Key>
        <Key className="regular">
          <span>6</span>
        </Key>
        <Key className="regular">
          <span>7</span>
        </Key>
        <Key className="regular">
          <span>8</span>
        </Key>
        <Key className="regular">
          <span>9</span>
        </Key>
        <Key className="regular">
          <span>0</span>
        </Key>
        <Key className="regular two-storeys">
          <span>?</span>
          <span>,</span>
        </Key>
        <Key className="regular two-storeys">
          <span>¿</span>
          <span>¡</span>
        </Key>
        <Key className="backspace">
          <span>
            <Flat className="flip-180" />
          </span>
        </Key>
        <Key className="regular text">
          <span>inicio</span>
        </Key>
      </div>

      <div className="row">
        <Key className="tab two-storeys">
          <span>
            <Tab />
          </span>
          <span>
            <Tab className="flip-180" />
          </span>
        </Key>
        <Key className="regular">Q</Key>
        <Key className="regular">W</Key>
        <Key className="regular">E</Key>
        <Key className="regular">R</Key>
        <Key className="regular">T</Key>
        <Key className="regular">Y</Key>
        <Key className="regular">U</Key>
        <Key className="regular">I</Key>
        <Key className="regular">O</Key>
        <Key className="regular">P</Key>
        <Key className="regular three-storeys">
          <span>^</span>
          <span></span>
          <span>&#96;</span>
          <span>&#91;</span>
        </Key>
        <Key className="regular three-storeys">
          <span>*</span>
          <span></span>
          <span>+</span>
          <span>&#93;</span>
        </Key>
        <Key className="upper-return">
          {/* <span>
            <Return />
          </span> */}
        </Key>
        <Key className="regular text">
          <span>repág</span>
        </Key>
      </div>
      <div className="row">
        <Key className="bloq-mayus text">
          <span>bloq mayús</span>
        </Key>
        <Key className="regular">A</Key>
        <Key className="regular">S</Key>
        <Key className="regular">D</Key>
        <Key className="regular">F</Key>
        <Key className="regular">G</Key>
        <Key className="regular">H</Key>
        <Key className="regular">J</Key>
        <Key className="regular">K</Key>
        <Key className="regular">L</Key>
        <Key className="regular">Ñ</Key>
        <Key className="regular three-storeys">
          <span>¨</span>
          <span></span>
          <span>&acute;</span>
          <span>&#123;</span>
        </Key>
        <Key className="regular three-storeys">
          <span>Ç</span>
          <span></span>
          <span></span>
          <span>&#125;</span>
        </Key>
        <Key className="regular lower-return"></Key>
        <Key className="regular text">
          <span>avpág</span>
        </Key>
      </div>
      <div className="row">
        <Key className="regular">
          <span>
            <Backspace className="flip-90" />
          </span>
        </Key>
        <Key className="regular two-storeys">
          <span>
            <Arrow />
          </span>
          <span>
            <Arrow className="flip-180" />
          </span>
        </Key>
        <Key className="regular">Z</Key>
        <Key className="regular">X</Key>
        <Key className="regular">C</Key>
        <Key className="regular">V</Key>
        <Key className="regular">B</Key>
        <Key className="regular">N</Key>
        <Key className="regular">M</Key>
        <Key className="regular two-storeys">
          <span>;</span>
          <span>,</span>
        </Key>
        <Key className="regular two-storeys">
          <span>:</span>
          <span>.</span>
        </Key>
        <Key className="regular two-storeys">
          <span>—</span>
          <span>-</span>
        </Key>
        <Key className="right-shift">
          <span>
            <Backspace className="flip-90" />
          </span>
        </Key>
        <Key className="regular text">
          <span>fin</span>
        </Key>
      </div>
      <div className="row">
        <Key className="regular text">
          <span>ctrl</span>
        </Key>
        <Key className="regular text">
          <span>fn</span>
        </Key>
        <Key className="regular">
          <span>
            <WindowsLogo />
          </span>
        </Key>
        <Key className="regular text">
          <span>alt</span>
        </Key>
        <Key className="spacebar text">
          <span></span>
        </Key>
        <Key className="regular text">
          <span>alt gr</span>
        </Key>
        <Key className="regular">
          <span>
            <Option />
          </span>
        </Key>
        <Key className="regular text">
          <span>ctrl</span>
        </Key>
        <Key className="regular">
          <span>
            <Arrow className="flip-180" />
          </span>
        </Key>
        <div className="arrows">
          <Key>
            <span>
              <Arrow className="flip-270" />
            </span>
          </Key>
          <Key>
            <span>
              <Arrow className="flip-90" />
            </span>
          </Key>
        </div>
        <Key className="regular">
          <span>
            <Arrow />
          </span>
        </Key>
      </div>
    </div>
  )
}
