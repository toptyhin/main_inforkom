import TextAreaHead from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText from '../../components/basicPage/textArea/textAreaText'
import TextAreaList from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'
import SideAreaMenu from '../../components/basicPage/sideArea/sideAreaMenu'
import SideAreaImg from '../../components/basicPage/sideArea/sideAreaImg'
import SideAreaButton from '../../components/basicPage/sideArea/sideAreaButton'
import PageHeader from '../../components/basicPage/pageHeader/pageHeader';
import Button from '../../components/UI/button';

function Tariff({cont}) {
    return (
      <div>
        <PageHeader head='тарифы' children='Доп заголовок'/>
        <div className='basic-page flex'>
        <div className='text-area'>
          <TextAreaHead>{cont.head}</TextAreaHead>
          <TextAreaText>{cont.text}</TextAreaText>
          <TextAreaHeadL>{cont.header_map}</TextAreaHeadL>
          <TextAreaText>{cont.text_map_add}</TextAreaText>
          тут карта
          <TextAreaHeadL>{cont.sales_header}</TextAreaHeadL>
          тут таблица скидок
          <TextAreaHeadL>{cont.advantage}</TextAreaHeadL>
          <TextAreaText>{cont.text_adv}</TextAreaText>
          <TextAreaText>{cont.note}</TextAreaText>
        </div>
        <div className='s-a-width'>
          <SideAreaButton head={cont.side_button.text} children={cont.side_button.colored_text} button={cont.side_button.button} /> 
          
          <SideAreaButton head={cont.side_button_begin.text} children={cont.side_button_begin.colored_text} button={cont.side_button_begin.button} />
          <SideAreaMenu head='Меню' item={[["","О компании"],
                                         [`/map-stations/map-station`,"Сеть АЗС"],
                                         ["","Цены на топливо"],
                                         ["","Топливные карты"]]}/>
          
        </div>
        </div>
      </div>
    )}
    
  export default Tariff;