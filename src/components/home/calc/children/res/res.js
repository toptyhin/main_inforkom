import { Link } from 'react-router-dom';
import './res.css'

const Res = ({card, nocard}) => {
  return (
    <div className='radius-20 white total-zone'>
      <div className='flex flex-center'>
        <h5 className='f-grey'>Итого:</h5>
      </div>
      <hr/>
      <div className='flex-space-a flex flex-space-b'>
        <div>
          <h5 className='text-center f-grey'>С картой</h5>
          <span className='legend_record'>
            <span className='label l-green'></span>
            <span id='total_fuel' className='amount'>{card} &#8381;</span>
          </span>
        </div>
        <div className='v-line'></div>
        <div>
          <h5 className='text-center f-grey'>Без карты</h5>
            <span className='legend_record'>
              <span className='label gradient'></span>
              <span id='total_total' className='amount'>{nocard} &#8381;</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  export default Res;
