function openModal(companyId) {
  companyData = getCompanyData(companyId)
  if (companyData) {
    $('#modal').html('')
    template = Elefund.templates["portfolio-details"]
    templateData = template(companyData)
    $('#modal').html(templateData)
    $('body').addClass('is-modal-active')
  }
}

function closeModal() {
  $('body').removeClass('is-modal-active')
  $('#modal').html('') 
}

function getCompaniesData() {
  $.getJSON("/javascripts/data.json", {
    format: "json"
  })
    .done(function(data) {
      companiesList = data
    })
    .fail(function() {
      console.log( "Error getting json" )
    })
}

function getCompanyData(companyId) {
  companyItem = null
  companiesList.forEach((company) => {
    if (company.id == companyId) {
      companyItem = company
    }
  })
  return companyItem
}

function toggleMobileMenu() {
  $('body').toggleClass('is-mobile-menu-active')
}

$(document).ready(function() {

  var companiesList, companyItem
  getCompaniesData()

  $('.toggle-modal').on('click', function(event) {
    event.preventDefault()
    targetCompany = $(this).attr('href').trim().replace('#', '')
    openModal(targetCompany)
  })

  $('#modal').on('click', '.modal-close, .modal-backdrop', function() {
    closeModal()
  })

  $('.toggle-mobile-menu').on('click', function() {
    toggleMobileMenu()
  })

  $('.site-header').on('click', '.site-menu-mobile-backdrop', function() {
    toggleMobileMenu()
  })

  const os = new OnScreen({
    tolerance: 200,
    debounce: 100,
    container: window
  })

  os.on('enter', '.animated-section', (element, event) => {
    $('.animate-element').removeClass('offset')
    $('.animate-element-delay').removeClass('offset')
  })

  $('.animate-element').addClass('offset')
  $('.animate-element-delay').addClass('offset')

  if ($('#home-slider').length) {

    var fillerTimeoutDelay

    function fillerTimeout(currentSlide) {
      fillerTimeoutDelay = setTimeout(function() {
        $('#home-slider .slick-slide[data-slick-index=' + currentSlide + '] .filler').removeClass('animate')
      }, 200)
    }

    
    $('#home-slider').on('init', function() {
      $('#slider-circle-animation').addClass('animate')
      $('#home-slider .slick-slide[data-slick-index=0] .filler').addClass('animate')
    })

    $('#home-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('#slider-circle-animation').removeClass('animate')
      $('#slider-circle-mover').removeClass('animate')
      fillerTimeout(currentSlide)
    })

    $('#home-slider').on('afterChange', function(slick, currentSlide) {
      $('#slider-circle-animation').addClass('animate')
      $('#home-slider .slick-slide[data-slick-index='+ currentSlide.currentSlide + '] .filler').addClass('animate')
      $('#slider-circle-mover').addClass('animate')
      clearTimeout(fillerTimeoutDelay)
    })

    $('#home-slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      pauseOnFocus: false,
      swipe: false,
      touchMove: false,
      draggable: false,
      fade: true,
      infinite: true
    })

  }

  if ($('.js-slider').length) {

    $('.js-slider-next').on('click', function() {
      const sliderTarget = '#' + $(this).data('target')
      $(sliderTarget).slick('slickNext')
      return false
    })

  }

  if ($('#portfolio-slider').length) {

    $('#portfolio-slider').slick({
      arrows: false,
      autoplay: false,
      swipe: false,
      touchMove: false,
      draggable: false,
      fade: true,
      infinite: true
    })

  }

  if ($('#latest-tweet').length) {
    var configProfile = {
      "profile": {"screenName": 'google'},
      "domId": 'latest-tweet',
      "maxTweets": 1,
      "enableLinks": false, 
      "showUser": false,
      "showTime": false,
      "showImages": false,
      "lang": 'en'
    }
    twitterFetcher.fetch(configProfile)
  }

})
