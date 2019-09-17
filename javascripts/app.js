function openModal(companyId) {
  const companyData = getCompanyData(companyId)
  if (companyData) {
    const modal = $('#modal')
    modal.html('')
    const template = Elefund.templates["portfolio-details"]
    const templateData = template(companyData)
    modal.html(templateData)
    $('body').addClass('is-modal-active')
    addEventListener('keyup', closeModalOnEsc)
  }
}

function closeModal() {
  $('body').removeClass('is-modal-active')
  $('#modal').html('')
  removeEventListener('keyup', closeModalOnEsc)
}

function closeModalOnEsc(event) {
  if (event.key == 'Escape' || event.key == 'Esc' || event.keyCode == 27) {
    event.preventDefault()
    closeModal()
    return false
  }
}

function getCompaniesData() {
  $.getJSON("/javascripts/companies.json", {
    format: "json"
  })
  .done(function(data) {
    companiesData = data
    renderStageCompanies('seed', '#seed-stage')
    renderStageCompanies('series_a', '#series-a-stage')
    renderStageCompanies('later_stage', '#later-stage')
  })
  .fail(function(error) {
    console.log( "Error getting json:", error.status )
  })
}

function getCompanyData(companyId) {
  const companyItem = companiesData.find(company => company.id == companyId)
  return companyItem
}

function renderStageCompanies(stage, DOMElement) {
  const companiesList = companiesData.filter(company => company.stage == stage)
  const template = Elefund.templates["portfolio-items"]
  const templateData = template({companies: companiesList})
  $(DOMElement).html(templateData)
}

function toggleMobileMenu() {
  $('body').toggleClass('is-mobile-menu-active')
}

$(document).ready(function() {

  $('.portfolio-grid').on('click', '.toggle-modal', function(event) {
    event.preventDefault()
    const targetCompany = $(this).attr('href').trim().replace('#', '')
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

  if ($('.js-portfolio').length) {
    const companiesData = []
    getCompaniesData()
  }

  if ($('#home-slider').length) {

    var fillerTimeoutDelay

    function fillerTimeout(currentSlide) {
      fillerTimeoutDelay = setTimeout(function() {
        $('#home-slider .slick-slide[data-slick-index=' + currentSlide + '] .filler').removeClass('animate')
      }, 400)
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
    const configProfile = {
      "profile": {"screenName": 'elefundvc'},
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

  Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

})
