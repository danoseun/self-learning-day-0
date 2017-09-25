
const aritGeo = (arr) => {
  if(arr.length===0){
    return 0;
  }
  let comDiff = arr[1] - arr[0];
  let comRatio = arr[1] / arr[0];

  let Arithmetic = true;
  let Geometric = true;

  for(let i=1; i<arr.length; i++){
    if ( arr[i+1] - arr[i] !== Arithmetic) {
      Arithmetic = false;
    }
    if (arr[i+1]/arr[i] !== Geometric){
      Geometric = false;
    }
  }

  if (Arithmetic === true){
    return 'Arithmetic';
  }
  else if(Geometric === true){
    return 'Geometric';
  }
  else {
        return -1;
      }
};

export default aritGeo;
