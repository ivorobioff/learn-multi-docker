import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">Home</Link> <Link to="/other-page">Other Page</Link>
        </header>
        <hr/>
        <div>
            <Route exact path="/" component={Fib} />
            <Route path="/other-page" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
