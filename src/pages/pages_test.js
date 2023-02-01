import { FuelCard_gql, History_gql } from '../gql';
import Pages from './pages'

export function FuelCard () {
  const content = FuelCard_gql();
  if (!content.loading && content.data) {
  const cont = content.data.fuelCard.data.attributes.text;
  const side_cont = content.data.fuelCard.data.attributes.side;
  return (
    <Pages content={content} cont={cont} side_cont={side_cont} />
  )
}
else { 
    return <></> 
  }
}

export function History () {
    const content = History_gql();
    if (!content.loading && content.data) {
    const cont = content.data.history.data.attributes.text;
    const side_cont = content.data.history.data.attributes.side;
    return (
      <Pages content={content} cont={cont} side_cont={side_cont} />
    )
  }
  else { 
      return <></> 
    }
  }

