function validateForm() {
  // Dohvatanje vrijednosti inputa
  const ime = document.getElementById('ime').value.trim();
  const email = document.getElementById('email').value.trim();
  const predmet = document.getElementById('predmet').value;
  const poruka = document.getElementById('poruka').value.trim();

  // Validacija imena
  if (ime === '') {
    alert('Molimo unesite vaše ime i prezime.');
    return false;
  }

  const brojRegex = /\d/;
  if (brojRegex.test(ime)) {
    alert('Ime i prezime ne smiju sadržavati brojeve.');
    return false;
  }

  // Validacija emaila
  if (email === '') {
    alert('Molimo unesite vašu email adresu.');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Molimo unesite ispravan email format.');
    return false;
  }

  // Validacija predmeta
  if (predmet === '') {
    alert('Molimo odaberite predmet poruke.');
    return false;
  }

  // Validacija poruke
  if (poruka === '') {
    alert('Molimo unesite vašu poruku.');
    return false;
  }

  return true;
}

// Dodavanje listenera na formu
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('kontaktForma');
  form.addEventListener('submit', function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Sprečava slanje forme
    }
    else {
      alert('Vaša poruka je poslana!'); // Poruka o uspješnom slanju
    }
  });
});

var coll = document.getElementsByClassName("spusti");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navigation.classList.remove('active');
        });
    });
});