let mybutton = document.querySelector(".back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

document.getElementById('whatsapp-link').addEventListener('click', function() {
  var phoneNumber = '+201003821128'; // Replace with your phone number
  var whatsappURL = 'https://wa.me/' + phoneNumber;
  window.open(whatsappURL, '_blank');
});