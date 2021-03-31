import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Login from './components/login/login';
import Feed from './components/feed/feed';
import Widget from './components/widget/widget';
import {useStateValue} from './context/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="App">
      {
        user ? (
          <>
            <Header/>
            
            <div className='app_body'>
              <Sidebar/>
              <Feed/>
              <Widget/>
            </div>
          </>
        ):(
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
