import { useNavigate } from "react-router-dom";


const Slide = ({children, background, light, header}) => {
    const navigate = useNavigate();
    return (
        <section className='city' onClick={() => navigate('/about/history')}>
        <img className='city-back' alt='' src={background} />
        <img className='city-back-light' alt='' src={light} />
         {children}
        <h5>{header}</h5>
      </section>
    );
  };
  
  export default Slide;