import TextAreaHead from '../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL from '../components/basicPage/textArea/textAreaHeadL'
import TextAreaText from '../components/basicPage/textArea/textAreaText'
import TextAreaList from '../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../components/basicPage/textArea/textAreaSpecial'
import SideAreaMenu from '../components/basicPage/sideArea/sideAreaMenu'
import PageHeader from '../components/basicPage/pageHeader/pageHeader';
import Button from '../components/UI/button';

function Tariff({head, text}) {
    return (
      <div>
        <PageHeader head='тарифы' children='Доп заголовок'/>
        <div className='basic-page flex'>
        <div className='text-area'>
          <TextAreaHead>
          {head}
          </TextAreaHead>
          <TextAreaText>
          Тариф «Татнефть» позволяет заправляться на любимом 
          бренде. Более 830 заправок на трассах и в городах России.
           Качество топлива на АЗС «Татнефть» гарантируется вводом 
           в эксплуатацию завода «Танэко».
          <br/>
          Оптовая цена на топливо,  это более 100 АЗС, куда 
          «Инфорком» поставляет свое топливо. АЗС с оптовой 
          ценой добавлены в каждый тариф.
          <br/>
          «Инфорком» бесплатно предоставляет полный 
          функционал по онлайн-управлению топливными картами,
           отсутствуют комиссии, сборы, платы за транзакции,
            плата за разблокировку.
          </TextAreaText>
          <TextAreaSpecial>Особый текст</TextAreaSpecial>
          <TextAreaHeadL>Маленький заголовок</TextAreaHeadL>
          <TextAreaList children='Пункт списка' />
        </div>
        <div className='s-a-width'>
          <SideAreaMenu head='Меню' item={[["","О компании"],
                                         [`/map-stations/map-station`,"Сеть АЗС"],
                                         ["","Цены на топливо"],
                                         ["","Топливные карты"]]}/>
        </div>
        </div>
      </div>
    )}
    
  export default Tariff;