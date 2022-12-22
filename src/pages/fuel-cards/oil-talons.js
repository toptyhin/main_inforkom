import TextAreaHead    from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL   from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText    from '../../components/basicPage/textArea/textAreaText'
import TextAreaList    from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'

import SideAreaMenu       from '../../components/basicPage/sideArea/sideAreaMenu'
import SideArea           from '../../components/basicPage/sideArea/sideArea'
import SideAreaInfo       from '../../components/basicPage/sideArea/sideAreaInfo'

import PageHeader from '../../components/basicPage/pageHeader/pageHeader'
import Button     from '../../components/UI/button'
import LittleBox  from '../../components/home/boxes/children/littleBox'
import Tatneft    from '../../images/box-tatneft.png'

const OilTalons = () => {
  return (
    <div>
      <PageHeader head='Топливные талоны'/>
      <div className='basic-page flex wrap'>
        <div className='text-area'>
          <TextAreaHead children='Электронные топливные талоны' />
          <TextAreaSpecial children='Электронный топливный талон – это одноразовая карта
            с магнитной полосой, которая принимается на всех терминалах компании «Инфорком».
            На каждом талоне указан вид топлива, а также фиксированный объем топлива.' />
          <TextAreaHeadL children='Номиналы талонов:' />
          <TextAreaList children='ДТ: 10, 20, 50 и 100 литров;' />
          <TextAreaList children='АИ-92: 10, 15, 20 литров;' />
          <TextAreaList children='АИ-95: 10, 15, 20 литров;' />
          <TextAreaList children='АИ-98: 10, 15, 20 литров.' />
          <TextAreaText>
            Каждый топливный талон имеет уникальный номер, который считывается при 
            подключении к терминалу и передает все данные в базу данных «Инфорком», что 
            позволяет производить автоматический электронный учет в онлайн-режиме.
            <br/>
            Благодаря онлайн-режиму и функциональным возможностям личного кабинета 
            осуществляется полный контроль за движением электронных талонов, имеется 
            возможность мгновенной блокировки в случае их утери.
            <br/>
            Таким образом, к электронным талонам применим практически весь функционал 
            топливных карт.
            <br/>
            Набор базовых функций стандартен и подходит для решения типовых задач, но 
            может бесконечно варьироваться для решения сложных и нестандартных ситуаций.
          </TextAreaText>
        </div>
        <div  className='s-a-width'>
          <SideArea head='Универсальное решение для всех'>
          <div className='flex flex-center'>
              <Button children='Коммерческое предложение'/>
            </div>
          </SideArea>

          <SideAreaMenu head='О компании' item={[['/about/news','Новости компании'],
            ['/about/social','Социальная ответственность'],
            ['/about/projects','Наши проекты']]}/>
        </div>
      </div>
    </div>
    );
  }

  export default OilTalons;
