import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "../components/Menu"
import Feed from "../pages/Feed"
import Profile from "../pages/profile/Profile"
import PostDetail from "../pages/PostDetail"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu/>}>
          <Route path="/" element={<Feed />}></Route>
          <Route path="post/:id" element={<PostDetail />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
// -- 0. configurar la arquitectura del proyecto
// -- 1. configurar chakra
// -- 2. configurar rutas
// -- 3. crear componentes
// -- 4. implementar json server
// 5. implementamos useReducer
