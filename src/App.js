import './App.css';
import MainChat from './components/MainChat/MainChat';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <div className="app-body">
      {/* SideBar */}
      <SideBar />
      {/* Chat */}
      <MainChat />
      </div>

    </div>
  );
}

export default App;
