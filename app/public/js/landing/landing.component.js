(function() {
  'use strict';

  function setClock(){
       document.getElementById("clockLanding").innerHTML=new Date().toLocaleTimeString('en-GB');
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
    var delayTime = (fadeTime * 1000)/2;

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
    let timer = 1.4;
    let delay = (timer * 1000)/2;


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

  angular.module('app')
    .component('landing', {
      controller: LandingController,
      templateUrl: '/js/landing/landing.template.html'
    });

    LandingController.$inject = ['$http', '$state', '$stateParams'];

    function LandingController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;




      function onInit() {
        console.log("Landing is lit");
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
