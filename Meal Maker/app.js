const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return (this._price = priceToCheck);
      }
    },
    get todaySpecial() {
      if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for $${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  let meals = ["Biryani", "Cake Fudge", "Chicken pops", "Karri"];
  menu.meal = meals[Math.floor(Math.random() * meals.length)];
  
  let mealPrice = () => {
    // if (menu._meal === "Biryani") {
    //   return (price = 5.9);
    // } else {
    //   return (price = 10);
    // }
    switch (menu._meal) {
      case "Biryani":
        return (price = 5.99);
      case "Cake Fudge":
        return (price = 2.99);
      case "Chicken pops":
        return (price = 4.99);
      default:
        return (price = 9.99);
    }
  };
  menu.price = mealPrice();
  console.log(menu.todaySpecial);
  