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
import DashboardHomePage from "./dashboard/pages/DashboardHomePage";
import MediaPage from "./dashboard/pages/MediaPage";
import CreateExpensesPage from "./dashboard/pages/CreateExpensesPage";
import AllExpensesPage from "./dashboard/pages/AllExpensesPage";
import CreateEducationPage from "./dashboard/pages/CreateEducationPage";
import AllEducationPage from "./dashboard/pages/AllEducationPage";
import CreateAdvantagesPage from "./dashboard/pages/CreateAdvantagesPage";
import AllAdvantagesPage from "./dashboard/pages/AllAdvantagesPage";
import CreatePortfolioPage from "./dashboard/pages/CreatePortfolioPage";
import AllPortfolioPage from "./dashboard/pages/AllPortfolioPage";
import CreateServicePage from "./dashboard/pages/CreateServicePage";
import AllServicePage from "./dashboard/pages/AllServicePage";
import CreateTestimonialPage from "./dashboard/pages/CreateTestimonialPage";
import AllTestimonialPage from "./dashboard/pages/AllTestimonialPage";
import CreateBlogPage from "./dashboard/pages/CreateBlogPage";
import AllBlogPage from "./dashboard/pages/AllBlogPage";
import AllInboxPage from "./dashboard/pages/AllInboxPage";
import EditProfilePage from "./dashboard/pages/EditProfilePage";
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

        {/* Dashboard */}
        <Route exact path='/dashboard' element={<DashboardHomePage />} />
        <Route exact path='/media-center' element={<MediaPage />} />
        <Route exact path='/create-expenses' element={<CreateExpensesPage />} />
        <Route exact path='/all-expenses' element={<AllExpensesPage />} />
        <Route
          exact
          path='/create-education'
          element={<CreateEducationPage />}
        />
        <Route exact path='/all-education' element={<AllEducationPage />} />
        <Route
          exact
          path='/create-advantages'
          element={<CreateAdvantagesPage />}
        />
        <Route exact path='/all-advantages' element={<AllAdvantagesPage />} />
        <Route
          exact
          path='/create-portfolio'
          element={<CreatePortfolioPage />}
        />
        <Route exact path='/all-portfolio' element={<AllPortfolioPage />} />
        <Route exact path='/create-service' element={<CreateServicePage />} />
        <Route exact path='/all-service' element={<AllServicePage />} />
        <Route
          exact
          path='/create-testimonial'
          element={<CreateTestimonialPage />}
        />
        <Route exact path='/all-testimonial' element={<AllTestimonialPage />} />
        <Route exact path='/create-blog' element={<CreateBlogPage />} />
        <Route exact path='/all-blog' element={<AllBlogPage />} />
        <Route exact path='/all-inbox' element={<AllInboxPage />} />
        <Route exact path='/edit-profile' element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
