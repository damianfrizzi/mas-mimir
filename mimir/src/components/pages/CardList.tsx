import { CardData } from 'data/CardData';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

export const CardList = () => {
  return (
    <Main>Here could be our CardList
      <OverviewList>
        {CardData.map(data => (
          <OverviewListItem>{data.id} ({data.front} / {data.back})<Link to={"/cards/" + data.id}>Edit</Link></OverviewListItem>
        ))}
      </OverviewList>
    </Main>
  );
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