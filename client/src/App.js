import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import LoginPage from "./Page/LoginPage";
import IndexPage from "./Page/IndexPage";
import RegistrationPage from "./Page/RegistrationPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./Page/CreatePost";
import PostPage from "./Page/PostPage";
import EditPost from "./Page/EditPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
