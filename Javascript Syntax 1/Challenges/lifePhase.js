const lifePhase = (age) => {
  if (age < 0 || age > 140) {
    return "This is not a valid age";
  } else {
    switch (true) {
      case age < 4:
        return "baby";
      case age < 13:
        return "child";
      case age < 20:
        return "teen";
      case age < 65:
        return "adult";
      case age < 141:
        return "senior citizen";
    }
  }
};

console.log(lifePhase(-3));


