document.querySelectorAll('.read-more-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      const ul = this.previousElementSibling; // Select the <ul> element
      ul.classList.toggle('hidden'); // Toggle the 'hidden' class
  
      // Update button text
      if (ul.classList.contains('hidden')) {
        this.textContent = 'Read More';
      } else {
        this.textContent = 'Show Less';
      }
    });
  });
  