import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>홈페이지</h1>} />
      <Route path="/posts" element={<h1>postsList</h1>} />
      <Route path="/posts/:id" element={<h1>Detail페이지</h1>} />
      <Route path="/posts/new" element={<h1>New페이지</h1>} />
      <Route path="/posts/edit/:id" element={<h1>12331312Edit</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/profile/edit" element={<h1>Profile Edit</h1>} />
      <Route path="/notification" element={<h1>notifiaction1</h1>} />
      <Route path="/search" element={<h1>search</h1>} />
      <Route path="/users/login" element={<h1>login</h1>} />
      <Route path="/users/signup" element={<h1>SignUp</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
