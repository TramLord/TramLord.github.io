var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/doc1.jpeg') {
      myImage.setAttribute ('src','images/doc2.jpg');
    } else {
      myImage.setAttribute ('src','images/doc3.jpg');
    } else {
      myImage.setAttribute ('src','images/doc4.jpg');
    } else {
      myImage.setAttribute ('src','images/doc5.jpg');
    } else {
      myImage.setAttribute ('src','images/doc6.jpg');
    } else {
      myImage.setAttribute ('src','images/doc7.jpg');
    } else {
      myImage.setAttribute ('src','images/doc8.jpg');
    } else {
      myImage.setAttribute ('src','images/doc9.jpeg');
    } else {
      myImage.setAttribute ('src','images/doc10.jpg');
    } else {
      myImage.setAttribute ('src','images/doc11.jpg');
    } else {
      myImage.setAttribute ('src','images/doc12.jpg');
    } else {
      myImage.setAttribute ('src','images/doc13.jpg');
    }
}