





// Gets country id by the name after a delay of 1 seoconds behaves just like an api call
function AsyncGetCountryIdByName(countryName,cb){
    let countryArray=[{id:1,name:"India"},{id:2,name:"Bhutan"},{id:3,name:"USA"}];
  
    setTimeout(()=>{
      let countryNames=countryArray.filter(function(ele){
        return ele.name==countryName
      })
      cb(countryNames)
      
    },1000)
    
  }
  
  
  
  // Gets state id by the countryId passed after a delay of 1 seconds behaves just like an api call
  function AsyncGetStateByCountryId(countryId,cb){
  let stateArray=[{id:1,name:"UP",countryId:1},{id:2,name:"Thimpu",countryId:2},{id:3,name:"Calfornia" ,countryId:3}];
  
    setTimeout(()=>{
      let stateID= stateArray.filter((ele)=>{
      return ele.countryId==countryId;
    });
      cb(stateID)
      
    },1000)
    
  }
  
  
  
  
  
  
  // Gets City id by the stateID passed after a delay of 1 seconds behaves just like an api call
  function AsyncGetCityByStateId(stateId,cb){
  
  let cityArray=[{id:1,name:"Lucknow",stateId:1},{id:2,name:"Thimpu",stateId:2},{id:3,name:"LA",stateId:3}];
  
    setTimeout(()=>{
      let cityID= cityArray.filter((ele)=>{
      return ele.stateId==stateId;
    });
      cb(cityID)
      
    },1000)
    
  }
  
  
  // Callback hell is an anti pattern (bad design of your program or code) which leads to the lot of bugs in code and reduces the code readability and code understanding 
  //It is caused by the scenariow when you have multiple asynchronous operations dependent on each other ,such that they lead to nested callbacks known as callback hell or the pyramid of doom 
  
  
  
  
  //Problem Statement ,Given the country Name ,Write a function that prints the name of city it has 
  // Example - for India i should return Lucknow
  
  
  
  // Given the ccountry name ,you have to find the population of the city which that country has
  
  function AsyncCityPopulationByCityId(cityId,cb){
    
  let cityPopulation=[
    {
      cityId:1,
      population:2000000
    },
    {
      cityId:2,
      population:4000000
    },
    {
      cityId:3,
      population:12000000
    }
  
  ]
  
    setTimeout(()=>{
      let populationData=cityPopulation.find(function(ele){
        return ele.cityId==cityId
      })
  
      cb(populationData)
      
    },1000)
    
  }
  
  
  // Typical call back hell 
  
  AsyncGetCountryIdByName("USA",function(countryData){
    AsyncGetStateByCountryId(countryData[0].id,function(stateData){
      AsyncGetCityByStateId(stateData[0].id,function(cityData){
  AsyncCityPopulationByCityId(cityData[0].id,function(cityPopulationData){
          console.log(cityPopulationData)
          
        })
      })
    })
  })


  // for performance they gonna take like 4 seconds

  // Typical call back hell 
const t0 = performance.now();
AsyncGetCountryIdByName("USA",function(countryData){
  AsyncGetStateByCountryId(countryData[0].id,function(stateData){
    AsyncGetCityByStateId(stateData[0].id,function(cityData){
AsyncCityPopulationByCityId(cityData[0].id,function(cityPopulationData){
        console.log(cityPopulationData)

  const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);  // 4000 ms 
        
      })
    })
  })
})