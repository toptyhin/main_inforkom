import { useNavigate } from "react-router-dom";
import { Posts_gql } from "../../gql";
import { API_URL } from "../../appconfig";
import { v4 as uuidv4 } from "uuid";
import SideAreaMenu    from '../../components/basicPage/sideArea/sideAreaMenu'
import PageHeader      from '../../components/basicPage/pageHeader/pageHeader';

const NewsListPage = () => {
  const navigate = useNavigate();
  const content = Posts_gql();

  const Record = ({item}) => (
    <div 
      style={{ cursor:'pointer'}}
      onClick={()=>navigate('/about/news/'+item.attributes.seourl)}
      >
      <p className='text-area-p'>{item.attributes.publishedAt.slice(0, 10)}</p>
      <div>{item.attributes.Title}</div>
      <img src={API_URL+item.attributes.MainImage.data.attributes.url} />
    </div>
  );

  const NewsList = ({rec}) => rec.posts.data.map( (el, index) => <Record key={uuidv4()} item={el}/>)
  
  if (!content.loading && content.data) {
    return (
      <>
        <PageHeader head='Новости компании'/>
        <div className='basic-page flex'>
          <div className='text-area'>
            <NewsList rec={content.data}/>
          </div>
          <div className='s-a-width'>
            <SideAreaMenu head='Меню' item={[["","О компании"],
                                   [`/map-stations/map-station`,"Сеть АЗС"],
                                   ["","Цены на топливо"],
                                   ["","Топливные карты"]]}/>
          </div>
        </div>
      </>
    )
  }
  else { 
    return <></> 
  }
}

export default NewsListPage;