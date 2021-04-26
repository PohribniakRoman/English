import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    async function getWords() {
      const resp = await (await fetch("https://english-words-server.herokuapp.com/api/get-all-words")).json();
      console.log(resp);
      updateWords(resp.list);
    }
    getWords();
  },[]);
  const [words, updateWords] = useState(false);
  if (!words) {
    return null;
  }
  return (
    <div className="home">
      <Link to="/add-words">Add words</Link>
        <ul>
            {words.map(word=>{
                return <li key={word.word}>{word.word}-{word.translation}</li>
            })}
        </ul>
    </div>
  );
}
