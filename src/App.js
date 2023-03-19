import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app_body">
        {/* Sidebar */}

        <Sidebar />

        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
