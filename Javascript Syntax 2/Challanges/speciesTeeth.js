const speciesArray = [
    { speciesName: "shark", numTeeth: 50 },
    { speciesName: "dog", numTeeth: 42 },
    { speciesName: "alligator", numTeeth: 80 },
    { speciesName: "human", numTeeth: 32 },
  ];
  
  const sortSpeciesByTeeth = (arr) =>
    arr.sort((item1, item2) => item1.numTeeth > item2.numTeeth);
  
  console.log(sortSpeciesByTeeth(speciesArray));
  