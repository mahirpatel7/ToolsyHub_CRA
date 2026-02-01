// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./analytics";
import { useEffect } from "react";


function App() {

  // const connectionString = "http://192.168.29.6:5000";
  const connectionString = process.env.REACT_APP_BACKEND_URL;
  console.log("ENV:", process.env.REACT_APP_BACKEND_URL);

  const location = useLocation(); // 👈 ADD

  useEffect(() => {
    // Tracks full path including /ToolsyHub/...
    trackPageView(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar />

      <Routes basename="/ToolsyHub">
        {/* ROOT REDIRECT */}
        <Route path="/" element={<Navigate to="/ToolsyHub" replace />} />

        {/* MAIN APP */}
        <Route path="/ToolsyHub/*" element={<Main connectionString={connectionString} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
