import TextAreaHead    from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL   from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText    from '../../components/basicPage/textArea/textAreaText'
import TextAreaList    from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'

import SideAreaMenu       from '../../components/basicPage/sideArea/sideAreaMenu'
import SideArea           from '../../components/basicPage/sideArea/sideArea'
import SideAreaInfo       from '../../components/basicPage/sideArea/sideAreaInfo'
import SideAreaWithButton from '../../components/basicPage/sideArea/sideAreaWithButton'

import PageHeader from '../../components/basicPage/pageHeader/pageHeader'
import Button     from '../../components/UI/button'
import LittleBox  from '../../components/home/boxes/children/littleBox'
import Tatneft    from '../../images/box-tatneft.png'

const Goszakaz = () => {
  return (
    <div>
      <PageHeader head='Госзаказ'/>
      <div className='basic-page flex'>
        <div className='text-area'>
        <TextAreaHead children='Госзаказы' />
          <TextAreaText children='Топливная компания «ИНФОРКОМ» – с 1991 года
            независимый лидер по заправке топливом с использованием топливных
            карт и топливных талонов на всей территории России, СНГ и в Европе.'/>
          <TextAreaText children='«ИНФОРКОМ» один из крупнейших исполнителей
            государственных контрактов по обеспечению ГСМ государственных и
            муниципальных нужд предприятий.' />

          <TextAreaText children='Преимущества «Инфорком» в этом сегменте:' />
          <TextAreaList children='максимальная гибкость и учет потребностей заказчика;' />
          <TextAreaList children='абсолютная исполнительность и обязательность;' />
          <TextAreaList children='открытие дополнительных АЗС в любой точке под
            нужды заказчика;' />
          <TextAreaList children='география возможностей от Плесецка и Знаменска
            до Байконура и Циолковского.' />

          <TextAreaText children='Компания ежемесячно заключает десятки
            государственных, муниципальных и гражданско-правовых контрактов
            Российской Федерации.' />
          <TextAreaText children='«ИНФОРКОМ» участвует в любых видах конкурентных
            процедур: аукцион, редукцион, запрос котировок, запрос предложений и т.д.' />
          <TextAreaText children='Являемся поставщиком по 44-ФЗ и 223-ФЗ,
            представлены на всех основных торговых площадках: sberbank-ast.ru,
            fabrikant.ru, roseltorg.ru, rts-tender.ru и др.' />
          <TextAreaText children='Мы полностью российская компания.' />
          <TextAreaText children='Нашими партнерами являются ведущие топливные
            компании (более 10 тысяч АЗС): «Роснефть», «Нефтьмагистраль»,
            «Газпромнефть», «Сургутнефтегаз», «ЛУКОЙЛ», «ТАТНЕФТЬ», «STATOIL»,
            «ЕКА», «ГАЗПРОМ», «ОЛВИ», «Калина-Ойл», «Красноярснефтепродукт»,
            «БАШНЕФТЬ», «Крайснефть», «ИРБИС» и многие другие.' />
          <TextAreaText children='Отпуск топлива и его учет происходят с
            использованием топливных карт и топливных талонов, работающих на
            базе уникальной онлайн-технологии. Благодаря ей клиент имеет
            возможность контролировать и управлять всем процессом заправки
            через свой интернет-кабинет.' />
          <TextAreaText children='Готовы участвовать в многолотовых закупках и
            исполнять крупные комбинированные госконтракты, предметом которых
            является как поставка моторного топлива, так и доставка топлива
            собственным парком бензовозов, отгрузка масел, смазок, газа, а также
            услуга мойки автомобилей.' />
          <TextAreaText children='Услугами компании «ИНФОРКОМ» пользуются
            подразделения ОАО «РЖД», АО "АтомЭнергоСбыт", Прокуратуры, ПАО
            "Ростелеком", ПАО «Компания «Сухой», ПАО Банк ВТБ, АО "ГКНПЦ им.
            М.В. Хруничева", АО «Аварийно-технический центр Росатома», ПАО
            «Тольяттиазот», АО АКБ «НОВИКОМБАНК», АО "Концерн Росэнергоатом",
            ФГПУ "Главное Военно-Строительное Управление №4", ПАО "Туполев",
            АО «Россельхозбанк», ФГУП "Главный центр специальной связи", ПАО
            "ОДК-Сатурн " и многие другие организации.' />
          <TextAreaText children='Коллектив компании «ИНФОРКОМ» – команда
            профессионалов. Каждый клиент сопровождается персональным менеджером,
            что позволяет в кратчайшие сроки прийти к наилучшему результату.' />

        </div>
        <div>
          <SideArea head='Контактный телефон:' text='+7 (495) 781-4444 доб. 4260: Сорокин Владимир Владимирович'/>

          <SideAreaMenu head='О компании' item={[[`/about/news`,'Новости компании'],
            [`/about/social`,'Социальная ответственность'],
            [`/about/projects`,'Наши проекты']]}/>
        </div>
      </div>
    </div>
    );
  }

  export default Goszakaz;
