const isReallyNaN = (val) => {
    if(val === undefined) {
        return false;
    }
    return isNaN(val) ? true : false;
  };

  console.log(isReallyNaN(NaN))