import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AboutPage from "./About";
import ContactsPage from "./contacts";
import Team from "./Team";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  О себе
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">
                  Примеры работ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                Контактная информация
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
        <Route path="/about" element={<AboutPage />}>
        </Route>
        <Route path="/contacts"  element={<ContactsPage />}>
        </Route>
        <Route path="/team"  element={<Team />}>
        </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
