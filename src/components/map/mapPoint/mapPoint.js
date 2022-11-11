const MapPoint = () => {
    return (
      <div>
        <div className='map-point'>
          <div className='point-field'>
            <div className='point-red'>
              <p>20 км</p>
            </div>
            <p>Заправка</p>
            <p className='point-p-extra'>text</p>
          </div>
          <div>
            <p className='address-p'>Адрес адрес адрес</p>
          </div>
          <div className='flex flex-center'>
            <div className='tail'></div>
          </div>
        </div>

      </div>
    );
  }

  export default MapPoint;
