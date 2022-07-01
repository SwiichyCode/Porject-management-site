import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard/index";
import Create from "./pages/Create/index";
import Project from "./pages/Project/index";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";

import Navbar from "./components/Navbar/index";
import "./styles/App.css";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Container>
            <Navbar />
            <Routes>
              <Route path="/" element={user ? <Dashboard /> : <Login />}>
                <Route path="/create" element={<Create />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>
            </Routes>
          </Container>
        </BrowserRouter>
      )}
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;

/* PAGES

- dashboard (homepage)
- login
- signup
- create
- project

*/
