// import React from "react"
import "src/components/keyboards/ExternalKeyboard.scss"
import { Key } from "src/components/Key.jsx"

import {
  Tab,
  Return,
  Option,
  // START,
  Backspace,
  Arrow,
  Flat,
  WindowsLogo,
  HPLogo,
} from "src/components/Icons.jsx"

export function ExternalKeyboard() {
  return (
    <div className="keyboard external-keyboard">
      <div className="keyboard-section">
        <div className="row function-row">
          <Key className="text">
            <span>esc</span>
          </Key>

          <div></div>

          <Key className="text">
            <span>F1</span>
          </Key>
          <Key className="text">
            <span>F2</span>
          </Key>
          <Key className="text">
            <span>F3</span>
          </Key>
          <Key className="text">
            <span>F4</span>
          </Key>

          <div></div>

          <Key className="text">
            <span>F5</span>
          </Key>
          <Key className="text">
            <span>F6</span>
          </Key>
          <Key className="text">
            <span>F7</span>
          </Key>
          <Key className="text">
            <span>F8</span>
          </Key>

          <div></div>

          <Key className="text">
            <span>F9</span>
          </Key>
          <Key className="text">
            <span>F10</span>
          </Key>
          <Key className="text">
            <span>F11</span>
          </Key>
          <Key className="text">
            <span>F12</span>
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
          <Key
            className="upper-return hidden"
            // onClick={(event) => alsoClickOn(event, `.key.lower-return`)}
          >
            <span>
              <Return />
            </span>
          </Key>
        </div>
        <div className="row">
          <Key className="bloq-mayus text">
            <span>bloq mayús</span>
          </Key>
          <Key className="regular">A</Key>
          <Key className="regular">S</Key>
          <Key className="regular">D</Key>
          <Key className="regular homing-bump">F</Key>
          <Key className="regular">G</Key>
          <Key className="regular">H</Key>
          <Key className="regular homing-bump">J</Key>
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
          <Key
            className="regular lower-return hidden"
            // onClick={(event) => alsoClickOn(event, `.key.upper-return`)}
          ></Key>
        </div>
        <div className="row">
          <Key className="left-shift">
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
        </div>
        <div className="row">
          <Key className="left-control text">
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
          <Key className="spacebar text"></Key>
          <Key className="right-control text">
            <span>alt gr</span>
          </Key>
          <Key className="right-control">
            <span>
              <Option />
            </span>
          </Key>
          <Key className="right-control text">
            <span>ctrl</span>
          </Key>
        </div>
      </div>

      <div className="keyboard-section">
        <div className="row">
          <Key className="regular text">
            <span>despl</span>
          </Key>
          <Key className="regular text">
            <span>pausa</span>
          </Key>
          <Key className="regular text">
            <span>borrar</span>
          </Key>
        </div>
        <div className="row">
          <Key className="regular text">
            <span>insert</span>
          </Key>
          <Key className="regular text">
            <span>inicio</span>
          </Key>
          <Key className="regular text">
            <span>repág</span>
          </Key>
        </div>
        <div className="row">
          <Key className="regular text">
            <span>supr</span>
          </Key>
          <Key className="regular text">
            <span>fin</span>
          </Key>
          <Key className="regular text">
            <span>avpág</span>
          </Key>
        </div>
        <div className="row">
          <HPLogo className="darker" />
        </div>
        <div className="row">
          <Key className="regular">
            <Arrow className="flip-270" />
          </Key>
        </div>
        <div className="row">
          <Key className="regular">
            <Arrow className="flip-180" />
          </Key>
          <Key className="regular">
            <Arrow className="flip-90" />
          </Key>
          <Key className="regular">
            <Arrow />
          </Key>
        </div>
      </div>

      <div className="keyboard-section">
        <div className="row">
          <Key className="regular text">
            <span></span>
          </Key>
          <Key className="regular text">
            <span></span>
          </Key>
          <Key className="regular text">
            <span></span>
          </Key>
          <Key className="regular text">
            <span></span>
          </Key>
        </div>
        <div className="row">
          <Key className="regular text">
            <span>bloq num</span>
          </Key>
          <Key className="regular text">
            <span>/</span>
          </Key>
          <Key className="regular text">
            <span>*</span>
          </Key>
          <Key className="regular text">
            <span>-</span>
          </Key>
        </div>
        <div className="row">
          <Key className="regular">
            <span>7</span>
          </Key>
          <Key className="regular">
            <span>8</span>
          </Key>
          <Key className="regular">
            <span>9</span>
          </Key>
          <Key className="regular double-height" dataContent="+"></Key>
        </div>
        <div className="row">
          <Key className="regular">
            <span>4</span>
          </Key>
          <Key className="regular">
            <span>5</span>
          </Key>
          <Key className="regular">
            <span>6</span>
          </Key>
          <Key className="regular hidden"></Key>
        </div>
        <div className="row">
          <Key className="regular">
            <span>1</span>
          </Key>
          <Key className="regular">
            <span>2</span>
          </Key>
          <Key className="regular">
            <span>3</span>
          </Key>
          <Key className="regular double-height" dataContent="intro"></Key>
        </div>
        <div className="row">
          <Key className="numpad-zero">
            <span>0</span>
          </Key>
          <Key className="regular">
            <span>.</span>
          </Key>
          <Key className="regular hidden"></Key>
        </div>
      </div>
    </div>
  )
}

// 6.4% 1.1% 6.4% 6.4% 6.4% 6.4% 1.1% 6.4% 6.4% 6.4% 6.4% 1.1% 6.4% 6.4% 6.4% 6.4%
// 6.4% 1.1% repeat(4, 6.4%) 1.1% repeat(4, 6.4%) 1.1% repeat(4, 6.4%)

// 6.4% 1.1% repeat(4, 6.4%) 1.1% repeat(4, 6.4%) 1.1% repeat(4, 6.4%)
