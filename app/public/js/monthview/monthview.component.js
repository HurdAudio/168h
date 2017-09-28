(function() {
  'use strict';
  var dayClock = false;
  var weekClock = false;
  var monthClock = true;
  var profileClock = false;
  var currentUserId;
  var months = [ 'zero', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  var viewMonth = 0;
  var viewYear = 0;



  function setClock(){
    if ((monthClock) && (!weekClock) && (!dayClock) && (!profileClock)) {
       document.getElementById("monthClock").innerHTML=new Date().toLocaleTimeString('en-GB');
     }
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

  function getUserFromParams(str) {
    let user = 0;
    let userAsString = '';
    let position = str.indexOf('user=');
    position += 5;
    userAsString = str.slice(position, str.indexOf('&year='));
    user = parseInt(userAsString);
    return(user);
  }

  function spokenOutput (str) {
    var u = new SpeechSynthesisUtterance();
    var synth = window.speechSynthesis;
    u.text = str;
    u.lang = 'en-US';
    u.rate = 0.98;
    //  u.voice = voices[0];
    u.onend = function(event) {
     setTimeout(function() {
       console.log(str);
     });
   };
    speechSynthesis.speak(u);
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

  function getSecurityStringFromParams(str) {
    let security = '';
    let position = str.indexOf('recovery=');
    position += 9;
    security = str.slice(position);

    return(security);
  }



  angular.module('app')
    .component('monthview', {
      controller: MonthviewController,
      templateUrl: '/js/monthview/monthview.template.html'
    });

    MonthviewController.$inject = ['$http', '$state', '$stateParams'];

    function MonthviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.gotoDay = gotoDay;
      vm.gotoCurrentMonth = gotoCurrentMonth;
      vm.gotoLastMonth = gotoLastMonth;
      vm.gotoNextMonth = gotoNextMonth;
      vm.gotoThisWeek = gotoThisWeek;
      vm.gotoProfile = gotoProfile;

      function gotoProfile() {
        monthClock = false;
        $state.go('userprofile', {id: currentUserId});
      }

      function gotoDay() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        monthClock = false;
        $state.go('dayview', {id: idString});
      }

      function gotoThisWeek() {
        weekClock = false;
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
          }
        }
        let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        $state.go('weekview', {id: idString});
      }

      function gotoCurrentMonth() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' +currentUserId + '&year=' + navDay.getFullYear() + '&month=' + (navDay.getMonth() + 1);
        $state.go('monthview', {id: idString});
      }

      function gotoLastMonth() {

        let month = months.indexOf(viewMonth);
        let year = viewYear;
        if (month === 1) {
          month = 12;
          --year;
        } else {
          --month;
        }
        let idString = 'user=' + currentUserId + '&year=' + year + '&month=' + month;
        $state.go('monthview', {id: idString});
      }

      function gotoNextMonth() {

        let month = months.indexOf(viewMonth);
        let year = viewYear;
        if (month === 12) {
          month = 1;
          ++year;
        } else {
          ++month;
        }
        let idString = 'user=' + currentUserId + '&year=' + year + '&month=' + month;
        $state.go('monthview', {id: idString});
      }

      function pullMonthFromParams(params) {
        let month = '';
        let monthNumeral = 0;
        let position = params.indexOf('&month=');
        position += 7;
        monthNumeral = parseInt(params.slice(position));
        month = months[monthNumeral];

        return(month);
      }

      function pullYearFromParams(params) {
        let year = 0;
        let position = params.indexOf('&year=');
        position += 6;
        year = parseInt(params.slice(position, (position + 4)));

        return(year);
      }

      function onMonthMouseover(element) {
        element.addEventListener('mouseover', ()=>{
          element.setAttribute("style", "color: silver;");
        });
        element.addEventListener('mouseout', ()=>{
          element.setAttribute("style", "color: black;");
        });
      }

      function offMonthMouseover(element) {
        element.addEventListener('mouseover', ()=>{
          element.setAttribute("style", "color: white; opacity: 0.8;");
        });
        element.addEventListener('mouseout', ()=>{
          element.setAttribute("style", "color: #999FFF; opacity: 0.6;");
        });
      }

      function dayEventlistenHandler(element, indexDate) {
        element.addEventListener('click', ()=>{
          console.log(indexDate);
          let navDate = new Date(indexDate);
          let idString = 'user=' + currentUserId + '&dayof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
          monthClock = false;
          $state.go('dayview', {id: idString});
        });
      }

      function weekButtonListner(element, dateString) {
        element.children[0].addEventListener('click', ()=>{
          let navDay = new Date(dateString);
          let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
          monthClock = false;
          $state.go('weekview', {id: idString});
        });
      }


      function updateMonthDisplay() {
        let divArray = [ 'week1MondayCell', 'week1TuesdayCell', 'week1WednesdayCell', 'week1ThursdayCell', 'week1FridayCell', 'week1SaturdayCell', 'week1SundayCell', 'week2MondayCell', 'week2TuesdayCell', 'week2WednesdayCell', 'week2ThursdayCell', 'week2FridayCell', 'week2SaturdayCell', 'week2SundayCell', 'week3MondayCell', 'week3TuesdayCell', 'week3WednesdayCell', 'week3ThursdayCell', 'week3FridayCell', 'week3SaturdayCell', 'week3SundayCell', 'week4MondayCell', 'week4TuesdayCell', 'week4WednesdayCell', 'week4ThursdayCell', 'week4FridayCell', 'week4SaturdayCell', 'week4SundayCell', 'week5MondayCell', 'week5TuesdayCell', 'week5WednesdayCell', 'week5ThursdayCell', 'week5FridayCell', 'week5SaturdayCell', 'week5SundayCell', 'week6MondayCell', 'week6TuesdayCell', 'week6WednesdayCell', 'week6ThursdayCell', 'week6FridayCell', 'week6SaturdayCell', 'week6SundayCell' ];
        let week6 = document.getElementById('week6');
        let element;
        let monthIndex = months.indexOf(viewMonth);
        let monthString;
        let dayString;
        let dateString;
        if (monthIndex < 10) {
          monthString = '0' + monthIndex.toString();
        } else {
          monthString = monthIndex.toString();
        }
        let theFirst = new Date(viewYear + '-' + monthString + '-01T13:44:00.000Z');
        let indexDate = new Date(viewYear + '-' + monthString + '-01T13:44:00.000Z');
        if (indexDate.getDay() !== 1) {
          while (indexDate.getDay() !== 1){
            indexDate.setDate(indexDate.getDate()-1);
          }
        }
        for (let i = 0; i < divArray.length; i++) {
          element = document.getElementById(divArray[i]);
          element.children[0].innerHTML = indexDate.getDate();
          monthString = (indexDate.getMonth() + 1).toString();
          if (monthString.length < 2) {
            monthString = '0' + monthString;
          }
          dayString = indexDate.getDate().toString();
          if (dayString.length < 2) {
            dayString = '0' + dayString;
          }
          dateString = viewYear + '-' + monthString + '-' + dayString + 'T13:44:00.000Z';
          dayEventlistenHandler(element, dateString);
          switch(divArray[i]) {
            case('week1MondayCell'):
              weekButtonListner(document.getElementById('weekOf1'), dateString);
              break;
            case('week2MondayCell'):
              weekButtonListner(document.getElementById('weekOf2'), dateString);
              break;
            case('week3MondayCell'):
              weekButtonListner(document.getElementById('weekOf3'), dateString);
              break;
            case('week4MondayCell'):
              weekButtonListner(document.getElementById('weekOf4'), dateString);
              break;
            case('week5MondayCell'):
              weekButtonListner(document.getElementById('weekOf5'), dateString);
              break;
            case('week6MondayCell'):
              weekButtonListner(document.getElementById('weekOf6'), dateString);
              break;
            default:
              console.log('not a monday div');
          }
          if (divArray[i] === 'week6MondayCell') {
            if ((indexDate.getMonth() + 1) === months.indexOf(viewMonth)) {
              week6.setAttribute("style", "visibility: visible;");
            } else {
              week6.setAttribute("style", "visibility: hidden;");
            }

          }
          if ((indexDate.getMonth() + 1) === months.indexOf(viewMonth)) {
            element.children[0].className = 'onMonth';
            onMonthMouseover(element.children[0]);
          } else {
            element.children[0].className = 'offMonth';
            element.children[0].setAttribute("style", "opacity: 0.6;");
            offMonthMouseover(element.children[0]);
          }

          indexDate.setDate(indexDate.getDate()+1);
        }
      }

      function updateMonthYear() {
        let monthYear = document.getElementById('monthYear');
        monthYear.innerHTML = viewMonth + ' ' + viewYear;
      }

      function onInit() {
        console.log("Monthview is lit");
        dayClock = false;
        weekClock = false;
        monthClock = true;


        var myTimer = setInterval(setClock,1000);
        let userDateViewString = ($stateParams.id);
        currentUserId = getUserFromParams(userDateViewString);
        // check user ID cookies and reject bad cookies
        let userCookie = getCookie('h168userId');
        if (parseInt(userCookie) !== parseInt(currentUserId)) {

          alert('forbidden user access');
          monthClock = false;
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {

              alert('access denied');
              monthClock = false;
              $state.go('landing');
            }
          });
        }
        viewMonth = pullMonthFromParams(userDateViewString);
        viewYear = parseInt(pullYearFromParams(userDateViewString));
        console.log(viewMonth);
        console.log(viewYear);
        updateMonthYear();
        updateMonthDisplay();
      }
    }


}());
