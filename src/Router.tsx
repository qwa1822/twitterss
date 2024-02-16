import HomePage from "pages/home";
import PostListPage from "pages/posts";
import PostDetail from "pages/posts/postDetail";
import PostNew from "pages/posts/postNew";
import Profile from "pages/profile/Profile";
import ProfileEdit from "pages/profile/ProfileEdit";
import Search from "pages/search/Search";
import UserSign from "pages/users/UserSign";
import UsersLogin from "pages/users/UsersLogin";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit/:id" element={<h1>12331312Edit</h1>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/notification" element={<h1>notifiaction1</h1>} />
      <Route path="/search" element={<Search />} />
      <Route path="/users/login" element={<UsersLogin />} />
      <Route path="/users/signup" element={<UserSign />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
