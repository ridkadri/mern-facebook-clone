import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Feed from './components/feed/feed';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app_body'>
          <Sidebar/>
          <Feed/>
          {/* widgets */}
      </div>
    </div>
  );
}

export default App;
