import RedBox from './children/redBox'
import Car    from './images/tech-center.png'
import Tool   from './images/tool.png'
import Oil    from './images/oil.png'
import './red.css'
import { isTerminating } from 'apollo-link/lib/linkUtils'

const Red = ({tech, item, img}) => {
  const car = {
    width: '160%',
    marginTop: '1vw',
  }
  const oil = {
    width: '160%',
    marginTop: '6%',
    marginLeft: '-63%',
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
              <h2 dangerouslySetInnerHTML={{__html: tech.header}}></h2>
              <p dangerouslySetInnerHTML={{__html: tech.text}}></p>
            </div>
            <div className='flex red-table'>
              <RedBox img={img[0]} href={item[0].url} text={item[0].text} style={car}/>
              <RedBox img={img[1]}                    text={item[1].text} style={tool}/>
              <RedBox img={img[2]} href={item[2].url} text={item[2].text} style={oil} 
                      margin={margin} marginw={marginw}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Red;
