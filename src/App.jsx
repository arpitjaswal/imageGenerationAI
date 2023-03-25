import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import './App.css'

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async()=>{
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    //image_url = response['data'][0]['url']
    setResult(res.data.data[0].url)
  }
  
  return (
    <div>
      <div className='app-main'>
      <h1>AI IMAGE GENERATOR</h1>
      <h6>powered by DALL-E API</h6>
      <input className='app-input' onChange={(e)=>setPrompt(e.target.value)} placeholder="How would you like your image to look like? IMAGINE."/>
      <button onClick={generateImage}>Generate an image</button>
      {result.length>0?<img src={result} alt="result" className='result-image' />: <></>}
    </div>
    <div className='footer'>
      <h5>Developed by Arpit Jaswal</h5>
    </div>
    </div>
    
  )
}

export default App

//open ai nodejs code


// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();