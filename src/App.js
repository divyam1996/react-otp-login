import logo from './logo.svg';
import './App.css';
import PhoneOtpForm from './components/phone-login';
import StopWatch from './components/StopWatch/StopWatch.js';

function App() {
  return (
    <div className='App'>
        <h1>Login with phone</h1>
        <PhoneOtpForm/>
        <StopWatch />
    </div>
  );
}

export default App;
