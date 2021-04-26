import { useState } from "react";
import { useHistory } from "react-router";

export default function AddWords() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [explaining, setExplaining] = useState("");
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  return (
    <div className="add-words__wrapper">
      <span>
        <div className="add-words__container">
          <h1>
            Here you can add <br /> a new word to learn it!
          </h1>
        </div>
        <form
          className="add-words"
          onSubmit={(event) => {
            event.preventDefault();
            fetch("https://english-words-server.herokuapp.com/api/add-word", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ translation, word, explaining }),
            });
            setWord("");
            setTranslation("");
            setExplaining("");
            history.push("/");
          }}
        >
          <h1>Create new entry!</h1>
          <input
            type="text"
            value={word}
            placeholder="English word"
            required
            onInput={(event) => {
              setWord(event.target.value);
            }}
          />
          <input
            type="text"
            value={translation}
            placeholder="Translation"
            required
            onInput={(event) => {
              setTranslation(event.target.value);
            }}
          />
          <input
            type="button"
            value="+ Add explaining"
            onClick={() => {
              setOpen(true);
            }}
          />
          <input type="submit" value="Add new one" />
        </form>
      </span>
      <div className={`add-words__model ${isOpen ? "" : "none"}`}>
        <div onClick={() => setOpen(false)}>Add</div>
        <textarea
          value={explaining}
          placeholder="Explaining"
          required
          onChange={(event) => {
            setExplaining(event.target.value);
          }}
          cols="30"
          rows="10"
        />
      </div>
    </div>
  );
}
