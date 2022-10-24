import { useEffect, useState } from 'react';
import { gql } from '@apollo/client'
import {useQuery} from "@apollo/client";

const Name1 = () => {

  const GET_TEST = gql`
    query { banner (id: "1") { data {
      id
      attributes {
        header
        name } } }
    }`

const {data, error, loading} = useQuery(GET_TEST)

  return (

    <div className="main">
    <ul>


    <li>
    {data?.banner.data.attributes.header}
        </li>
    </ul>
    </div>
  )}
export default Name1;
