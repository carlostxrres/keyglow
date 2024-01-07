import "src/components/Common/Button/Buttons.scss"
// import "src/components/title/scss/main.scss"

export const Title = ({ titleText }) => {
  const letters = titleText.split(" ").map((words) => words.split(""))

  return (
    <>
      {letters.map((word) => (
        <span className="buttons">
          {word.map((letter) => (
            <button>{letter.toUpperCase()}</button>
          ))}
        </span>
      ))}
    </>
  )
}
