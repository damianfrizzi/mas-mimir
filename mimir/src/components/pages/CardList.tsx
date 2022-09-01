import { CardData } from 'data/CardData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

export const CardList = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `/api/cards/`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(
            `Backend HTTP error: Status ${response.status}`
          );
        }
        return response.json();
      }).then((actualData) => {
        setData(actualData);
        setError(null);
      }).catch((err) => {
        setError(err.message);
        setData([]);
      });
    }
    getData()
  }, [])

  return (
    <Main>Here could be our CardList
      {error && (
        <div>{error}</div>
      )}
      <OverviewList>
        {data && data.map((dt: cardItem) => (
          <OverviewListItem key={dt.id}>
            {dt.id} ({dt.front} / {dt.back})<Link to={"/cards/" + dt.id}>Edit</Link>
          </OverviewListItem>
        ))}
      </OverviewList>
    </Main>
  );
}

type cardItem = {
  id: string,
  front: string,
  back: string
}

const Main = styled.main`
  margin: 10px;
`

const OverviewList = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 0px;
`

const OverviewListItem = styled.li`
  margin: 3px;
  
`