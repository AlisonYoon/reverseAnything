function reverseString() {
  var element = document.getElementById("div1");
  var elementa = document.getElementById("ttext").value;
 
 var changed= elementa.split('').reverse().join('');
 element.innerHTML=changed;
}