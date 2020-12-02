import GoogleLogin from 'react-google-login';
import './App.css';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
      <a className="App-link">הורים משתפים</a>
      <a className="App-link">אנשי מקצוע</a>
      <a className="App-link">זיהוי קשיים</a>
      <a className="App-link">מאמרי חינוך</a>
    </nav>
       <h2>ואין אדם שאין לו נר</h2>
       <a>התחבר</a>
      </header>
    </div>
  );
}

export default App;
