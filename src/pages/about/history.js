import TextAreaHead from '../../components/basicPage/textArea/textAreaHead'
import TextAreaHeadL from '../../components/basicPage/textArea/textAreaHeadL'
import TextAreaText from '../../components/basicPage/textArea/textAreaText'
import TextAreaList from '../../components/basicPage/textArea/textAreaList'
import TextAreaSpecial from '../../components/basicPage/textArea/textAreaSpecial'
import SideAreaMenu from '../../components/basicPage/sideArea/sideAreaMenu'
import PageHeader from '../../components/basicPage/pageHeader/pageHeader';
import Button from '../../components/UI/button';

const History = () => {
    return (
      <div>
        <PageHeader head='О компании'/>
        <div className='basic-page flex wrap'>
        <div className='text-area'>
          <TextAreaHead children='История компании «Инфорком»' />

          <TextAreaText children='C 1991 года заправляем топливом коммерческий автопарк
            с использованием топливных карт и топливных талонов на территории России, СНГ и Европы.' />
          <TextAreaText children='Услугами компании «Инфорком» пользуются компании, работающие
            в сфере коммерческого автотранспорта, – это Российские, международные и средние автоперевозчики,
            а также ИП и такси. Большое внимание наша компания уделяет работе с бюджетными организациями:
            спецсвязь, коммунальные службы, перевозчики вооружений, медицинские, правоохранительные и иные
            государственные учреждения.'/>

          <TextAreaSpecial children='30 лет мы заправляем топливом автоперевозчиков. Мы
              запустили новый личный кабинет, приготовили много новых коммерческих и технологических
              решений для того, чтобы дать Вам возможность управлять затратами на топливо.'/>
          <TextAreaSpecial children='Мы всегда открыты для общения, для поиска компромиссов.
              Доверьте заправку профессионалам. Для нас это не только бизнес, для нас это – жизнь.'/>

          <TextAreaText children='По нашим топливным картам уже заправляются более 10 тысяч автоперевозчиков
            и организаций государственного и муниципального сектора.'/>
          <TextAreaText children='10 000 АЗС на территории России и стран СНГ работают по
            технологии нашей компании и принимают к оплате топливные карты и топливные талоны «Инфорком».' />
          <TextAreaText children='Нашими партнёрами являются топливные компании: «Газпромнефть»,
            «Сургутнефтегаз», «ТАТНЕФТЬ», «БАШНЕФТЬ», ГАЗПРОМ и другие. «Инфорком» – единственный партнёр и
            дистрибьютор таких мировых компаний как euroShell и DKV в РФ.'/>

        </div>
        <div  className='s-a-width'>
        <SideAreaMenu head='О компании' item={[[`/about/news`,'Новости компании'],
                                       [`/about/social`,'Социальная ответственность'],
                                       [`/about/projects`,'Наши проекты']]}/>
        </div>
        </div>
      </div>
    );
  }

  export default History;
