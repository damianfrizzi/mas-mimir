import { Routes, Route } from 'react-router-dom'
import React from "react";
import logo from "./logo.svg";
import { Navbar } from "./Navbar"
import { Home } from "./Home"
import "./App.css";
import { Layout } from 'Layout';


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
