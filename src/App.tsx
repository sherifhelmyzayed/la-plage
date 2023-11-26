import { useState } from 'react'
import './App.css'
import Scene from './three/Scene'

function App() {
  const [ready, set] = useState(false)

  return (
    <>
      <Scene />
      <div className="dot" />
      <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
        <div className="stack">
          <button onClick={() => set(true)}>Start</button>
        </div>
      </div>

    </>
  )
}

export default App
