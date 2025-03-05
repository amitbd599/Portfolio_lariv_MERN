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
import CreateExperiencePage from "./dashboard/pages/CreateExperiencePage";
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
import Login from "./pages/Login";
import EditExperiencePage from "./dashboard/pages/EditExperiencePage";
import EditEducationPage from "./dashboard/pages/EditEducationPage";
import EditAdvantagesPage from "./dashboard/pages/EditAdvantagesPage";
import EditPortfolioPage from "./dashboard/pages/EditPortfolioPage";
import EditServicePage from "./dashboard/pages/EditServicePage";
import EditTestimonialPage from "./dashboard/pages/EditTestimonialPage";
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
        <Route exact path='/blog/:pageNo' element={<Blog />} />
        <Route exact path='/blog-details/:blogId' element={<BlogDetails />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='*' element={<Error />} />

        {/* Dashboard */}
        <Route exact path='/dashboard' element={<DashboardHomePage />} />
        {/* media */}
        <Route exact path='/media-center/:pageNo' element={<MediaPage />} />

        {/* experience */}
        <Route
          exact
          path='/create-experience'
          element={<CreateExperiencePage />}
        />
        <Route exact path='/all-experience' element={<AllExpensesPage />} />
        <Route
          exact
          path='/edit-experience/:id'
          element={<EditExperiencePage />}
        />

        {/* education */}
        <Route
          exact
          path='/create-education'
          element={<CreateEducationPage />}
        />
        <Route
          exact
          path='/edit-education/:id'
          element={<EditEducationPage />}
        />
        <Route exact path='/all-education' element={<AllEducationPage />} />

        {/* advantages */}
        <Route
          exact
          path='/create-advantages'
          element={<CreateAdvantagesPage />}
        />
        <Route exact path='/all-advantages' element={<AllAdvantagesPage />} />
        <Route
          exact
          path='/edit-advantages/:id'
          element={<EditAdvantagesPage />}
        />

        {/* portfolio */}
        <Route
          exact
          path='/create-portfolio'
          element={<CreatePortfolioPage />}
        />
        <Route exact path='/all-portfolio' element={<AllPortfolioPage />} />
        <Route
          exact
          path='/edit-portfolio/:id'
          element={<EditPortfolioPage />}
        />

        {/* service */}
        <Route exact path='/create-service' element={<CreateServicePage />} />
        <Route exact path='/all-service' element={<AllServicePage />} />
        <Route exact path='/edit-service/:id' element={<EditServicePage />} />

        {/* testimonial */}
        <Route
          exact
          path='/create-testimonial'
          element={<CreateTestimonialPage />}
        />
        <Route exact path='/all-testimonial' element={<AllTestimonialPage />} />
        <Route
          exact
          path='/edit-testimonial/:id'
          element={<EditTestimonialPage />}
        />

        {/* blog */}
        <Route exact path='/create-blog' element={<CreateBlogPage />} />
        <Route exact path='/all-blog/:pageNo' element={<AllBlogPage />} />

        {/* inbox */}
        <Route exact path='/all-inbox' element={<AllInboxPage />} />

        {/* profile */}
        <Route exact path='/edit-profile' element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
