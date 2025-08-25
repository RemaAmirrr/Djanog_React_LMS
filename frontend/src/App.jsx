import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { CartContext, ProfileContext } from "./views/plugin/Context";
import apiInstance from "./utils/axios";
import CartId from "./views/plugin/CartId";

import MainWrapper from "./layouts/MainWrapper";
import PrivateRoute from "./layouts/PrivateRoute";

import Register from "../src/views/auth/Register";
import Login from "../src/views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreateNewPassword from "./views/auth/CreateNewPassword";

import Index from "./views/base/Index";
import CourseDetail from "./views/base/CourseDetail";
// import Cart from "./views/base/Cart";
// import Checkout from "./views/base/Checkout";
// import Success from "./views/base/Success";
// import Search from "./views/base/Search";

// import StudentDashboard from "./views/student/Dashboard";
// import StudentCourses from "./views/student/Courses";
// import StudentCourseDetail from "./views/student/CourseDetail";
// import Wishlist from "./views/student/Wishlist";
// import StudentProfile from "./views/student/Profile";
// import useAxios from "./utils/useAxios";
// import UserData from "./views/plugin/UserData";
// import StudentChangePassword from "./views/student/ChangePassword";
// import Dashboard from "./views/instructor/Dashboard";
// import Courses from "./views/instructor/Courses";
// import Review from "./views/instructor/Review";
// import Students from "./views/instructor/Students";
// import Earning from "./views/instructor/Earning";
// import Orders from "./views/instructor/Orders";
// import Coupon from "./views/instructor/Coupon";
// import TeacherNotification from "./views/instructor/TeacherNotification";
// import QA from "./views/instructor/QA";
// import ChangePassword from "./views/instructor/ChangePassword";
// import Profile from "./views/instructor/Profile";
// import CourseCreate from "./views/instructor/CourseCreate";
// import CourseEdit from "./views/instructor/CourseEdit";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [profile, setProfile] = useState([]);

  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>
      <ProfileContext.Provider value={[profile, setProfile]}>
        <BrowserRouter>
          <MainWrapper>
            <Routes>
              <Route path="/register/" element={<Register />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/logout/" element={<Logout />} />
              <Route path="/forgot_Password/" element={<ForgotPassword />} />
              <Route path="/change_Password/" element={<CreateNewPassword />} />

              {/* Core Componet */}
              <Route path="/" element={<Index />} />
              <Route path="/course-detail/" element={<CourseDetail />} />
              <Route path="/course-detail/:slug/" element={<CourseDetail />} />



            </Routes>
          </MainWrapper>
        </BrowserRouter>
      </ProfileContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

