import { useState } from "react";

export interface FormProps {
  guess: string[];
  setGuess: (guess: string[]) => void;
}

const Form: React.FC<FormProps> = ({ guess, setGuess }: FormProps) => {
  const [aGuess, setAGuess] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (aGuess.length !== 5) {
      return;
    }

    setGuess([...guess, aGuess]);
    setAGuess("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAGuess(event.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-center border-3 border-gray-400 p-2 m-2 text-5xl bg-slate-300"
        type="text"
        onChange={handleChange}
        maxLength={5}
        value={aGuess}
        placeholder="Enter your guess"
        required
      />
    </form>
  );
};

export default Form;
