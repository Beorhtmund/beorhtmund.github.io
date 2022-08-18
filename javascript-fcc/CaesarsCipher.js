function rot13(str) {
  let decode = str.split(" ");
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const beta = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
  let end = "";
  let result = [];

  for (let i in decode) {
      end = "";

      for (let j in decode[i]) {
        alpha.forEach(item => {
          if (decode[i][j] == item) {
            let num = parseInt(alpha.indexOf(item));
            end += beta.at(num);
          }
        });
        if (decode[i][j] == "!" | decode[i][j] == "?" | decode[i][j] == ".") {
            end += decode[i][j];
          }
      }
      
        result.push(end);
  }
  return result.join(" ");
}

rot13("SERR PBQR PNZC");
