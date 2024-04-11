
  // This is ScrollReveal format in java script to do some animation effects ..

  ScrollReveal({
      reset: true, // Reset the animation for an element every time it becomes visible
      distance: '100px', // Distance the element moves during the animation
      duration: 800, // Duration of the animation in milliseconds
      delay: 80, // Delay in milliseconds before the animation starts
    });

    ScrollReveal().reveal('.slider-1', {
      origin: 'top'
    });
    ScrollReveal().reveal('.slider-p', {
      origin: 'top'
    });
    ScrollReveal().reveal('.button-slides', {
      origin: 'top'
    });