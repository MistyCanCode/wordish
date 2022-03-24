import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { useEffect, useState } from "react";
import answers from "../answers.json";
import Form from "../components/form";
import GameOver from "../components/gameOver";
import Guess from "../components/guess";
import Info from "../components/info";

export const getServerSideProps: GetServerSideProps = async () => {
  const answer = answers[Math.floor(Math.random() * answers.length)];

  return { props: { answer } };
};


const Home: NextPage = ({
  answer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
 const [guess, setGuess] = useState<string[]>([]);

 useEffect(() => {
   setGuess([]);
 }, [answer]);

 const winner = guess.length >= 6 || guess[guess.length - 1] === answer;
 if(winner){
   return(
     <GameOver guess={guess} answer={answer}>
       WINNER
     </GameOver>
   );
 }

 const loser = guess.length >= 6 && guess[guess.length - 1] !== answer;
 if (loser){
   return (
     <GameOver guess={guess} answer={answer}>
       LOSER
     </GameOver>
   );
 }
 return(
   <title>Wordish</title>
   <div className="grid place-items-center">
     <Info />
     <Form guess={guess} setGuess={setGuess}/>
     <Guess guess={guess} answer={answer} />
   </div>
 )

};
export default Home;
