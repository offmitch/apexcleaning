  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
function submitBooking() {
  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const email   = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const date    = document.getElementById('date').value;
  const size    = document.getElementById('size').value;
  const time    = document.getElementById('time').value;
  const address = document.getElementById('address').value.trim();
  const notes   = document.getElementById('notes').value.trim();

  if (!fname || (!phone && !email) || !service) {
    alert('Please fill in your name, contact info, and selected package.');
    return;
  }

  emailjs.send("service_tr5ns3r", "template_famd3lq", {
    fname: fname,
    lname: lname,
    phone: phone || 'Not provided',
    email: email || 'Not provided',
    service: service,
    date: date || 'Flexible',
    time: time || 'Flexible',
    size: size || 'Not specified',
    address: address || 'Not provided',
    notes: notes || 'None'
  })
  .then(function(response) {
    document.getElementById('successMsg').style.display = 'block';
    document.getElementById('successMsg').scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });

    document.querySelector('.booking-form').reset(); // reset form
  }, function(error) {
    console.error("FULL ERROR:", JSON.stringify(error));
    alert("Failed to send booking. Try again.");
  });
}
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
    }
  });