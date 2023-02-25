let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ];
  //console.log(secretMessage.length);
  //                    step 1
  secretMessage.pop();
  //                    step 2
  //console.log(secretMessage.length);
  //                    step 3
  secretMessage.push("Program");
  //console.log(secretMessage.length);
  //                    step 4
  let findingTheIndex = secretMessage.indexOf("easily");
  //console.log(findingTheIndex); // 7
  secretMessage[7] = "right";
  //console.log(secretMessage);
  //                    step 5
  secretMessage.shift();
  //console.log(secretMessage);
  //                    step 6
  secretMessage.unshift("Programming");
  console.log(secretMessage);
  //                    step 7
  console.log(secretMessage.indexOf("get")); //6
  secretMessage.splice(6, 5, "know");
  //console.log(secretMessage);
  //                    step 8
  //console.log(secretMessage.join(" "));
  