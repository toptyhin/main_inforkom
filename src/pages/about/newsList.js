import { useNavigate } from "react-router-dom";
import { News_gql }    from './../../gql';

function NewsList() {
  const navigate = useNavigate();
  const content = News_gql();
  let newslist;
  if (content.news != undefined) {
    newslist = content.news.map(function(list) {
      return (
        <div onClick={() => navigate(list[0])}>
          {list[1]}
          {list[2]}
        </div>
      )
    })
  }
  return (
    <div className='main'>
      {newslist}
    </div>
  )
}
    
export default NewsList;