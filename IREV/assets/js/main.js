/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./IREV/src/js/header.js":
/*!*******************************!*\
  !*** ./IREV/src/js/header.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.header_menu_item');
  var dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
  var dropdownContainer = document.querySelector('.nav_dropdown_container');
  var dropdownContents = document.querySelectorAll('[data-dropdown-content]');
  var closeTimeout;
  var leaveTimeout;
  var activeTrigger = null;
  menuItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      clearTimeout(closeTimeout);
      clearTimeout(leaveTimeout);
      menuItems.forEach(function (i) {
        return i !== item && i.classList.remove('active');
      });
      item.classList.add('active');
    });
    item.addEventListener('mouseleave', function () {
      leaveTimeout = setTimeout(function () {
        if (!isMouseOverDropdown()) {
          item.classList.remove('active');
          activeTrigger = null;
          closeAllDropdowns();
        }
      }, 100);
    });
  });
  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('mouseenter', function () {
      var _this = this;
      clearTimeout(closeTimeout);
      menuItems.forEach(function (i) {
        return i !== _this && i.classList.remove('active');
      });
      this.classList.add('active');
      activeTrigger = this;
      var dropdownType = this.dataset.dropdownTrigger;
      openDropdown(dropdownType);
    });
    trigger.addEventListener('mouseleave', function () {
      closeTimeout = setTimeout(function () {
        if (!isMouseOverDropdown()) closeAllDropdowns();
      }, 100);
    });
  });
  if (dropdownContainer) {
    dropdownContainer.addEventListener('mouseenter', function () {
      return clearTimeout(closeTimeout);
    });
    dropdownContainer.addEventListener('mouseleave', function () {
      closeTimeout = setTimeout(closeAllDropdowns, 100);
    });
  }
  function openDropdown(type) {
    closeAllDropdowns(false);
    dropdownContainer.classList.add('active');
    var targetContent = document.querySelector("[data-dropdown-content=\"".concat(type, "\"]"));
    if (targetContent) targetContent.style.display = 'flex';
  }
  function closeAllDropdowns() {
    var clearActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    dropdownContainer.classList.remove('active');
    dropdownContents.forEach(function (content) {
      return content.style.display = 'none';
    });
    if (clearActive) {
      menuItems.forEach(function (i) {
        return i.classList.remove('active');
      });
      dropdownTriggers.forEach(function (t) {
        return t.classList.remove('active');
      });
      activeTrigger = null;
    }
  }
  function isMouseOverDropdown() {
    return dropdownContainer.matches(':hover') || activeTrigger && activeTrigger.matches(':hover');
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllDropdowns();
  });
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear1.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear1.js ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./IREV/src/js/home/home-gear2.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear2.js ***!
  \****************************************/
/***/ (() => {

var container = document.querySelector('.home_gear2_lower_container');
var nitroImg = document.querySelector('.nitro-effect img');
var revText = document.querySelector('.home_gear2_lower_container_rev');
function updateScrollAnimation() {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  var rect = container.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  var progress = 1 - rect.top / windowHeight;
  progress = Math.min(Math.max(progress, 0), 1);
  var shift = Math.min(1220 - revText.offsetWidth, window.innerWidth - revText.offsetWidth - 60);
  revText.style.transform = "translateX(".concat(progress * shift, "px)");
  nitroImg.style.transform = "scaleX(".concat(progress, ")");
}
function onScroll() {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  requestAnimationFrame(updateScrollAnimation);
}
window.addEventListener('scroll', onScroll);
window.addEventListener('resize', updateScrollAnimation);
updateScrollAnimation();

// parallax
document.addEventListener('DOMContentLoaded', function () {
  var partnersec = document.querySelector('.home');
  if (!partnersec) return;
  var partnerSection = document.querySelector('.home_gear2_upper_container');
  var parallaxImg = document.querySelector('.home_gear2_upper_container img');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.classList.add('parallax');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear3.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear3.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var avatarButtons = document.querySelectorAll(".avatar-item button");
  var reviewsContainer = document.querySelector(".home_gear3_reviews");
  var reviews = document.querySelectorAll(".home_gear3_reviews_review");
  function centerReview(targetClient) {
    var activeReview = document.querySelector(".home_gear3_reviews_review[data-client=\"".concat(targetClient, "\"]"));
    if (!activeReview) return;
    var containerWidth = reviewsContainer.offsetWidth;
    var reviewWidth = activeReview.offsetWidth;
    var gap = 40;
    var reviewIndex = Array.from(reviews).indexOf(activeReview);
    var totalItemsWidth = reviewIndex * (reviewWidth + gap);
    var offset = containerWidth / 2 - reviewWidth / 2 - totalItemsWidth;
    reviewsContainer.style.transition = "transform 0.6s ease";
    reviewsContainer.style.transform = "translateX(".concat(offset, "px)");
  }
  function switchReview(target) {
    document.querySelectorAll(".avatar-item").forEach(function (a) {
      return a.classList.remove("selected");
    });
    reviews.forEach(function (r) {
      return r.classList.remove("selected");
    });
    var selectedAvatar = document.querySelector(".avatar-item button[data-trigger=\"".concat(target, "\"]")).closest(".avatar-item");
    var activeReview = document.querySelector(".home_gear3_reviews_review[data-client=\"".concat(target, "\"]"));
    if (selectedAvatar && activeReview) {
      selectedAvatar.classList.add("selected");
      activeReview.classList.add("selected");
      centerReview(target);
    }
  }
  avatarButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = button.getAttribute("data-trigger");
      switchReview(target);
    });
  });
  function initCenterReview() {
    setTimeout(function () {
      var initialSelected = document.querySelector('.avatar-item.selected button');
      if (initialSelected) {
        var initialTarget = initialSelected.getAttribute("data-trigger");
        centerReview(initialTarget);
      }
    }, 100);
  }
  initCenterReview();
  window.addEventListener('resize', function () {
    var currentSelected = document.querySelector('.avatar-item.selected button');
    if (currentSelected) {
      var currentTarget = currentSelected.getAttribute("data-trigger");
      setTimeout(function () {
        return centerReview(currentTarget);
      }, 50);
    }
  });
});

// cases
document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.home_gear3_lower_container');
  var cases = document.querySelectorAll('.home_gear3_lower_container .case');
  var config = {
    triggerOffset: 0.3,
    stepDelay: 0.15,
    animationDistance: 30
  };
  function handleScrollAnimation() {
    if (!container) return;
    var containerRect = container.getBoundingClientRect();
    var containerTop = containerRect.top;
    var containerHeight = containerRect.height;
    var windowHeight = window.innerHeight;
    var containerBottom = containerTop + containerHeight;
    var triggerPoint = windowHeight * config.triggerOffset;
    if (containerTop < windowHeight - triggerPoint && containerBottom > triggerPoint) {
      var visibleHeight = Math.min(containerBottom, windowHeight) - Math.max(containerTop, 0);
      var maxScrollable = containerHeight - windowHeight + windowHeight * config.triggerOffset;
      var scrolled = -containerTop + windowHeight * config.triggerOffset;
      var scrollProgress = Math.max(0, Math.min(1, scrolled / maxScrollable));
      cases.forEach(function (caseEl, index) {
        var threshold = index * config.stepDelay;
        if (scrollProgress >= threshold) {
          caseEl.classList.add('case-visible');
          caseEl.classList.remove('case-hidden');
        } else {
          caseEl.classList.add('case-hidden');
          caseEl.classList.remove('case-visible');
        }
      });
    } else {
      cases.forEach(function (caseEl) {
        caseEl.classList.add('case-hidden');
        caseEl.classList.remove('case-visible');
      });
    }
  }
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        handleScrollAnimation();
        ticking = false;
      });
      ticking = true;
    }
  }
  handleScrollAnimation();
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
});

// parallax
document.addEventListener('DOMContentLoaded', function () {
  var partnersec = document.querySelector('.home');
  if (!partnersec) return;
  var partnerSection = document.querySelector('.home_gear3_container');
  var parallaxImg = document.querySelector('.home_gear3_background');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.classList.add('parallax');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear4.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear4.js ***!
  \****************************************/
/***/ (() => {

// parallax
document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home_gear4_container');
  var parallaxImg = document.querySelectorAll('.home_gear4_container img');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.forEach(function (img) {
      return img.classList.add('parallax');
    });
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var partnersec = document.querySelector('.home');
  if (!partnersec) return;
  var partnerSection = document.querySelector('.home_gear4_lower_container');
  var parallaxImg = document.querySelectorAll('.gear4back');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.forEach(function (img) {
      return img.classList.add('parallax');
    });
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear5.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear5.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var accordionItems = document.querySelectorAll('.accordion_item');
  accordionItems.forEach(function (item) {
    var button = item.querySelector('button');
    if (button) {
      button.addEventListener('click', function () {
        if (item.classList.contains('opened')) {
          item.classList.remove('opened');
        } else {
          accordionItems.forEach(function (otherItem) {
            otherItem.classList.remove('opened');
          });
          item.classList.add('opened');
        }
      });
    }
  });
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear6.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear6.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home_gear6_container');
  var parallaxImg = document.querySelectorAll('.home_gear6_container img');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.forEach(function (img) {
      return img.classList.add('parallax');
    });
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-popup.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-popup.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var popupOverlay = document.querySelector('.home_popup_overlay');
  var closeButton = document.querySelector('.home_popup_content_upper button');
  var form = document.querySelector('.home_popup_content form');
  var openButtons = document.querySelectorAll('.home_represent_form_container_button, .open_modal');
  var timerElement = document.querySelector('.home_popup_content_label_wrapper_counter');
  var timerInterval = null;
  function startTimer() {
    if (!timerElement) return;
    var totalSeconds = 15 * 60;
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    timerInterval = setInterval(function () {
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor(totalSeconds % 3600 / 60);
      var seconds = totalSeconds % 60;
      var formattedTime = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
      timerElement.textContent = formattedTime;
      if (--totalSeconds < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00:00";
        timerComplete();
      }
    }, 1000);
  }
  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
  function resetTimer() {
    stopTimer();
    if (timerElement) {
      timerElement.textContent = "00:15:00";
    }
  }
  function timerComplete() {
    console.log("Таймер завершен!");
  }
  function openPopup() {
    if (popupOverlay) {
      popupOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        popupOverlay.classList.add('active');
        startTimer();
      }, 10);
    }
  }
  function closePopup() {
    if (popupOverlay) {
      popupOverlay.classList.remove('active');
      setTimeout(function () {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = '';
        stopTimer();
        resetTimer();
      }, 300);
    }
  }
  if (openButtons) {
    openButtons.forEach(function (openButton) {
      openButton.addEventListener('click', function (e) {
        e.preventDefault();
        openPopup();
      });
    });
  }
  if (closeButton) {
    closeButton.addEventListener('click', closePopup);
  }
  if (popupOverlay) {
    popupOverlay.addEventListener('click', function (e) {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  // video
  var video = document.getElementById('popupVideo');
  var videoContainer = document.querySelector('.home_popup_content_lower_rightcont_video');
  var playButton = videoContainer.querySelector('img'); // находим изображение кнопки play

  function updatePlayButtonVisibility() {
    if (video.paused) {
      playButton.style.display = 'block';
    } else {
      playButton.style.display = 'none';
    }
  }
  video.addEventListener('play', updatePlayButtonVisibility);
  video.addEventListener('pause', updatePlayButtonVisibility);
  video.addEventListener('ended', function () {
    playButton.style.display = 'block';
  });
  videoContainer.addEventListener('click', function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  updatePlayButtonVisibility();
});
document.addEventListener('DOMContentLoaded', function () {
  var policyCheckbox = document.getElementById('policyCheckbox');
  var agreeCheckbox = document.getElementById('agreeCheckbox');
  var submitButton = document.getElementById('submitButton');
  if (!policyCheckbox || !agreeCheckbox || !submitButton) {
    return;
  }
  var checkboxes = [policyCheckbox, agreeCheckbox];
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      this.classList.toggle('selected');
      var bothChecked = policyCheckbox.checked && agreeCheckbox.checked;
      if (bothChecked) {
        submitButton.classList.add('selected');
        submitButton.disabled = false;
      } else {
        submitButton.classList.remove('selected');
        submitButton.disabled = true;
      }
    });
  });
});

/***/ }),

/***/ "./IREV/src/js/home/home-represent.js":
/*!********************************************!*\
  !*** ./IREV/src/js/home/home-represent.js ***!
  \********************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var testDriveButton = document.querySelector('.home_represent_form_container_button');
  var input = document.querySelector('.home_represent_form_container_input');
  function checkInputValue() {
    if (input.value.trim() !== '') {
      testDriveButton.classList.add('has-value');
    } else {
      testDriveButton.classList.remove('has-value');
    }
  }
  input.addEventListener('input', checkInputValue);
  checkInputValue();
});
document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  var counterElement = document.querySelector('.home_represent_counter span');
  var counterDiv = document.querySelector('.home_represent_counter');
  var signInButton = document.querySelector('.header_signIn');
  var input = document.querySelector('.home_represent_form_container_input');
  var elements = [counterDiv, signInButton, input];
  var totalSeconds = 3 * 100;
  function updateTimer() {
    totalSeconds--;
    if (totalSeconds < 0) {
      elements.forEach(function (element) {
        return element.classList.remove('one', 'two');
      });
      elements.forEach(function (element) {
        return element.classList.add('go');
      });
      counterElement.textContent = '00:00,00';
      return;
    }
    var seconds = Math.floor(totalSeconds / 100);
    var hundredths = totalSeconds % 100;
    var formattedSeconds = seconds.toString().padStart(2, '0');
    var formattedHundredths = hundredths.toString().padStart(2, '0');
    counterElement.textContent = "00:".concat(formattedSeconds, ",").concat(formattedHundredths);
    switch (totalSeconds) {
      case 200:
        {
          elements.forEach(function (element) {
            return element.classList.add('two');
          });
          break;
        }
      case 100:
        {
          elements.forEach(function (element) {
            return element.classList.remove('two');
          });
          elements.forEach(function (element) {
            return element.classList.add('one');
          });
          break;
        }
    }
    setTimeout(updateTimer, 10);
  }
  setTimeout(updateTimer, 10);
});
document.addEventListener('DOMContentLoaded', function () {
  // email save

  var mainEmailInput = document.querySelector('.home_represent_form_container_input');
  var popupEmailInput = document.querySelector('.home_popup_content_form_inputs input[type="email"]');
  if (mainEmailInput && popupEmailInput) {
    mainEmailInput.addEventListener('input', function () {
      popupEmailInput.value = this.value;
    });
    popupEmailInput.addEventListener('input', function () {
      mainEmailInput.value = this.value;
    });
    if (mainEmailInput.value) {
      popupEmailInput.value = mainEmailInput.value;
    }
  }

  // checkbox save
});

// paralax
document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  var parallaxImg = document.querySelector('.home_represent_backgroundImg');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var scrolled = window.pageYOffset;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      document.documentElement.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.classList.add('parallax');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-video-popup.js":
/*!**********************************************!*\
  !*** ./IREV/src/js/home/home-video-popup.js ***!
  \**********************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var videoWrapper = document.querySelector('.home_represent_lowerWrapper_video');
  var modalOverlay = document.getElementById('modalOverlay');
  var originalVideo = videoWrapper ? videoWrapper.querySelector('video') : null;
  var modalVideo = modalOverlay ? modalOverlay.querySelector('video') : null;
  var playButton = videoWrapper ? videoWrapper.querySelector('.video_player button') : null;
  var originalPlayImg = videoWrapper ? videoWrapper.querySelector('.video_cont img') : null;
  var modalPlayImg = modalOverlay ? modalOverlay.querySelector('.modal-video img') : null;
  var currentTime = 0;
  function togglePlayButton(video, playImg) {
    if (!video || !playImg) return;
    if (video.paused) {
      playImg.style.display = 'block';
    } else {
      playImg.style.display = 'none';
    }
  }
  function setupVideoListeners(video, playImg) {
    if (!video || !playImg) return;
    video.addEventListener('play', function () {
      playImg.style.display = 'none';
    });
    video.addEventListener('pause', function () {
      playImg.style.display = 'block';
    });
    video.addEventListener('ended', function () {
      playImg.style.display = 'block';
      video.currentTime = 0;
    });
  }
  if (originalVideo && originalPlayImg) {
    setupVideoListeners(originalVideo, originalPlayImg);
    togglePlayButton(originalVideo, originalPlayImg);
  }
  if (modalVideo && modalPlayImg) {
    setupVideoListeners(modalVideo, modalPlayImg);
    modalPlayImg.style.display = 'none';
  }
  if (playButton && originalVideo) {
    playButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (originalVideo.paused) {
        originalVideo.play();
      } else {
        originalVideo.pause();
      }
    });
  }
  function openModalWithVideo() {
    if (!originalVideo || !modalVideo) return;
    currentTime = originalVideo.currentTime;
    originalVideo.pause();
    if (originalPlayImg) {
      originalPlayImg.style.display = 'none';
    }
    modalVideo.currentTime = currentTime;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalVideo.play()["catch"](function (e) {
      return console.log('Modal video play error:', e);
    });
    if (modalPlayImg) {
      modalPlayImg.style.display = 'none';
    }
  }
  function closeModal() {
    if (!originalVideo || !modalVideo) return;
    currentTime = modalVideo.currentTime;
    modalVideo.pause();
    if (modalPlayImg) {
      modalPlayImg.style.display = 'none';
    }
    originalVideo.currentTime = currentTime;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (originalPlayImg) {
      originalPlayImg.style.display = 'block';
    }
    resetForm();
  }
  if (videoWrapper && modalOverlay) {
    videoWrapper.addEventListener('click', function (e) {
      // Проверяем, что клик не по кнопке управления в video_player
      if (!playButton || !playButton.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        openModalWithVideo();
      }
    });
  }
  if (originalPlayImg) {
    originalPlayImg.addEventListener('click', function (e) {
      e.stopPropagation();
      openModalWithVideo();
    });
  }
  if (modalVideo) {
    modalVideo.addEventListener('click', function (e) {
      e.stopPropagation();
      if (modalVideo.paused) {
        modalVideo.play();
      } else {
        modalVideo.pause();
      }
    });
  }
  if (modalPlayImg) {
    modalPlayImg.addEventListener('click', function (e) {
      e.stopPropagation();
      modalVideo.play();
    });
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
  var submitButton = document.querySelector('.form-button');
  var emailInput = document.querySelector('.form-input');
  if (submitButton && emailInput) {
    submitButton.addEventListener('click', function (e) {
      e.preventDefault();
      var email = emailInput.value.trim();
      if (validateEmail(email)) {
        console.log('Email submitted:', email);
        closeModal();
      } else {
        showErrorInPlaceholder();
      }
    });
    emailInput.addEventListener('input', function () {
      if (this.classList.contains('error')) {
        resetForm();
      }
    });
  }
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function showErrorInPlaceholder() {
    if (emailInput) {
      emailInput.value = '';
      emailInput.placeholder = 'Please enter a valid email address';
      emailInput.classList.add('error');
    }
  }
  function resetForm() {
    if (emailInput) {
      emailInput.value = '';
      emailInput.placeholder = 'Enter e-mail';
      emailInput.classList.remove('error');
    }
  }
});

/***/ }),

/***/ "./IREV/src/scss/index.scss":
/*!**********************************!*\
  !*** ./IREV/src/scss/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./IREV/src/js/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./IREV/src/scss/index.scss");

__webpack_require__(/*! ./header.js */ "./IREV/src/js/header.js");
__webpack_require__(/*! ./home/home-represent.js */ "./IREV/src/js/home/home-represent.js");
__webpack_require__(/*! ./home/home-popup.js */ "./IREV/src/js/home/home-popup.js");
__webpack_require__(/*! ./home/home-video-popup.js */ "./IREV/src/js/home/home-video-popup.js");
__webpack_require__(/*! ./home/home-gear1.js */ "./IREV/src/js/home/home-gear1.js");
__webpack_require__(/*! ./home/home-gear2.js */ "./IREV/src/js/home/home-gear2.js");
__webpack_require__(/*! ./home/home-gear3.js */ "./IREV/src/js/home/home-gear3.js");
__webpack_require__(/*! ./home/home-gear4.js */ "./IREV/src/js/home/home-gear4.js");
__webpack_require__(/*! ./home/home-gear5.js */ "./IREV/src/js/home/home-gear5.js");
__webpack_require__(/*! ./home/home-gear6.js */ "./IREV/src/js/home/home-gear6.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMsOERBQXNCLENBQUM7QUFDL0JBLG1CQUFPLENBQUMsOERBQXNCLENBQUM7QUFDL0JBLG1CQUFPLENBQUMsOERBQXNCLENBQUM7QUFDL0JBLG1CQUFPLENBQUMsOERBQXNCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0lSRVYvLi9JUkVWL3NyYy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2hvbWUvaG9tZS1nZWFyMi5qcyIsIndlYnBhY2s6Ly9JUkVWLy4vSVJFVi9zcmMvanMvaG9tZS9ob21lLWdlYXIzLmpzIiwid2VicGFjazovL0lSRVYvLi9JUkVWL3NyYy9qcy9ob21lL2hvbWUtZ2VhcjQuanMiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2hvbWUvaG9tZS1nZWFyNS5qcyIsIndlYnBhY2s6Ly9JUkVWLy4vSVJFVi9zcmMvanMvaG9tZS9ob21lLWdlYXI2LmpzIiwid2VicGFjazovL0lSRVYvLi9JUkVWL3NyYy9qcy9ob21lL2hvbWUtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2hvbWUvaG9tZS1yZXByZXNlbnQuanMiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2hvbWUvaG9tZS12aWRlby1wb3B1cC5qcyIsIndlYnBhY2s6Ly9JUkVWLy4vSVJFVi9zcmMvc2Nzcy9pbmRleC5zY3NzPzcyNGEiLCJ3ZWJwYWNrOi8vSVJFVi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JUkVWL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfbWVudV9pdGVtJyk7XHJcbiAgICBjb25zdCBkcm9wZG93blRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcGRvd24tdHJpZ2dlcl0nKTtcclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9kcm9wZG93bl9jb250YWluZXInKTtcclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wZG93bi1jb250ZW50XScpO1xyXG4gICAgbGV0IGNsb3NlVGltZW91dDtcclxuICAgIGxldCBsZWF2ZVRpbWVvdXQ7XHJcbiAgICBsZXQgYWN0aXZlVHJpZ2dlciA9IG51bGw7XHJcblxyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY2xvc2VUaW1lb3V0KTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxlYXZlVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICBtZW51SXRlbXMuZm9yRWFjaChpID0+IGkgIT09IGl0ZW0gJiYgaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgbGVhdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTW91c2VPdmVyRHJvcGRvd24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVHJpZ2dlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxEcm9wZG93bnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyb3Bkb3duVHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcclxuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dCk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtcy5mb3JFYWNoKGkgPT4gaSAhPT0gdGhpcyAmJiBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGFjdGl2ZVRyaWdnZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93blR5cGUgPSB0aGlzLmRhdGFzZXQuZHJvcGRvd25UcmlnZ2VyO1xyXG4gICAgICAgICAgICBvcGVuRHJvcGRvd24oZHJvcGRvd25UeXBlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNNb3VzZU92ZXJEcm9wZG93bigpKSBjbG9zZUFsbERyb3Bkb3ducygpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGRyb3Bkb3duQ29udGFpbmVyKSB7XHJcbiAgICAgICAgZHJvcGRvd25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IGNsZWFyVGltZW91dChjbG9zZVRpbWVvdXQpKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsb3NlQWxsRHJvcGRvd25zLCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5Ecm9wZG93bih0eXBlKSB7XHJcbiAgICAgICAgY2xvc2VBbGxEcm9wZG93bnMoZmFsc2UpO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZHJvcGRvd24tY29udGVudD1cIiR7dHlwZX1cIl1gKTtcclxuICAgICAgICBpZiAodGFyZ2V0Q29udGVudCkgdGFyZ2V0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsRHJvcGRvd25zKGNsZWFyQWN0aXZlID0gdHJ1ZSkge1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudHMuZm9yRWFjaChjb250ZW50ID0+IGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XHJcblxyXG4gICAgICAgIGlmIChjbGVhckFjdGl2ZSkge1xyXG4gICAgICAgICAgICBtZW51SXRlbXMuZm9yRWFjaChpID0+IGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICBkcm9wZG93blRyaWdnZXJzLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgYWN0aXZlVHJpZ2dlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTW91c2VPdmVyRHJvcGRvd24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRyb3Bkb3duQ29udGFpbmVyLm1hdGNoZXMoJzpob3ZlcicpIHx8XHJcbiAgICAgICAgICAgIChhY3RpdmVUcmlnZ2VyICYmIGFjdGl2ZVRyaWdnZXIubWF0Y2hlcygnOmhvdmVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBjbG9zZUFsbERyb3Bkb3ducygpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9nZWFyMl9sb3dlcl9jb250YWluZXInKTtcclxuY29uc3Qgbml0cm9JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubml0cm8tZWZmZWN0IGltZycpO1xyXG5jb25zdCByZXZUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjJfbG93ZXJfY29udGFpbmVyX3JldicpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2Nyb2xsQW5pbWF0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHBhcnRuZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuXHJcbiAgICBpZiAoIXBhcnRuZXJTZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgbGV0IHByb2dyZXNzID0gMSAtIHJlY3QudG9wIC8gd2luZG93SGVpZ2h0O1xyXG4gICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChwcm9ncmVzcywgMCksIDEpO1xyXG5cclxuICAgIGNvbnN0IHNoaWZ0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgMTIyMCAtIHJldlRleHQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggLSByZXZUZXh0Lm9mZnNldFdpZHRoIC0gNjBcclxuICAgICk7XHJcblxyXG4gICAgcmV2VGV4dC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Byb2dyZXNzICogc2hpZnR9cHgpYDtcclxuXHJcbiAgICBuaXRyb0ltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7cHJvZ3Jlc3N9KWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5cclxuICAgIGlmICghcGFydG5lclNlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU2Nyb2xsQW5pbWF0aW9uKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNjcm9sbEFuaW1hdGlvbik7XHJcblxyXG51cGRhdGVTY3JvbGxBbmltYXRpb24oKTtcclxuXHJcblxyXG5cclxuLy8gcGFyYWxsYXhcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcGFydG5lcnNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XHJcbiAgICBpZiAoIXBhcnRuZXJzZWMpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHBhcnRuZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjJfdXBwZXJfY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgcGFyYWxsYXhJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9nZWFyMl91cHBlcl9jb250YWluZXIgaW1nJyk7XHJcblxyXG4gICAgaWYgKHBhcmFsbGF4SW1nICYmICF3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgcGFyYWxsYXhJbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0bmVyU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAtcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4zO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoc2Nyb2xsZWQgKiBzcGVlZCkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgcGFydG5lclNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFyYWxsYXgtb2Zmc2V0Jywgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhdGFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXZhdGFyLWl0ZW0gYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgcmV2aWV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9nZWFyM19yZXZpZXdzXCIpO1xyXG4gICAgY29uc3QgcmV2aWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9nZWFyM19yZXZpZXdzX3Jldmlld1wiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjZW50ZXJSZXZpZXcodGFyZ2V0Q2xpZW50KSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvbWVfZ2VhcjNfcmV2aWV3c19yZXZpZXdbZGF0YS1jbGllbnQ9XCIke3RhcmdldENsaWVudH1cIl1gKTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVJldmlldykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHJldmlld3NDb250YWluZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgcmV2aWV3V2lkdGggPSBhY3RpdmVSZXZpZXcub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgZ2FwID0gNDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJldmlld0luZGV4ID0gQXJyYXkuZnJvbShyZXZpZXdzKS5pbmRleE9mKGFjdGl2ZVJldmlldyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXNXaWR0aCA9IHJldmlld0luZGV4ICogKHJldmlld1dpZHRoICsgZ2FwKTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSAoY29udGFpbmVyV2lkdGggLyAyKSAtIChyZXZpZXdXaWR0aCAvIDIpIC0gdG90YWxJdGVtc1dpZHRoO1xyXG5cclxuICAgICAgICByZXZpZXdzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjZzIGVhc2VcIjtcclxuICAgICAgICByZXZpZXdzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoUmV2aWV3KHRhcmdldCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXZhdGFyLWl0ZW1cIikuZm9yRWFjaChhID0+IGEuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcclxuICAgICAgICByZXZpZXdzLmZvckVhY2gociA9PiByLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmF2YXRhci1pdGVtIGJ1dHRvbltkYXRhLXRyaWdnZXI9XCIke3RhcmdldH1cIl1gKS5jbG9zZXN0KFwiLmF2YXRhci1pdGVtXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob21lX2dlYXIzX3Jldmlld3NfcmV2aWV3W2RhdGEtY2xpZW50PVwiJHt0YXJnZXR9XCJdYCk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZEF2YXRhciAmJiBhY3RpdmVSZXZpZXcpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRBdmF0YXIuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBhY3RpdmVSZXZpZXcuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBjZW50ZXJSZXZpZXcodGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXZhdGFyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgIHN3aXRjaFJldmlldyh0YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENlbnRlclJldmlldygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhci1pdGVtLnNlbGVjdGVkIGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbFNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsVGFyZ2V0ID0gaW5pdGlhbFNlbGVjdGVkLmdldEF0dHJpYnV0ZShcImRhdGEtdHJpZ2dlclwiKTtcclxuICAgICAgICAgICAgICAgIGNlbnRlclJldmlldyhpbml0aWFsVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENlbnRlclJldmlldygpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhci1pdGVtLnNlbGVjdGVkIGJ1dHRvbicpO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGN1cnJlbnRTZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2VudGVyUmV2aWV3KGN1cnJlbnRUYXJnZXQpLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gY2FzZXNcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjNfbG93ZXJfY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX2dlYXIzX2xvd2VyX2NvbnRhaW5lciAuY2FzZScpO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICB0cmlnZ2VyT2Zmc2V0OiAwLjMsXHJcbiAgICAgICAgc3RlcERlbGF5OiAwLjE1LFxyXG4gICAgICAgIGFuaW1hdGlvbkRpc3RhbmNlOiAzMFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGxBbmltYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJUb3AgPSBjb250YWluZXJSZWN0LnRvcDtcclxuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXJSZWN0LmhlaWdodDtcclxuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckJvdHRvbSA9IGNvbnRhaW5lclRvcCArIGNvbnRhaW5lckhlaWdodDtcclxuICAgICAgICBjb25zdCB0cmlnZ2VyUG9pbnQgPSB3aW5kb3dIZWlnaHQgKiBjb25maWcudHJpZ2dlck9mZnNldDtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lclRvcCA8IHdpbmRvd0hlaWdodCAtIHRyaWdnZXJQb2ludCAmJiBjb250YWluZXJCb3R0b20gPiB0cmlnZ2VyUG9pbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUhlaWdodCA9IE1hdGgubWluKGNvbnRhaW5lckJvdHRvbSwgd2luZG93SGVpZ2h0KSAtIE1hdGgubWF4KGNvbnRhaW5lclRvcCwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFNjcm9sbGFibGUgPSBjb250YWluZXJIZWlnaHQgLSB3aW5kb3dIZWlnaHQgKyAod2luZG93SGVpZ2h0ICogY29uZmlnLnRyaWdnZXJPZmZzZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxlZCA9IC1jb250YWluZXJUb3AgKyAod2luZG93SGVpZ2h0ICogY29uZmlnLnRyaWdnZXJPZmZzZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQcm9ncmVzcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHNjcm9sbGVkIC8gbWF4U2Nyb2xsYWJsZSkpO1xyXG5cclxuICAgICAgICAgICAgY2FzZXMuZm9yRWFjaCgoY2FzZUVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gaW5kZXggKiBjb25maWcuc3RlcERlbGF5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQcm9ncmVzcyA+PSB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlRWwuY2xhc3NMaXN0LmFkZCgnY2FzZS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhc2UtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VFbC5jbGFzc0xpc3QuYWRkKCdjYXNlLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYXNlLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FzZXMuZm9yRWFjaChjYXNlRWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FzZUVsLmNsYXNzTGlzdC5hZGQoJ2Nhc2UtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBjYXNlRWwuY2xhc3NMaXN0LnJlbW92ZSgnY2FzZS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JvbGxBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTY3JvbGxBbmltYXRpb24oKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIHBhcmFsbGF4XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBhcnRuZXJzZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4gICAgaWYgKCFwYXJ0bmVyc2VjKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBwYXJ0bmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2dlYXIzX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFsbGF4SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjNfYmFja2dyb3VuZCcpO1xyXG5cclxuICAgIGlmIChwYXJhbGxheEltZyAmJiAhd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcykge1xyXG4gICAgICAgIHBhcmFsbGF4SW1nLmNsYXNzTGlzdC5hZGQoJ3BhcmFsbGF4Jyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gcGFydG5lclNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gLXJlY3QudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMztcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHNjcm9sbGVkICogc3BlZWQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHBhcnRuZXJTZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXBhcmFsbGF4LW9mZnNldCcsIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLyBwYXJhbGxheFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9nZWFyNF9jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBwYXJhbGxheEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX2dlYXI0X2NvbnRhaW5lciBpbWcnKTtcclxuXHJcbiAgICBpZiAocGFyYWxsYXhJbWcgJiYgIXdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMpIHtcclxuICAgICAgICBwYXJhbGxheEltZy5mb3JFYWNoKGltZz0+aW1nLmNsYXNzTGlzdC5hZGQoJ3BhcmFsbGF4JykpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gcGFydG5lclNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gLXJlY3QudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMztcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHNjcm9sbGVkICogc3BlZWQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHBhcnRuZXJTZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXBhcmFsbGF4LW9mZnNldCcsIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBhcnRuZXJzZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4gICAgaWYgKCFwYXJ0bmVyc2VjKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBwYXJ0bmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2dlYXI0X2xvd2VyX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFsbGF4SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdlYXI0YmFjaycpO1xyXG5cclxuICAgIGlmIChwYXJhbGxheEltZyAmJiAhd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcykge1xyXG4gICAgICAgIHBhcmFsbGF4SW1nLmZvckVhY2goaW1nPT5pbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0bmVyU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAtcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4zO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoc2Nyb2xsZWQgKiBzcGVlZCkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgcGFydG5lclNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFyYWxsYXgtb2Zmc2V0Jywgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9pdGVtJyk7XHJcblxyXG4gICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goKG90aGVySXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBwYXJ0bmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2dlYXI2X2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFsbGF4SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfZ2VhcjZfY29udGFpbmVyIGltZycpO1xyXG5cclxuICAgIGlmIChwYXJhbGxheEltZyAmJiAhd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcykge1xyXG4gICAgICAgIHBhcmFsbGF4SW1nLmZvckVhY2goaW1nPT5pbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0bmVyU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAtcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4zO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoc2Nyb2xsZWQgKiBzcGVlZCkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgcGFydG5lclNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFyYWxsYXgtb2Zmc2V0Jywgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcG9wdXBPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfcG9wdXBfb3ZlcmxheScpO1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9wb3B1cF9jb250ZW50X3VwcGVyIGJ1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3BvcHVwX2NvbnRlbnQgZm9ybScpO1xyXG4gICAgY29uc3Qgb3BlbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9yZXByZXNlbnRfZm9ybV9jb250YWluZXJfYnV0dG9uLCAub3Blbl9tb2RhbCcpO1xyXG4gICAgY29uc3QgdGltZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfcG9wdXBfY29udGVudF9sYWJlbF93cmFwcGVyX2NvdW50ZXInKTtcclxuICAgIGxldCB0aW1lckludGVydmFsID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIGlmICghdGltZXJFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0b3RhbFNlY29uZHMgPSAxNSAqIDYwO1xyXG5cclxuICAgICAgICBpZiAodGltZXJJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9XHJcbiAgICAgICAgICAgICAgICBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJykgKyAnOicgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykgKyAnOicgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICB0aW1lckVsZW1lbnQudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKC0tdG90YWxTZWNvbmRzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWxlbWVudC50ZXh0Q29udGVudCA9IFwiMDA6MDA6MDBcIjtcclxuICAgICAgICAgICAgICAgIHRpbWVyQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcclxuICAgICAgICBpZiAodGltZXJJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcclxuICAgICAgICBzdG9wVGltZXIoKTtcclxuICAgICAgICBpZiAodGltZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRpbWVyRWxlbWVudC50ZXh0Q29udGVudCA9IFwiMDA6MTU6MDBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGltZXJDb21wbGV0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCi0LDQudC80LXRgCDQt9Cw0LLQtdGA0YjQtdC9IVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuUG9wdXAoKSB7XHJcbiAgICAgICAgaWYgKHBvcHVwT3ZlcmxheSkge1xyXG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XHJcbiAgICAgICAgaWYgKHBvcHVwT3ZlcmxheSkge1xyXG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldFRpbWVyKCk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcGVuQnV0dG9ucykge1xyXG4gICAgICAgIG9wZW5CdXR0b25zLmZvckVhY2gob3BlbkJ1dHRvbj0+e1xyXG4gICAgICAgICAgICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgb3BlblBvcHVwKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9wdXBPdmVybGF5KSB7XHJcbiAgICAgICAgcG9wdXBPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwT3ZlcmxheSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB2aWRlb1xyXG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBWaWRlbycpO1xyXG4gICAgY29uc3QgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9wb3B1cF9jb250ZW50X2xvd2VyX3JpZ2h0Y29udF92aWRlbycpO1xyXG4gICAgY29uc3QgcGxheUJ1dHRvbiA9IHZpZGVvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpOyAvLyDQvdCw0YXQvtC00LjQvCDQuNC30L7QsdGA0LDQttC10L3QuNC1INC60L3QvtC/0LrQuCBwbGF5XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheUJ1dHRvblZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xyXG4gICAgICAgICAgICBwbGF5QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXlCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHVwZGF0ZVBsYXlCdXR0b25WaXNpYmlsaXR5KTtcclxuICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdXBkYXRlUGxheUJ1dHRvblZpc2liaWxpdHkpO1xyXG4gICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBwbGF5QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmlkZW9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHVwZGF0ZVBsYXlCdXR0b25WaXNpYmlsaXR5KCk7XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBvbGljeUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvbGljeUNoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBhZ3JlZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FncmVlQ2hlY2tib3gnKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdXR0b24nKTtcclxuXHJcbiAgICBpZiAoIXBvbGljeUNoZWNrYm94IHx8ICFhZ3JlZUNoZWNrYm94IHx8ICFzdWJtaXRCdXR0b24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IFtwb2xpY3lDaGVja2JveCwgYWdyZWVDaGVja2JveF07XHJcblxyXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm90aENoZWNrZWQgPSBwb2xpY3lDaGVja2JveC5jaGVja2VkICYmIGFncmVlQ2hlY2tib3guY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChib3RoQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0ZXN0RHJpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9yZXByZXNlbnRfZm9ybV9jb250YWluZXJfYnV0dG9uJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9mb3JtX2NvbnRhaW5lcl9pbnB1dCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXRWYWx1ZSgpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICB0ZXN0RHJpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVzdERyaXZlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy12YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrSW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgY2hlY2tJbnB1dFZhbHVlKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5cclxuICAgIGlmICghcGFydG5lclNlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY291bnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9yZXByZXNlbnRfY291bnRlciBzcGFuJyk7XHJcbiAgICBjb25zdCBjb3VudGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfcmVwcmVzZW50X2NvdW50ZXInKTtcclxuICAgIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfc2lnbkluJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9mb3JtX2NvbnRhaW5lcl9pbnB1dCcpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW2NvdW50ZXJEaXYsIHNpZ25JbkJ1dHRvbiwgaW5wdXRdO1xyXG5cclxuICAgIGxldCB0b3RhbFNlY29uZHMgPSAzICogMTAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRvdGFsU2Vjb25kcy0tO1xyXG5cclxuICAgICAgICBpZiAodG90YWxTZWNvbmRzIDwgMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJywgJ3R3bycpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dvJykpO1xyXG4gICAgICAgICAgICBjb3VudGVyRWxlbWVudC50ZXh0Q29udGVudCA9ICcwMDowMCwwMCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDEwMCk7XHJcbiAgICAgICAgY29uc3QgaHVuZHJlZHRocyA9IHRvdGFsU2Vjb25kcyAlIDEwMDtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkU2Vjb25kcyA9IHNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEh1bmRyZWR0aHMgPSBodW5kcmVkdGhzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuXHJcbiAgICAgICAgY291bnRlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgMDA6JHtmb3JtYXR0ZWRTZWNvbmRzfSwke2Zvcm1hdHRlZEh1bmRyZWR0aHN9YDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0b3RhbFNlY29uZHMpe1xyXG4gICAgICAgICAgICBjYXNlIDIwMDoge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTAwOiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJykpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZVRpbWVyLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCh1cGRhdGVUaW1lciwgMTApO1xyXG59KTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XHJcbiAgICAvLyBlbWFpbCBzYXZlXHJcblxyXG4gICAgY29uc3QgbWFpbkVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9yZXByZXNlbnRfZm9ybV9jb250YWluZXJfaW5wdXQnKTtcclxuICAgIGNvbnN0IHBvcHVwRW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3BvcHVwX2NvbnRlbnRfZm9ybV9pbnB1dHMgaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XHJcblxyXG4gICAgaWYgKG1haW5FbWFpbElucHV0ICYmIHBvcHVwRW1haWxJbnB1dCkge1xyXG4gICAgICAgIG1haW5FbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwb3B1cEVtYWlsSW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwb3B1cEVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW5FbWFpbElucHV0LnZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1haW5FbWFpbElucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHBvcHVwRW1haWxJbnB1dC52YWx1ZSA9IG1haW5FbWFpbElucHV0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVja2JveCBzYXZlXHJcblxyXG59KTtcclxuXHJcbi8vIHBhcmFsYXhcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5cclxuICAgIGlmICghcGFydG5lclNlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJhbGxheEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9iYWNrZ3JvdW5kSW1nJyk7XHJcblxyXG4gICAgaWYgKHBhcmFsbGF4SW1nICYmICF3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgcGFyYWxsYXhJbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMztcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHNjcm9sbGVkICogc3BlZWQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYXJhbGxheC1vZmZzZXQnLCBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghdGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmFsbGF4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHZpZGVvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9sb3dlcldyYXBwZXJfdmlkZW8nKTtcclxuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbE92ZXJsYXknKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmlkZW8gPSB2aWRlb1dyYXBwZXIgPyB2aWRlb1dyYXBwZXIucXVlcnlTZWxlY3RvcigndmlkZW8nKSA6IG51bGw7XHJcbiAgICBjb25zdCBtb2RhbFZpZGVvID0gbW9kYWxPdmVybGF5ID8gbW9kYWxPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykgOiBudWxsO1xyXG4gICAgY29uc3QgcGxheUJ1dHRvbiA9IHZpZGVvV3JhcHBlciA/IHZpZGVvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcudmlkZW9fcGxheWVyIGJ1dHRvbicpIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbFBsYXlJbWcgPSB2aWRlb1dyYXBwZXIgPyB2aWRlb1dyYXBwZXIucXVlcnlTZWxlY3RvcignLnZpZGVvX2NvbnQgaW1nJykgOiBudWxsO1xyXG4gICAgY29uc3QgbW9kYWxQbGF5SW1nID0gbW9kYWxPdmVybGF5ID8gbW9kYWxPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC12aWRlbyBpbWcnKSA6IG51bGw7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVQbGF5QnV0dG9uKHZpZGVvLCBwbGF5SW1nKSB7XHJcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhcGxheUltZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cFZpZGVvTGlzdGVuZXJzKHZpZGVvLCBwbGF5SW1nKSB7XHJcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhcGxheUltZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcmlnaW5hbFZpZGVvICYmIG9yaWdpbmFsUGxheUltZykge1xyXG4gICAgICAgIHNldHVwVmlkZW9MaXN0ZW5lcnMob3JpZ2luYWxWaWRlbywgb3JpZ2luYWxQbGF5SW1nKTtcclxuICAgICAgICB0b2dnbGVQbGF5QnV0dG9uKG9yaWdpbmFsVmlkZW8sIG9yaWdpbmFsUGxheUltZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsVmlkZW8gJiYgbW9kYWxQbGF5SW1nKSB7XHJcbiAgICAgICAgc2V0dXBWaWRlb0xpc3RlbmVycyhtb2RhbFZpZGVvLCBtb2RhbFBsYXlJbWcpO1xyXG4gICAgICAgIG1vZGFsUGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF5QnV0dG9uICYmIG9yaWdpbmFsVmlkZW8pIHtcclxuICAgICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxWaWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsVmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxWaWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsV2l0aFZpZGVvKCkge1xyXG4gICAgICAgIGlmICghb3JpZ2luYWxWaWRlbyB8fCAhbW9kYWxWaWRlbykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjdXJyZW50VGltZSA9IG9yaWdpbmFsVmlkZW8uY3VycmVudFRpbWU7XHJcblxyXG4gICAgICAgIG9yaWdpbmFsVmlkZW8ucGF1c2UoKTtcclxuICAgICAgICBpZiAob3JpZ2luYWxQbGF5SW1nKSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsUGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9kYWxWaWRlby5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICBtb2RhbFZpZGVvLnBsYXkoKS5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdNb2RhbCB2aWRlbyBwbGF5IGVycm9yOicsIGUpKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGFsUGxheUltZykge1xyXG4gICAgICAgICAgICBtb2RhbFBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBpZiAoIW9yaWdpbmFsVmlkZW8gfHwgIW1vZGFsVmlkZW8pIHJldHVybjtcclxuXHJcbiAgICAgICAgY3VycmVudFRpbWUgPSBtb2RhbFZpZGVvLmN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgICBtb2RhbFZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgaWYgKG1vZGFsUGxheUltZykge1xyXG4gICAgICAgICAgICBtb2RhbFBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9yaWdpbmFsVmlkZW8uY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcclxuXHJcbiAgICAgICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsUGxheUltZykge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldEZvcm0oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmlkZW9XcmFwcGVyICYmIG1vZGFsT3ZlcmxheSkge1xyXG4gICAgICAgIHZpZGVvV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRh9GC0L4g0LrQu9C40Log0L3QtSDQv9C+INC60L3QvtC/0LrQtSDRg9C/0YDQsNCy0LvQtdC90LjRjyDQsiB2aWRlb19wbGF5ZXJcclxuICAgICAgICAgICAgaWYgKCFwbGF5QnV0dG9uIHx8ICFwbGF5QnV0dG9uLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbFdpdGhWaWRlbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yaWdpbmFsUGxheUltZykge1xyXG4gICAgICAgIG9yaWdpbmFsUGxheUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgb3Blbk1vZGFsV2l0aFZpZGVvKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsVmlkZW8pIHtcclxuICAgICAgICBtb2RhbFZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAobW9kYWxWaWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsVmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxWaWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsUGxheUltZykge1xyXG4gICAgICAgIG1vZGFsUGxheUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgbW9kYWxWaWRlby5wbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsT3ZlcmxheSkge1xyXG4gICAgICAgIG1vZGFsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbE92ZXJsYXkpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXR0b24nKTtcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1pbnB1dCcpO1xyXG5cclxuICAgIGlmIChzdWJtaXRCdXR0b24gJiYgZW1haWxJbnB1dCkge1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRW1haWwoZW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW1haWwgc3VibWl0dGVkOicsIGVtYWlsKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvckluUGxhY2Vob2xkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dFcnJvckluUGxhY2Vob2xkZXIoKSB7XHJcbiAgICAgICAgaWYgKGVtYWlsSW5wdXQpIHtcclxuICAgICAgICAgICAgZW1haWxJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgICAgICBpZiAoZW1haWxJbnB1dCkge1xyXG4gICAgICAgICAgICBlbWFpbElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgZS1tYWlsJztcclxuICAgICAgICAgICAgZW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG5yZXF1aXJlKCcuL2hlYWRlci5qcycpO1xyXG5yZXF1aXJlKCcuL2hvbWUvaG9tZS1yZXByZXNlbnQuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtcG9wdXAuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtdmlkZW8tcG9wdXAuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjEuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjIuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjMuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjQuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjUuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjYuanMnKTtcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnVJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkcm9wZG93blRyaWdnZXJzIiwiZHJvcGRvd25Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25Db250ZW50cyIsImNsb3NlVGltZW91dCIsImxlYXZlVGltZW91dCIsImFjdGl2ZVRyaWdnZXIiLCJmb3JFYWNoIiwiaXRlbSIsImNsZWFyVGltZW91dCIsImkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRUaW1lb3V0IiwiaXNNb3VzZU92ZXJEcm9wZG93biIsImNsb3NlQWxsRHJvcGRvd25zIiwidHJpZ2dlciIsIl90aGlzIiwiZHJvcGRvd25UeXBlIiwiZGF0YXNldCIsImRyb3Bkb3duVHJpZ2dlciIsIm9wZW5Ecm9wZG93biIsInR5cGUiLCJ0YXJnZXRDb250ZW50IiwiY29uY2F0Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xlYXJBY3RpdmUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb250ZW50IiwidCIsIm1hdGNoZXMiLCJlIiwia2V5IiwiY29udGFpbmVyIiwibml0cm9JbWciLCJyZXZUZXh0IiwidXBkYXRlU2Nyb2xsQW5pbWF0aW9uIiwicGFydG5lclNlY3Rpb24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJwcm9ncmVzcyIsInRvcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzaGlmdCIsIm9mZnNldFdpZHRoIiwiaW5uZXJXaWR0aCIsInRyYW5zZm9ybSIsIm9uU2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGFydG5lcnNlYyIsInBhcmFsbGF4SW1nIiwibWF0Y2hNZWRpYSIsInVwZGF0ZVBhcmFsbGF4Iiwic2Nyb2xsZWQiLCJzcGVlZCIsIm9mZnNldCIsInNldFByb3BlcnR5IiwidGlja2luZyIsImF2YXRhckJ1dHRvbnMiLCJyZXZpZXdzQ29udGFpbmVyIiwicmV2aWV3cyIsImNlbnRlclJldmlldyIsInRhcmdldENsaWVudCIsImFjdGl2ZVJldmlldyIsImNvbnRhaW5lcldpZHRoIiwicmV2aWV3V2lkdGgiLCJnYXAiLCJyZXZpZXdJbmRleCIsIkFycmF5IiwiZnJvbSIsImluZGV4T2YiLCJ0b3RhbEl0ZW1zV2lkdGgiLCJ0cmFuc2l0aW9uIiwic3dpdGNoUmV2aWV3IiwidGFyZ2V0IiwiYSIsInIiLCJzZWxlY3RlZEF2YXRhciIsImNsb3Nlc3QiLCJidXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJpbml0Q2VudGVyUmV2aWV3IiwiaW5pdGlhbFNlbGVjdGVkIiwiaW5pdGlhbFRhcmdldCIsImN1cnJlbnRTZWxlY3RlZCIsImN1cnJlbnRUYXJnZXQiLCJjYXNlcyIsImNvbmZpZyIsInRyaWdnZXJPZmZzZXQiLCJzdGVwRGVsYXkiLCJhbmltYXRpb25EaXN0YW5jZSIsImhhbmRsZVNjcm9sbEFuaW1hdGlvbiIsImNvbnRhaW5lclJlY3QiLCJjb250YWluZXJUb3AiLCJjb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJCb3R0b20iLCJ0cmlnZ2VyUG9pbnQiLCJ2aXNpYmxlSGVpZ2h0IiwibWF4U2Nyb2xsYWJsZSIsInNjcm9sbFByb2dyZXNzIiwiY2FzZUVsIiwiaW5kZXgiLCJ0aHJlc2hvbGQiLCJwYXNzaXZlIiwiaW1nIiwiYWNjb3JkaW9uSXRlbXMiLCJjb250YWlucyIsIm90aGVySXRlbSIsInBvcHVwT3ZlcmxheSIsImNsb3NlQnV0dG9uIiwiZm9ybSIsIm9wZW5CdXR0b25zIiwidGltZXJFbGVtZW50IiwidGltZXJJbnRlcnZhbCIsInN0YXJ0VGltZXIiLCJ0b3RhbFNlY29uZHMiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJob3VycyIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJmb3JtYXR0ZWRUaW1lIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJ0ZXh0Q29udGVudCIsInRpbWVyQ29tcGxldGUiLCJzdG9wVGltZXIiLCJyZXNldFRpbWVyIiwiY29uc29sZSIsImxvZyIsIm9wZW5Qb3B1cCIsImJvZHkiLCJvdmVyZmxvdyIsImNsb3NlUG9wdXAiLCJvcGVuQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJ2aWRlbyIsImdldEVsZW1lbnRCeUlkIiwidmlkZW9Db250YWluZXIiLCJwbGF5QnV0dG9uIiwidXBkYXRlUGxheUJ1dHRvblZpc2liaWxpdHkiLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJwb2xpY3lDaGVja2JveCIsImFncmVlQ2hlY2tib3giLCJzdWJtaXRCdXR0b24iLCJjaGVja2JveGVzIiwiY2hlY2tib3giLCJ0b2dnbGUiLCJib3RoQ2hlY2tlZCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsInRlc3REcml2ZUJ1dHRvbiIsImlucHV0IiwiY2hlY2tJbnB1dFZhbHVlIiwidmFsdWUiLCJ0cmltIiwiY291bnRlckVsZW1lbnQiLCJjb3VudGVyRGl2Iiwic2lnbkluQnV0dG9uIiwiZWxlbWVudHMiLCJ1cGRhdGVUaW1lciIsImVsZW1lbnQiLCJodW5kcmVkdGhzIiwiZm9ybWF0dGVkU2Vjb25kcyIsInRvU3RyaW5nIiwiZm9ybWF0dGVkSHVuZHJlZHRocyIsIm1haW5FbWFpbElucHV0IiwicG9wdXBFbWFpbElucHV0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2aWRlb1dyYXBwZXIiLCJtb2RhbE92ZXJsYXkiLCJvcmlnaW5hbFZpZGVvIiwibW9kYWxWaWRlbyIsIm9yaWdpbmFsUGxheUltZyIsIm1vZGFsUGxheUltZyIsImN1cnJlbnRUaW1lIiwidG9nZ2xlUGxheUJ1dHRvbiIsInBsYXlJbWciLCJzZXR1cFZpZGVvTGlzdGVuZXJzIiwic3RvcFByb3BhZ2F0aW9uIiwib3Blbk1vZGFsV2l0aFZpZGVvIiwiY2xvc2VNb2RhbCIsInJlc2V0Rm9ybSIsImVtYWlsSW5wdXQiLCJlbWFpbCIsInZhbGlkYXRlRW1haWwiLCJzaG93RXJyb3JJblBsYWNlaG9sZGVyIiwiZW1haWxSZWdleCIsInRlc3QiLCJwbGFjZWhvbGRlciIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9