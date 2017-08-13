(function() {
  'use strict';
  var currentUserId = 0;
  var viewDate;
  var year = 0;
  var month = 0;
  var day = 0;
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

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
        console.log(viewDate);
        weekdaySlot.innerHTML = days[viewDate.getDay()];
        numdaySlot.innerHTML = day;
        monthSlot.innerHTML = months[viewDate.getMonth()];
        yearSlot.innerHTML = year;

      }

    }

}());
