import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    async function getWords() {
      const resp = await (await fetch("http://localhost:5000/api/get-all-words")).json();
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
    <div>
      <Link to="/add-words">Add words</Link>
        <ul>
            {words.map(word=>{
                return <li key={word.word}>{word.word}-{word.translation}</li>
            })}
        </ul>
    </div>
  );
}
