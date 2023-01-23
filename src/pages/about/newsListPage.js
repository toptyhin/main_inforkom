import { useNavigate } from "react-router-dom";
import { Posts_gql } from "../../gql";
import { API_URL } from "../../appconfig";

const NewsListPage = () => {
  const navigate = useNavigate();
  
  const content = Posts_gql();

  const Record = ({item}) => (
    <div 
      style={{ display:'flex',width:'80%', justifyContent:'center',alignItems:'center',cursor:'pointer'}}
      onClick={()=>navigate('/about/news/'+item.attributes.seourl)}
      >
      <img style={{maxHeight:150}} src={API_URL+item.attributes.MainImage.data.attributes.url} />
      <div>{item.attributes.Title}</div>
      <div>{item.attributes.SubTitle}</div>
      <div>{item.attributes.dateCreated}</div>
    </div>
  );

  const NewsList = ({rec}) => {
    rec.posts.data.map(e => console.log(e))
    return rec.posts.data.map( (el, index) => <Record key={'k'+index} item={el}/>)
  }

  return !content.loading && content.data ? <NewsList rec={content.data}/> : <></>
}
    
export default NewsListPage;