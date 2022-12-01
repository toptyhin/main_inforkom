import TextAreaHead    from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL   from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText    from '../../components/basicPage/textArea/textAreaText'
import TextAreaList    from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'

import SideAreaMenu       from '../../components/basicPage/sideArea/sideAreaMenu'
import SideAreaImg        from '../../components/basicPage/sideArea/sideAreaImg'
import SideArea           from '../../components/basicPage/sideArea/sideArea'
import SideAreaInfo       from '../../components/basicPage/sideArea/sideAreaInfo'
import SideAreaWithButton from '../../components/basicPage/sideArea/sideAreaWithButton'

import PageHeader from '../../components/basicPage/pageHeader/pageHeader'
import Button     from '../../components/UI/button'
import LittleBox  from '../../components/home/boxes/children/littleBox'
import Tatneft    from '../../images/box-tatneft.png'

import gasprom    from './../../images/logos/m-logo-gasprom.png'
import nm         from './../../images/logos/m-logo-nm.png'
import lukoil     from './../../images/logos/m-logo-lukoil.png'
import rosneft    from './../../images/logos/m-logo-rosneft.png'
import bashneft   from './../../images/logos/m-logo-bashneft.png'
import surgut     from './../../images/logos/m-logo-surgut.png'
import tatneft    from './../../images/logos/m-logo-tatneft.png'
import ptk        from './../../images/logos/m-logo-ptk.png'
import tes        from './../../images/logos/m-logo-tes.png'

const ComProposal = () => {
  return (
    <div>
      <PageHeader head='Коммерческое предложение'/>
      <div className='basic-page flex wrap'>
        <div className='text-area'>
        <TextAreaHead children='Коммерческое предложение' />
          <TextAreaSpecial children='Компания «ИНФОРКОМ» предлагает заправку
            коммерческого автотранспорта по единой пластиковой смарт-карте на
            10 000 АЗС по России, странам СНГ и Европы.' />
          <TextAreaSpecial children='На все виды топлива предоставляются скидки,
            отсрочка по оплате, гарантии качества, бесплатное круглосуточное
            сервисное сопровождение и онлайн-отчетность.' />

          <TextAreaHeadL children='Преимущества' />
          <TextAreaList children='нет сервисных сборов, платы за транзакции и
            инфо-обслуживание;' />
          <TextAreaList children='нет неснижаемых остатков;' />
          <TextAreaList children='прямые договоры с поставщиками;' />
          <TextAreaList children='возможно предоставление отсрочки платежа.' />

          <TextAreaHeadL children='Контроль в онлайн-режиме' />
          <TextAreaList children='интернет-кабинет и мобильное приложение;' />
          <TextAreaList children='изменение лимитов и ПИН-кодов, ввод любых
            разрешений по картам;' />
          <TextAreaList children='отчет с ценой и литрами о каждой транзакции
            готов мгновенно после заправки;' />
          <TextAreaList children='персональный менеджер, служба 24/7,
            маршрутизатор с ценами и многое другое.' />

          <TextAreaHeadL children='Дополнительные сервисы' />
          <TextAreaList children='Налив топлива: оптовые поставки топлива
            собственными бензовозами емкостью от 5 до 40 куб. м или ж/д
            транспортом (цистерны емкостью от 45 до 70 куб. м).' />
          <TextAreaList children='Грузовой автосервис, запчасти, разборка.
            Заключение долгосрочных договоров, доставка.' />
          <TextAreaList children='Отдел по работе с клиентами всегда готов
            направить к вам в офис высокопрофессионального сотрудника для
            предоставления исчерпывающей информации по заключению договора на
            выбранный вами вид услуг.' />

          <TextAreaHead children='О компании' />
          <TextAreaText theme='first' children='«Инфорком» за 30 лет работы
            объединил лучшие предложения сетей АЗС и поставщиков топлива России
            и Европы. 10 000 АЗС (460 брендов) по единой карте «ИНФОРКОМ» на всей
            территории РФ.' />
          <TextAreaText theme='last' children='Собственные технологии процессинга
            топливных карт позволяют работать без сервисного сбора. Большие объемы
            операций с топливом позволяют иметь высокие скидки от поставщиков. В
            большинстве случаев совокупные условия заправки по картам «ИНФОРКОМ»
            выгоднее, чем предложения от монобрендовых карт от отдельных сетей АЗС.'/>

          <TextAreaHead children='Наши партнеры' />
          <TextAreaText theme='first' children='Ведущие топливные компании:
            «Газпром-нефть», Роснефть», «Сургутнефтегаз», STATOIL, «ТАТНЕФТЬ»,
            «БАШНЕФТЬ».' />
          <TextAreaText theme='last' children='Качество топлива гарантируется
            нашими многолетними партнерскими отношениями с поставщиками. Компания
            «ИНФОРКОМ» вовлекает в свою сеть только те АЗС, где на местах
            обеспечивается необходимый уровень бесперебойности и качества топлива.
            На часть АЗС сети «ИНФОРКОМ» мы поставляем собственное топливо качества
            ГОСТ с МНПЗ.' />
        </div>
        <div  className='s-a-width'>
          <SideAreaInfo item={[['10 000 АЗС','по всей Европе'],
             ['7 стран','широкая география работы'],
             [['24/7'],'техническая помощь на дорогах']]}/>

          <SideAreaWithButton head='Коммерческое предложение'
             button='Скачать' width='200px'/>

          <SideAreaImg head='Наши партнеры' item={[gasprom, tatneft, ptk, lukoil, rosneft,
            bashneft, surgut, tes, nm,]} padding='0 10px'/>

          <SideAreaMenu head='О компании' item={[[`/about/news`,'Новости компании'],
            [`/about/social`,'Социальная ответственность'],
            [`/about/projects`,'Наши проекты']]}/>
        </div>
      </div>
    </div>
    );
  }

  export default ComProposal;
