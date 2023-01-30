import TextAreaHead    from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL   from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText    from '../../components/basicPage/textArea/textAreaText'
import TextAreaList    from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'
import SideAreaMenu    from '../../components/basicPage/sideArea/sideAreaMenu'
import PageHeader      from '../../components/basicPage/pageHeader/pageHeader';

import { Post_gql } from "../../gql";
import { API_URL } from "../../appconfig";

function NewsItemPage({path}) {

  const content = Post_gql(path.replace('/',''));

  if (!content.loading && content.data.posts) {
    const data = content.data.posts.data[0].attributes;
    return (
    <>
      <PageHeader head='Новости компании'/>
      <div className='basic-page flex'>
        <div className='text-area'>
          <TextAreaHead>{data.Title}</TextAreaHead>
          <TextAreaHeadL>{data.SubTitle}</TextAreaHeadL>
          <img src={API_URL+data.MainImage.data.attributes.url} />
          <p className='text-area-p' dangerouslySetInnerHTML={{__html: data.Content }} />
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
  } else {
    return <></>
  }



}

export default NewsItemPage;