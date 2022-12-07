import { gql } from '@apollo/client'
import {useQuery} from '@apollo/client';



function Test({head, text}) {

  const GET_TEST = gql`
  query { banners { data {
    id
    attributes {
      header
      name } } }
  }`

  const {data, error, loading} = useQuery(GET_TEST)
  if(error) return `Oops there has been an error: ${error}`

    return (
      <div className='main'>
        {head}{text}
      </div>
    )}
    
  export default Test;
  