const slider = document.querySelector('.slider');

function handleSliderClick(e) {
  const items = document.querySelectorAll('.item'); // Make sure this matches your HTML
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', handleSliderClick, false);
