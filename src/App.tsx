import { useState } from 'react'
import './App.css'
import RepoViewer from './RepoViewer'

function App() {
  const [username, setUsername] = useState("ThiloK1410")


  return (
    <div className='main-body'>
      <div className='header'>
        THIS IS THE HEADER
      </div>
      <div className='git-body'>
        <div className='git-sidebar content-window'>
          username here
        </div>
        <div className='repo-container content-window'>
          <RepoViewer username={username} />
        </div>
      </div>
    </div>
  )
}

export default App
