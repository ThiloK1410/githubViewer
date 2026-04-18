import { useState } from 'react'
import "./App.css";
import RepoViewer from './RepoViewer'
import { Header } from "./Header"


function App() {
  const [username, setUsername] = useState("ThiloK1410")


  return (
    <div className="main-body">
      <Header setUsername={setUsername} />
      <div className='git-body'>
        <div className='git-sidebar content-window'>
          {username}
        </div>
        <div className='repo-container content-window'>
          <RepoViewer username={username} />
        </div>
      </div>
    </div>
  )
}

export default App
