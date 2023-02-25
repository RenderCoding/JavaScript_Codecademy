const numImaginaryFriends = (ttlFrnds) => {
    let imaginaryFrnd = ttlFrnds - ttlFrnds * (1 - 0.25);
    return Math.ceil(imaginaryFrnd);
  };
  
  console.log(numImaginaryFriends(20)); 
  console.log(numImaginaryFriends(10)); 
  console.log(numImaginaryFriends(80));
  