// Discount counter logic
document.addEventListener('DOMContentLoaded', function() {
  const counterElement = document.getElementById('spots-left');
  let spotsLeft = 50;

  // Simulate spots being taken (update every 5 seconds)
  function updateCounter() {
    if (spotsLeft > 0) {
      // Random decrease between 1-3 spots
      const spotsTaken = Math.min(Math.floor(Math.random() * 3) + 1, spotsLeft);
      spotsLeft -= spotsTaken;
      counterElement.textContent = spotsLeft;
      
      // Change color when spots are running low
      if (spotsLeft < 10) {
        counterElement.classList.add('text-red-500');
        counterElement.classList.add('animate-pulse');
      }
    }
  }

  // Initial update
  updateCounter();
  
  // Update counter periodically
  setInterval(updateCounter, 5000);

  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    
    // Simple validation
    if (!name || !email || !phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Simulate form submission
    alert(`Thank you ${name}! Your enrollment request has been received. We'll contact you shortly at ${email}.`);
    form.reset();
    
    // Update spots immediately after submission
    if (spotsLeft > 0) {
      spotsLeft--;
      counterElement.textContent = spotsLeft;
    }
  });
});