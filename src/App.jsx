import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';  // Correctly named
import SignUp from './pages/SignUp';  // Correctly named
import Profile from './pages/Profile'; // Assuming you have this component
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> {/* Corrected */}
        <Route path="/About" element={<About />} /> {/* Corrected */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
