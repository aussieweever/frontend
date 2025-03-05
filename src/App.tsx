import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import About from "./components/About";
import { useMsal } from "@azure/msal-react";
import { Login } from "./components/Login";
function App() {
  const { accounts, inProgress } = useMsal();

  if (accounts.length === 0 && inProgress === "none") {
    return <Login />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
