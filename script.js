// Aktivni link u navigaciji
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Kontakt forma validacija (samo na contact.html)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;
    [name, email, message].forEach(input => {
      input.style.borderColor = '#dbeafe';
    });
    if (!name.value.trim()) {
      name.style.borderColor = 'red';
      valid = false;
    }
    if (!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      email.style.borderColor = 'red';
      valid = false;
    }
    if (!message.value.trim()) {
      message.style.borderColor = 'red';
      valid = false;
    }
    if (!valid) {
      e.preventDefault();
    }
  });
}

// Katalog funkcionalnost
document.addEventListener('DOMContentLoaded', function() {
  // Sakrij sadržaj dok se ne učita
  const catalogSection = document.querySelector('.catalog-section');
  if (catalogSection) {
    catalogSection.classList.add('js-loading');
    
    // Prikaži sadržaj nakon kratkog kašnjenja
    setTimeout(() => {
      catalogSection.classList.remove('js-loading');
      catalogSection.classList.add('js-loaded');
    }, 100);
  }

  // Filter funkcionalnost
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');

  if (filterBtns.length > 0 && productItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ukloni aktivnu klasu sa svih dugmića
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Dodaj aktivnu klasu na kliknuti dugmić
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        // Filtriraj proizvode
        productItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.opacity = '1';
            }, 50);
          } else {
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
});

// Sakrij preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
}); 