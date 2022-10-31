


async function Count (setAmount, geo1, geo2, fuelType, fuelSlider, carSlider, nds ) {
  const reg1 = 'region[0]='+ geo1;
  const reg2 = '&region[1]=' + geo2;
  let region;
  if (geo2!=null) {
    region = reg1 + reg2;
  } else {
    region = reg1;
  }
  const url = 'https://data.inforkom.ru/api/v1/Base/Calculator?' + region + '&fuel=' + fuelType;

  const amount_l = fuelSlider * carSlider;
  const calcResponse = await fetch(url);
  const resp = await calcResponse.json();

  let amounts = {};
  if (nds==true) {
    amounts = {
      fuel: amount_l * resp.minPrice - amount_l * resp.maxVal - amount_l * resp.minPrice / 6 - amount_l * resp.minPrice * 0.017,
      discount: amount_l * resp.maxVal,
      vat: amount_l * resp.minPrice / 6,
      manage: amount_l * resp.minPrice * 0.017,
      total: amount_l * resp.minPrice,
    };
  } else {
    amounts = {
      fuel: amount_l * resp.minPrice - amount_l * resp.maxVal - amount_l * resp.minPrice * 0.017,
      discount: amount_l * resp.maxVal,
      manage: amount_l * resp.minPrice * 0.017,
      total: amount_l * resp.minPrice,
    };
  };
  setAmount = amounts;
  console.log(setAmount);
};

export default Count;
