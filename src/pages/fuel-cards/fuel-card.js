import TextAreaHead    from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL   from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText    from '../../components/basicPage/textArea/textAreaText'
import TextAreaList    from '../../components/basicPage/textArea/textAreaList'

import SideAreaMenu       from '../../components/basicPage/sideArea/sideAreaMenu'
import SideAreaImg        from '../../components/basicPage/sideArea/sideAreaImg'
import SideArea           from '../../components/basicPage/sideArea/sideArea'
import SideAreaInfo       from '../../components/basicPage/sideArea/sideAreaInfo'

import PageHeader from '../../components/basicPage/pageHeader/pageHeader'
import Button     from '../../components/UI/button'
import LittleBox  from '../../components/home/boxes/children/littleBox'

import Regions     from './../../images/box-regions.png'
import Gasprom     from './../../images/box-gasprom.png'
import Tatneft     from './../../images/box-tatneft.png'
import IntNational from './../../images/box-international.png'
import Max         from './../../images/box-max.png'
import Universal   from './../../images/box-universal.png'
import Agregator   from './../../images/box-agregator.png'
import Moscow      from './../../images/box-moscow.png'

import { FuelCard_gql } from '../../gql';

const FuelCard = () => {
  const content = FuelCard_gql();
  
  const TextAreaList = ({children}) => (
    <div className='list-p'>
      <p className='list-point'>•</p>{children}
    </div>
  )
  const TextAreaText = ({children}) => (
    <p className='text-area-p'>{children}</p>
  )
  const TextAreaHeadL = ({children}) => (
    <p className='header-p'>{children}</p>
  )
  
  let array = [];
  let i, list, items;
  const Layout = ({rec}) => {
    i=-1;
    for (let key in rec) {
      i+=1;
      array[i] = [key, rec[key]];
    }
    console.log(array);
    list = array.map (function(el) {
      if (el[0].includes('text')) {
        return <TextAreaText>{el[1]}</TextAreaText>; 
      }
      else if (el[0].includes('header')) {
        return <TextAreaHeadL>{el[1]}</TextAreaHeadL>; 
      }
      else if (el[0].includes('list')) {
        items = el[1].map (function(elem) {
          for (let key in elem) {
            if (key === 'item') {
              return <TextAreaList>{elem[key]}</TextAreaList>;   
            }
          }
        })
        return items;
      }
    })
    return list;
  }
        
  if (!content.loading && content.data) {
    const cont = content.data.fuelCard.data.attributes;
    console.log(cont);
    return (
      <div>
        <PageHeader head='Топливные карты' imgs={Regions}/>
        <div className='basic-page flex wrap'>
          <div className='text-area'>
            <TextAreaHead children='Топливная карта «ИНФОРКОМ»' />
            <Layout rec={cont} />
          </div>
          <div className='s-a-width'>
            
            <SideArea head='Подберём тариф для вас и бесплатно доставим карты'>
              <div className='flex flex-center'>
                <Button children='Начать' width='200px'/>
              </div>
            </SideArea>

            <SideArea head='Заказать карту'>
              <h6 className='side-area-red'>+7 (495) 785-24-44</h6>
            </SideArea>
            <SideAreaInfo item={[['10 000 АЗС','по всей Европе'],
              ['7 стран','широкая география работы'],
              [['0₽'],'сервисный сбор']]}/>

            <SideAreaImg item={[Regions,Gasprom,Tatneft, IntNational, Max, Universal, Agregator, Moscow ]} pic_heigth='170px' width='80px' margin='0 0px 0 -39px'/>
            <SideAreaMenu head='А также:' item={[[`fuel-cards/oil-talons`,'Топливные талоны'],
              [`fuel-cards/dkv-fuel-cards`,'Топливная карта DKV'],
              [`fuel-cards/card-euroshell`,'Карта Euroshell'],
              [`fuel-cards/com-proposal`,'Коммерческое предложение'],
              [`fuel-cards/operation-online`,'Онлайн-управление картой'],
              [`fuel-cards/44-fz-goszakazy`,'Поставки топлива по 44-ФЗ']
            ]}/>
          </div>
        </div>
      </div>
    );
  }
  else { 
    return <></> 
  }
}

export default FuelCard;
