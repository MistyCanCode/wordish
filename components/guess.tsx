export interface GuessProps {
    guess: string[];
    answer: string;
  }
  
  const getLetterBackgroundColor = (
    oneGuess: string,
    index: number,
    answer: string
  ): string => {
    if (answer[index] === oneGuess[index]) {
      return "bg-green-300";
    }
  
    const countOfLetterOccuringInAnswer = answer
      .split("")
      .filter((letter: string) => letter === oneGuess[index]).length;
  
    const countOfLetterOccuringInGuessBeforeCurrentIndex = oneGuess
      .slice(0, index)
      .split("")
      .filter((letter: string) => letter === oneGuess[index]).length;
  
    if (
      answer.includes(oneGuess[index]) &&
      countOfLetterOccuringInAnswer >
        countOfLetterOccuringInGuessBeforeCurrentIndex
    ) {
      return "bg-yellow-300";
    }
  
    return "bg-red-300";
  };
  
  const Guess: React.FC<GuessProps> = ({ guess, answer }) => {
    return (
      <ol className="m-4">
        {guess.map((oneGuess, guessIndex) => (
          <li key={guessIndex} className="grid grid-cols-5">
            {oneGuess.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={`${getLetterBackgroundColor(
                  oneGuess,
                  letterIndex,
                  answer
                )} h-12 w-12 text-2xl flex border-2 border-gray-300 p-1 m-1 box-border justify-center items-center`}
              >
                {letter}
              </span>
            ))}
          </li>
        ))}
      </ol>
    );
  };
  
  export default Guess;
  