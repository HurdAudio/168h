(function() {
  'use strict';

  var stopBlinker = true;

  function setClock(){
       document.getElementById("clockLanding").innerHTML=new Date().toLocaleTimeString('en-GB');
  }

  function getCookie (name) {
    var cookies = document.cookie.split(';');
    for(var i=0 ; i < cookies.length ; ++i) {
        var pair = cookies[i].trim().split('=');
        if(pair[0] === name) {
            return (pair[1]);
          }
    }
    return null;
  }

  function fadeInLogin(timer) {
    var loginEmail = document.getElementById('loginEmail');
    var loginSubmit = document.getElementById('loginSubmit');
    var loginForgotPassword = document.getElementById('loginForgotPassword');
    var loginExit = document.getElementById('loginExit');
    var loginPassword = document.getElementById('loginPassword');
    var delayTime = (timer * 1000)/2;

    function monitorEmailField() {
      var emailAddressEntry = '';
      var passwordFieldDisplay = 'off';
      var submitButtonDisplay = 'off';

      document.addEventListener('keyup', ()=>{
        if (loginPassword.value.length > 0) {
          if (submitButtonDisplay === 'off') {
            submitButtonDisplay = 'on';
            loginSubmit.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear; position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
            loginForgotPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
          }
        } else {
          if (submitButtonDisplay === 'on') {
            submitButtonDisplay = 'off';
            loginSubmit.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
          }
        }
        if (loginEmail.value.length > 0) {
          emailAddressEntry = loginEmail.value;
          if ((emailAddressEntry.indexOf('@') !== -1) && (emailAddressEntry.indexOf('.') !== -1) && (emailAddressEntry.indexOf('.') !== (emailAddressEntry.length - 1))) {
            if (passwordFieldDisplay === 'off') {
              passwordFieldDisplay = 'on';
              loginPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              loginForgotPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
            }
          } else {
            if (passwordFieldDisplay === 'on') {
              passwordFieldDisplay = 'off';
              loginPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              loginForgotPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
            }
          }
        } else {
          if (passwordFieldDisplay === 'on') {
            passwordFieldDisplay = 'off';
            loginPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
            loginForgotPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
          }
        }

      });
    }

    loginEmail.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
    setTimeout(()=>{
      loginExit.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear; position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
      monitorEmailField();
    }, delayTime);

  }

  function fadeOutButtons (element1, element2, element3, nextElements) {
    var fadeTime = 0.6;
    var delayTime = (fadeTime * 1000);

    element1.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + fadeTime + "s, opacity " + fadeTime + "s linear;");
    setTimeout(()=>{
      element2.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + fadeTime + "s, opacity " + fadeTime + "s linear;");
      setTimeout(()=>{
        element3.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + fadeTime + "s, opacity " + fadeTime + "s linear;");
        setTimeout(()=>{
          nextElements(fadeTime);
          element1.setAttribute("style", "display: none;");
          element2.setAttribute("style", "display: none;");
          element3.setAttribute("style", "display: none;");
          setTimeout(()=>{
          }, delayTime);
        }, delayTime);
      }, delayTime);
    }, delayTime);
  }

  function resetInitialState() {
    let landingLogin = document.getElementById('landingLogin');
    let landingNewUser = document.getElementById('landingNewUser');
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');
    let loginSubmit = document.getElementById('loginSubmit');
    let loginExit = document.getElementById('loginExit');
    let loginForgotPassword = document.getElementById('loginForgotPassword');
    let landingInfo = document.getElementById('landingInfo');
    let userLoginForm = document.getElementById('userLoginForm');
    let loginFailNotice = document.getElementById('loginFailNotice');
    let timer = 1.4;
    let delay = (timer * 1000)/2;

    loginFailNotice.innerHTML = '';
    stopBlinker = true;
    loginFailNotice.setAttribute("style", "display: none;");
    loginExit.setAttribute("style", "visibility: hidden; opacity: 0;");
    loginEmail.setAttribute("style", "visibility: hidden; opacity: 0;");
    loginEmail.value = '';
    loginPassword.setAttribute("style", "visibility: hidden; opacity: 0;");
    loginPassword.value = '';
    loginSubmit.setAttribute("style", "visibility: hidden; opacity: 0;");

    loginForgotPassword.setAttribute("style", "visibility: hidden; opacity: 0;");
    landingLogin.setAttribute("style", "opacity: 0; visibility: hidden;");
    landingNewUser.setAttribute("style", "opacity: 0; visibility: hidden;");
    landingInfo.setAttribute("style", "opacity: 0; visibility: hidden;");

    setTimeout(()=>{
      userLoginForm.setAttribute("style", "display: none;");
      landingLogin.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
      landingNewUser.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");

      landingInfo.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
      setTimeout(()=>{
        landingLogin.setAttribute("style", "position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
        landingNewUser.setAttribute("style", "position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
        landingInfo.setAttribute("style", "position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
      }, delay);

    }, delay);


  }

  function blinkingCursor(displayNote, element) {
    if ((element.innerHTML === '>') || (element.innerHTML === '')) {
      return;
    } else {
      element.innerHTML = displayNote;
      setTimeout(()=>{
        if (!stopBlinker) {
          element.innerHTML = displayNote + '_';
        }
        setTimeout(()=>{
          if (!stopBlinker) {
            blinkingCursor(displayNote, element);
          }
        }, 500);
      }, 500);
    }
  }

  function messageDisplay (message, display, element, delay) {
    if (display[display.length - 1] !== '<') {
      element.innerHTML = display + '_';
    }
    if (message === '') {
      stopBlinker = false;
      blinkingCursor(display, element);
      return;
    }
    let newDisplay = display + message[0];
    let newMessage = message.slice(1);
    let setDelay = delay;
    if (newDisplay[1] === '>') {
      setDelay = setDelay * 1000;
    }
    setTimeout(()=>{
      messageDisplay(newMessage, newDisplay, element, delay);
    }, setDelay) ;
  }

  function emailAndPasswordMismatch() {
    console.log('inform the user');
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let messageString = '<br>>ERROR(403): <br>>Login failure.<br>>Email/password<br> mismatch.<br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    loginFailNotice.innerHTML = '>';
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);

  }

  angular.module('app')
    .component('landing', {
      controller: LandingController,
      templateUrl: '/js/landing/landing.template.html'
    });

    LandingController.$inject = ['$http', '$state', '$stateParams'];

    function LandingController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.loginAttempt = loginAttempt;


      function loginAttempt() {
        //alert('We are logging in');
        let loginEmail = document.getElementById('loginEmail');
        let loginPassword = document.getElementById('loginPassword');
        let loginObj = {
          email: loginEmail.value,
          password: loginPassword.value
        };
        $http.post('users/login', loginObj)
        .then(loginResultData=>{
          let loginResult = loginResultData.data;
          if (loginResult.login === 'forbidden') {
            emailAndPasswordMismatch();
          } else {
            console.log('set cookies and change state');
            $http.get(`/users/${loginResult.id}`)
            .then(userData=>{
              let user = userData.data;
              console.log(user);
              document.cookie = user.security.key + "=" + user.security.value;
              document.cookie = "h168userId=" + user.id;
              $http.get(`/users/${loginResult.id}`).then(()=>{
                $state.go('dayview');
              });
            });
          }
        });


      }

      function onInit() {
        console.log("Landing is lit");
        //check cookies for user already logged in - change page state if this is a return user
        if (getCookie('h168userId') !== null) {
          let loggedInUser = getCookie('h168userId');
          $http.get(`/users/${loggedInUser}`)
          .then(userInfoData=>{
            let userInfo = userInfoData.data;
            let cookey = userInfo.security.key;
            let cookvalue = userInfo.security.value;
            if (getCookie(cookey) === cookvalue) {
              $state.go('dayview');
            }
          });
        }

        var myTimer = setInterval(setClock,1000);
        var landingLogin = document.getElementById('landingLogin');
        var landingNewUser = document.getElementById('landingNewUser');
        var landingInfo = document.getElementById('landingInfo');
        var loginExit = document.getElementById('loginExit');
        var userLoginForm = document.getElementById('userLoginForm');

        landingLogin.addEventListener('click', ()=>{
          userLoginForm.setAttribute("style", "display: initial;");
          fadeOutButtons(landingInfo, landingNewUser,landingLogin, fadeInLogin);

        });
        loginExit.addEventListener('click', ()=>{
          resetInitialState();
        });


      }

    }

}());
