import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories';

function App() {
  return (
    <>
      <nav className="Nav-bar">
        <h1>
          Bookstore CMS
        </h1>
        <ul className="ul">
          <li>
            <Link className="li-app" to="/books"> Books</Link>
          </li>
          <li>
            <Link className="li-app" to="/categories">Categories</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/books" element={<Books title="Harry Potter" />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
