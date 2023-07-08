import './App.css';
import { Route, Routes } from "react-router-dom";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route
              path="/sign-in"
              element={<SignInSignUp/>}
          />
        </Routes>
      </div>
  );
}

export default App;
