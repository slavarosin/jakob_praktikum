function filterByGender(gender) {
  console.log("User clicked button: " + gender);

  var f = document.getElementsByClassName("filterDiv_female")[0];
  f.className = "filterDiv_female show";
  var m = document.getElementsByClassName("filterDiv_male")[0];
  m.className = "filterDiv_male show";

  if (gender === 'boy') {
      f.className = "filterDiv_female";
  } else if (gender === 'girl') {
      m.className = "filterDiv_male";
  }
}

function filterByBirth(birth) {
  console.log("User clicked button: " + birth);

  var b2003 = document.getElementsByClassName("birth_2003")[0];
  b2003.className = "birth_2003 show";
  var b2004 = document.getElementsByClassName("birth_2004")[0];
  b2004.className = "birth_2004 show";

  if (birth === "born_in_2004") {
    b2003.className = "birth_2003";
  } else if (birth === "born_in_2003") {
    b2004.className = "birth_2004";
  }
}