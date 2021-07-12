let data = {
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': [1,2,3]
    }
  }

  const dummyFunc = (dict) => {
      for (let item in dict) {
        //Object.keys(dict[item]) ? console.log(item) : dummyFunc(dict[item]);
        if(Object.keys(item)){
           console.log('this is a key:', item)
           console.log('this is a value:', dict[item])
           for (let key in dict[item]) {
               console.log('this is a key:', key)
               console.log('this is a value:', dict[item][key])
           }
           
        }
      }
  }

  dummyFunc(data)