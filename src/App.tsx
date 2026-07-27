import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./pages/auth/AuthLayout";
import ForgetPassword from "./pages/auth/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
        </Route>

        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
