import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./pages/auth/AuthLayout";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import EnergyPlatform from "./pages/EnergyPlatform";
import ManagementTool from "./pages/ManagementTool";
import EducationPlatform from "./pages/EducationPlatform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="research-insight" element={<Solutions />} />
          <Route path="energy-platform" element={<EnergyPlatform />} />
          <Route path="management-tool" element={<ManagementTool />} />
          <Route path="education-advocacy" element={<EducationPlatform />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
