import Guess from "./guess";
import Link from "next/link";

export interface GameOverProps {
  answer: string;
  guess: string[];
}

const GameOver: React.FC<GameOverProps> = ({ answer, guess, children }) => {
  return (
    <div className="grid place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{children}</h1>
        <h2>
          The answer was <span className="font-bold">{answer}</span>
        </h2>
        <Guess guess={guess} answer={answer} />
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Play Again
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
