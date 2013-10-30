(function () {
  var imgEl = document.getElementById('hero-img'),
    mapContainer = document.getElementById('about-map-container'),
    imgUrl = 'img/hero.jpg',
    mapHtml = '<iframe class="about-map" frameborder="0" scrolling="no"' +
      'marginheight="0" marginwidth="0" src="https://www.google.com/maps?' +
      't=m&amp;q=3601+Fremont+Ave.+N,+Suite+302+Seattle,+WA+98103&amp;' +
      'ie=UTF8&amp;hq=&amp;hnear=3601+Fremont+Ave+N+%23302,+Seattle,+Washington' +
      '+98103&amp;ll=47.659144,-122.349501&amp;spn=0.034686,0.051498&amp;z=14' +
      '&amp;iwloc=A&amp;output=embed"></iframe>';

  var checkSize = function () {
    if (window.innerWidth > 768) {
      imgEl.src = imgUrl;
      mapContainer.innerHTML = mapHtml;

      window.removeEventListener('resize', checkSize);
    }
  };

  window.addEventListener('resize', checkSize);

  checkSize();
}());