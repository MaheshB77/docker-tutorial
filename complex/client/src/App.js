import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <Link to='/'>Home</Link>
                    <Link to='/otherpage'>OtherPage</Link>
                </header>
                <div>
                    <Routes>
                        <Route exact path='/' element={<Fib />} />
                        <Route path='/otherpage' element={<OtherPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
