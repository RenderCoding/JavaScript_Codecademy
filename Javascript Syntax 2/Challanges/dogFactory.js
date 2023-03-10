const dogFactory = (name, breed, weight) => {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
  
      get name() {
        return this._name;
      },
      set name(newName) {
        typeof newName === "string" ? (this._name = newName) : "invaild input";
      },
      // breed get/set
      get breed() {
        return this._breed;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },
      // weight get/set
      get weight() {
        return this._weight;
      },
      set weight(newWeight) {
        this._weight = newWeight;
      },
      // methods
      bark() {
        return "ruff! ruff!";
      },
      eatTooManyTreats() {
        return this._weight++;
      },
    };
  };
  
  console.log(dogFactory("Joe", "Pug", 27));
  dogFactory.bark;
  