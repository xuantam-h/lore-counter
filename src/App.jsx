import Player from './components/Player/Player'
import './App.css'

function App() {
  return (
    <>
      <section id="main-grid">
        <Player defaultName="Player 1" defaultColor="#ffc675"/>
        <Player defaultName="Player 2" defaultColor="#9887ff"/>
      </section>
    </>
  )
}

export default App
