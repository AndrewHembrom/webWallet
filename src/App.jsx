import { useState } from 'react'
import './App.css'
import { generateMnemonic } from 'bip39';
import SolanaWallet from './components/SolanaWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");


  function splitMnemonic() { 
    if (!mnemonic) return null; // Return null if there's no mnemonic

    let splitMn = mnemonic.split(" ");
    return splitMn.map((word, index) => (
      <div key={index} className="word-box" >
        {word}
      </div>
    ));
  }

  return (
    <>
      <button onClick={function () { 
        const mn = generateMnemonic();
        setMnemonic(mn);
      }}>Create Seed Phrase</button>

      <div className='word-container'>{splitMnemonic()}</div>
      {mnemonic && <SolanaWallet mnemonic={mnemonic}/>}
    </>
  )
}

export default App
