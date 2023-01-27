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
        <ul className="ul p-0 m-0 active-link">
          <li>
            <Link className="li-app" to="/"> BOOKS</Link>
          </li>
          <li>
            <Link className="li-app" to="/categories">CATEGORIES</Link>
          </li>

        </ul>
        <button className="icon-button" type="button"><span className="material-icons primary-color">person</span></button>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
