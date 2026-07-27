import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import SignIn from "./auth/Signin";
import SignUp from "./auth/SignUp";
import AuthLayout from "./auth/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
