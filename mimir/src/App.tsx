import { Routes, Route } from 'react-router-dom'
import { Home } from "components/pages/Home"
import { Layout } from 'components/layout/Layout';
import { CardOverview } from "components/pages/CardOverview";
import { CardList } from "components/pages/CardList";
import { EditCard } from "components/pages/EditCard";


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
