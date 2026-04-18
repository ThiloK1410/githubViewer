import './App.css'
import RepoViewer from './RepoViewer'

function App() {
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
          <RepoViewer username='ThiloK1410' />
        </div>
      </div>
    </div>
  )
}

export default App
