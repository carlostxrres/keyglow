import React from "react"
import "src/components/keyboards/MacBookPro.scss"
import { Key } from "src/components/Key.jsx"
import { Icon } from "src/components/Common/Icon/Icon.jsx"

import {
  Command,
  Option,
  MacBackspace,
  MacGlobe,
  MacSidewayCaret,
  MacBackspace2,
  MacCapsLock,
  MacShift,
  GreenLED,
} from "src/components/Icons.jsx"

export function MacBookPro() {
  const alsoClickOnReturnPart = (event, returnKeyPart) => {
    console.log("hello")
    event.preventDefault() // Prevent any default behavior of the click
    const selector = `.key.${returnKeyPart}-return`
    const element = document.querySelector(selector)
    if (element) {
      element.click() // Trigger the click
    }
  }

  //<Key className="regular">Q</Key>

  return (
    <div className="keyboard macbook-pro">
      <div className="row">
        <Key className="regular text">
          <span>esc</span>
        </Key>
        <Key className="superbar content-in-corners">
          <span></span>
          <span></span>
        </Key>
        <Key className="fingerprint content-in-corners">
          <span></span>
          <span></span>
        </Key>
      </div>
      <div className="row">
        <Key className="regular two-storeys">
          <span className="bigger">&#170;</span>
          <span>&#186;</span>
          <span>&#92;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#33;</span>
          <span>1</span>
          <span className="lower">&#124;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#34;</span>
          <span>2</span>
          <span className="lower">&#64;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#183;</span>
          <span>3</span>
          <span className="lower">&#35;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#36;</span>
          <span>4</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#37;</span>
          <span>5</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#38;</span>
          <span>6</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#47;</span>
          <span>7</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#40;</span>
          <span>8</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#41;</span>
          <span>9</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#61;</span>
          <span>0</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#63;</span>
          <span>&#39;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#191;</span>
          <span>&#161;</span>
        </Key>
        <Key className="backspace content-in-corners">
          <span></span>
          <Icon i="backspace" className="right" />
        </Key>
      </div>
      <div className="row">
        <Key className="tab content-in-corners">
          <span></span>
          <Icon i="vertical_align_top" className="flip-90 left" />
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
        <Key className="regular two-storeys">
          <span>&#94;</span>
          <span>&#96;</span>
          <span>&#91;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#42;</span>
          <span>&#43;</span>
          <span>&#93;</span>
        </Key>
        <Key className="hiReturn content-in-corners"></Key>
      </div>
      <div className="row">
        <Key className="mayus content-in-corners">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="-5 -5 12 12"
          >
            <circle cx="1" cy="1" r="1" fill="green"></circle>
          </svg>
          <Icon i="shift_lock" className="left" />
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
        <Key className="regular two-storeys">
          <span>&#168;</span>
          <span>&#180;</span>
          <span>&#123;</span>
        </Key>
        <Key className="regular two-storeys">
          <span className="bigger lower">Ç</span>
          <span></span>
          <span>&#125;</span>
        </Key>
        <Key className="loReturn content-in-corners"></Key>
      </div>
      <div className="row">
        <Key className="lShift content-in-corners">
          <span></span>
          <Icon i="shift" className="left" />
        </Key>
        <Key className="regular content-in-corners">
          <Icon i="arrow_forward_ios" />
          <Icon i="arrow_back_ios" />
        </Key>
        <Key className="regular">Z</Key>
        <Key className="regular">X</Key>
        <Key className="regular">C</Key>
        <Key className="regular">V</Key>
        <Key className="regular">B</Key>
        <Key className="regular">N</Key>
        <Key className="regular">M</Key>
        <Key className="regular two-storeys">
          <span>&#59;</span>
          <span>&#44;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#58;</span>
          <span>&#46;</span>
        </Key>
        <Key className="regular two-storeys">
          <span>&#95;</span>
          <span>&#45;</span>
        </Key>
        <Key className="rShift content-in-corners">
          <span></span>
          <Icon i="shift" className="right" />
        </Key>
      </div>
      <div className="row">
        <Key className="regular content-in-corners">
          <span className="text right">fn</span>
          <Icon i="language" className="left" />
        </Key>
        <Key className="regular content-in-corners">
          <Icon i="arrow_back_ios" className="right flip-90" />
          <span className="text">control</span>
        </Key>
        <Key className="regular content-in-corners">
          <Icon i="keyboard_option_key" className="right" />
          <span className="text">option</span>
        </Key>
        <Key className="command content-in-corners">
          <Icon i="keyboard_command_key" className="right" />
          <span className="text">command</span>
        </Key>
        <Key className="spacebar"></Key>
        <Key className="command content-in-corners">
          <Icon i="keyboard_command_key" className="left" />
          <span className="text">command</span>
        </Key>
        <Key className="regular content-in-corners">
          <Icon i="keyboard_option_key" className="left" />
          <span className="text">option</span>
        </Key>
        <div className="arrowArea">
          <Key className="regular">
            <Icon i="keyboard_arrow_up" />
          </Key>
          <Key className="regular">
            <Icon i="keyboard_arrow_left" />
          </Key>
          <Key className="regular">
            <Icon i="keyboard_arrow_down" />
          </Key>
          <Key className="regular">
            <Icon i="keyboard_arrow_right" />
          </Key>
        </div>
      </div>
    </div>
  )
}
