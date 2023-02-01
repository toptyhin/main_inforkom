import TextAreaHead    from '../components/basicPage/textArea/textAreaHead'
import { API_URL } from "../appconfig";

import SideAreaMenu       from '../components/basicPage/sideArea/sideAreaMenu'
import SideAreaImg        from '../components/basicPage/sideArea/sideAreaImg'
import SideArea           from '../components/basicPage/sideArea/sideArea'
import SideAreaInfo       from '../components/basicPage/sideArea/sideAreaInfo'
import SideAreaButton     from '../components/basicPage/sideArea/sideAreaButton'

import PageHeader from '../components/basicPage/pageHeader/pageHeader'

import Regions     from './../images/box-regions.png'

const Pages = ({content, cont, side_cont}) => {
  console.log(cont);
  
  const TextAreaList = ({children}) => (
    <div className='list-p'>
      <p className='list-point'>•</p>{children}
    </div>
  )
  const TextAreaText = ({children}) => (
    <p className='text-area-p' dangerouslySetInnerHTML={{__html: children }}></p>
  )
  const TextAreaHeadL = ({children}) => (
    <p className='header-p'>{children}</p>
  )
  const TextAreaSpecial = ({children}) => {
    return (
      <div className='flex'>
        <div className='v-line-page'></div>
        <p className='special-p'dangerouslySetInnerHTML={{__html: children }}></p>
      </div>
    );
  }
  
  let list, item;
  
  const Layout = ({rec}) => {   
    console.log(rec) 
    list = rec.map (function(el) { 
      if (el.__typename === 'ComponentPagesText') {
        return <TextAreaText >{el.text}</TextAreaText>
      }
      else if (el.__typename === 'ComponentPagesSpecialText') {
        return <TextAreaSpecial>{el.special_text}</TextAreaSpecial> 
      }
      else if (el.__typename === 'ComponentPagesColoredHeader') {
        return <TextAreaHeadL>{el.colored_header}</TextAreaHeadL> 
      }
  })
  return list;
}

  const Side = ({rec}) => {   
    console.log(rec) 
    list = rec.map (function(el) { 
      if (el.__typename === 'ComponentPagesSideText') {
        return <SideArea head={el.text} children={el.colored_text}></SideArea>; 
      }
      else if (el.__typename === 'ComponentPagesSideButton') {
        return <SideAreaButton head={el.text} children={el.colored_text} button={el.button}></SideAreaButton>; 
      }
      else if (el.__typename === 'ComponentPagesSideInfo') {
        item = el.side_info_item.map (({colored_text,text }) => 
          [`${colored_text}`, `${text}`]
        ) 
      return <SideAreaInfo item={item} />;     
      }
      else if (el.__typename === 'ComponentPagesSideImg') {
        item = el.img.data.map (({attributes }) => 
          [API_URL+`${attributes.url}`]
        ) 
      return <SideAreaImg item={item} pic_heigth={el.side_img_param.img_heigth} 
        width={el.side_img_param.width} margin={el.side_img_param.margin} padding={el.side_img_param.padding}/>;     
      }
    })
    return list;
  }
  
  return (
    <div>
      <PageHeader head='Топливные карты' imgs={Regions}/>
      <div className='basic-page flex wrap'>
        <div className='text-area'>
          <TextAreaHead children='Топливная карта «ИНФОРКОМ»' />
          <Layout rec={cont} />
        </div>
        <div className='s-a-width'>
          <Side rec={side_cont} />
        </div>
      </div>
    </div>
  );
}

export default Pages;