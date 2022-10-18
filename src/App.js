import { useEffect, useState } from 'react'
import NavBar from './components/navbar';
import Modal from './components/modal';
import './App.css';

function App() {
  const URL = "https://official-joke-api.appspot.com/jokes/random";
  const [jokes, setJokes] = useState("");
  const [setup, setSetup] = useState("");
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const jokesgenerator = async () => {
      const response = await fetch(URL).then((item) => item.json());
      setJokes(response.punchline);
      setSetup(response.setup);
      setLoading(true);
    }
    jokesgenerator();
  }, [change])


  return (

    <div>
      <NavBar />
      <div className='container'>
        <h1 className='heading'>Happy Laughing</h1>
        {
          loading ? (<div><h2 className='alert alert-primary'>{setup}</h2>
            <h2 className='alert alert-info'>{jokes}</h2></div>)
            : (<div className='alert alert-danger'>...Loading</div>)
        }
        <button className='btn btn-warning' onClick={() => setChange(!change)}>One More?</button>
      </div>
      <Modal />
    </div>
  );
}

export default App;
