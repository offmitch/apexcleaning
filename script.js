 function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Set min date for booking to today
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
      alert('Please fill in your name, contact info, and service type.');
      return;
    }

    // Build mailto link
    const subject = encodeURIComponent(`Apex Cleaning Booking Request — ${service}`);
    const body = encodeURIComponent(
`New Booking Request — Apex Cleaning

Name:    ${fname} ${lname}
Phone:   ${phone || 'Not provided'}
Email:   ${email || 'Not provided'}
Service: ${service}
Date:    ${date || 'Flexible'}
Time:    ${time || 'Flexible'}
Size:    ${size || 'Not specified'}
Address: ${address || 'Not provided'}

Notes:
${notes || 'None'}
`
    );

    window.location.href = `mailto:alirezoabdulahad@gmail.com?subject=${subject}&body=${body}`;

    document.getElementById('successMsg').style.display = 'block';
    document.getElementById('successMsg').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Smooth close mobile menu on outside click
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
    }
  });