const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 8;
      case "tuesday":
        return 7;
      case "wednesday":
        return 7;
      case "thursday":
        return 7;
      case "friday":
        return 5;
      case "saturday":
        return 10;
      case "sunday":
        return 9;
    }
  };
  const getActualSleepHours = () => {
    const sumOfSleep =
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
    return sumOfSleep;
  };
  
  const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      return console.log(
        "You got perfect sleep of:" + idealSleepHours + "hours!"
      );
    } else if (actualSleepHours > idealSleepHours) {
      return console.log(
        "You got more sleep of: " +
          (actualSleepHours - idealSleepHours) +
          " hours!"
      );
    } else if (actualSleepHours < idealSleepHours) {
      return console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Get some rest."
      );
    }
  };
  
  console.log(calculateSleepDebt());
  