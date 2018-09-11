  var feedbackLink = document.querySelector(".feedback-btn");

  if (feedbackLink) {

    var feedbackPopup = document.querySelector(".feedback");
    var feedbackClose = feedbackPopup.querySelector(".modal-close");

    var form = feedbackPopup.querySelector("form");
    var login = feedbackPopup.querySelector("[name=full-name]");
    var email = feedbackPopup.querySelector("[name=email]");
    var letter = feedbackPopup.querySelector("[name=letter]");

    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    feedbackLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      feedbackPopup.classList.add("modal-show");

      if (storage) {
        login.value = storage;
        email.focus();
      } else {
        login.focus();
      }
    });

    feedbackClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(evt) {
      if (!login.value || !email.value || !letter.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedbackPopup.classList.contains("modal-show")) {
          feedbackPopup.classList.remove("modal-show");
          feedbackPopup.classList.remove("modal-error");
        }
      }
    });
  }


  var mapLink = document.querySelector(".contacts-button-map");

  if (mapLink) {

    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
      evt.preventDefault();
      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
        }
      }
    });
  }


  var purchasesLink = document.querySelectorAll(".buy");

  if (purchasesLink) {

    var purchasesPopup = document.querySelector(".goods-in-the-cart");
    var purchasesClose = purchasesPopup.querySelector(".modal-close");
    var purchasesContinue = purchasesPopup.querySelector(".continue-shopping-btn");
    var purchasesChoice = purchasesPopup.querySelector(".purchases-btn");

    for (var i = 0; i < purchasesLink.length; i++) {
      purchasesLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        purchasesPopup.classList.add("modal-show");
      });
    }

    purchasesClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      purchasesPopup.classList.remove("modal-show");
    });

    purchasesContinue.addEventListener("click", function(evt) {
      evt.preventDefault();
      purchasesPopup.classList.remove("modal-show");
    });

    purchasesChoice.addEventListener("click", function(evt) {
      evt.preventDefault();
      purchasesPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (purchasesPopup.classList.contains("modal-show")) {
          purchasesPopup.classList.remove("modal-show");
        }
      }
    });
  }
