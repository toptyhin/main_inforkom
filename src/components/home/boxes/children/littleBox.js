const LittleBox = ( {img, alt} ) => {

  return (
    <div className='box'>
      <img className='littleBox' alt={alt} src={img}/>
    </div>
  );
};

export default LittleBox;
