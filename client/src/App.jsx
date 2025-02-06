import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./layout/RouteScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
