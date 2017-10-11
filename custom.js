var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    wrapAround: true,
    groupCells: true,
    contain: true,
    percentPosition: true
  });


  // var elem = document.querySelector('.main-carousel');
  //
  // for ( var i=0, len = elem.length; i < len; i++ ) {
  //   var elem = elem[i];
  //   new Flickity( elem, {
  //     wrapAround: true,
  //     groupCells: true,
  //     contain: true,
  //     percentPosition: true
  //   });
  // }


  //select div's inside the #tabs div
  const tabContent = document.querySelector('#tabs').querySelectorAll('div')

  //select anchor link inside the #tabs div inside ul
  const tabButton = document.querySelector('#tabs').childNodes[1].querySelectorAll('a')

  ///checking
  ///console.log(tabButton)

  //Set a full loop to Hide all tabContent except the first
  for (var i = 0; i < tabContent.length; i++){
    if(i > 0) {
      tabContent[i].classList.add('hide-text')
    }
  }

  //set first tab to active with class
  tabButton[0].classList.add('active')

  //Loop through the tabButton
  for (var i = 0; i < tabButton.length; i++){
    tabButton[i].addEventListener('click', function(e){
      e.preventDefault()
      // hide all tabs by adding class hide-text (reset)
      for (var i = 0; i < tabContent.length; i++){
        tabContent[i].classList.add('hide-text')
      }

      //remove active class from all tab button (reset)
      for (var i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove('active')
      }
      //add active class to item clicked
      this.classList.add('active')

      //get the href value of the item clicked
      var tabId = this.getAttribute('href')
      //checking
      //console.log(tabId)

      //show the correlating tab by removing hide-text class
      tabId = document.querySelector(tabId)
      //checking
      //console.log(tabId)
      tabId.classList.remove('hide-text')
    })
  }
