import './App.css';
import { useState } from 'react';

export default function App() {
  const [bottomText, setBottomText] = useState('Buddy');

  const [topText, setTopText] = useState('Eddy');

  const [memeTemplate, setMemeTemplate] = useState('buzz');

  const [ourUrl, setOurUrl] = useState('');

  const handleDownload = async () => {
    const url = `https://api.memegen.link/images/${encodeURIComponent(
      memeTemplate,
    )}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.webp`;

    const response = await fetch(url);
    const blob = await response.blob();

    setOurUrl(URL.createObjectURL(blob));
  };

  return (
    <div className="App">
      <label className="label">
        meme template
        <input onChange={(e) => setMemeTemplate(e.target.value)} type="text" />
      </label>
      <br></br>
      <label className="label">
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
      <label className="label">
        <br></br>
        bottom text
        <input onChange={(e) => setBottomText(e.target.value)} type="text" />
      </label>
      <a download="eddy" href={ourUrl} onClick={handleDownload}>
        <button>downLoadLink</button>
      </a>
    </div>
  );
}
