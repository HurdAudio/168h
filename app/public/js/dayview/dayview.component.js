(function() {
  'use strict';
  var currentUserId = 0;
  var viewDate;
  var year = 0;
  var month = 0;
  var day = 0;
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var hours = ['h0', 'h030', 'h1', 'h130', 'h2', 'h230', 'h3', 'h330', 'h4', 'h430', 'h5', 'h530', 'h6', 'h630', 'h7', 'h730', 'h8', 'h830', 'h9', 'h930', 'h10', 'h1030', 'h11', 'h1130', 'h12', 'h1230', 'h13', 'h1330', 'h14', 'h1430', 'h15', 'h1530', 'h16', 'h1630', 'h17', 'h1730', 'h18', 'h1830', 'h19', 'h1930', 'h20', 'h2030', 'h21', 'h2130', 'h22', 'h2230', 'h23', 'h2330' ];
  var pulses = [ '#ff0000', '#ff1100', '#ff2211', '#ff3322', '#ff4433', '#ff5544', '#ff6655', '#ff7766', '#ff8877', '#ff9988', '#ffaa99', '#ffbbaa', '#ffccbb', '#ffddcc', '#ffeedd', '#ffffee', '#ffeeff', '#ffddee', '#ffccdd', '#ffbbcc', '#ffaabb', '#ff99aa', '#ff8899', '#ff7788', '#ff6677', '#ff5566', '#ff4455', '#ff3344', '#ff2233', '#ff1122', '#ff0011' ];

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


  function setClockDay(){
       document.getElementById("clockDayview").innerHTML=new Date().toLocaleTimeString('en-GB');
  }



  angular.module('app')
    .component('dayview', {
      controller: DayviewController,
      templateUrl: '/js/dayview/dayview.template.html'
    });

    DayviewController.$inject = ['$http', '$state', '$stateParams'];

    function DayviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.previousDay = previousDay;
      vm.nextDay = nextDay;
      vm.gotoToday = gotoToday;

      function previousDay() {
        let navDay = new Date(viewDate);
        navDay.setDate(navDay.getDate() - 1);
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        $state.go('dayview', {id: idString});

      }

      function nextDay() {
        let navDay = new Date(viewDate);
        navDay.setDate(navDay.getDate() + 1);
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        $state.go('dayview', {id: idString});
      }

      function gotoToday() {
        let navDay = new Date();
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        $state.go('dayview', {id: idString});
      }


      function getUserFromParams(parseThis) {
        let user = 0;
        let userAsString = '';
        let position = parseThis.indexOf('user=');
        position += 5;
        while ((parseThis[position] !== '&') || (location < parseThis.length)) {
          userAsString = userAsString + parseThis[position];
          ++position;
        }
        user = parseInt(userAsString);


        return(user);

      }

      function getYear(parseInput) {

        return(parseInt(parseInput.slice(0, 4)));
      }

      function getMonth(parseInput) {
        let position = 5;
        let monthAsString = '';

        while ((parseInput[position] !== '-') && (position < parseInput.length)) {
          monthAsString = monthAsString + parseInput[position];
          ++position;
        }

        return(parseInt(monthAsString));
      }

      function getDay(parseInput) {
        let position = 5;
        let dayAsString = '';

        while ((parseInput[position] !== '-') && (position < parseInput.length)) {
          ++position;
        }
        ++position;
        for (let i = position; i < parseInput.length; i++) {
          dayAsString = dayAsString + parseInput[i];
        }

        return(parseInt(dayAsString));
      }

      function getDateViewFromParams(parseThis) {
        let displayDate;
        let passedDateString = '';
        let dateParamInput = '';
        let position = parseThis.indexOf('dayof=');
        position += 6;
        for (let i = position; i < parseThis.length; i++) {
          passedDateString = passedDateString + parseThis[i];
        }
        year = getYear(passedDateString);
        month = getMonth(passedDateString);
        day = getDay(passedDateString);

        dateParamInput = year + '-';
        if (month < 10) {
          dateParamInput = dateParamInput + '0' + month + '-';
        } else {
          dateParamInput = dateParamInput + month + '-';
        }
        if (day < 10) {
          dateParamInput = dateParamInput + '0' + day;
        } else {
          dateParamInput = dateParamInput + day;
        }
        console.log(dateParamInput);
        displayDate = new Date(dateParamInput);
        displayDate.setDate(displayDate.getDate() + 1);
        return(displayDate);
      }

      function getTense(checkDate) {
        let whatTense = '';
        let today = new Date();

        if (checkDate.getFullYear() > today.getFullYear()) {
          whatTense = 'future';
        } else if (checkDate.getFullYear() < today.getFullYear()) {
          whatTense = 'past';
        } else {
          if (checkDate.getMonth() > today.getMonth()) {
            whatTense = 'future';
          } else if (checkDate.getMonth() < today.getMonth()) {
            whatTense = 'past';
          } else {
            if (checkDate.getDay() > today.getDay()) {
              whatTense = 'future';
            } else if (checkDate.getDay() < today.getDay()) {
              whatTense = 'past';
            } else {
              whatTense = 'present';
            }
          }
        }

        return(whatTense);
      }

      function getCurrentTimePosition() {
        let position = 0;
        let timer = new Date();
        let nowHour = timer.getHours();
        let nowMinute = timer.getMinutes();



        if (nowMinute < 30) {
          position = nowHour * 2;
        } else {
          position = (nowHour * 2) + 1;
        }



        return(position);
      }

      function pulseThePresent(currentTimePoint, pulseColor) {
        if (getTense(viewDate) !== 'present') {
          return;
        }
        let element = document.getElementById(hours[currentTimePoint]);
        if (currentTimePoint !== getCurrentTimePosition()) {

          element.setAttribute("style", "color: #bb9933;");
          if (currentTimePoint !== (hours.length - 1)) {
            pulseThePresent((currentTimePoint + 1), pulseColor);
          }
        } else {
          setTimeout(()=>{

            element.setAttribute("style", "color: " + pulses[pulseColor] + ";");
            if (pulseColor === (pulses.length - 1)) {
              pulseThePresent(currentTimePoint, 0);
            } else {
              pulseThePresent(currentTimePoint, (pulseColor + 1));
            }
          }, 150);
        }
      }

      function setTimeColors() {
        //Check date for past, present or future
        let tense = getTense(viewDate);
        let multiElement = document.getElementsByClassName('hour');
        let currentTimePosition = getCurrentTimePosition();
        let pomodoro = document.getElementById('pomodoro');

        if (tense === 'future') {
          pomodoro.setAttribute("style", "visibility: collapse;");
          for (let i = 0; i < multiElement.length; i++) {
            multiElement[i].setAttribute("style", "color: #000000;");
          }
        } else if (tense === 'past') {
          pomodoro.setAttribute("style", "visibility: collapse;");
          for (let j = 0; j < multiElement.length; j++) {
            multiElement[j].setAttribute("style", "color: #bb9933;");
          }
        } else {
          pomodoro.setAttribute("style", "visibility: visible;");
          //TODO update hours using clock string
          for (let k = 0; k < currentTimePosition; k++) {
            let element = document.getElementById(hours[k]);
            element.setAttribute("style", "color: #bb9933;");
          }
          for (let l = (currentTimePosition + 1); l < hours.length; l++) {
            let elementFuture = document.getElementById(hours[l]);
            elementFuture.setAttribute("style", "color: #000000;");
          }
          pulseThePresent(currentTimePosition, 0);
        }
      }

      function onInit() {
        console.log("Dayview is lit");


        var myTimer = setInterval(setClockDay,1000);
        let weekdaySlot = document.getElementById('weekdaySlot');
        let numdaySlot = document.getElementById('numdaySlot');
        let monthSlot = document.getElementById('monthSlot');
        let yearSlot = document.getElementById('yearSlot');

        let userDateViewString = ($stateParams.id);
        currentUserId = getUserFromParams(userDateViewString);
        // check user ID cookies and reject bad cookies
        let userCookie = getCookie('h168userId');
        if (parseInt(userCookie) !== parseInt(currentUserId)) {

          alert('forbidden user access');
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {

              alert('access denied');
              $state.go('landing');
            }
          });
        }
        viewDate = getDateViewFromParams(userDateViewString);
        weekdaySlot.innerHTML = days[viewDate.getDay()];
        numdaySlot.innerHTML = day;
        monthSlot.innerHTML = months[viewDate.getMonth()];
        yearSlot.innerHTML = year;
        setTimeColors();

      }

    }

}());
