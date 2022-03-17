const Info: React.FC = () => {
    return (
      <div className="text-center my-5 leading-7">
        <h1 className="text-5xl font-bold">Word-ish</h1>
        <p className="italic">A game-ish about words-ish</p>
        <ul className="hidden md:block text-center list-none mt-4">
          <li className="text-3xl">Can you guess todays word?</li>
          <li>You have 5 guesses.</li>
          <li>
            If a letter is in the correct location, it will be{" "}
            <span className="text-lime-700 font-bold italic">green-ish</span>
          </li>
          <li>
            If a letter is in the word but in the wrong location, it will be{" "}
            <span className="text-amber-300 font-bold italic">yellow-ish</span>
          </li>
          <li>
            If a letter is not in the word, it will be{" "}
            <span className="text-rose-700 font-bold">red-ish</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Info;