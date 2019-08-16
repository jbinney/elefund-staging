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
      console.log( "Error getting json" );
    });
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

  var companiesList, companyItem;
  getCompaniesData()

  $('.toggle-modal').on('click', function(event) {
    event.preventDefault()
    targetCompany = $(this).attr('href').trim().replace('#', '')
    openModal(targetCompany)
  });

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
  });

  os.on('enter', '.animated-section', (element, event) => {
    $('.animate-element').removeClass('offset');
    $('.animate-element-delay').removeClass('offset');
  });

  $('.animate-element').addClass('offset');
  $('.animate-element-delay').addClass('offset');

  if ($('#slider').length) {

    var fillerTimeoutDelay;

    function fillerTimeout() {
      fillerTimeoutDelay = setTimeout(function() {
        $('#slider-filler').removeClass('animate')
      }, 200)
    }

    
    $('#slider').on('init', function() {
      $('#slider-circle-animation').addClass('animate')
      $('#slider-filler').addClass('animate')
    });

    $('#slider').on('beforeChange', function() {
      $('#slider-circle-animation').removeClass('animate')
      $('#slider-circle-mover').removeClass('animate')
      fillerTimeout()
    });

    $('#slider').on('afterChange', function() {
      $('#slider-circle-animation').addClass('animate')
      $('#slider-filler').addClass('animate')
      $('#slider-circle-mover').addClass('animate')
      clearTimeout(fillerTimeoutDelay);
    });

    $('#slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true
    });

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
    };
    twitterFetcher.fetch(configProfile);
  }

});
