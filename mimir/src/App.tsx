import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home } from "Pages/Home"
import { Layout } from 'Layout';
import { CardOverview } from "Pages/CardOverview";
import { CardList } from "Pages/CardList";
import { EditCard } from "Pages/EditCard";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<CardOverview />}>
            <Route index element={<CardList />} />
            <Route path=":id" element={<EditCard />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
