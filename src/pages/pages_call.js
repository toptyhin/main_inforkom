import { useLocation } from 'react-router-dom'
import { Pages_gql } from '../gql'
import Pages from './pages'
import { v4 as uuidv4 } from "uuid";


export function Pages_call () {
  const location = useLocation();
  const path=location.pathname;
  let list, cont, side_cont;
  const content = Pages_gql();
  if (!content.loading && content.data) {
    list = content.data.pages.data.map (function(element) {
      if (element.attributes.url === path) { 
        cont = element.attributes.text;
        side_cont = element.attributes.side;
        return (
          <Pages key={uuidv4()} cont={cont} side_cont={side_cont} />
        );
      }
    })
    return list;
  }
  else { 
    return <></> 
  }
}


