import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/books"> Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        
      </ul>
    </nav>
    <Routes>
      <Route path="/books" element= {<Books />} />
      <Route path="/categories" element= {<Categories />} />
    </Routes>
    </>
  );
}

export default App;
