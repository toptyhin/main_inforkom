import TextAreaHead    from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL   from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText    from '../../components/basicPage/textArea/textAreaText'
import TextAreaList    from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'

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

const FuelCard = () => {
  return (
    <div>
      <PageHeader head='Топливные карты' imgs={Regions}/>
      <div className='basic-page flex wrap'>
        <div className='text-area'>
          <TextAreaHead children='Топливная карта «ИНФОРКОМ»' />
          <TextAreaSpecial children='Топливная карта – незаменимый инструмент в
            управлении коммерческим автотранспортом.' />

          <TextAreaText>
            Сейчас уже невозможно представить,
            что владельцы транспортных компаний могут не знать, где, когда и по
            какой цене заправляется их транспорт. Топливные карты являются частью
            профессионального и грамотного управления затратами на топливо.
            <br/>
            Компания «Инфорком» с 1991 года
            неизменно шла по пути разработки и совершенствования систем управления
            затратами на топливо и расширения сети АЗС, работающих с использованием
            технологии компании «Инфорком».
            <br/>
            Топливная карта – это результат многолетнего опыта команды профессионалов, 
            направленный на получение качественного продукта.
          </TextAreaText>

          <TextAreaSpecial children='Компания «Инфорком» – лидер рынка услуг по
            заправке топливом с использованием топливных карт.' />

          <TextAreaHeadL children='Преимущества:' />
          <TextAreaList children='цены со скидкой;' />
          <TextAreaList children='все виды качественного топлива на 10 000 АЗС;' />
          <TextAreaList children='АЗС-партнеры «ГАЗПРОМ», «Газпром нефть»,
            «Сургутнефтегаз», «ТАТНЕФТЬ», «БАШНЕФТЬ», STATOIL, «ЛУКОЙЛ» и многие
            другие;' />
          <TextAreaList children='отсроченный платеж или лимит, а также предоплата
            без неснижаемого остатка;' />
          <TextAreaList children='отсутствие дополнительных сервисных сборов;' />
          <TextAreaList children='интернет-кабинет для мгновенного управления
            картами и отчетами в онлайн-режиме;' />
          <TextAreaList children='мобильное приложение;' />
          <TextAreaList children='персональный менеджер;' />
          <TextAreaList children='служба поддержки клиентов 24/7;' />
          <TextAreaList children='проведем расчет экономики затрат на топливо.' />

          <TextAreaHeadL children='Топливная карта для юридических лиц это:' />
          <TextAreaList children='уменьшение налогооблагаемой базы по топливу (НДС 20%);' />
          <TextAreaList children='контроль затрат на топливо;' />
          <TextAreaList children='безналичная оплата топлива; ' />
          <TextAreaList children='отсутствие риска утраты наличных денег;' />
          <TextAreaList children='выбор и установка наиболее удобных АЗС на
            маршруте с целью снижения риска заправки некачественным топливом или
            преступных сговоров;' />
          <TextAreaList children='мгновенные формализованные онлайн-отчеты по
            всем транзакциям по картам за любые периоды, которые автоматически
            экспортируются в бухгалтерские программы;' />
          <TextAreaList children='наличие скидки на топливо.' />

          <TextAreaSpecial children='С картой ИНФОРКОМ можно понизить затраты
            корпоративного транспорта на топливо' />
          <TextAreaHeadL children='С топливными картами «ИНФОРКОМ» можно
            экономить до 58%:' />
          <TextAreaList children='до 2% идет экономия за счет использования
            качественного топлива: исключены случаи заправки теневого топлива с
            частных бензовозов;' />
          <TextAreaList children='до 10% за счет предварительного построения
          маршрута
            на основе лучших цен на нем;' />
          <TextAreaList children='до 6% на выборе тарифа в зависимости от ваших
            предпочтений по брендам и географии поездок;' />
          <TextAreaList children='до 2% на простоте и наглядности управления
            картами: блокировка/разблокировка карт, смена лимитов, смена мест
            приема карт, территориальные ограничения устанавливаются самим
            клиентом из своего Интернет-кабинета;' />
          <TextAreaList children='до 2% на отсутствии простоя связанного с
            отсутствием денег на счету. Предоставляется «овердрафт»;' />
          <TextAreaList children='до 5% на полном отсутствии сервисных, терминальных
            и иных  сборов, в том числе отсутствует плата за транзакцию;' />
          <TextAreaList children='до 5% на отсутствии перепробегов транспорта: к
            вашим услугам разветвленная сеть из 5 тысяч станций удобно
            расположенных на трассах и в городах;' />
          <TextAreaList children='3% на управлении в режиме онлайн: отражение
            транзакций и баланса по договору в Личном кабинете в режиме реального
            времени позволяет контролировать расходы и планировать платежи;' />
          <TextAreaList children='2% на информационной безопасности: технологии
            системы защищают от хищений денежных средств;' />
          <TextAreaList children='1% на информационном сопровождении: благодаря
            круглосуточной поддержке вы получите ответы на все вопросы в любое
            удобное для вас время;' />
          <TextAreaList children='20% на возмещении НДС: пакет бухгалтерских
            документов для уменьшения налоговых платежей. Отсутствие задержек
            в выставлении отчетных документов.' />
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

  export default FuelCard;
