var print  = function(msg){
  document.getElementById("output").innerHTML = "Length is : " + msg;

}


document.getElementById("btn").onclick = function(event){

  // use the \s quanitifier to remove all whitespace
  // then retrieve the length
  print(document.getElementById('str').value.replace(/\s/g, "").length)

}
