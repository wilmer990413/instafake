import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PostDetail from "../pages/postDetail/PostDetail";
import Feed from "../pages/feed/Feed";
import { DataProvider } from "../data/context";

function App() {
  return (
    <DataProvider>
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
          <Route path="Feed" element={<Feed />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
