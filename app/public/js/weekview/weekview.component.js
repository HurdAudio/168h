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
  var hours = ['0h', '030h', '1h', '130h', '2h', '230h', '3h', '330h', '4h', '430h', '5h', '530h', '6h', '630h', '7h', '730h', '8h', '830h', '9h', '930h', '10h', '1030h', '11h', '1130h', '12h', '1230h', '13h', '1330h', '14h', '1430h', '15h', '1530h', '16h', '1630h', '17h', '1730h', '18h', '1830h', '19h', '1930h', '20h', '2030h', '21h', '2130h', '22h', '2230h', '23h', '2330h', '0h' ];
  var hoursTime = ['0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '24:00' ];

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

      function grabHolidays(allHollidays, day) {
        let today = [];
        let checkDate = new Date(day);
        let holiDate;

        for (let i = 0; i < allHollidays.length; i++) {
          holiDate = new Date(allHollidays[i].day_of);
          if ((checkDate.getFullYear() === holiDate.getFullYear()) && (checkDate.getMonth() === holiDate.getMonth()) && (checkDate.getDate() === holiDate.getDate())) {
            today.push(allHollidays[i]);
          } else if ((allHollidays[i].is_annual) && (checkDate.getMonth() === holiDate.getMonth()) && (checkDate.getDate() === holiDate.getDate())) {
            today.push(allHollidays[i]);
          } else {
            switch (allHollidays[i].name) {
              case ('Martin Luther King Day'):
                if ((checkDate.getMonth() === 0) && (checkDate.getDay() === 1)) {
                  if ((checkDate.getDate() > 14) && (checkDate.getDate() < 22)) {
                    today.push(today[i]);
                  }
                }
                break;
              case ('Clean Out Your Computer Day'):
                if ((checkDate.getMonth() === 1) && (checkDate.getDay() === 1)) {
                  if ((checkDate.getDate() > 7) && (checkDate.getDate() < 15)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('President\'s Day'):
                if ((checkDate.getMonth() === 1) && (checkDate.getDay() === 1)) {
                  if ((checkDate.getDate() > 14) && (checkDate.getDate() < 22)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Father\'s Day'):
                if ((checkDate.getMonth() === 5) && (checkDate.getDay() === 0)) {
                  if ((checkDate.getDate() > 14) && (checkDate.getDate() < 22)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Labour Day'):
                if ((checkDate.getMonth() === 8) && (checkDate.getDay() === 1)) {
                  if (checkDate.getDate() < 8) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Mother\'s Day'):
                if ((checkDate.getMonth() === 4) && (checkDate.getDay() === 0)) {
                  if ((checkDate.getDate() > 7) && (checkDate.getDate() < 15)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Book Lover\'s Day'):
                if ((checkDate.getMonth() === 9) && (checkDate.getDay === 7)) {
                  if (checkDate.getDay() < 8) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Thanksgiving Day'):
                if ((checkDate.getMonth() === 10) && (checkDate.getDay() === 4)) {
                  if ((checkDate.getDate() > 21) && (checkDate.getDate() < 29)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Black Friday'):
                if ((checkDate.getMonth() === 10) && (checkDate.getDay() === 5)) {
                  if (((checkDate.getDate() - 1) > 21) && ((checkDate.getDate() - 1) < 29)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Cyber Monday'):
                if (((checkDate.getMonth() === 11) || (checkDate.getMonth() === 10)) && (checkDate.getDay() === 1)) {
                  if (((checkDate.getMonth() === 10) && ((checkDate.getDate() - 4) > 21) && ((checkDate.getDate() - 4) < 29)) || (checkDate.getMonth() === 11) && ((checkDate.getDate() - 4) < -1 )) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Advent'):
                if (checkDate.getDay() === 6) {
                  if ((checkDate.getMonth() === 10) || (checkDate.getMonth() === 11)) {
                    let xmas = new Date(checkDate.getFullYear() + '-12-25T13:44:00.000Z');
                    switch (xmas.getDay()) {
                      case (0):
                        if ((checkDate.getDate() === 3) || (checkDate.getDate() === 10) || (checkDate.getDate() === 17) || (checkDate.getDate() === 24)) {
                          today.push(allHollidays[i]);
                        }
                        break;
                      case (1):
                        if ((checkDate.getDate() === 2) || (checkDate.getDate() === 9) || (checkDate.getDate() === 16) || (checkDate.getDate() === 23)) {
                          today.push(allHollidays[i]);
                        }
                        break;
                      case (2):
                        if ((checkDate.getDate() === 1) ||   (checkDate.getDate() === 8) || (checkDate.getDate() === 15) || (checkDate.getDate() === 22)) {
                        today.push(allHollidays[i]);
                        }
                        break;
                      case (3):
                        if ((checkDate.getDate() === 31) ||   (checkDate.getDate() === 7) || (checkDate.getDate() === 14) || (checkDate.getDate() === 21)) {
                          today.push(allHollidays[i]);
                        }
                        break;
                      case (4):
                        if ((checkDate.getDate() === 30) ||   (checkDate.getDate() === 6) || (checkDate.getDate() === 13) || (checkDate.getDate() === 20)) {
                          today.push(allHollidays[i]);
                        }
                        break;
                      case (5):
                        if ((checkDate.getDate() === 29) ||   (checkDate.getDate() === 5) || (checkDate.getDate() === 12) || (checkDate.getDate() === 19)) {
                          today.push(allHollidays[i]);
                        }
                        break;
                      case (6):
                        if ((checkDate.getDate() === 28) ||   (checkDate.getDate() === 4) || (checkDate.getDate() === 11) || (checkDate.getDate() === 18)) {
                          today.push(allHollidays[i]);
                        }
                        break;
                      default:
                      console.log('impossible situation for advent');
                    }
                  }
                }
                break;
              case ('Victoria Day'):
                if ((checkDate.getMonth() === 4) && (checkDate.getDay() === 1)) {
                  if ((checkDate.getDate() > 17) && (checkDate.getDate() < 25)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Civic Holiday (Canada)'):
                if ((checkDate.getMonth() === 7) && (checkDate.getDay() === 1)) {
                  if (checkDate.getDate() < 8) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Indigenous Peoples\' Day'):
                if ((checkDate.getMonth() === 8) && (checkDate.getDay() === 5)) {
                  if ((checkDate.getDate() > 21) && (checkDate.getDate() < 29)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Arbor Day'):
                if ((checkDate.getMonth() === 3) &&(checkDate.getDay() === 5)) {
                  if (checkDate.getDate() > 23) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Canadian Thanksgiving'):
                if ((checkDate.getMonth() === 9) && (checkDate.getDay() === 1)) {
                  if ((checkDate.getDate() > 7) && (checkDate.getDate() < 15)) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              case ('Memorial Day'):
                if ((checkDate.getMonth() === 4) && (checkDate.getDay() === 1)) {
                  if (checkDate.getDate() > 24) {
                    today.push(allHollidays[i]);
                  }
                }
                break;
              default:
                console.log('non-float holiday');
            }
          }
        }

        return(today);
      }

      function setHolidayButton(element, holidata) {

        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < holidata.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            }
            spokenOutput(holidata[i].name);
          }
        });
      }

      function tasksButtonSpeaker(element, tasks) {
        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < tasks.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            }
            spokenOutput(tasks[i].name + ' is due on this day.');
          }
        });
      }

      function billButtonSpeaker(element, bills) {
        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < bills.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            }
            spokenOutput(bills[i].name + " is due on this day.");
          }
        });
      }

      function occasionButtonSpeaker(element, occasionArray) {

        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < occasionArray.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            } else {
              spokenOutput('Remember...');
            }
            spokenOutput(occasionArray[i].name);
          }
        });
      }

      function getTheDaysTasks(tasks, dayOf) {
        let checkDate = new Date(dayOf);
        let tasker = [];
        let taskDate;

        for (let i = 0; i < tasks.length; i++) {
          taskDate = new Date(tasks[i].due_date);
          if((checkDate.getFullYear() === taskDate.getFullYear()) && (checkDate.getMonth() === taskDate.getMonth()) && (checkDate.getDate() === taskDate.getDate())) {
            tasker.push(tasks[i]);
          }
        }

        return(tasker);
      }

      function getBillsForDay(bills, dayOf) {
        let checkDate = new Date(dayOf);
        let biller = [];
        let billDate;

        for (let i = 0; i < bills.length; i++) {
          billDate = new Date(bills[i].due_date);
          if (!bills[i].is_paid) {
            if ((checkDate.getFullYear() === billDate.getFullYear()) && (checkDate.getMonth() === billDate.getMonth()) && (checkDate.getDate() === billDate.getDate())) {
              biller.push(bills[i]);
            }
          }
        }

        return(biller);
      }

      function grabOccasions(occasions, dayOf) {
        let checkDate = new Date(dayOf);
        let occasionArray = [];
        let occasionDate;

        for (let i = 0; i < occasions.length; i++) {
          occasionDate = new Date(occasions[i].day_of);
          if (occasions[i].is_annual) {
            if ((checkDate.getMonth() === occasionDate.getMonth()) && (checkDate.getDate() === occasionDate.getDate())) {
              occasionArray.push(occasions[i]);
            }
          } else {
            if ((checkDate.getFullYear() === occasionDate.getFullYear()) && (checkDate.getMonth() === occasionDate.getMonth()) && (checkDate.getDate() === occasionDate.getDate())) {
              occasionArray.push(occasions[i]);
            }
          }
        }

        return(occasionArray);
      }

      function setTasksButtons() {
        let tasksButtons = [ 'mondayTasksButton', 'tuesdayTasksButton', 'wednesdayTasksButton', 'thursdayTasksButton', 'fridayTasksButton', 'saturdayTasksButton', 'sundayTasksButton' ];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let tasksArray = [];
        let element;

        $http.get(`/tasksbyuser/${currentUserId}`)
        .then(tasksData=>{
          let tasks = tasksData.data;
          for (let i = 0; i < tasksButtons.length; i++) {
            checkDate = new Date(weekDates[i]);
            tasksArray = [];
            tasksArray = getTheDaysTasks(tasks, checkDate);
            if (tasksArray.length > 0) {
              element = document.getElementById(tasksButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              tasksButtonSpeaker(element, tasksArray);
            }
          }
        });
      }

      function setBillsButtons() {
        let billsButtons = [ 'mondayBillsButton', 'tuesdayBillsButton', 'wednesdayBillsButton', 'thursdayBillsButton', 'fridayBillsButton', 'saturdayBillsButton', 'sundayBillsButton' ];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let billsArray = [];
        let element;

        $http.get(`/billsbyuser/${currentUserId}`)
        .then(billsData=>{
          let bills = billsData.data;
          for (let i = 0; i < billsButtons.length; i++) {
            checkDate = new Date(weekDates[i]);
            billsArray = [];
            billsArray = getBillsForDay(bills, checkDate);
            if (billsArray.length > 0) {
              element = document.getElementById(billsButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              billButtonSpeaker(element, billsArray);
            }
          }
        });
      }

      function setOccasionButtons() {
        let occasionButtons = [ 'mondayOccasionButton', 'tuesdayOccasionButton', 'wednesdayOccasionButton', 'thursdayOccasionButton', 'fridayOccasionButton', 'saturdayOccasionButton', 'sundayOccasionButton' ];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let occasionArray = [];
        let element;

        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(occasionsData=>{
          let occasions = occasionsData.data;
          for (let i = 0; i < occasionButtons.length; i++) {
            occasionArray = [];
            checkDate = new Date(weekDates[i]);
            occasionArray = grabOccasions(occasions, checkDate);
            if (occasionArray.length > 0) {
              element = document.getElementById(occasionButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              occasionButtonSpeaker(element, occasionArray);
            }
          }
        });
      }

      function setHolidayButtons() {
        let holidayButtons = [ 'mondayHolidayButton', 'tuesdayHolidayButton', 'wednesdayHolidayButton', 'thursdayHolidayButton', 'fridayHolidayButton', 'saturdayHolidayButton', 'sundayHolidayButton'];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let holiDayness = [];
        let element;

        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(holidaysData=>{
          let holidays = holidaysData.data;
          for (let i = 0; i < holidayButtons.length; i++) {
            holiDayness = [];
            checkDate = new Date(weekDates[i]);
            holiDayness = grabHolidays(holidays, checkDate);
            if (holiDayness.length > 0) {
              element = document.getElementById(holidayButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              setHolidayButton(element, holiDayness);
              element.parentNode.setAttribute("style", "background: " + holiDayness[0].color + "; background: -webkit-linear-gradient(45deg, " + holiDayness[0].color + ", #ffffff); background: -o-linear-gradient(135deg, " +  holiDayness[0].color + ", #ffffff);   background: -moz-linear-gradient(135deg, " + holiDayness[0].color + ", #ffffff); background: linear-gradient(135deg, " + holiDayness[0].color + ", #ffffff);");
            }
          }
        });
      }

      function getAppointmentsForDay(blocks, dayOf) {
        let checkDate = new Date(dayOf);
        let arr = [];

        arr = blocks.filter((timeblock)=>{
          let apptime = new Date(timeblock.start_time);
          let apptEnd = new Date(timeblock.end_time);
          return (((apptime.getFullYear() === checkDate.getFullYear()) && (apptime.getMonth() === checkDate.getMonth()) && (apptime.getDate() === checkDate.getDate())) || ((apptEnd.getFullYear() === checkDate.getFullYear()) && (apptEnd.getMonth() === checkDate.getMonth()) && (apptEnd.getDate() === checkDate.getDate())));
        });

        return(arr);
      }

      function populateCalendarDisplay(dayOfWeek, dayOf, apptArray, blocks) {
        let indexOfStart = 0;
        let indexOfEnd = 0;
        let element;
        let startTime;
        let endTime;
        let minutesString = '';
        let endMinutesString = '';
        let blockReference = {};

        for (let i = 0; i < apptArray.length; i++) {
          startTime = new Date(apptArray[i].start_time);
          endTime = new Date(apptArray[i].end_time);
          if (startTime.getMinutes() === 0) {
            minutesString = ':00';
          } else {
            minutesString = ':30';
          }
          if (endTime.getMinutes() === 0) {
            endMinutesString = ':00';
          } else {
            endMinutesString = ':30';
          }
          indexOfStart = hoursTime.indexOf((startTime.getHours() + 4) + minutesString);
          indexOfEnd = hoursTime.indexOf((endTime.getHours() + 4) + endMinutesString);
          blockReference = {};
          if (indexOfStart === (hoursTime.length - 1)) {
            indexOfStart = 0;
          }
          if (indexOfEnd < indexOfStart) {
            indexOfEnd = hoursTime.length - 1;
          }

          for (let j = 0; j < blocks.length; j++) {
            if (blocks[j].id === apptArray[i].block_type) {
              blockReference = blocks[j];
            }
          }
          
          element = document.getElementById(dayOfWeek + hours[indexOfStart]);
          element.children[0].children[0].innerHTML = hoursTime[indexOfStart] + ' - ' + blockReference.type;
          element.children[0].appointment = apptArray[i].id;
          element.children[0].setAttribute("style", "background-color: " + blockReference.color + "; opacity: 0.8; border-top: solid " + blockReference.color + " 6px;");

          if (indexOfEnd > (indexOfStart + 1)) {
            for (let k = (indexOfStart + 1); k < indexOfEnd; k++) {
              element = document.getElementById(dayOfWeek + hours[k]);
              element.children[0].appointment = apptArray[i].id;
              element.children[0].setAttribute("style", "background-color: " + blockReference.color + "; opacity: 0.8; border-top: solid " + blockReference.color + " 6px;");
            }
          }

        }
      }

      function readAppointmentBlocks() {
        let weekArray = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let appointmentsArray = [];
        let checkDate;

        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(blocksData=>{
          let blocks = blocksData.data;
          $http.get(`/timeblocksbyuser/${currentUserId}`)
          .then(timeblocksData=>{
            let timeblocks = timeblocksData.data;
            for (let i = 0; i < weekArray.length; i++) {
              appointmentsArray[i] = [];
              checkDate = new Date(weekDates[i]);
              appointmentsArray[i] = getAppointmentsForDay(timeblocks, checkDate);
              if (appointmentsArray[i].length > 0) {
                populateCalendarDisplay(weekArray[i], weekDates[i], appointmentsArray[i], blocks);
              }
            }
          });
        });
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
        setHolidayButtons();
        setOccasionButtons();
        setBillsButtons();
        setTasksButtons();
        readAppointmentBlocks();
      }

    }

}());
