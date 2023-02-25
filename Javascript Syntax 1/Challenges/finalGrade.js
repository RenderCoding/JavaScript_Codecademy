const finalGrade = (midterm, final, homework) => {
    // checking all the grades numerically
    if (
      midterm < 0 ||
      midterm > 100 ||
      final < 0 ||
      final > 100 ||
      homework < 0 ||
      homework > 100
    ) {
      return "You have entered an invalid grade.";
    } else {
      let average = (midterm + final + homework) / 3;
      switch (true) {
        case average < 60:
          return "F";
        case average < 70:
          return "D";
        case average < 80:
          return "C";
        case average < 90:
          return "B";
        case average < 101:
          return "A";
      }
    }
  };
console.log(finalGrade(94, 92, 90));
  
  