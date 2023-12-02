$(document).ready(function(){
  var images = [
      '../src/assets/images/carousel/broken_wall.jpg',
      '../src/assets/images/carousel/rob_city.jpg',
back  ];

  function changeImage() {
      var randomImage = images[Math.floor(Math.random() * images.length)];
      $('#carousel .carousel-item.active img').attr('src', randomImage);
  }

  setInterval(changeImage, 3000);
});
