import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import Feed from "../pages/Feed";
import Profile from "../pages/profile/Profile";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PostDetail from "../pages/postDetail/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />}>
          <Route path="/" element={<Feed />}></Route>
          <Route path="post/:id" element={<PostDetail />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="PostDetail" element={<PostDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
