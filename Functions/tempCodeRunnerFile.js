var convert = function(array) {
    var i, counter = 0, newarray = [], testarray = [];
    newarray[0] = "";
    for (i = 0; i < array.length; i++) {
      if (array[i] === " " || array[i] === ",") {
        counter++;
        newarray[counter] = "";
      } else {
        newarray[counter] += array[i];
      }
    }
    for (i = 0; i < newarray.length; i++) {
      if (newarray[i] === "") continue;
      testarray[testarray.length] = newarray[i];
    }
    return testarray;
}
  
var generate = function (text) {
    var i, side = "* ";
    for (i = 0; i < text; i++) {
      side += "*";
    }
    side += " *\n";
    return side
}
  
var frameText = function (string) {
  var i, j, length, text, word = "* ", element;
    text = typeof string === "string" ? convertStringToArr(string) : string;
    length = text.length - 1;
   
    var line = generate(text.length);
        for (i = 0; i < text.length; i++) {
            for (j = 0; j < text.length; j++) {
                element = typeof text[i][j] === "undefined" ?  " " : text[i][j];
                word += element;
                if (j === length) {
                    word += " *\n";
                    if (i === length && j === length) {
                        word += "";
                    } else {
                        word += "* ";
                    }
                }
            }
        }
    return line + word + line;
}

console.log(frameText(["Hello", "World", "in", "a", "frame"]))