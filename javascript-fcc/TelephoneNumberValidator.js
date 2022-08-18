function telephoneCheck(str) {
  //could't figure the regex out, so used regex tester

  let reg = /^1?\s?(\(\d{3}\)|(\d{3}))-?\s?\d{3}-?\s?\d{4}$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }

}

telephoneCheck("555-555-5555");
