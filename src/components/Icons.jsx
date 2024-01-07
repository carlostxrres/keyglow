// Icons
// Siempre enfocando a la derecha (luego se gira por css)

/*export const LONG_ARROW = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
    
  >
    <path d="m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z" />
  </svg>
)

export const SHORT_ARROW = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
    
  >
    <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
  </svg>
)*/

export const Caret = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // class="icon icon-tabler icon-tabler-caret-up-filled"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z"
      strokeWidth="0"
      fill="currentColor"
    />
  </svg>
)

export const Tab = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
  >
    <path d="M820-240v-480h60v480h-60Zm-340 1-43-42 169-169H80v-60h526L438-679l42-42 241 241-241 241Z" />
  </svg>
)

export const Return = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
  >
    <path d="M359-240 120-479l239-239 43 43-167 167h545v-172h60v231H236l166 166-43 43Z" />
  </svg>
)

export const START = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
  >
    <path d="M80-240v-480h60v480H80Zm559 1-43-42 169-169H239v-60h526L597-679l42-42 241 241-241 241Z" />
  </svg>
)

export const Backspace = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
  >
    <path d="M359-242 120-481l239-239 43 43-166 166h604v60H236l166 166-43 43Z" />
  </svg>
)

export const Arrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
  >
    <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" />
  </svg>
)

export const Flat = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
  >
    <path d="m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z" />
  </svg>
)

// Mac
export const Command = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 -960 960 960"
    width="48"
    className={className}
  >
    <path d="M249.899-120Q196-120 158-158.101t-38-92Q120-304 158.071-342q38.072-38 91.929-38h70v-200h-70q-53.857 0-91.929-38.101-38.071-38.101-38.071-92T158.101-802q38.101-38 92-38T342-801.929q38 38.072 38 91.929v70h200v-70q0-53.857 38.101-91.929 38.101-38.071 92-38.071T802-801.899q38 38.101 38 92T801.929-618Q763.857-580 710-580h-70v200h70q53.857 0 91.929 38.101 38.071 38.101 38.071 92T801.899-158q-38.101 38-92 38T618-158.071Q580-196.143 580-250v-70H380v70q0 53.857-38.101 91.929-38.101 38.071-92 38.071Zm-.017-60Q279-180 299.5-200.417 320-220.833 320-250v-70h-70q-29.167 0-49.583 20.382Q180-279.235 180-250.118 180-221 200.382-200.5q20.383 20.5 49.5 20.5Zm460 0Q739-180 759.5-200.382q20.5-20.383 20.5-49.5Q780-279 759.583-299.5 739.167-320 710-320h-70v70q0 29.167 20.382 49.583Q680.765-180 709.882-180ZM380-380h200v-200H380v200ZM250-640h70v-70q0-29.167-20.382-49.583Q279.235-780 250.118-780 221-780 200.5-759.618q-20.5 20.383-20.5 49.5Q180-681 200.417-660.5 220.833-640 250-640Zm390 0h70q29.167 0 49.583-20.382Q780-680.765 780-709.882 780-739 759.618-759.5q-20.383-20.5-49.5-20.5Q681-780 660.5-759.583 640-739.167 640-710v70Z" />
  </svg>
)

export const Option = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="100 -900 750 750"
    width="200"
    className={className}
  >
    <path d="M180-780h600v-60q24 0 42 18t18 42v540q0 24-18 42t-74 18H180q-24 0-42-18t-18-44v-538q0-24 18-42t42-18Zm0-60v600h600v-600H180Zm0 0v600-600Z" />
    <path d="M250-580h421v0-60H290v60Z" />
    <path d="M250-460h421v0-60H290v60Z" />
    <path d="M250-340h421v0-60H290v60Z" />
  </svg>
)

export const MacBackspace = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="M360-200q-22 0-40-11.5T289-241L120-480l169-239q13-18 31-29.5t40-11.5h420q24.75 0 42.375 17.625T840-700v440q0 24.75-17.625 42.375T780-200H360Zm420-60v-440 440Zm-431 0h431v-440H349L195-480l154 220Zm99-66 112-112 112 112 43-43-113-111 111-111-43-43-110 112-112-112-43 43 113 111-113 111 43 43Z" />
  </svg>
)

export const MacGlobe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="M480-80q-84 0-157-31.5T196-197q-54-54-85-127.5T80-482q0-84 31-156.5T196-765q54-54 127-84.5T480-880q84 0 157 30.5T764-765q54 54 85 126.5T880-482q0 84-31 157.5T764-197q-54 54-127 85.5T480-80Zm0-58q35-36 58.5-82.5T577-331H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395-150Zm171-1q72-23 129.5-69T788-331H639q-13 54-30.5 98T566-151ZM152-391h159q-3-27-3.5-48.5T307-482q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152-391Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820-482q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648-391Zm-10-239h150q-33-69-90.5-115T565-810q25 37 42.5 80T638-630Zm-254 0h194q-11-53-37-102.5T480-820q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z" />
  </svg>
)

export const MacSidewayCaret = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="m80-160 401-640 399 640H80Z" />
  </svg>
)

export const MacBackspace2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z" />
  </svg>
)

export const MacCapsLock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="500"
    viewBox="0 0 500 500"
  >
    <g transform="matrix(0 -5.2814065868 6.3424387947 0 250 203.2156106016)">
      <path
        transform=" translate(0, 0)"
        d="M -5.84649 32.5 L 32.983509999999995 0 L -5.846490000000003 -32.5 L -5.846490000000003 -18.02983 L -32.98351 -18.02983 L -32.98351 17.794700000000002 L -5.846490000000003 17.794700000000002 z"
      />
    </g>
    <g
      transform="matrix(0 -5.2814065869 6.3424387947 0 249.2543358613 446.5705041344)"
      id="FK_RCE24IyXstdWkRnN7l"
    >
      <path
        transform=" translate(0, 0)"
        d="M 4.62248 -17.91226 L -4.62248 -17.91226 L -4.62248 17.912270000000003 L 4.62248 17.912270000000003 z"
      />
    </g>
  </svg>
)

export const MacShift = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="500"
    height="500"
    viewBox="0 0 500 500"
  >
    <g transform="matrix(0 -5.2814065868 6.3424387947 0 250 203.2156106016)">
      <path
        transform=" translate(0, 0)"
        d="M -5.84649 32.5 L 32.983509999999995 0 L -5.846490000000003 -32.5 L -5.846490000000003 -18.02983 L -32.98351 -18.02983 L -32.98351 17.794700000000002 L -5.846490000000003 17.794700000000002 z"
      />
    </g>
  </svg>
)

// Windows
export const WindowsLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 0 90 90"
  >
    <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z" />
  </svg>
)

export const HPLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-250 -250 1500 1500"
    className={className}
  >
    <g transform="translate(-203.54 -212.7)">
      <path d="m704.93 212.7-107.58 301.62 73.131 0.0229c52.68 0.0153 75.098 41.551 58.509 88.066l-106.97 299.91h-107.64l117.69-330h-55.422l-117.68 330h-108.57l241.48-677.11c-222.38 50.731-388.34 249.71-388.34 487.46 0 234.05 160.82 430.51 377.98 484.98l243.97-685.01h176.69c36.545 0 82.508 24.641 62.646 80.724l-99.203 280.11c-12.672 35.78-42.793 43.031-66.789 43.031h-108.62l-105.35 295.79c6.2031 0.2273 12.418 0.3834 18.672 0.3834 276.14 0 500-223.85 500-500-7e-4 -275.68-223.11-499.23-498.62-499.98zm208.15 358.81-102.47 287.64h54.567l102.49-287.64z" />
    </g>
  </svg>
)

//
export const KEYBOARD = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // height="48"
    viewBox="0 0 100 100"
    width="48"
    className={className}
  >
    <path d="M140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-200H140Zm0-60h680v-440H140v440Zm160-65h360v-60H300v60Zm-97-125h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM203-575h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM140-260v-440 440Z" />
  </svg>
)

export const Camera1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 -960 960 960"
    width="20"
  >
    <path d="M480-264q72 0 120-49t48-119q0-69-48-118.5T480-600q-72 0-120 49.5T312-432q0 70 48 119t120 49Zm0-72q-42 0-69-27t-27-68q0-40 27-68.5t69-28.5q42 0 69 28.5t27 68.5q0 41-27 68t-69 27ZM168-144q-29 0-50.5-21.5T96-216v-432q0-29 21.5-50.5T168-720h120l72-96h240l72 96h120q30 0 51 21.5t21 50.5v432q0 29-21 50.5T792-144H168Z" />
  </svg>
)

export const Camera2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 -1000 960 960"
    width="20"
  >
    <path d="m480-576 149-258q83 36 141.5 103T852-576H480Zm-83 48L248-786q50-38 109.5-58T480-864q26 0 51.5 4t51.5 10L397-528ZM99-432q-2-11-2.5-23t-.5-25q0-78 29.5-148.5T211-754l186 322H99Zm232 306q-83-35-142-102.5T108-384h372L331-126Zm149 30q-26 0-52-3.5T377-110l186-322 149 258q-51 38-110 58T480-96Zm269-110L563-528h298l2 24q1 12 1 24 0 78-30 149t-85 125Z" />
  </svg>
)

export const GreenLED = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -2 6 6"
    version="1.1"
    fill="#cbdccb"
  >
    <circle cx="60" cy="60" r="60"></circle>
  </svg>
)
