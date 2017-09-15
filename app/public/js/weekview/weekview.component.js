(function() {
  'use strict';
  var dayClock = false;
  var weekClock = false;
  var myTimer = setInterval(setClockWeek,1000);
  var currentUserId = 0;
  var mondayDate = new Date();
  var tuesdayDate = new Date();
  var wednesdayDate = new Date();
  var thursdayDate = new Date();
  var fridayDate = new Date();
  var saturdayDate = new Date();
  var sundayDate = new Date();
  var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayStrips = [ 'mondayDatestrip', 'mondayName', 'tuesdayDatestrip', 'tuesdayName', 'wednesdayDateStrip', 'wednesdayName', 'thursdayDatestrip', 'thursdayName', 'fridayDatestrip', 'fridayName', 'saturdayDatestrip', 'saturdayName', 'sundayDatestrip', 'sundayName' ];
  var pulses = [ '#ff0000', '#ff1100', '#ff2211', '#ff3322', '#ff4433', '#ff5544', '#ff6655', '#ff7766', '#ff8877', '#ff9988', '#ffaa99', '#ffbbaa', '#ffccbb', '#ffddcc', '#ffeedd', '#ffffee', '#ffeeff', '#ffddee', '#ffccdd', '#ffbbcc', '#ffaabb', '#ff99aa', '#ff8899', '#ff7788', '#ff6677', '#ff5566', '#ff4455', '#ff3344', '#ff2233', '#ff1122', '#ff0011' ];
  var pulsePoint = 0;

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


  function setClockWeek(){
    if ((weekClock) && (!dayClock)) {
       document.getElementById("clockWeekview").innerHTML=new Date().toLocaleTimeString('en-GB');
     }
  }

  angular.module('app')
    .component('weekview', {
      controller: WeekviewController,
      templateUrl: '/js/weekview/weekview.template.html'
    });

    WeekviewController.$inject = ['$http', '$state', '$stateParams'];

    function WeekviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.gotoToday = gotoToday;
      vm.gotoThisWeek = gotoThisWeek;
      vm.gotoPreviousWeek = gotoPreviousWeek;
      vm.gotoNextWeek = gotoNextWeek;
      vm.toDayview = toDayview;

      function toDayview(dayString) {
        let navDate;
        switch(dayString) {
          case('monday'):
            navDate = new Date(mondayDate);
            break;
          case('tuesday'):
            navDate = new Date(tuesdayDate);
            break;
          case('wednesday'):
            navDate = new Date(wednesdayDate);
            break;
          case('thursday'):
            navDate = new Date(thursdayDate);
            break;
          case('friday'):
            navDate = new Date(fridayDate);
            break;
          case('saturday'):
            navDate = new Date(saturdayDate);
            break;
          case('sunday'):
            navDate = new Date(sundayDate);
            break;
          default:
            console.log('unsupported day');
        }
        let idString = 'user=' + currentUserId + '&dayof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
        myTimer = undefined;
        dayClock = true;
        weekClock = false;
        $state.go('dayview', {id: idString});
      }

      function gotoPreviousWeek() {
        let idString = '';
        let navDate = new Date(mondayDate);
        navDate.setDate(navDate.getDate() - 7);
        idString = 'user=' + currentUserId + '&weekof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
        $state.go('weekview', {id: idString});
      }

      function gotoNextWeek() {
        let idString = '';
        let navDate = new Date(mondayDate);
        navDate.setDate(navDate.getDate() + 7);
        idString = 'user=' + currentUserId + '&weekof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
        $state.go('weekview', {id: idString});
      }

      function gotoThisWeek() {
        let navDay = new Date();
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
          }
        }
        let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        $state.go('weekview', {id: idString});
      }

      function gotoToday() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        myTimer = undefined;
        dayClock = true;
        weekClock = false;
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

      function setMonday(parseThis) {
        let mondayDatestrip = document.getElementById('mondayDatestrip');
        let tuesdayDatestrip = document.getElementById('tuesdayDatestrip');
        let wednesdayDateStrip = document.getElementById('wednesdayDateStrip');
        let thursdayDatestrip = document.getElementById('thursdayDatestrip');
        let fridayDatestrip = document.getElementById('fridayDatestrip');
        let saturdayDatestrip = document.getElementById('saturdayDatestrip');
        let sundayDatestrip = document.getElementById('sundayDatestrip');
        let position = parseThis.indexOf('&weekof=');
        position += 8;
        let parseDate = parseThis.slice(position);
        let yyyy = parseDate.slice(0,4);
        position = 5;
        let mm = '';
        let dd = '';
        if (parseDate[6] === '-') {
          mm = '0' + parseDate[position];
        } else {
          mm = parseDate.slice(position, 7);
        }
        if (parseDate[parseDate.length - 2] === '-') {
          dd = '0' + parseDate[parseDate.length - 1];
        } else {
          dd = parseDate.slice((parseDate.length - 2));
        }
        mondayDate = new Date(yyyy + '-' + mm + '-' + dd + 'T13:44:00.000Z');
        tuesdayDate = new Date(yyyy + '-' + mm + '-' + dd + 'T13:44:00.000Z');
        tuesdayDate.setDate(mondayDate.getDate() + 1);
        wednesdayDate = new Date(yyyy + '-' + mm + '-' + dd + 'T13:44:00.000Z');
        wednesdayDate.setDate(mondayDate.getDate() + 2);
        thursdayDate = new Date(yyyy + '-' + mm + '-' + dd + 'T13:44:00.000Z');
        thursdayDate.setDate(mondayDate.getDate() + 3);
        fridayDate = new Date(yyyy + '-' + mm + '-' + dd + 'T13:44:00.000Z');
        fridayDate.setDate(mondayDate.getDate() + 4);
        saturdayDate = new Date(yyyy + '-' + mm + '-' + dd + 'T13:44:00.000Z');
        saturdayDate.setDate(mondayDate.getDate() + 5);
        sundayDate = new Date(yyyy + '-' + mm + '-' + dd + 'T13:44:00.000Z');
        sundayDate.setDate(mondayDate.getDate() + 6);
        mondayDatestrip.innerHTML = mondayDate.getDate() + ' ' + months[mondayDate.getMonth()] + ' ' + mondayDate.getFullYear();
        tuesdayDatestrip.innerHTML = tuesdayDate.getDate() + ' ' + months[tuesdayDate.getMonth()] + ' ' + tuesdayDate.getFullYear();
        wednesdayDateStrip.innerHTML = wednesdayDate.getDate() + ' ' + months[wednesdayDate.getMonth()] + ' ' + wednesdayDate.getFullYear();
        thursdayDatestrip.innerHTML = thursdayDate.getDate() + ' ' + months[thursdayDate.getMonth()] + ' ' + thursdayDate.getFullYear();
        fridayDatestrip.innerHTML = fridayDate.getDate() + ' ' + months[fridayDate.getMonth()] + ' ' + fridayDate.getFullYear();
        saturdayDatestrip.innerHTML = saturdayDate.getDate() + ' ' + months[saturdayDate.getMonth()] + ' ' + saturdayDate.getFullYear();
        sundayDatestrip.innerHTML = sundayDate.getDate() + ' ' + months[sundayDate.getMonth()] + ' ' + sundayDate.getFullYear();
      }

      function getTense(time) {
        let tense = '';
        let checkTime = new Date(time);
        let current = new Date();

        if (current.getFullYear() < checkTime.getFullYear()) {
          tense = 'future';
        } else if (current.getFullYear() > checkTime.getFullYear()) {
          tense = 'past';
        } else {
          if (current.getMonth() < checkTime.getMonth()) {
            tense = 'future';
          } else if (current.getMonth() > checkTime.getMonth()) {
            tense = 'past';
          } else {
            if (current.getDate() < checkTime.getDate()) {
              tense = 'future';
            } else if (current.getDate() > checkTime.getDate()) {
              tense = 'past';
            } else {
              tense = 'present';
            }
          }
        }

        return(tense);
      }

      function flashThePresent(element1, element2, time) {
        let checkTime = new Date(time);
        if (getTense(checkTime) !== 'present') {
          element1.setAttribute("style", "color: #bb9933;");
          element2.setAttribute("style", "color: #bb9933;");
          setPastPresentDays();
        } else {
          element1.setAttribute("style", "color: " + pulses[pulsePoint] + ";");
          element2.setAttribute("style", "color: " + pulses[pulsePoint] + ";");
          ++pulsePoint;
          if (pulsePoint === pulses.length) {
            pulsePoint = 0;
          }
          setTimeout(()=>{
            flashThePresent(element1, element2, time);
          }, 200);
        }
      }

      function setPastPresentDays() {
        let dayVals = [ 'monday', mondayDate, 'tuesday', tuesdayDate, 'wednesday', wednesdayDate, 'thursday', thursdayDate, 'friday', fridayDate, 'saturday', saturdayDate, 'sunday', sundayDate ];
        let checkDate = new Date();
        let displayDate;
        let displayDay;

        for (let i = 0; i < dayStrips.length; i += 2) {
          checkDate = new Date(dayVals[i + 1]);
          displayDate = document.getElementById(dayStrips[i]);
          displayDay = document.getElementById(dayStrips[i + 1]);
          switch(getTense(checkDate)) {
            case('past'):
              displayDate.setAttribute("style", "color: #bb9933;");
              displayDay.setAttribute("style", "color: #bb9933;");
              break;
            case('future'):
            displayDate.setAttribute("style", "color: #000000;");
            displayDay.setAttribute("style", "color: #000000;");
              break;
            case('present'):
              flashThePresent(displayDate, displayDay, checkDate);
              break;
            default:
              console.log('unsupported tense');
          }
        }
      }


      function onInit() {
        console.log("Weekview is lit");
        let userCookie = getCookie('h168userId');
        //check cookies for user already logged in - change page state if this is a return user
        dayClock = false;
        weekClock = true;
        let userDateViewString = ($stateParams.id);
        currentUserId = getUserFromParams(userDateViewString);
        setMonday(userDateViewString);
        if (parseInt(userCookie) !== parseInt(currentUserId)) {
          //forbidden
          alert('forbidden user access');
          myTimer = undefined;
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {

              alert('access denied');
              myTimer = undefined;
              $state.go('landing');
            }
          });
        }
        setPastPresentDays();

      }

    }

}());
