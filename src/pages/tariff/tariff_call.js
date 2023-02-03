import Tariff from "./Tariff";
import { useLocation } from 'react-router-dom'
import { Tariff_gql } from './../../gql'
import { v4 as uuidv4 } from "uuid";

export function Tariff_call ({path, content}) {
  let list, cont, side_cont;
  if (!content.loading && content.data) {
    list = content.data.tarifs.data.map (function(element) {
      console.log(element.attributes);
      if (element.attributes.url === path) { 
        return (
          <Tariff key={uuidv4()} cont={element.attributes}/>
        );
      }
    })
    return list;
  }
  else {
    return <></>
  }
}