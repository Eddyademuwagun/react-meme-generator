import './App.css';
import { useState } from 'react';

export default function App() {
  const [bottomText, setBottomText] = useState('vici');
  console.log(bottomText);

  const [topText, setTopText] = useState('eddy');
  console.log(topText);

  const [memeTemplate, setMemeTemplate] = useState('buzz');

  return (
    <div className="App">
      <label className="label">
        meme template
        <input onChange={(e) => setMemeTemplate(e.target.value)} type="text" />
      </label>
      <br></br>
      <label>
        top text
        <input onChange={(e) => setTopText(e.target.value)} type="text" />
      </label>
      <br></br> {/* bottom label to be under the top lable*/}
      <br></br>
      <img
        src={`https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.webp`}
        data-test-id="meme-image"
        alt="Generated meme"
      />
      <label>
        <br></br>
        bottom text
        <input onChange={(e) => setBottomText(e.target.value)} type="text" />
      </label>
    </div>
  );
}
