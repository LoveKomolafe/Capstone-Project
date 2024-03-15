import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CallToAction from "./Components/CallToAction";
import AboutUs from "./Components/AboutUs";
import Roots from "./Routes/Roots";
import SignUp from "./Components/SignUp";
import Login from "./Components/LogIn";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import LogOut from "./Components/LogOut";
import Footer from "./Components/Footer";
import AdminSignup from "./Components/Admin/adminSignup";
import AdminLogin from "./Components/Admin/adminLogin";
import AdminDashboard from "./Components/Admin/adminDashboard";
import ShareHospital from "./Pages/shareHospital";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
  },

  {
    path: "/cta",
    element: <CallToAction />,
  },

  {
    path: "/signup",
    component: SignUp,
    element: <SignUp />,
  },

  {
    path: "/login",
    component: Login,
    element: <Login />,
  },

  {
    path: "/dashboard",
    component: Dashboard,
    element: <Dashboard />,
  },

  {
    path: "/dashboard/profile",
    component: Profile,
    element: <Profile />,
  },

  {
    path: "/dashboard/search",
    component: Search,
    element: <Search />,
  },

  {
    path: "/dashboard/share",
    component: ShareHospital,
    element: <ShareHospital />,
  },

  {
    path: "/logout",
    component: LogOut,
    element: <LogOut />,
  },

  {
    path: "/aboutus",
    element: <AboutUs />,
  },

  {
    path: "/admin/signup",
    element: <AdminSignup />
  },

  {
    path: "/admin/login",
    element: <AdminLogin />
  },

  {
    path: "/admin/dashboard",
    element: <AdminDashboard />
  },

  {
    component: Footer,
    element: <Footer />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
 
}

export default App;
