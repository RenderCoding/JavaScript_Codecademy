// how old someone who is currently that age was (or will be) during that year

const howOld = (age, year) => {
    // creating instances of class related to time for year
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
    // directly using the current year
    // let currentYear = 2023;
  
    // the year provided by the user and the current year.
    const yearDifference = year - thisYear;
    /* addition or substraction of the year from the age to render the predcited age.
     age would be provided by the user, based on which year will be calculated. 
     For example, let say a person add 23yrs for age argument. The current year is 2023. 
     This means the year is 2000. Here, the differnce is zero.
     if the year 1990 is provided for prediction, with age 23.
     The yearDifference would be (1990 - 2023) === -33yr. 
     the -33 would be added to the 23 === 23 + (-33). newAge would be -10.
     the newAge is less than 0, this means year provided was before a person was born.
     now let say w/ age 23 the year is 2050. the difference is (2050-2023) === 27. hence, 23 + 27 = 50yr
    the person will be 50 in year 2050.
    now, let say the age is 23 but year is 2011. 
    the yearDifference is 2011-2023 === -12, the newAge === 23 +(-12) = 11yrs */
    
    const newAge = age + yearDifference;
      if (newAge < 0) {
      return `The year ${year} was ${-yearDifference} years before you were born`;
    } else if (newAge > age) {
      return `You will be ${newAge} in the year ${year}`;
    } else {
      return `You were ${newAge} in the year ${year}`;
    }
  };
  console.log(howOld(23, 1990));
  