import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import ProtectedRoutes from './components/ProjectedRoutes';
import { AuthContextProvider } from './context/AuthContext';
import Home from "./components/Home";
function App() {
  return (
    <div >
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route
              path="/enrollments"
              element={
                <ProtectedRoutes>
                  <UserEnrollment />
                </ProtectedRoutes>
              }
            /> */}
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
