import RedBox from './children/redBox'
import Car    from './images/tech-center.png'
import Tool   from './images/tool.png'
import Oil    from './images/oil.png'
import './red.css'

const Red = () => {
  const car = {
    width: '160%',
    marginTop: '1vw',
  }
  const oil = {
    width: '160%',
    marginTop: '6%',
    marginLeft: '-63%',
    transform: 'scale(-1, 1)',
  }
  const tool = {
    width: '106%',
    marginLeft: '-12%',
    marginTop: '4%',
  }
  const margin = {
    marginLeft: '3%',
    alignSelf: 'flex-end',
  }
  const marginw = {
    marginRight: '10%',
  }
  return (
    <div className='w-100'>
      <section id='red' className='red-section'>
        <div className='full-red'>
          <div className='color-zone wrap flex flex-space-b '>
            <div className='flex red-head'>
              <h2>Инфорком <br/>техцентр</h2>
              <p>Полезные продукты <br className='red-hide'/>и сервисы для Вашего <br className='red-hide'/>грузового автопарка</p>
            </div>
            <div className='flex red-table'>
              <RedBox img={Car} href='https://inforkom-abcp.ru/' 
                text='Техцентр /запчасти /разборка' style={car}/>
              <RedBox img={Tool} text='Инструмент' style={tool}/>
              <RedBox img={Oil} href='https://inforkom-oil.ru/' 
                text='Масло' style={oil} margin={margin} marginw={marginw}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Red;
