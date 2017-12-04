(function() {
  'use strict';
  var dayClock = false;
  var weekClock = false;
  var monthClock = false;
  var profileClock = true;
  var currentUserId;


  function setClock(){
    if ((profileClock) && (!dayClock) && (!weekClock) && (!monthClock)) {
       document.getElementById("userProfileClock").innerHTML=new Date().toLocaleTimeString('en-GB');
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
    userAsString = str.slice(position, str.indexOf('recovery='));
    user = parseInt(userAsString);
    return(user);
  }

  function getSecurityStringFromParams(str) {
    let security = '';
    let position = str.indexOf('recovery=');
    position += 9;
    security = str.slice(position);

    return(security);
  }

  function checkValidBancampEmbed(embedString) {
    let valid = true;

    if (embedString.indexOf('src="') === -1) {
      valid = false;
    }
    if (embedString.indexOf('href="') === -1) {
      valid = false;
    }
    if (embedString.indexOf('</a>') === -1) {
      valid = false;
    }
    return(valid);
  }

  function extractSrcStringFromBandcampEmbed(embedString) {
    let srcString = '';
    let startIndex = embedString.indexOf('src="') + 5;
    let endIndex = startIndex;

    while ((embedString[endIndex] !== '"') && (endIndex < embedString.length)) {
      ++endIndex;
    }
    srcString = embedString.slice(startIndex, endIndex);

    return(srcString);
  }

  function extractHrefStringFromBandcampEmbed(embedString) {
    let hrefString = '';
    let startIndex = embedString.indexOf('href="') + 6;
    let endIndex = startIndex;

    while ((embedString[endIndex] !== '"') && (endIndex < embedString.length)) {
      ++endIndex;
    }
    hrefString = embedString.slice(startIndex, endIndex);

    return(hrefString);
  }

  function extractATagFromBandcampEmbed(embedString) {
    let aTag = '';
    let endIndex = embedString.indexOf('</a>');
    let startIndex = endIndex;

    while ((embedString[startIndex] !== '>') && (startIndex > 0)) {
      --startIndex;
    }
    aTag = embedString.slice((startIndex + 1), endIndex);

    return(aTag);
  }


  angular.module('app')
    .component('userprofile', {
      controller: UserprofileController,
      templateUrl: '/js/userprofile/userprofile.template.html'
    });

    UserprofileController.$inject = ['$http', '$state', '$stateParams'];

    function UserprofileController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.gotoDayview = gotoDayview;
      vm.profileEditor = profileEditor;
      vm.closeUserEditor = closeUserEditor;
      vm.userPhotoEditor = userPhotoEditor;
      vm.userPhotoEditDone = userPhotoEditDone;
      vm.gotoMonthView = gotoMonthView;
      vm.gotoWeek = gotoWeek;
      vm.logout = logout;
      vm.photUploader = photUploader;
      vm.blocktypeEditor = blocktypeEditor;
      vm.closeBlocktypeEditor = closeBlocktypeEditor;
      vm.editBlock = editBlock;
      vm.userExistingBlocksEditorDone = userExistingBlocksEditorDone;
      vm.createNewBlocktype = createNewBlocktype;
      vm.blocktypeReport = blocktypeReport;
      vm.blocktypeReportDone = blocktypeReportDone;
      vm.deleteBlock = deleteBlock;
      vm.holidayManage = holidayManage;
      vm.closeHolidayManager = closeHolidayManager;
      vm.occasionManage = occasionManage;
      vm.closeOccasionsManager = closeOccasionsManager;
      vm.editHoliday = editHoliday;
      vm.userHolidayEditorDone = userHolidayEditorDone;
      vm.billsManager = billsManager;
      vm.closeBillsManager = closeBillsManager;
      vm.editOccaision = editOccaision;
      vm.userOccasionsEditorDone = userOccasionsEditorDone;
      vm.deleteHoliday = deleteHoliday;
      vm.taskManager = taskManager;
      vm.closeTasksManager = closeTasksManager;
      vm.editBill = editBill;
      vm.userBillsEditorDone = userBillsEditorDone;
      vm.deleteOccasion = deleteOccasion;
      vm.addNewHoliday = addNewHoliday;
      vm.goalManager = goalManager;
      vm.closeGoalsManager = closeGoalsManager;
      vm.editTask = editTask;
      vm.userTasksEditorDone = userTasksEditorDone;
      vm.deleteBill = deleteBill;
      vm.addNewOccasion = addNewOccasion;
      vm.holidayReport = holidayReport;
      vm.holidayReportDone = holidayReportDone;

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
                    today.push(allHollidays[i]);
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
                //console.log('non-float holiday');
            }
          }
        }

        return(today);
      }

      function holidayReportDone() {
        let reportForHolidays = document.getElementById('reportForHolidays');
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        let holidayReporter = document.getElementById('holidayReporter');

        reportForHolidays.setAttribute("style", "display: none;");
        holidayManagerDone.setAttribute("style", "visibility: visible;");
        holidayReporter.setAttribute("style", "visibility: visible;");
      }

      function areSameDate(date1, date2) {
        let first = new Date(date1);
        let second = new Date(date2);
        if (first.getFullYear() !== second.getFullYear()) {
          return false;
        } else if (first.getMonth() !== second.getMonth()) {
          return false;
        } else if (first.getDate() !== second.getDate()) {
          return false;
        }
        return true;
      }

      function holidayReport(){
        let reportForHolidays = document.getElementById('reportForHolidays');
        let userHolidayEditorDiv = document.getElementById('userHolidayEditorDiv');
        let holidayReporter = document.getElementById('holidayReporter');
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(userHolidaysData=>{
          vm.holidayReporter = [];
          vm.holidayReporter[0] = {};
          let userHolidays = userHolidaysData.data;

          let nextYearMonthString = '';
          let nextYearDateString = ''
          let yearDateStart = new Date();
          let nextYear = yearDateStart.getFullYear() + 1;
          let nextYearMonth = yearDateStart.getMonth() + 1;
          if (nextYearMonth < 10) {
            nextYearMonthString = '0' + nextYearMonth;
          } else {
            nextYearMonthString = nextYearMonth.toString();
          }
          if (yearDateStart.getDate() < 10) {
            nextYearDateString = '0' + yearDateStart.getDate();
          } else {
            nextYearDateString = yearDateStart.getDate().toString();
          }
          let yearDateEnd = new Date(nextYear + '-' + nextYearMonthString + '-' + nextYearDateString + 'T13:44:00.000Z');
          console.log(yearDateEnd);
          console.log(yearDateStart.getDate());
          let calendarStart = new Date(yearDateStart.getFullYear() + '-01-01T13:44:00.000Z');
          let calendarEnd = new Date(nextYear + '-01-01T13:44:00.000Z');
          let holidayArray = [];
          vm.holidayReporter[0].calendarTotal = 0;
          vm.holidayReporter[0].yearTotal = 0;
          vm.holidayReporter[0].todayClean = cleanDateHoliday(yearDateStart);
          vm.holidayReporter[0].oneYearClean = cleanDateHoliday(yearDateEnd);
          vm.holidayReporter[0].calendarFloat = 0;
          vm.holidayReporter[0].calendarFixed = 0;
          vm.holidayReporter[0].yearFloat = 0;
          vm.holidayReporter[0].yearFixed = 0;
          vm.holidayReporter[0].calendarJan = 0;
          vm.holidayReporter[0].yearJan = 0;
          vm.holidayReporter[0].calendarJanHolidays = [];
          vm.holidayReporter[0].yearJanHolidays = [];
          vm.holidayReporter[0].yearJanOverlap = 0;
          vm.holidayReporter[0].yearJanTotal = 0;
          vm.holidayReporter[0].calendarJanOverlap = 0;
          vm.holidayReporter[0].calendarJanTotal = 0;
          vm.holidayReporter[0].calendarFebOverlap = 0;
          vm.holidayReporter[0].calendarFebTotal = 0;
          vm.holidayReporter[0].calendarFebHolidays = [];
          vm.holidayReporter[0].yearFebHolidays = [];
          vm.holidayReporter[0].yearFebOverlap = 0;
          vm.holidayReporter[0].yearFebTotal = 0;
          vm.holidayReporter[0].calendarMarOverlap = 0;
          vm.holidayReporter[0].calendarMarTotal = 0;
          vm.holidayReporter[0].calendarMarHolidays = [];
          vm.holidayReporter[0].calendarAprHolidays = [];
          vm.holidayReporter[0].calendarAprOverlap = 0;
          vm.holidayReporter[0].calendarAprTotal = 0;
          vm.holidayReporter[0].calendarMayHolidays = [];
          vm.holidayReporter[0].calendarMayOverlap = 0;
          vm.holidayReporter[0].calendarMayTotal = 0;
          vm.holidayReporter[0].calendarJunHolidays = [];
          vm.holidayReporter[0].calendarJunOverlap = 0;
          vm.holidayReporter[0].calendarJunTotal = 0;
          vm.holidayReporter[0].calendarJulHolidays = [];
          vm.holidayReporter[0].calendarJulOverlap = 0;
          vm.holidayReporter[0].calendarJulTotal = 0;
          vm.holidayReporter[0].calendarAugHolidays = [];
          vm.holidayReporter[0].calendarAugOverlap = 0;
          vm.holidayReporter[0].calendarAugTotal = 0;
          vm.holidayReporter[0].calendarSepHolidays = [];
          vm.holidayReporter[0].calendarSepOverlap = 0;
          vm.holidayReporter[0].calendarSepTotal = 0;
          vm.holidayReporter[0].calendarOctHolidays = [];
          vm.holidayReporter[0].calendarOctOverlap = 0;
          vm.holidayReporter[0].calendarOctTotal = 0;
          vm.holidayReporter[0].calendarNovHolidays = [];
          vm.holidayReporter[0].calendarNovOverlap = 0;
          vm.holidayReporter[0].calendarNovTotal = 0;
          vm.holidayReporter[0].calendarDecHolidays = [];
          vm.holidayReporter[0].calendarDecOverlap = 0;
          vm.holidayReporter[0].calendarDecTotal = 0;
          vm.holidayReporter[0].yearMarHolidays = [];
          vm.holidayReporter[0].yearMarOverlap = 0;
          vm.holidayReporter[0].yearMarTotal = 0;
          vm.holidayReporter[0].yearAprHolidays = [];
          vm.holidayReporter[0].yearAprOverlap = 0;
          vm.holidayReporter[0].yearAprTotal = 0;
          vm.holidayReporter[0].yearMayHolidays = [];
          vm.holidayReporter[0].yearMayOverlap = 0;
          vm.holidayReporter[0].yearMayTotal = 0;
          vm.holidayReporter[0].yearJunHolidays = [];
          vm.holidayReporter[0].yearJunOverlap = 0;
          vm.holidayReporter[0].yearJunTotal = 0;
          vm.holidayReporter[0].yearJulHolidays = [];
          vm.holidayReporter[0].yearJulOverlap = 0;
          vm.holidayReporter[0].yearJulTotal = 0;
          vm.holidayReporter[0].yearAugHolidays = [];
          vm.holidayReporter[0].yearAugOverlap = 0;
          vm.holidayReporter[0].yearAugTotal = 0;
          vm.holidayReporter[0].yearSepHolidays = [];
          vm.holidayReporter[0].yearSepOverlap = 0;
          vm.holidayReporter[0].yearSepTotal = 0;
          vm.holidayReporter[0].yearOctHolidays = [];
          vm.holidayReporter[0].yearOctOverlap = 0;
          vm.holidayReporter[0].yearOctTotal = 0;
          vm.holidayReporter[0].yearNovHolidays = [];
          vm.holidayReporter[0].yearNovOverlap = 0;
          vm.holidayReporter[0].yearNovTotal = 0;
          vm.holidayReporter[0].yearDecHolidays = [];
          vm.holidayReporter[0].yearDecOverlap = 0;
          vm.holidayReporter[0].yearDecTotal = 0;

          let checkDate = new Date(calendarStart);
          console.log(areSameDate(yearDateStart, yearDateEnd));
          do {
            holidayArray = [];
            holidayArray = grabHolidays(userHolidays, checkDate);
            if (holidayArray.length > 0) {
              if (checkDate.getMonth() === 0) {
                vm.holidayReporter[0].calendarJanTotal++;
              }
              if (checkDate.getMonth() === 1) {
                vm.holidayReporter[0].calendarFebTotal++;
              }
              if (checkDate.getMonth() === 2) {
                vm.holidayReporter[0].calendarMarTotal++;
              }
              if (checkDate.getMonth() === 3) {
                vm.holidayReporter[0].calendarAprTotal++;
              }
              if (checkDate.getMonth() === 4) {
                vm.holidayReporter[0].calendarMayTotal++;
              }
              if (checkDate.getMonth() === 5) {
                vm.holidayReporter[0].calendarJunTotal++;
              }
              if (checkDate.getMonth() === 6) {
                vm.holidayReporter[0].calendarJulTotal++;
              }
              if (checkDate.getMonth() === 7) {
                vm.holidayReporter[0].calendarAugTotal++;
              }
              if (checkDate.getMonth() === 8) {
                vm.holidayReporter[0].calendarSepTotal++;
              }
              if (checkDate.getMonth() === 9) {
                vm.holidayReporter[0].calendarOctTotal++;
              }
              if (checkDate.getMonth() === 10) {
                vm.holidayReporter[0].calendarNovTotal++;
              }
              if (checkDate.getMonth() === 11) {
                vm.holidayReporter[0].calendarDecTotal++;
              }
              vm.holidayReporter[0].calendarTotal++;
              if (holidayArray.length > 1) {
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].calendarJanOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporterl[0].calendarFebOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].calendarMarOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].calendarAprOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].calendarMayOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].calendarJunOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].calendarJulOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].calendarAugOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].calendarSepOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].calendarOctOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].calendarNovOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].calendarDecOverlap += holidayArray.length;
                }
                for (let i = 0; i < holidayArray.length; i++) {
                  if (holidayArray[i].is_annual) {
                    vm.holidayReporter[0].calendarFixed++;
                  } else {
                    vm.holidayReporter[0].calendarFloat++;
                  }
                  if (checkDate.getMonth() === 0) {
                    vm.holidayReporter[0].calendarJanHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarJan = vm.holidayReporter[0].calendarJanHolidays.length;
                  }
                  if (checkDate.getMonth() === 1) {
                    vm.holidayReporter[0].calendarFebHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarFeb = vm.holidayReporter[0].calendarFebHolidays.length;
                  }
                  if (checkDate.getMonth() === 2) {
                    vm.holidayReporter[0].calendarMarHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarMar = vm.holidayReporter[0].calendarMarHolidays.length;
                  }
                  if (checkDate.getMonth() === 3) {
                    vm.holidayReporter[0].calendarAprHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarApr = vm.holidayReporter[0].calendarAprHolidays.length;
                  }
                  if (checkDate.getMonth() === 4) {
                    vm.holidayReporter[0].calendarMayHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarMay = vm.holidayReporter[0].calendarMayHolidays.length;
                  }
                  if (checkDate.getMonth() === 5) {
                    vm.holidayReporter[0].calendarJunHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarJun = vm.holidayReporter[0].calendarJunHolidays.length;
                  }
                  if (checkDate.getMonth() === 6) {
                    vm.holidayReporter[0].calendarJulHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarJul = vm.holidayReporter[0].calendarJulHolidays.length;
                  }
                  if (checkDate.getMonth() === 7) {
                    vm.holidayReporter[0].calendarAugHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarAug = vm.holidayReporter[0].calendarAugHolidays.length;
                  }
                  if (checkDate.getMonth() === 8) {
                    vm.holidayReporter[0].calendarSepHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarSep = vm.holidayReporter[0].calendarSepHolidays.length;
                  }
                  if (checkDate.getMonth() === 9) {
                    vm.holidayReporter[0].calendarOctHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarOct = vm.holidayReporter[0].calendarOctHolidays.length;
                  }
                  if (checkDate.getMonth() === 10) {
                    vm.holidayReporter[0].calendarNovHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendar = vm.holidayReporter[0].calendarNovHolidays.length;
                  }
                  if (checkDate.getMonth() === 11) {
                    vm.holidayReporter[0].calendarDecHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendar = vm.holidayReporter[0].calendarDecHolidays.length;
                  }
                }
              } else {
                if (holidayArray[0].is_annual) {
                  vm.holidayReporter[0].calendarFixed++;
                } else {
                  vm.holidayReporter[0].calendarFloat++;
                }
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].calendarJanHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarJan = vm.holidayReporter[0].calendarJanHolidays.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporter[0].calendarFebHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarFeb = vm.holidayReporter[0].calendarFebHolidays.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].calendarMarHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarMar = vm.holidayReporter[0].calendarMarHolidays.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].calendarAprHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarApr = vm.holidayReporter[0].calendarAprHolidays.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].calendarMayHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarMay = vm.holidayReporter[0].calendarMayHolidays.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].calendarJunHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarJun = vm.holidayReporter[0].calendarJunHolidays.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].calendarJulHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarJul = vm.holidayReporter[0].calendarJulHolidays.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].calendarAugHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarAug = vm.holidayReporter[0].calendarAugHolidays.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].calendarSepHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarSep = vm.holidayReporter[0].calendarSepHolidays.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].calendarOctHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarOct = vm.holidayReporter[0].calendarOctHolidays.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].calendarNovHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarNov = vm.holidayReporter[0].calendarNovHolidays.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].calendarDecHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarDec = vm.holidayReporter[0].calendarDecHolidays.length;
                }
              }

            }
            checkDate.setDate(checkDate.getDate() + 1);
          } while (!areSameDate(checkDate, calendarEnd));
          checkDate = new Date(yearDateStart);
          do {
            holidayArray = [];
            holidayArray = grabHolidays(userHolidays, checkDate);
            if (holidayArray.length > 0) {
              vm.holidayReporter[0].yearTotal++;
              if (checkDate.getMonth() === 0) {
                vm.holidayReporter[0].yearJanTotal++;
              }
              if (checkDate.getMonth() === 1) {
                vm.holidayReporter[0].yearFebTotal++;
              }
              if (checkDate.getMonth() === 2) {
                vm.holidayReporter[0].yearMarTotal++;
              }
              if (checkDate.getMonth() === 3) {
                vm.holidayReporter[0].yearAprTotal++;
              }
              if (checkDate.getMonth() === 4) {
                vm.holidayReporter[0].yearMayTotal++;
              }
              if (checkDate.getMonth() === 5) {
                vm.holidayReporter[0].yearJunTotal++;
              }
              if (checkDate.getMonth() === 6) {
                vm.holidayReporter[0].yearJulTotal++;
              }
              if (checkDate.getMonth() === 7) {
                vm.holidayReporter[0].yearAugTotal++;
              }
              if (checkDate.getMonth() === 8) {
                vm.holidayReporter[0].yearSepTotal++;
              }
              if (checkDate.getMonth() === 9) {
                vm.holidayReporter[0].yearOctTotal++;
              }
              if (checkDate.getMonth() === 10) {
                vm.holidayReporter[0].yearNovTotal++;
              }
              if (checkDate.getMonth() === 11) {
                vm.holidayReporter[0].yearDecTotal++;
              }
              if (holidayArray.length > 1) {
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].yearJanOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporter[0].yearFebOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].yearMarOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].yearAprOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].yearMayOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].yearJunOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].yearJulOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].yearAugOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].yearSepOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].yearOctOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].yearNovOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].yearDecOverlap += holidayArray.length;
                }
                for (let i = 0; i < holidayArray.length; i++) {
                  if (holidayArray[i].is_annual) {
                    vm.holidayReporter[0].yearFixed++;
                  } else {
                    vm.holidayReporter[0].yearFloat++;
                  }
                  if (checkDate.getMonth() === 0) {
                    vm.holidayReporter[0].yearJanHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearJan = vm.holidayReporter[0].yearJanHolidays.length;
                  }
                  if (checkDate.getMonth() === 1) {
                    vm.holidayReporter[0].yearFebHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearFeb = vm.holidayReporter[0].yearFebHolidays.length;
                  }
                  if (checkDate.getMonth() === 2) {
                    vm.holidayReporter[0].yearMarHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearMar = vm.holidayReporter[0].yearMarHolidays.length;
                  }
                  if (checkDate.getMonth() === 3) {
                    vm.holidayReporter[0].yearAprHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearApr = vm.holidayReporter[0].yearAprHolidays.length;
                  }
                  if (checkDate.getMonth() === 4) {
                    vm.holidayReporter[0].yearMayHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearMay = vm.holidayReporter[0].yearMayHolidays.length;
                  }
                  if (checkDate.getMonth() === 5) {
                    vm.holidayReporter[0].yearJunHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearJun = vm.holidayReporter[0].yearJunHolidays.length;
                  }
                  if (checkDate.getMonth() === 6) {
                    vm.holidayReporter[0].yearJulHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearJul = vm.holidayReporter[0].yearJulHolidays.length;
                  }
                  if (checkDate.getMonth() === 7) {
                    vm.holidayReporter[0].yearAugHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearAug = vm.holidayReporter[0].yearAugHolidays.length;
                  }
                  if (checkDate.getMonth() === 8) {
                    vm.holidayReporter[0].yearSepHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearSep = vm.holidayReporter[0].yearSepHolidays.length;
                  }
                  if (checkDate.getMonth() === 9) {
                    vm.holidayReporter[0].yearOctHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearOct = vm.holidayReporter[0].yearOctHolidays.length;
                  }
                  if (checkDate.getMonth() === 10) {
                    vm.holidayReporter[0].yearNovHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearNov = vm.holidayReporter[0].yearNovHolidays.length;
                  }
                  if (checkDate.getMonth() === 11) {
                    vm.holidayReporter[0].yearDecHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearDec = vm.holidayReporter[0].yearDecHolidays.length;
                  }
                }
              } else {
                if (holidayArray[0].is_annual) {
                  vm.holidayReporter[0].yearFixed++;
                } else {
                  vm.holidayReporter[0].yearFloat++;
                }
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].yearJanHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearJan = vm.holidayReporter[0].yearJanHolidays.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporter[0].yearFebHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearFeb = vm.holidayReporter[0].yearFebHolidays.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].yearMarHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearMar = vm.holidayReporter[0].yearMarHolidays.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].yearAprHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearApr = vm.holidayReporter[0].yearAprHolidays.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].yearMayHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearMay = vm.holidayReporter[0].yearMayHolidays.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].yearJunHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearJun = vm.holidayReporter[0].yearJunHolidays.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].yearJulHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearJul = vm.holidayReporter[0].yearJulHolidays.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].yearAugHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearAug = vm.holidayReporter[0].yearAugHolidays.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].yearSepHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearSep = vm.holidayReporter[0].yearSepHolidays.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].yearOctHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearOct = vm.holidayReporter[0].yearOctHolidays.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].yearNovHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearNov = vm.holidayReporter[0].yearNovHolidays.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].yearDecHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearDec = vm.holidayReporter[0].yearDecHolidays.length;
                }
              }

            }
            checkDate.setDate(checkDate.getDate() + 1);
          } while (!areSameDate(checkDate, yearDateEnd));
        });

        reportForHolidays.setAttribute("style", "display: initial;");
        userHolidayEditorDiv.setAttribute("style", "display: none;");
        holidayManagerDone.setAttribute("style", "visibility: hidden;");
        holidayReporter.setAttribute("style", "visibility: hidden;");
      }

      function addNewOccasion (){
        let subObj = {
          user_id: currentUserId,
          name: '',
          day_of: new Date(),
          is_annual: true
        };
        $http.post('/occasions', subObj)
        .then(resultingOccasionData=>{
          let resultingOccasion = resultingOccasionData.data[0];
          editOccaision(resultingOccasion.id);
        });
      }

      function deleteBill(billId) {
        let billsManagementDiv = document.getElementById('billsManagementDiv');
        let userBillDeleteConfirmDiv = document.getElementById('userBillDeleteConfirmDiv');
        let userBillDeleteConfirmButtons = document.getElementById('userBillDeleteConfirmButtons');
        let userBillConfirmYes = document.getElementById('userBillConfirmYes');
        if (userBillConfirmYes) {
          userBillConfirmYes.parentNode.removeChild(userBillConfirmYes);
          userBillConfirmYes = document.createElement('a');
          userBillDeleteConfirmButtons.appendChild(userBillConfirmYes);
          userBillConfirmYes.id = 'userBillConfirmYes';
          userBillConfirmYes.className = 'btn';
          userBillConfirmYes.setAttribute("style", "cursor: pointer;");
          userBillConfirmYes.innerHTML = 'yes';
        }
        let userBillConfirmNo = document.getElementById('userBillConfirmNo');
        if (userBillConfirmNo) {
          userBillConfirmNo.parentNode.removeChild(userBillConfirmNo);
          userBillConfirmNo = document.createElement('a');
          userBillDeleteConfirmButtons.appendChild(userBillConfirmNo);
          userBillConfirmNo.id = 'userBillConfirmNo';
          userBillConfirmNo.className = 'btn';
          userBillConfirmNo.setAttribute("style", "cursor: pointer;");
          userBillConfirmNo.innerHTML = 'no';
        }
        let userBillDeleteName = document.getElementById('userBillDeleteName');
        let userBillDeletePayTo = document.getElementById('userBillDeletePayTo');
        let userBillDeleteAmountDue = document.getElementById('userBillDeleteAmountDue');
        let userBillDeletePaidBoolean = document.getElementById('userBillDeletePaidBoolean');

        $http.get(`/bills/${billId}`)
        .then(billForDeleteData=>{
          let billForDelete = billForDeleteData.data;
          userBillDeleteName.innerHTML = billForDelete.name;
          userBillDeletePayTo.innerHTML = 'Pay to: ' + billForDelete.pay_to;
          userBillDeleteAmountDue.innerHTML = 'Amount: ' + billForDelete.amount_due;
          if (billForDelete.is_paid) {
            userBillDeletePaidBoolean.innerHTML = 'paid';
          } else {
            userBillDeletePaidBoolean.innerHTML = 'unpaid';
          }

          userBillConfirmNo.addEventListener('click', ()=>{
            billsManagementDiv.setAttribute("style", "display: initial;");
            userBillDeleteConfirmDiv.setAttribute("style", "display: none;");
          });

          userBillConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/bills/${billId}`)
            .then(()=>{
              userBillDeleteConfirmDiv.setAttribute("style", "display: none;");
              billsManager();
            });
          });

        });


        billsManagementDiv.setAttribute("style", "display: none;");
        userBillDeleteConfirmDiv.setAttribute("style", "display: initial;");
      }

      function userTasksEditorDone () {
        let userTasksEditingDiv = document.getElementById('userTasksEditingDiv');
        let tasksManagerDone = document.getElementById('tasksManagerDone');


        userTasksEditingDiv.setAttribute("style", "display: none;");
        tasksManagerDone.setAttribute("style", "visibility: visible;");
        taskManager();
      }

      function editTask(taskId) {
        let userTasksEditingDiv = document.getElementById('userTasksEditingDiv');
        let tasksManagerDone = document.getElementById('tasksManagerDone');
        let userTaskNameDiv = document.getElementById('userTaskNameDiv');
        let userTasknameInput = document.getElementById('userTasknameInput');
        if (userTasknameInput) {
          userTasknameInput.parentNode.removeChild(userTasknameInput);
          userTasknameInput = document.createElement('input');
          userTaskNameDiv.appendChild(userTasknameInput);
          userTasknameInput.id = 'userTasknameInput';
          userTasknameInput.type = 'text';
          userTasknameInput.className = 'pure-input-1';
        }
        let userTaskNotesDiv = document.getElementById('userTaskNotesDiv');
        let userTasknotesInput = document.getElementById('userTasknotesInput');
        if (userTasknotesInput) {
          userTasknotesInput.parentNode.removeChild(userTasknotesInput);
          userTasknotesInput = document.createElement('textarea');
          userTaskNotesDiv.appendChild(userTasknotesInput);
          userTasknotesInput.id = 'userTasknotesInput';
          // userTasknotesInput.type = 'textarea';
          userTasknotesInput.rows = '5';
          userTasknotesInput.className = 'pure-input-1';
        }
        let userTaskDueDateDiv = document.getElementById('userTaskDueDateDiv');
        let userTaskDueDateInput = document.getElementById('userTaskDueDateInput');
        if (userTaskDueDateInput) {
          userTaskDueDateInput.parentNode.removeChild(userTaskDueDateInput);
          userTaskDueDateInput = document.createElement('input');
          userTaskDueDateDiv.appendChild(userTaskDueDateInput);
          userTaskDueDateInput.id = 'userTaskDueDateInput';
          userTaskDueDateInput.type = 'date';
          userTaskDueDateInput.className = 'pure-input-1';
        }
        let userTaskCompletedDiv = document.getElementById('userTaskCompletedDiv');
        let userTaskCompleted = document.getElementById('userTaskCompleted');
        if (userTaskCompleted) {
          userTaskCompleted.parentNode.removeChild(userTaskCompleted);
          userTaskCompleted = document.createElement('input');
          userTaskCompletedDiv.appendChild(userTaskCompleted);
          userTaskCompleted.id = 'userTaskCompleted';
          userTaskCompleted.type = 'checkbox';
        }
        let userTaskCompletedDateDiv = document.getElementById('userTaskCompletedDateDiv');
        let dateTaskCompletedDiv = document.getElementById('dateTaskCompletedDiv');
        let userTaskCompletedDate = document.getElementById('userTaskCompletedDate');
        if (userTaskCompletedDate) {
          userTaskCompletedDate.parentNode.removeChild(userTaskCompletedDate);
          userTaskCompletedDate = document.createElement('input');
          dateTaskCompletedDiv.appendChild(userTaskCompletedDate);
          userTaskCompletedDate.id = 'userTaskCompletedDate';
          userTaskCompletedDate.type = 'date';
          userTaskCompletedDate.className = 'pure-input-1';
        }

        $http.get(`/tasks/${taskId}`)
        .then(taskData=>{
          let task = taskData.data;
          //let dueDate = task.due_date;
          userTasknameInput.value = task.name;
          userTasknotesInput.value = task.user_notes;
          userTaskDueDateInput.value = task.due_date.slice(0, 10);
          if (task.is_completed) {
            userTaskCompleted.checked = true;
            userTaskCompletedDateDiv.setAttribute("style", "visibility: visible;");
          } else {
            userTaskCompleted.checked = false;
            userTaskCompletedDateDiv.setAttribute("style", "visibility: hidden;");
          }
          if (task.completed_date !== null) {
            userTaskCompletedDate.value = task.completed_date.slice(0, 10);
          }


          userTasknameInput.addEventListener('focusout', ()=>{
            if ((userTasknameInput.value !== '') && (userTasknameInput.value !== task.name)) {
              let subObj = {
                name: userTasknameInput.value
              };
              $http.patch(`/tasks/${taskId}`, subObj)
              .then(()=>{
                task.name = userTasknameInput.value;
              });
            }
          });
          userTasknotesInput.addEventListener('focusout', ()=>{
            if ((userTasknotesInput.value !== '') && (userTasknotesInput.value !== task.user_notes)) {
              let subObj = {
                user_notes: userTasknotesInput.value
              };
              $http.patch(`/tasks/${taskId}`, subObj)
              .then(()=>{
                task.user_notes = userTasknotesInput.value;
              });
            }
          });
          userTaskDueDateInput.addEventListener('change', ()=>{
            let subObj = {
              due_date: new Date(userTaskDueDateInput.value)
            };
            $http.patch(`/tasks/${taskId}`, subObj)
            .then(()=>{
              task.due_date = subObj.due_date;
            });
          });
          userTaskCompletedDate.addEventListener('change', ()=>{
            let subObj = {
              completed_date: new Date(userTaskCompletedDate.value)
            };
            $http.patch(`/tasks/${taskId}`, subObj)
            .then(()=>{
              task.completed_date = subObj.completed_date;
            });
          });
          userTaskCompleted.addEventListener('click', ()=>{
            let subObj = {
              is_completed: userTaskCompleted.checked
            };
            let completedDate = new Date();
            let completionString = completedDate.getFullYear() + '-';
            let month = completedDate.getMonth() + 1;
            let day = completedDate.getDate();
            if (month < 10) {
              completionString += '0' + month +'-';
            } else {
              completionString += month + '-';
            }
            if (day < 10) {
              completionString += '0' + day;
            } else {
              completionString += day;
            }
            if (userTaskCompleted.checked) {
              userTaskCompletedDateDiv.setAttribute("style", "visibility: visible;");
              userTaskCompletedDate.value = completionString;
              subObj.completed_date = new Date(completionString + 'T13:44:00.000Z');
            } else {
              userTaskCompletedDateDiv.setAttribute("style", "visibility: hidden;");
              userTaskCompletedDate.value = null;
              subObj.completed_date = null;
            }

            $http.patch(`/tasks/${taskId}`, subObj)
            .then(()=>{
              task.is_completed = userTaskCompleted.checked;
            });
          });
        });

        userTasksEditingDiv.setAttribute("style", "display: initial;");
        tasksManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function closeGoalsManager() {
        let goalsManager = document.getElementById('goalsManager');
        let goalsZone = document.getElementById('goalsZone');
        let goalsManagementDiv = document.getElementById('goalsManagementDiv');

        goalsManager.setAttribute("style", "visibility: visible;");
        goalsZone.setAttribute("style", "opacity: 1.0;");
        goalsManagementDiv.setAttribute("style", "display: none;");
      }

      function getGoalBlocktypeName (index, blockId) {
        $http.get(`/blocktypes/${blockId}`)
        .then(blockData=>{
          let block = blockData.data;
          vm.userGoals[index].blocktype = block.type;
        });
      }

      function goalManager() {
        let goalsManager = document.getElementById('goalsManager');
        let goalsZone = document.getElementById('goalsZone');
        let goalsManagementDiv = document.getElementById('goalsManagementDiv');

        $http.get(`/goalsbyuser/${currentUserId}`)
        .then(userGoalsData=>{
          let goals = userGoalsData.data;
          console.log(goals);
          vm.userGoals = [];
          if (goals.length > 0) {
            for (let i = 0; i < goals.length; i++) {
              vm.userGoals[i] = {};
              vm.userGoals[i].weekly_goal = goals[i].weekly_goal;
              getGoalBlocktypeName(i, goals[i].block_type);
            }
          }
        });

        goalsManager.setAttribute("style", "visibility: hidden;");
        goalsZone.setAttribute("style", "opacity: 0.3;");
        goalsManagementDiv.setAttribute("style", "display: initial;");
      }

      function addNewHoliday() {
        let today = new Date();
        let holidaySub = {
          user_id: currentUserId,
          name: '',
          color: '#ffffff',
          picture: '',
          day_of: today,
          is_annual: true,
          rule: null,
          art_override: false,
          music_override: false,
          override_content: null
        };
        $http.post(`/holidays`, holidaySub)
        .then(newUserHolidayData=>{
          let newUserHoliday = newUserHolidayData.data[0];
          console.log(newUserHoliday);
          editHoliday(newUserHoliday.id);
        });
      }

      function deleteOccasion(occasionId) {
        let userOccasionDeleteConfirmDiv = document.getElementById('userOccasionDeleteConfirmDiv');
        let occasionsManagementDiv = document.getElementById('occasionsManagementDiv');
        let userOccasionDeleteName = document.getElementById('userOccasionDeleteName');
        let userOccasionDeleteDate = document.getElementById('userOccasionDeleteDate');
        let userOccasionDeleteAnnuality = document.getElementById('userOccasionDeleteAnnuality');
        let userOccasionDeleteConfirmButtons = document.getElementById('userOccasionDeleteConfirmButtons');
        let userOccasionConfirmYes = document.getElementById('userOccasionConfirmYes');
        if (userOccasionConfirmYes) {
          userOccasionConfirmYes.parentNode.removeChild(userOccasionConfirmYes);
          userOccasionConfirmYes = document.createElement('a');
          userOccasionDeleteConfirmButtons.appendChild(userOccasionConfirmYes);
          userOccasionConfirmYes.id = 'userOccasionConfirmYes';
          userOccasionConfirmYes.className = 'btn';
          userOccasionConfirmYes.innerHTML = 'yes';
          userOccasionConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');
        let userOccasionConfirmNo = document.getElementById('userOccasionConfirmNo');
        if (userOccasionConfirmNo) {
          userOccasionConfirmNo.parentNode.removeChild(userOccasionConfirmNo);
          userOccasionConfirmNo = document.createElement('a');
          userOccasionDeleteConfirmButtons.appendChild(userOccasionConfirmNo);
          userOccasionConfirmNo.id = 'userOccasionConfirmNo';
          userOccasionConfirmNo.className = 'btn';
          userOccasionConfirmNo.innerHTML = 'no';
          userOccasionConfirmNo.setAttribute("style", "cursor: pointer;");
        }


        $http.get(`/occasions/${occasionId}`)
        .then(userOccasionData=>{
          let userOccasion = userOccasionData.data;
          userOccasionDeleteName.innerHTML = userOccasion.name;
          userOccasionDeleteDate.innerHTML = cleanDate(userOccasion.day_of);
          if (userOccasion.is_annual) {
            userOccasionDeleteAnnuality.innerHTML = 'occurs annually';
          }

          userOccasionConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/occasions/${occasionId}`)
            .then(()=>{
              userOccasionDeleteConfirmDiv.setAttribute("style", "display: none;");
              occasionsManagementDiv.setAttribute("style", "display: initial;");
              userOccasionDeleteName.innerHTML = '';
              userOccasionDeleteDate.innerHTML = '';
              userOccasionDeleteAnnuality.innerHTML = '';
              occasionManage();
            });
          });
          userOccasionConfirmNo.addEventListener('click', ()=>{
            userOccasionDeleteConfirmDiv.setAttribute("style", "display: none;");
            occasionsManagementDiv.setAttribute("style", "display: initial;");
            userOccasionDeleteName.innerHTML = '';
            userOccasionDeleteDate.innerHTML = '';
            userOccasionDeleteAnnuality.innerHTML = '';
            occasionManage();
          });
        });

        userOccasionDeleteConfirmDiv.setAttribute("style", "display: initial;");
        occasionsManagementDiv.setAttribute("style", "display: none;");
        occasionsManagerDone.setAttribute("style", "visibility: visible;");
        userOccasionsEditingDiv.setAttribute("style", "display: none;");
      }

      function userBillsEditorDone() {
        let billsManagerDone = document.getElementById('billsManagerDone');
        let userBillsEditingDiv = document.getElementById('userBillsEditingDiv');

        billsManagerDone.setAttribute("style", "visibility: visible;");
        userBillsEditingDiv.setAttribute("style", "display: none;");
        billsManager();
      }

      function editBill(billId) {
        let billsManagerDone = document.getElementById('billsManagerDone');
        let userBillsEditingDiv = document.getElementById('userBillsEditingDiv');
        let userBillName = document.getElementById('userBillName');
        let userPayToDiv = document.getElementById('userPayToDiv');
        let userBillsPayTo = document.getElementById('userBillsPayTo');
        if (userBillsPayTo) {
          userBillsPayTo.parentNode.removeChild(userBillsPayTo);
          userBillsPayTo = document.createElement('input');
          userPayToDiv.appendChild(userBillsPayTo);
          userBillsPayTo.id = 'userBillsPayTo';
          userBillsPayTo.type = 'text';
          userBillsPayTo.className = 'pure-input-1';
        }
        let userAddressLine1Div = document.getElementById('userAddressLine1Div');
        let userBillsAddressLine1 = document.getElementById('userBillsAddressLine1');
        if (userBillsAddressLine1) {
          userBillsAddressLine1.parentNode.removeChild(userBillsAddressLine1);
          userBillsAddressLine1 = document.createElement('input');
          userAddressLine1Div.appendChild(userBillsAddressLine1);
          userBillsAddressLine1.id = 'userBillsAddressLine1';
          userBillsAddressLine1.type = 'text';
          userBillsAddressLine1.className = 'pure-input-1';
        }
        let userAddressLine2Div = document.getElementById('userAddressLine2Div');
        let userBillsAddressLine2 = document.getElementById('userBillsAddressLine2');
        if (userBillsAddressLine2) {
          userBillsAddressLine2.parentNode.removeChild(userBillsAddressLine2);
          userBillsAddressLine2 = document.createElement('input');
          userAddressLine2Div.appendChild(userBillsAddressLine2);
          userBillsAddressLine2.id = 'userBillsAddressLine2';
          userBillsAddressLine2.type = 'text';
          userBillsAddressLine2.className = 'pure-input-1';
        }
        let userCityLineDiv = document.getElementById('userCityLineDiv');
        let userBillsAddressCity = document.getElementById('userBillsAddressCity');
        if (userBillsAddressCity) {
          userBillsAddressCity.parentNode.removeChild(userBillsAddressCity);
          userBillsAddressCity = document.createElement('input');
          userCityLineDiv.appendChild(userBillsAddressCity);
          userBillsAddressCity.id = 'userBillsAddressCity';
          userBillsAddressCity.type = 'text';
          userBillsAddressCity.className = 'pure-input-1';
        }
        let userStateLineDiv = document.getElementById('userStateLineDiv');
        let userBillsAddressState = document.getElementById('userBillsAddressState');
        if (userBillsAddressState) {
          userBillsAddressState.parentNode.removeChild(userBillsAddressState);
          userBillsAddressState = document.createElement('input');
          userStateLineDiv.appendChild(userBillsAddressState);
          userBillsAddressState.id = 'userBillsAddressState';
          userBillsAddressState.type = 'text';
          userBillsAddressState.className = 'pure-input-1';
        }
        let userZipLine = document.getElementById('userZipLine');
        let userBillsAddressZip = document.getElementById('userBillsAddressZip');
        if (userBillsAddressZip) {
          userBillsAddressZip.parentNode.removeChild(userBillsAddressZip);
          userBillsAddressZip = document.createElement('input');
          userZipLine.appendChild(userBillsAddressZip);
          userBillsAddressZip.id = 'userBillsAddressZip';
          userBillsAddressZip.type = 'text';
          userBillsAddressZip.className = 'pure-input-1';
        }
        let userBalanceLine = document.getElementById('userBalanceLine');
        let userBillsBalance = document.getElementById('userBillsBalance');
        if (userBillsBalance) {
          userBillsBalance.parentNode.removeChild(userBillsBalance);
          userBillsBalance = document.createElement('input');
          userBalanceLine.appendChild(userBillsBalance);
          userBillsBalance.id = 'userBillsBalance';
          userBillsBalance.type = 'number';
          userBillsBalance.className = 'pure-input-1';
        }
        let userAmountDueLine = document.getElementById('userAmountDueLine');
        let userBillsAmountDue = document.getElementById('userBillsAmountDue');
        if (userBillsAmountDue) {
          userBillsAmountDue.parentNode.removeChild(userBillsAmountDue);
          userBillsAmountDue = document.createElement('input');
          userAmountDueLine.appendChild(userBillsAmountDue);
          userBillsAmountDue.id = 'userBillsAmountDue';
          userBillsAmountDue.type = 'number';
          userBillsAmountDue.className = 'pure-input-1';
        }
        let userBillDueDatDiv = document.getElementById('userBillDueDatDiv');
        let userBillsDateDue = document.getElementById('userBillsDateDue');
        if (userBillsDateDue) {
          userBillsDateDue.parentNode.removeChild(userBillsDateDue);
          userBillsDateDue = document.createElement('input');
          userBillDueDatDiv.appendChild(userBillsDateDue);
          userBillsDateDue.id = 'userBillsDateDue';
          userBillsDateDue.type = 'date';
          userBillsDateDue.className = 'pure-input-1';
        }
        let idPaidCheckboxDiv = document.getElementById('idPaidCheckboxDiv');
        let userBillIsPaid = document.getElementById('userBillIsPaid');
        if (userBillIsPaid) {
          userBillIsPaid.parentNode.removeChild(userBillIsPaid);
          idPaidCheckboxDiv.appendChild(userBillIsPaid);
          userBillIsPaid.id = 'userBillIsPaid';
          userBillIsPaid.type = 'checkbox';
        }
        let userPaymentInfosDiv = document.getElementById('userPaymentInfosDiv');
        let userBillsPaidAmountDiv = document.getElementById('userBillsPaidAmountDiv');
        let userBillsAmountPaid = document.getElementById('userBillsAmountPaid');
        if (userBillsAmountPaid) {
          userBillsAmountPaid.parentNode.removeChild(userBillsAmountPaid);
          userBillsAmountPaid = document.createElement('input');
          userBillsPaidAmountDiv.appendChild(userBillsAmountPaid);
          userBillsAmountPaid.id = 'userBillsAmountPaid';
          userBillsAmountPaid.type = 'number';
          userBillsAmountPaid.className = 'pure-input-1';
        }
        let datePaidDiv = document.getElementById('datePaidDiv');
        let userBillsDatePaid = document.getElementById('userBillsDatePaid');
        if (userBillsDatePaid) {
          userBillsDatePaid.parentNode.removeChild(userBillsDatePaid);
          userBillsDatePaid = document.createElement('input');
          datePaidDiv.appendChild(userBillsDatePaid);
          userBillsDatePaid.id = 'userBillsDatePaid';
          userBillsDatePaid.type = 'date';
          userBillsDatePaid.className = 'pure-input-1';
        }

        $http.get(`/bills/${billId}`)
        .then(userBillData=>{
          let userBill = userBillData.data;
          userBillName.innerHTML = userBill.name;
          userBillsPayTo.value = userBill.pay_to;
          userBillsAddressLine1.value = userBill.address_line1;
          userBillsAddressLine2.value = userBill.address_line2;
          userBillsAddressCity.value = userBill.city;
          userBillsAddressState.value = userBill.state;
          userBillsAddressZip.value = userBill.zip;
          userBillsBalance.value = userBill.balance;
          userBillsAmountDue.value = userBill.amount_due;
          userBillsDateDue.value = userBill.due_date.slice(0,10);
          if (userBill.is_paid) {
            userBillIsPaid.checked = true;
            userPaymentInfosDiv.setAttribute("style", "display: initial;");
          } else {
            userBillIsPaid.checked = false;
            userPaymentInfosDiv.setAttribute("style", "display: none;");
          }
          userBillsAmountPaid.value = userBill.amount_paid;
          if (userBill.date_paid !== null) {
            userBillsDatePaid.value = userBill.date_paid.slice(0, 10);
          }

          userBillsPayTo.addEventListener('focusout', ()=>{
            if ((userBillsPayTo.value !== userBill.pay_to) && (userBillsPayTo.value !== '')) {
              let subObj = {
                pay_to: userBillsPayTo.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.pay_to = userBillsPayTo.value;
              });
            }
          });
          userBillsAddressLine1.addEventListener('focusout', ()=>{
            if ((userBillsAddressLine1.value !== userBill.address_line1) && (userBillsAddressLine1.value !== '')) {
              let subObj = {
                address_line1: userBillsAddressLine1.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.address_line1 = userBillsAddressLine1.value;
              });
            }
          });
          userBillsAddressLine2.addEventListener('focusout', ()=>{
            if ((userBillsAddressLine2.value !== userBill.address_line2) && (userBillsAddressLine2.value !== '')) {
              let subObj = {
                address_line2: userBillsAddressLine2.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.address_line2 = userBillsAddressLine2.value;
              });
            }
          });
          userBillsAddressCity.addEventListener('focusout', ()=>{
            if ((userBillsAddressCity.value !== userBill.city) && (userBillsAddressCity.value !== '')) {
              let subObj = {
                city: userBillsAddressCity.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.city = userBillsAddressCity.value;
              });
            }
          });
          userBillsAddressState.addEventListener('focusout', ()=>{
            if ((userBillsAddressState.value !== userBill.state) && (userBillsAddressState.value !== '')) {
              let subObj = {
                state: userBillsAddressState.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.state = userBillsAddressState.value;
              });
            }
          });
          userBillsAddressZip.addEventListener('focusout', ()=>{
            if ((userBillsAddressZip.value !== userBill.zip) && (userBillsAddressZip.value !== '')) {
              let subObj = {
                zip: userBillsAddressZip.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.zip = userBillsAddressZip.value;
              });
            }
          });
          userBillsBalance.addEventListener('focusout', ()=>{
            if (userBillsBalance.value !== userBill.balance) {
              let subObj = {
                balance: userBillsBalance.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.balance = userBillsBalance.value;
              });
            }
          });
          userBillsAmountDue.addEventListener('focusout', ()=>{
            if (userBillsAmountDue.value !== userBill.amount_due) {
              let subObj = {
                amount_due: userBillsAmountDue.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.amount_due = userBillsAmountDue.value;
              });
            }
          });
          userBillsDateDue.addEventListener('change', ()=>{
            let upDate = new Date(userBillsDateDue.value);
            let subObj = {
              due_date: upDate
            };
            $http.patch(`/bills/${billId}`, subObj)
            .then(()=>{
              userBill.due_date = upDate;
            });
          });
          userBillIsPaid.addEventListener('click', ()=>{
            let subObj = {
              is_paid: userBillIsPaid.checked
            };
            if (userBillIsPaid.checked) {
              if (userBill.date_paid === null) {
                subObj.date_paid = new Date();
              }
              if (userBill.amount_paid < 0.01) {
                subObj.amount_paid = userBill.amount_due;
                userBillsAmountPaid.value = subObj.amount_paid;
              }
              userPaymentInfosDiv.setAttribute("style", "display: initial;");
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.is_paid = true;
              });
            } else {
              userPaymentInfosDiv.setAttribute("style", "display: none;");
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.is_paid = false;
              });
            }
          });
          userBillsAmountPaid.addEventListener('focusout', ()=>{
            if (userBillsAmountPaid.value !== userBill.amount_paid) {
              let subObj = {
                amount_paid: userBillsAmountPaid.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.amount_paid = userBillsAmountPaid.value;
              });
            }
          });
          userBillsDatePaid.addEventListener('change', ()=>{
            let subObj = {
              date_paid: new Date(userBillsDatePaid.value)
            };
            $http.patch(`/bills/${billId}`, subObj)
            .then(()=>{
              userBill.date_paid = new Date(userBillsDatePaid.value);
            });
          });
        });


        billsManagerDone.setAttribute("style", "visibility: hidden;");
        userBillsEditingDiv.setAttribute("style", "display: initial;");

      }

      function populateTasksManager() {
        $http.get(`/tasksbyuser/${currentUserId}`)
        .then(userTasksData=>{
          let userTasks = userTasksData.data;
          let userPendingTasks = userTasks.filter(task=>{
            return(!task.is_completed);
          });
          let userCompletedTasks = userTasks.filter(task=>{
            return(task.is_completed);
          });
          vm.userTasksPending = userPendingTasks.sort((a, b)=>{
            if (a.due_date < b.due_date) {
              return -1;
            } else if (a.due_date > b.due_date) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.userTasksCompleted = userCompletedTasks.sort((a, b)=>{
            if (a.completed_date < b.completed_date) {
              return -1;
            } else if (a.completed_date > b.completed_date) {
              return 1;
            } else {
              return 0;
            }
          });
          if (vm.userTasksPending.length > 0) {
            for (let i = 0; i < vm.userTasksPending.length; i++) {
              vm.userTasksPending[i].cleanDue = cleanDate(vm.userTasksPending[i].due_date);
            }
          }
          if (vm.userTasksCompleted.length > 0) {
            for (let j = 0; j < vm.userTasksCompleted.length; j++) {
              vm.userTasksCompleted[j].cleanCompletionDate = cleanDate(vm.userTasksCompleted[j].completed_date);
            }
          }
        });
      }

      function closeTasksManager() {
        let tasksManagementDiv = document.getElementById('tasksManagementDiv');
        let tasksManager = document.getElementById('tasksManager');
        let taskZone = document.getElementById('taskZone');

        tasksManagementDiv.setAttribute("style", "display: none;");
        tasksManager.setAttribute("style", "visibility: visible;");
        taskZone.setAttribute("style", "opacity: 1;");
      }

      function taskManager() {
        let tasksManagementDiv = document.getElementById('tasksManagementDiv');
        let tasksManager = document.getElementById('tasksManager');
        let taskZone = document.getElementById('taskZone');

        populateTasksManager();

        tasksManagementDiv.setAttribute("style", "display: initial;");
        tasksManager.setAttribute("style", "visibility: hidden;");
        taskZone.setAttribute("style", "opacity: 0.3;");
      }

      function cleanOutFloatingHolidayRecords(holidayId) {
        $http.delete(`/holidays/${holidayId}`)
        .then(()=>{
          populateHolidayManager();
        });
      }

      function deleteUserFloatingUserHoliday(holidayName, userHolidayDeleteConfirmDiv, holidayManagementDiv) {
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(userHolidayData=>{
          let floatingHoliday = userHolidayData.data.filter(holiday=>{
            return(holiday.name === holidayName);
          });
          for (let i = 0; i <floatingHoliday.length; i++) {
            cleanOutFloatingHolidayRecords(floatingHoliday[i].id);
          }
          userHolidayDeleteConfirmDiv.setAttribute("style", "display: none;");
          holidayManagementDiv.setAttribute("style", "display: initial;");

        });
      }

      function deleteHoliday(holidayId) {
        let userHolidayDeleteConfirmDiv = document.getElementById('userHolidayDeleteConfirmDiv');
        let holidayManagementDiv = document.getElementById('holidayManagementDiv');
        let userHolidayDeleteBar = document.getElementById('userHolidayDeleteBar');
        let userHolidayDeleteConfirmForm = document.getElementById('userHolidayDeleteConfirmForm');
        let userHolidayDeleteQuery = document.getElementById('userHolidayDeleteQuery');
        let userHolidayDeleteImage = document.getElementById('userHolidayDeleteImage');
        let userHolidayDeleteConfirmButtons = document.getElementById('userHolidayDeleteConfirmButtons');
        let userHolidayConfirmYes = document.getElementById('userHolidayConfirmYes');
        if (userHolidayConfirmYes) {
          userHolidayConfirmYes.parentNode.removeChild(userHolidayConfirmYes);
          userHolidayConfirmYes = document.createElement('a');
          userHolidayDeleteConfirmButtons.appendChild(userHolidayConfirmYes);
          userHolidayConfirmYes.id = 'userHolidayConfirmYes';
          userHolidayConfirmYes.className = 'btn';
          userHolidayConfirmYes.setAttribute("style", "cursor: pointer;");
          userHolidayConfirmYes.innerHTML = 'yes';
        }
        let userHolidayConfirmNo = document.getElementById('userHolidayConfirmNo');
        if (userHolidayConfirmNo) {
          userHolidayConfirmNo.parentNode.removeChild(userHolidayConfirmNo);
          userHolidayConfirmNo = document.createElement('a');
          userHolidayDeleteConfirmButtons.appendChild(userHolidayConfirmNo);
          userHolidayConfirmNo.id = 'userHolidayConfirmNo';
          userHolidayConfirmNo.className = 'btn';
          userHolidayConfirmNo.setAttribute("style", "cursor:pointer;");
          userHolidayConfirmNo.innerHTML = 'no';
        }


        $http.get(`/holidays/${holidayId}`)
        .then((userDeleteHolidayData=>{
          let userDeleteHoliday = userDeleteHolidayData.data;
          userHolidayDeleteImage.src = userDeleteHoliday.picture;
          userHolidayDeleteBar.setAttribute("style", "background: " + userDeleteHoliday.color + "; background-color: -webkit-linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff); background: -o-linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff); background: -moz-linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff); background: linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff);");
          userHolidayDeleteConfirmForm.setAttribute("style", "background: " + userDeleteHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff); background: -o-linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff); background: linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff);");
          userHolidayDeleteQuery.innerHTML = "Delete " + userDeleteHoliday.name + "?";

          userHolidayConfirmYes.addEventListener('click', ()=>{

            if (userDeleteHoliday.is_annual) {
              $http.delete(`/holidays/${holidayId}`)
              .then(()=>{
                userHolidayDeleteConfirmDiv.setAttribute("style", "display: none;");
                holidayManagementDiv.setAttribute("style", "display: initial;");
                populateHolidayManager();
              });
            } else {
              deleteUserFloatingUserHoliday(userDeleteHoliday.name, userHolidayDeleteConfirmDiv, holidayManagementDiv);
            }
          });
          userHolidayConfirmNo.addEventListener('click', ()=>{
            userHolidayDeleteConfirmDiv.setAttribute("style", "display: none;");
            holidayManagementDiv.setAttribute("style", "display: initial;");
          });
        }));

        userHolidayDeleteConfirmDiv.setAttribute("style", "display: initial;");
        holidayManagementDiv.setAttribute("style", "display: none;");
      }

      function userOccasionsEditorDone() {
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');

        occasionsManagerDone.setAttribute("style", "visibility: visible;");
        userOccasionsEditingDiv.setAttribute("style", "display: none;");
        populateOccasionManager();
      }

      function editOccaision(occasionId) {
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');
        let userOccasionNameDiv = document.getElementById('userOccasionNameDiv');
        let userOccasionsEditName = document.getElementById('userOccasionsEditName');
        if (userOccasionsEditName) {
          userOccasionsEditName.parentNode.removeChild(userOccasionsEditName);
          userOccasionsEditName = document.createElement('input');
          userOccasionNameDiv.appendChild(userOccasionsEditName);
          userOccasionsEditName.id = 'userOccasionsEditName';
          userOccasionsEditName.type = 'text';
          userOccasionsEditName.className = 'pure-input-1';
        }
        let userOccasionDateDiv = document.getElementById('userOccasionDateDiv');
        let userOccasionsDate = document.getElementById('userOccasionsDate');
        if (userOccasionsDate) {
          userOccasionsDate.parentNode.removeChild(userOccasionsDate);
          userOccasionsDate = document.createElement('input');
          userOccasionDateDiv.appendChild(userOccasionsDate);
          userOccasionsDate.id = 'userOccasionsDate';
          userOccasionsDate.className = 'pure-input-1';
          userOccasionsDate.type = 'date';
        }
        let userOccasionAnnualCheckboxDiv = document.getElementById('userOccasionAnnualCheckboxDiv');
        let userOccasionsAnnualState = document.getElementById('userOccasionsAnnualState');
        if (userOccasionsAnnualState) {
          userOccasionsAnnualState.parentNode.removeChild(userOccasionsAnnualState);
          userOccasionsAnnualState = document.createElement('input');
          userOccasionAnnualCheckboxDiv.appendChild(userOccasionsAnnualState);
          userOccasionsAnnualState.id = userOccasionsAnnualState;
          userOccasionsAnnualState.type = 'checkbox';
        }

        $http.get(`/occasions/${occasionId}`)
        .then(occasionData=>{
          let occasion = occasionData.data;
          userOccasionsEditName.value = occasion.name;
          userOccasionsDate.value = occasion.day_of.slice(0,10);
          if (occasion.is_annual) {
            userOccasionsAnnualState.checked = true;
          } else {
            userOccasionsAnnualState.checked = false;
          }

          userOccasionsEditName.addEventListener('focusout', ()=>{
            let subObj = {
              name: userOccasionsEditName.value
            };
            if ((userOccasionsEditName.value !== '') && (userOccasionsEditName.value !== occasion.name)) {
              $http.patch(`/occasions/${occasionId}`, subObj)
              .then(()=>{
                occasion.name = subObj.name;
              });
            }
          });
          userOccasionsDate.addEventListener('change', ()=>{
            let subObj = {
              day_of: new Date(userOccasionsDate.value)
            };
            $http.patch(`/occasions/${occasionId}`, subObj)
            .then(()=>{
              occasion.day_of = new Date(subObj.day_of);
            });
          });
          userOccasionsAnnualState.addEventListener('click', ()=>{
            let subObj = {
              is_annual: userOccasionsAnnualState.checked
            };
            $http.patch(`/occasions/${occasionId}`, subObj)
            .then(()=>{
              occasion.is_annual = userOccasionsAnnualState.checked;
            });
          });
        });

        userOccasionsEditingDiv.setAttribute("style", "display: initial;");
        occasionsManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function closeBillsManager() {
        let billsManagerButton = document.getElementById('billsManagerButton');
        let billZone = document.getElementById('billZone');
        let billsManagementDiv = document.getElementById('billsManagementDiv');

        billsManagerButton.setAttribute("style", "visibility: visible;");
        billZone.setAttribute("style", "opacity: 1;");
        billsManagementDiv.setAttribute("style", "display: none;");
      }

      function billsManager() {
        let billsManagerButton = document.getElementById('billsManagerButton');
        let billZone = document.getElementById('billZone');
        let billsManagementDiv = document.getElementById('billsManagementDiv');

        $http.get(`/billsbyuser/${currentUserId}`)
        .then(allUserBillsData=>{
          let allUserBills = allUserBillsData.data;
          let userUnpaidBills = allUserBills.filter(bill=>{
            return(!bill.is_paid);
          });
          let userPaidBills = allUserBills.filter(bill=>{
            return(bill.is_paid);
          });
          vm.userUnpaidBills = userUnpaidBills.sort((a,b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.userPaidBills = userPaidBills.sort((a,b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          if (vm.userUnpaidBills.length > 0) {
            for (let i = 0; i < vm.userUnpaidBills.length; i++) {
              vm.userUnpaidBills[i].cleanDue = cleanDate(vm.userUnpaidBills[i].due_date);
            }
          }
          if (vm.userPaidBills.length > 0) {
            for (let j = 0; j < vm.userPaidBills.length; j++) {
              vm.userPaidBills[j].cleanPaid = cleanDate(vm.userPaidBills[j].date_paid);
            }
          }
        });

        billsManagerButton.setAttribute("style", "visibility: hidden;");
        billZone.setAttribute("style", "opacity: 0.4;");
        billsManagementDiv.setAttribute("style", "display: initial;");
      }

      function userHolidayEditorDone() {
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        let userHolidayEditorDiv = document.getElementById('userHolidayEditorDiv');
        let holidayReporter = document.getElementById('holidayReporter');

        holidayManagerDone.setAttribute("style", "visibility: visible;");
        holidayReporter.setAttribute("style", "visibility: visible;");
        userHolidayEditorDiv.setAttribute("style", "display: none;");
        holidayManage();
      }

      function holidayArtDeleteListen(delElement, holiday, index, div) {
        let subObj = {
          override_content: holiday.override_content
        };
        delElement.addEventListener('click', ()=>{
          subObj.override_content.img_paths.splice(index, 1);
          subObj.override_content.titles.splice(index, 1);
          subObj.override_content.artists.splice(index, 1);
          subObj.override_content.years.splice(index, 1);
          $http.patch(`/holidays/${holiday.id}`, subObj)
          .then(()=>{
            populateHolidayArtEditor(div, holiday);
          });
        });
      }

      function holidayArtistListen(artistName, holiday, index) {
        let subObj = {
          override_content: holiday.override_content
        };
        artistName.addEventListener('focusout', ()=>{
          if ((artistName.value !== '') && (artistName.value !== subObj.override_content.artists[index])) {
            subObj.override_content.artists[index] = artistName.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
              console.log('success');
            });
          }
        });
      }

      function holidayTitleListen(workTitle, holiday, index) {
        let subObj = {
          override_content: holiday.override_content
        };
        workTitle.addEventListener('focusout', ()=>{
          if ((workTitle.value !== '') && (workTitle.value !== subObj.override_content.titles[index])) {
            subObj.override_content.titles[index] = workTitle.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
              console.log('success');
            });
          }
        });
      }

      function holidayYearListen(theYear, holiday, index) {
        let subObj = {
          override_content: holiday.override_content
        };
        theYear.addEventListener('focusout', ()=>{
          if ((theYear.value !== '') && (theYear.value !== subObj.override_content.years[index])) {
            subObj.override_content.years[index] = theYear.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
              console.log('success');
            });
          }
        });
      }

      function holidayMusicDeleteListen(button, holiday, index, musicEditor) {
        let subObj = {
          override_content: holiday.override_content
        };
        button.addEventListener('click', ()=>{
          subObj.override_content.sources.splice(index, 1);
          subObj.override_content.src_strings.splice(index, 1);
          subObj.override_content.href_strings.splice(index, 1);
          subObj.override_content.a_strings.splice(index, 1);
          $http.patch(`/holidays/${holiday.id}`, subObj)
          .then(()=>{
            holiday.override_content = subObj.override_content;
            populateHolidayMusicEditor(musicEditor, holiday);
          });
        });
      }

      function populateHolidayMusicEditor(musicEditor, holiday) {
        let deleteButton;
        let musicPlayer;
        let musicATag;

        while (musicEditor.firstChild) {
          musicEditor.removeChild(musicEditor.firstChild);
        }
        if ((holiday.override_content === null) || (holiday.override_content === undefined)) {
          holiday.override_content = {};
          holiday.override_content.img_paths = [];
          holiday.override_content.artists = [];
          holiday.override_content.titles = [];
          holiday.override_content.years = [];
          holiday.override_content.sources = [];
          holiday.override_content.src_strings = [];
          holiday.override_content.href_strings = [];
          holiday.override_content.a_strings = [];
        }
        if (holiday.override_content.sources === undefined) {
          holiday.override_content.sources = [];
          holiday.override_content.src_strings = [];
          holiday.override_content.href_strings = [];
          holiday.override_content.a_strings = [];
        }
        if (holiday.override_content.sources.length > 0) {
          for (let i = 0; i < holiday.override_content.sources.length; i++) {
            if (holiday.override_content.sources[i] === 'bandcamp') {
              musicPlayer = document.createElement('iframe');
              musicEditor.appendChild(musicPlayer);
              musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
              musicPlayer.seamless = true;
              musicPlayer.src = holiday.override_content.src_strings[i];
              musicATag = document.createElement('a');
              musicPlayer.appendChild(musicATag);
              musicATag.href = holiday.override_content.href_strings[i];
              musicATag.innerHTML = holiday.override_content.a_strings[i];
              deleteButton = document.createElement('a');
              musicEditor.appendChild(deleteButton);
              deleteButton.className = 'btn';
              deleteButton.innerHTML = 'delete';
              deleteButton.setAttribute("style", "cursor: pointer; margin-bottom: 1em; margin-top: 0;");
              holidayMusicDeleteListen(deleteButton, holiday, i, musicEditor);
            }
          }
        }
      }

      function populateHolidayArtEditor(holidayArtsDiv, holiday) {

        let deleteButton;
        let picture;
        let artist;
        let title;
        let year;

        while (holidayArtsDiv.firstChild) {
          holidayArtsDiv.removeChild(holidayArtsDiv.firstChild);
        }
        if ((holiday.override_content === null) || (holiday.override_content === undefined)) {
          holiday.override_content = {};
          holiday.override_content.img_paths = [];
          holiday.override_content.artists = [];
          holiday.override_content.titles = [];
          holiday.override_content.years = [];
          holiday.override_content.sources = [];
          holiday.override_content.src_strings = [];
          holiday.override_content.href_strings = [];
          holiday.override_content.a_strings = [];
        }
        if (holiday.override_content.img_paths.length > 0) {
          for (let i = 0; i < holiday.override_content.img_paths.length; i++) {
            picture = document.createElement('img');
            holidayArtsDiv.appendChild(picture);
            picture.src = holiday.override_content.img_paths[i];
            deleteButton = document.createElement('a');
            holidayArtsDiv.appendChild(deleteButton);
            deleteButton.className = 'btn';
            deleteButton.innerHTML = 'delete';
            deleteButton.setAttribute("style", "cursor: pointer;");
            holidayArtDeleteListen(deleteButton, holiday, i, holidayArtsDiv);
            artist = document.createElement('input');
            holidayArtsDiv.appendChild(artist);
            artist.type = 'text';
            artist.className = "pure-input-1";
            artist.value = holiday.override_content.artists[i];
            holidayArtistListen(artist, holiday, i);
            title = document.createElement('input');
            holidayArtsDiv.appendChild(title);
            title.type = 'text';
            title.className = 'pure-input-1';
            title.value = holiday.override_content.titles[i];
            holidayTitleListen(title, holiday, i);
            year = document.createElement('input');
            holidayArtsDiv.appendChild(year);
            year.type = 'text';
            year.className = 'pure-input-1';
            year.value = holiday.override_content.years[i];
            holidayYearListen(year, holiday, i);
          }
        }




      }

      function userHolidayArtAdder(adderDiv, holiday) {
        let index = holiday.override_content.img_paths.length;
        let userHolidayArtsEditor = document.getElementById('userHolidayArtsEditor');
        let userAddHolidayArt = document.getElementById('userAddHolidayArt');
        let userHolidayEditorDoneButton = document.getElementById('userHolidayEditorDoneButton');
        let doneButton = document.createElement('a');
        adderDiv.appendChild(doneButton);
        doneButton.id = 'doneButton';
        doneButton.className = 'btn';
        doneButton.innerHTML = 'done';
        doneButton.setAttribute("style", "cursor: pointer; margin-left: 16em;");
        let image = document.createElement('img');
        adderDiv.appendChild(image);
        image.id = 'image';
        image.setAttribute("style", "width: 90%; margin: 0.5em 0em 0.5em 1em;");
        let imageURL = document.createElement('input');
        adderDiv.appendChild(imageURL);
        imageURL.id = 'imageURL';
        imageURL.type = 'text';
        imageURL.className = 'pure-input-1';
        imageURL.placeholder = 'image URL';
        let imageUploadButton = document.createElement('a');
        adderDiv.appendChild(imageUploadButton);
        imageUploadButton.className = 'btn';
        imageUploadButton.innerHTML = 'upload';
        imageUploadButton.setAttribute("style", "cursor: pointer;");
        let holidayArtImageUploaderDiv = document.createElement('div');
        adderDiv.appendChild(holidayArtImageUploaderDiv);
        holidayArtImageUploaderDiv.id = 'holidayArtImageUploaderDiv';
        let artist = document.createElement('input');
        adderDiv.appendChild(artist);
        artist.type = 'text';
        artist.className = 'pure-input-1';
        artist.setAttribute("style", "visibility: hidden;");
        let title = document.createElement('input');
        adderDiv.appendChild(title);
        title.type = 'text';
        title.className = 'pure-input-1';
        title.setAttribute("style", "visibility: hidden;");
        let year = document.createElement('input');
        adderDiv.appendChild(year);
        year.type = 'text';
        year.className = 'pure-input-1';
        year.setAttribute("style", "visibility: hidden;");



        doneButton.addEventListener('click', ()=>{
          userAddHolidayArt.setAttribute("style", "visibility: visible; background: " + holiday.color + "; background-color: -webkit-linear-gradient(135deg, " + holiday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + holiday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + holiday.color + ", #FBFBF3); background: linear-gradient(135deg, " + holiday.color + ", #FBFBF3);");
          userHolidayEditorDoneButton.setAttribute("style", "visibility: visible;");
          while (adderDiv.firstChild) {
            adderDiv.removeChild(adderDiv.firstChild);
          }
          populateHolidayArtEditor(userHolidayArtsEditor, holiday);
        });
        imageURL.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content,
            art_override: true
          };
          if (imageURL.value !== '') {
            subObj.override_content.img_paths[index] = imageURL.value;
            image.src = imageURL.value;
            if (subObj.override_content.artists[index] === undefined) {
              subObj.override_content.artists[index] = '';
              artist.placeholder = 'artist';
              artist.setAttribute("style", "visibility: visible;");
            }
            if (subObj.override_content.titles[index] === undefined) {
              subObj.override_content.titles[index] = '';
              title.placeholder = 'title';
              title.setAttribute("style", "visibility: visible;");
            }
            if (subObj.override_content.years[index] === undefined) {
              subObj.override_content.years[index] = '';
              year.placeholder = 'year';
              year.setAttribute("style", "visibility: visible;");
            }
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
        imageUploadButton.addEventListener('click', ()=>{
          let fileUploader = document.createElement('input');
          holidayArtImageUploaderDiv.appendChild(fileUploader);
          fileUploader.type = 'file';
          let submitButton = document.createElement('a');
          holidayArtImageUploaderDiv.appendChild(submitButton);
          submitButton.className = 'btn';
          submitButton.innerHTML = 'submit';
          submitButton.setAttribute("style", "cursor: pointer;");
          let cancelButton = document.createElement('a');
          holidayArtImageUploaderDiv.appendChild(cancelButton);
          cancelButton.className = 'btn';
          cancelButton.innerHTML = 'cancel';
          cancelButton.setAttribute("style", "cursor: pointer;");
          imageUploadButton.setAttribute("style", "visibility: hidden;");

          cancelButton.addEventListener('click', ()=>{
            while (holidayArtImageUploaderDiv.firstChild) {
              holidayArtImageUploaderDiv.removeChild(holidayArtImageUploaderDiv.firstChild);
            }
            imageUploadButton.setAttribute("style", "visibility: visible;");
          });
        });
        artist.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content
          };
          if ((artist.value !== '') && (artist.value !== subObj.override_content.artists[index])) {
            subObj.override_content.artists[index] = artist.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
        title.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content
          };
          if ((title.value !== '') && (title.value !== subObj.override_content.titles[index])) {
            subObj.override_content.titles[index] = title.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
        year.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content
          };
          if ((year.value !== '') && (year.value !== subObj.override_content.years[index])) {
            subObj.override_content.years[index] = year.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
      }

      function editHoliday(holidayId) {
        let reportForHolidays = document.getElementById('reportForHolidays');
        let element;
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        let userHolidayEditorDoneButton = document.getElementById('userHolidayEditorDoneButton');
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        let userHolidayEditorDiv = document.getElementById('userHolidayEditorDiv');
        let holidayEditorTitle = document.getElementById('holidayEditorTitle');
        let userHolidayNameField = document.getElementById('userHolidayNameField');
        let userHolidayName = document.getElementById('userHolidayName');
        if (userHolidayName) {
          userHolidayName.parentNode.removeChild(userHolidayName);
          userHolidayName = document.createElement('input');
          userHolidayNameField.appendChild(userHolidayName);
          userHolidayName.id = 'userHolidayName';
          userHolidayName.type = 'text';
          userHolidayName.className = 'pure-input-1';
        }
        let userHolidayEditorBar = document.getElementById('userHolidayEditorBar');
        let userHolidayEditorForm = document.getElementById('userHolidayEditorForm');
        let userHolidayEditorPhoto = document.getElementById('userHolidayEditorPhoto');
        let userHolidayImageEditorField = document.getElementById('userHolidayImageEditorField');
        let holidayImageURL = document.getElementById('holidayImageURL');
        if (holidayImageURL) {
          holidayImageURL.parentNode.removeChild(holidayImageURL);
          holidayImageURL = document.createElement('input');
          userHolidayImageEditorField.appendChild(holidayImageURL);
          holidayImageURL.id = 'holidayImageURL';
          holidayImageURL.type = 'text';
          holidayImageURL.className = 'pure-input-1';
        }
        let holidayImageLinkUpload = document.getElementById('holidayImageLinkUpload');
        if (holidayImageLinkUpload) {
          holidayImageLinkUpload.parentNode.removeChild(holidayImageLinkUpload);
          holidayImageLinkUpload = document.createElement('a');
          userHolidayImageEditorField.appendChild(holidayImageLinkUpload);
          holidayImageLinkUpload.id = 'holidayImageLinkUpload';
          holidayImageLinkUpload.className = 'btn';
          holidayImageLinkUpload.innerHTML = 'upload';
          holidayImageLinkUpload.setAttribute("style", "cursor: pointer;");
        }
        let userHolidayImageUploadCentre = document.getElementById('userHolidayImageUploadCentre');
        let userHolidayPhotoFile = document.getElementById('userHolidayPhotoFile');
        if (userHolidayPhotoFile) {
          userHolidayPhotoFile.parentNode.removeChild(userHolidayPhotoFile);
          userHolidayPhotoFile = document.createElement('input');
          userHolidayImageUploadCentre.appendChild(userHolidayPhotoFile);
          userHolidayPhotoFile.id = 'userHolidayPhotoFile';
          userHolidayPhotoFile.type = 'file';
          userHolidayPhotoFile.className = 'pure-input-1';
          userHolidayPhotoFile.name = 'userHolidayPhotoFile';
        }
        let userUploadHolidayPhotoConfirm = document.getElementById('userUploadHolidayPhotoConfirm');
        if (userUploadHolidayPhotoConfirm) {
          userUploadHolidayPhotoConfirm.parentNode.removeChild(userUploadHolidayPhotoConfirm);
          userUploadHolidayPhotoConfirm = document.createElement('a');
          userHolidayImageUploadCentre.appendChild(userUploadHolidayPhotoConfirm);
          userUploadHolidayPhotoConfirm.id = 'userUploadHolidayPhotoConfirm';
          userUploadHolidayPhotoConfirm.className = 'btn';
          userUploadHolidayPhotoConfirm.innerHTML = 'confirm';
          userUploadHolidayPhotoConfirm.setAttribute("style", "cursor: pointer;");
        }
        let userUploadHolidayPhotoCancel = document.getElementById('userUploadHolidayPhotoCancel');
        if (userUploadHolidayPhotoCancel) {
          userUploadHolidayPhotoCancel.parentNode.removeChild(userUploadHolidayPhotoCancel);
          userUploadHolidayPhotoCancel = document.createElement('a');
          userHolidayImageUploadCentre.appendChild(userUploadHolidayPhotoCancel);
          userUploadHolidayPhotoCancel.id = 'userUploadHolidayPhotoCancel';
          userUploadHolidayPhotoCancel.className = 'btn';
          userUploadHolidayPhotoCancel.innerHTML = 'cancel';
          userUploadHolidayPhotoCancel.setAttribute("style", "cursor: pointer;");
        }
        let userHolidayColorPicker = document.getElementById('userHolidayColorPicker');
        let userHolidayColorSelector = document.getElementById('userHolidayColorSelector');
        if (userHolidayColorSelector) {
          userHolidayColorSelector.parentNode.removeChild(userHolidayColorSelector);
          userHolidayColorSelector = document.createElement('input');
          userHolidayColorPicker.appendChild(userHolidayColorSelector);
          userHolidayColorSelector.id = 'userHolidayColorSelector';
          userHolidayColorSelector.type = 'color';
          userHolidayColorSelector.className = 'pure-input-1';
        }
        let userHolidayAnnualCheckboxDiv = document.getElementById('userHolidayAnnualCheckboxDiv');
        let userHolidayAnnuality = document.getElementById('userHolidayAnnuality');
        if (userHolidayAnnuality) {
          userHolidayAnnuality.parentNode.removeChild(userHolidayAnnuality);
          userHolidayAnnuality = document.createElement('input');
          userHolidayAnnualCheckboxDiv.appendChild(userHolidayAnnuality);
          userHolidayAnnuality.id = 'userHolidayAnnuality';
          userHolidayAnnuality.type = 'checkbox';
        }
        let isFloat = document.getElementById('isFloat');
        let userSelectHolidayDate = document.getElementById('userSelectHolidayDate');
        let userHolidayDaySelect = document.getElementById('userHolidayDaySelect');
        if (userHolidayDaySelect) {
          userHolidayDaySelect.parentNode.removeChild(userHolidayDaySelect);
          userHolidayDaySelect = document.createElement('select');
          userSelectHolidayDate.appendChild(userHolidayDaySelect);
          userHolidayDaySelect.id = 'userHolidayDaySelect';
          userHolidayDaySelect.className = 'pure-input-1';
        }
        let userHolidayMonthSelect = document.getElementById('userHolidayMonthSelect');
        if (userHolidayMonthSelect) {
          userHolidayMonthSelect.parentNode.removeChild(userHolidayMonthSelect);
          userHolidayMonthSelect = document.createElement('select');
          userSelectHolidayDate.appendChild(userHolidayMonthSelect);
          userHolidayMonthSelect.id = 'userHolidayMonthSelect';
          userHolidayMonthSelect.className = 'pure-input-1';
        }
        let holidayOverrideCheckbox = document.getElementById('holidayOverrideCheckbox');
        let userHolidayHasArtContent = document.getElementById('userHolidayHasArtContent');
        if (userHolidayHasArtContent) {
          userHolidayHasArtContent.parentNode.removeChild(userHolidayHasArtContent);
          userHolidayHasArtContent = document.createElement('input');
          holidayOverrideCheckbox.appendChild(userHolidayHasArtContent);
          userHolidayHasArtContent.id = 'userHolidayHasArtContent';
          userHolidayHasArtContent.type = 'checkbox';
        }
        let userHolidayArtContent = document.getElementById('userHolidayArtContent');
        let userHolidayArtsEditor = document.getElementById('userHolidayArtsEditor');
        while (userHolidayArtsEditor.firstChild) {
          userHolidayArtsEditor.removeChild(userHolidayArtsEditor.firstChild);
        }
        let userHolidayDivHolderForAddButton = document.getElementById('userHolidayDivHolderForAddButton');
        let userAddHolidayArt = document.getElementById('userAddHolidayArt');
        if (userAddHolidayArt) {
          userAddHolidayArt.parentNode.removeChild(userAddHolidayArt);
          userAddHolidayArt = document.createElement('button');
          userHolidayDivHolderForAddButton.appendChild(userAddHolidayArt);
          userAddHolidayArt.id = 'userAddHolidayArt';
          userAddHolidayArt.innerHTML = 'add new';
        }
        let userHolidayArtAdditionDiv = document.getElementById('userHolidayArtAdditionDiv');
        while (userHolidayArtAdditionDiv.firstChild) {
          userHolidayArtAdditionDiv.removeChild(userHolidayArtAdditionDiv.firstChild);
        }
        let userHolidayMusicOverrideCheckDiv = document.getElementById('userHolidayMusicOverrideCheckDiv');
        let userHolidayHasMusicContent = document.getElementById('userHolidayHasMusicContent');
        if (userHolidayHasMusicContent) {
          userHolidayHasMusicContent.parentNode.removeChild(userHolidayHasMusicContent);
          userHolidayHasMusicContent = document.createElement('input');
          userHolidayMusicOverrideCheckDiv.appendChild(userHolidayHasMusicContent);
          userHolidayHasMusicContent.id = 'userHolidayHasMusicContent';
          userHolidayHasMusicContent.type = 'checkbox';
        }
        let userHolidayMusicContent = document.getElementById('userHolidayMusicContent');
        let userHolidayMusicsEditor = document.getElementById('userHolidayMusicsEditor');
        let userHolidayMusicAddButtonDiv = document.getElementById('userHolidayMusicAddButtonDiv');
        let userAddHolidayMusic = document.getElementById('userAddHolidayMusic');
        if (userAddHolidayMusic) {
          userAddHolidayMusic.parentNode.removeChild(userAddHolidayMusic);
          userAddHolidayMusic = document.createElement('button');
          userHolidayMusicAddButtonDiv.appendChild(userAddHolidayMusic);
          userAddHolidayMusic.id = 'userAddHolidayMusic';
          userAddHolidayMusic.innerHTML = 'add new';
          //userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: visible;");
        }
        let userHolidayMusicAddingForm = document.getElementById('userHolidayMusicAddingForm');
        userHolidayMusicAddingForm.setAttribute("style", "visibility: hidden;");
        let userHolidayMusicAddSubmit = document.getElementById('userHolidayMusicAddSubmit');
        if (userHolidayMusicAddSubmit) {
          userHolidayMusicAddSubmit.parentNode.removeChild(userHolidayMusicAddSubmit);
          userHolidayMusicAddSubmit = document.createElement('a');
          userHolidayMusicAddingForm.appendChild(userHolidayMusicAddSubmit);
          userHolidayMusicAddSubmit.id = 'userHolidayMusicAddSubmit';
          userHolidayMusicAddSubmit.className = 'btn';
          userHolidayMusicAddSubmit.setAttribute("style", "cursor: pointer;");
          userHolidayMusicAddSubmit.innerHTML = 'submit';
        }
        let userHolidayMusicAddCancel = document.getElementById('userHolidayMusicAddCancel');
        if (userHolidayMusicAddCancel) {
          userHolidayMusicAddCancel.parentNode.removeChild(userHolidayMusicAddCancel);
          userHolidayMusicAddCancel = document.createElement('a');
          userHolidayMusicAddingForm.appendChild(userHolidayMusicAddCancel);
          userHolidayMusicAddCancel.id = 'userHolidayMusicAddCancel';
          userHolidayMusicAddCancel.className = 'btn';
          userHolidayMusicAddCancel.setAttribute("style", "cursor: pointer;");
          userHolidayMusicAddCancel.innerHTML = 'cancel';
        }
        let userHolidayBandcampSubmissionString = document.getElementById('userHolidayBandcampSubmissionString');
        let userHolidayMusicAddErrorMessage = document.getElementById('userHolidayMusicAddErrorMessage');
        let holidayReporter = document.getElementById('holidayReporter');


        holidayManagerDone.setAttribute("style", "visibility: hidden;");
        holidayReporter.setAttribute("style", "visibility: hidden;");
        userHolidayEditorDiv.setAttribute("style", "display: initial;");
        reportForHolidays.setAttribute("style", "display: none;");

        $http.get(`/holidays/${holidayId}`)
        .then(userHolidayData=>{
          let userHoliday = userHolidayData.data;
          let holiDate = new Date(userHoliday.day_of);
          holidayEditorTitle.innerHTML = userHoliday.name;
          userHolidayName.value = userHoliday.name;
          userHolidayEditorBar.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3);");
          userHolidayEditorForm.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
          userAddHolidayArt.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
          userAddHolidayMusic.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
          userHolidayEditorPhoto.src = userHoliday.picture;
          holidayImageURL.value = userHoliday.picture;
          userHolidayColorSelector.value = userHoliday.color;
          if (userHoliday.is_annual) {
            userHolidayAnnuality.checked = true;
            isFloat.setAttribute("style", "visibility: hidden;");
            userSelectHolidayDate.setAttribute("style", "visibility: visible;");
          } else {
            userHolidayAnnuality.checked = false;
            isFloat.setAttribute("style", "visibility: visible;");
            userSelectHolidayDate.setAttribute("style", "visibility: hidden;");
          }
          while (userHolidayDaySelect.firstChild) {
            userHolidayDaySelect.removeChild(userHolidayDaySelect.firstChild);
          }
          for (let i = 0; i < days[holiDate.getMonth()]; i++) {
            element = document.createElement('option');
            userHolidayDaySelect.appendChild(element);

            element.innerHTML = (i + 1).toString();
          }
          userHolidayDaySelect.value = holiDate.getDate().toString();
          while (userHolidayMonthSelect.firstChild) {
            userHolidayMonthSelect.removeChild(userHolidayMonthSelect.firstChild);
          }
          for (let j = 0; j < months.length; j++) {
            element = document.createElement('option');
            userHolidayMonthSelect.appendChild(element);
            element.innerHTML = months[j];
          }
          userHolidayMonthSelect.value = months[holiDate.getMonth()];
          if (userHoliday.art_override) {
            userHolidayHasArtContent.checked = true;
            userHolidayArtContent.setAttribute("style", "visibility: visible;");
            populateHolidayArtEditor(userHolidayArtsEditor, userHoliday);
          } else {
            userHolidayHasArtContent.checked = false;
            userHolidayArtContent.setAttribute("style", "visibility: hidden;");
          }
          if (userHoliday.music_override) {
            userHolidayHasMusicContent.checked = true;
            userHolidayMusicContent.setAttribute("style", "visibility: visible;");
            populateHolidayMusicEditor(userHolidayMusicsEditor, userHoliday);
          } else {
            userHolidayHasMusicContent.checked = false;
            userHolidayMusicContent.setAttribute("style", "visibility: hidden;");
          }




          userHolidayName.addEventListener('focusout', ()=>{
            if ((userHolidayName.value !== '') && (userHolidayName.value !== userHoliday.name)) {
              let subObj = {
                name: userHolidayName.value
              };
              $http.patch(`/holidays/${holidayId}`, subObj)
              .then(()=>{
                userHoliday.name = userHolidayName.value;
                holidayEditorTitle.innerHTML = userHolidayName.value;
              });
            }
          });
          holidayImageURL.addEventListener('focusout', ()=>{
            if ((holidayImageURL.value !== '') && (holidayImageURL.value !== userHoliday.picture)) {
              let subObj = {
                picture: holidayImageURL.value
              };
              $http.patch(`/holidays/${holidayId}`, subObj)
              .then(()=>{
                userHoliday.picture = holidayImageURL.value;
                userHolidayEditorPhoto.src = holidayImageURL.value;
              });
            }
          });
          holidayImageLinkUpload.addEventListener('click', ()=>{
            holidayImageLinkUpload.setAttribute("style", "visibility: hidden;");
            userHolidayImageUploadCentre.setAttribute("style", "visibility: visible;");
          });
          userUploadHolidayPhotoCancel.addEventListener('click', ()=>{
            holidayImageLinkUpload.setAttribute("style", "visibility: visible; cursor: pointer;");

            userHolidayImageUploadCentre.setAttribute("style", "visibility: hidden;");
          });
          userHolidayColorSelector.addEventListener('change', ()=>{
            let subObj = {
              color: userHolidayColorSelector.value
            };
            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.color = userHolidayColorSelector.value;
              userHolidayEditorBar.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3);");
              userHolidayEditorForm.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
              userAddHolidayArt.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
              userAddHolidayMusic.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
            });
          });
          userHolidayAnnuality.addEventListener('click', ()=>{
            let subObj = {
              is_annual: userHolidayAnnuality.checked
            };
            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.is_annual = userHolidayAnnuality.checked;
              if (userHolidayAnnuality.checked) {
                isFloat.setAttribute("style", "visibility: hidden;");
                userSelectHolidayDate.setAttribute("style", "visibility: visible;");
              } else {
                isFloat.setAttribute("style", "visibility: visible;");
                userSelectHolidayDate.setAttribute("style", "visibility: hidden;");
              }
            });
          });
          userHolidayDaySelect.addEventListener('change', ()=>{
            let subObj = {};
            let originalDate = new Date(userHoliday.day_of);
            let updateDateString = originalDate.getFullYear().toString() + '-';
            if (originalDate.getMonth() < 9) {
              updateDateString += '0' + (originalDate.getMonth() + 1).toString() + '-';
            } else {
              updateDateString += (originalDate.getMonth() + 1).toString() + '-';
            }
            if (parseInt(userHolidayDaySelect.value) < 10) {
              updateDateString += '0' + userHolidayDaySelect.value + 'T07:00:00.000Z';
            } else {
              updateDateString += userHolidayDaySelect.value + 'T07:00:00.000Z';
            }
            subObj.day_of = new Date(updateDateString);
            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.day_of = subObj.day_of;
            });
          });
          userHolidayMonthSelect.addEventListener('change', ()=>{
            let subObj = {};
            let originalDate = new Date(userHoliday.day_of);
            let originalDay = originalDate.getDate();
            let updateDateString = originalDate.getFullYear().toString() + '-';
            let updateMonth = months.indexOf(userHolidayMonthSelect.value) + 1;
            if (updateMonth < 10) {
              updateDateString += '0' + updateMonth.toString() + '-';
            } else {
              updateDateString += updateMonth.toString() + '-';
            }
            if (originalDay > days[updateMonth - 1]) {
              userHolidayDaySelect.value = days[updateMonth - 1];
            } else {
              userHolidayDaySelect.value = originalDay.toString();
            }
            if (parseInt(userHolidayDaySelect.value) < 10) {
              updateDateString += '0' + userHolidayDaySelect.value + 'T07:00:00.000Z';
            } else {
              updateDateString += userHolidayDaySelect.value + 'T07:00:00.000Z';
            }
            subObj.day_of = new Date(updateDateString);
            while (userHolidayDaySelect.firstChild) {
              userHolidayDaySelect.removeChild(userHolidayDaySelect.firstChild);
            }
            for (let i = 0; i < days[updateMonth - 1]; i++) {
              element = document.createElement('option');
              userHolidayDaySelect.appendChild(element);
              element.innerHTML = (i + 1).toString();
            }
            userHolidayDaySelect.value = subObj.day_of.getDate().toString();

            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.day_of = subObj.day_of;
            });
          });
          userHolidayHasArtContent.addEventListener('click', ()=>{
            let subObj = {
              art_override: userHoliday.art_override
            };
            if (userHolidayHasArtContent.checked) {
              subObj.art_override = true;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.art_override = true;
                userHolidayArtContent.setAttribute("style", "visibility: visible; display: initial;");
                populateHolidayArtEditor(userHolidayArtsEditor, userHoliday);
                userAddHolidayArt.innerHTML = 'add new';
              });

            } else {
              subObj.art_override = false;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.art_override = false;
                while (userAddHolidayArt.firstChild) {
                  userAddHolidayArt.removeChild(userAddHolidayArt.firstChild);
                }
                userHolidayArtContent.setAttribute("style", "display: none;");
                userAddHolidayArt.innerHTML = 'add new';
              });
            }
          });
          userAddHolidayArt.addEventListener('click', ()=>{
            userAddHolidayArt.setAttribute("style", "visibility: hidden;");
            userHolidayEditorDoneButton.setAttribute("style", "visibility: hidden;");
            while (userHolidayArtAdditionDiv.firstChild) {
              userHolidayArtAdditionDiv.removeChild(userHolidayArtAdditionDiv.firstChild);
            }
            userHolidayArtAdder(userHolidayArtAdditionDiv, userHoliday);
          });
          userHolidayHasMusicContent.addEventListener('click', ()=>{
            let subObj = {
              music_override: userHoliday.music_override
            };
            if (userHolidayHasMusicContent.checked) {
              subObj.music_override = true;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.music_override = true;
                userHolidayMusicContent.setAttribute("style", "visibility: visible; display: initial;");
                populateHolidayMusicEditor(userHolidayMusicsEditor, userHoliday);
                //userAddHolidayArt.innerHTML = 'add new';
              });

            } else {
              subObj.music_override = false;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.music_override = false;
                while (userHolidayMusicsEditor.firstChild) {
                  userHolidayMusicsEditor.removeChild(userHolidayMusicsEditor.firstChild);
                }
                userHolidayMusicContent.setAttribute("style", "display: none;");
                //userAddHolidayArt.innerHTML = 'add new';
              });
            }
          });
          userAddHolidayMusic.addEventListener('click', ()=>{
            userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: hidden;");
            userHolidayMusicAddingForm.setAttribute("style", "visibility: visible;");
          });
          userHolidayMusicAddSubmit.addEventListener('click', ()=>{
            // Check validity of user input
            if (checkValidBancampEmbed(userHolidayBandcampSubmissionString.value)) {
              let subObj = {
                override_content: userHoliday.override_content
              };
              let index = subObj.override_content.sources.length;
              subObj.override_content.sources[index] = 'bandcamp';
              subObj.override_content.src_strings[index] = extractSrcStringFromBandcampEmbed(userHolidayBandcampSubmissionString.value);
              subObj.override_content.href_strings[index] = extractHrefStringFromBandcampEmbed(userHolidayBandcampSubmissionString.value);
              subObj.override_content.a_strings[index] = extractATagFromBandcampEmbed(userHolidayBandcampSubmissionString.value);
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.override_content = subObj.override_content;
                populateHolidayMusicEditor(userHolidayMusicsEditor, userHoliday);
                userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: visible;");
                userHolidayMusicAddingForm.setAttribute("style", "visibility: hidden;");
                userHolidayBandcampSubmissionString.value = '';
                userHolidayMusicAddErrorMessage.innerHTML = '';
              });
            } else {
              userHolidayMusicAddErrorMessage.setAttribute("style", "color: #ff0000;");
              userHolidayMusicAddErrorMessage.innerHTML = "ERROR: Invalid embed link - please try again";
            }
            // If valid, build submission object and patch
            // Repopulate music
            // Clear out form and hide
          });
          userHolidayMusicAddCancel.addEventListener('click', ()=>{
            userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: visible;");
            userHolidayMusicAddingForm.setAttribute("style", "visibility: hidden;");
            userHolidayBandcampSubmissionString.value = '';
            userHolidayMusicAddErrorMessage.innerHTML = '';
          });
        });
      }

      function cleanDateHoliday(day) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let check = new Date(day);
        let dateString = check.getDate() + ' ' + months[check.getMonth()] + ' ' + check.getFullYear();

        return(dateString);
      }

      function cleanDate(dayOf) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let check = new Date(dayOf.slice(0,16));
        let dateString = check.getDate() + ' ' + months[check.getMonth()];

        return(dateString);
      }

      function populateHolidayManager() {
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(userHolidaysData=>{
          let userHolidays = userHolidaysData.data;
          let prunedHolidays = [];
          let isDupe = false;
          if (userHolidays.length > 0) {
            for (let i = 0; i < userHolidays.length; i++) {
              if (userHolidays[i].is_annual) {
                userHolidays[i].day = cleanDate(userHolidays[i].day_of);
                prunedHolidays.push(userHolidays[i]);
              } else {
                isDupe = false;
                userHolidays[i].day = 'float';
                if (prunedHolidays.length > 0) {
                  for (let j = 0; j < prunedHolidays.length; j++) {
                    if (prunedHolidays[j].name === userHolidays[i].name) {
                      isDupe = true;
                    }
                  }
                }
                if (!isDupe) {
                  prunedHolidays.push(userHolidays[i]);
                }
              }
            }
            vm.userholidays = prunedHolidays.sort((a,b)=>{
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
          }
        });
      }

      function removeOccasionEntry(occasionId) {
        $http.delete(`/occasions/${occasionId}`)
        .then(()=>{
          console.log('pruned');
        });
      }

      function pruneEmptyOccasions() {
        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(resultingData=>{
          let userOccasions = resultingData.data;
          let emptyOccasions = userOccasions.filter(entry=>{
            return (entry.name === '');
          });
          if (emptyOccasions.length > 0) {
            for (let i = 0; i < emptyOccasions.length; i++) {
              removeOccasionEntry(emptyOccasions[i].id);
            }
          }
        });
      }

      function closeOccasionsManager() {
        let occasionManager = document.getElementById('occasionManager');
        let occasionsManagementDiv = document.getElementById('occasionsManagementDiv');
        let occasionZone = document.getElementById('occasionZone');


        occasionManager.setAttribute("style", "visibility: visible;");
        occasionsManagementDiv.setAttribute("style", "display: none;");
        occasionZone.setAttribute("style", "opacity: 1;");
        pruneEmptyOccasions();
      }

      function closeHolidayManager() {
        let holidayManager = document.getElementById('holidayManager');
        let holidayManagementDiv = document.getElementById('holidayManagementDiv');
        let holidayZone = document.getElementById('holidayZone');


        holidayManager.setAttribute("style", "visibility: visible;");
        holidayManagementDiv.setAttribute("style", "display: none;");
        holidayZone.setAttribute("style", "opacity: 1;");
      }

      function populateOccasionManager() {
        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(userOccasionsData=>{
          let userOccasions = userOccasionsData.data;
          for (let i = 0; i < userOccasions.length; i++) {
            userOccasions[i].dayOf = cleanDate(userOccasions[i].day_of);
            if (userOccasions[i].is_annual) {
              userOccasions[i].annualState = 'yes';
            } else {
              userOccasions[i].annualState = 'no';
            }
          }
          vm.userOccasions = userOccasions.sort((a, b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          while (vm.userOccasions[0].name === '') {
            vm.userOccasions.shift();
          }

        });
      }

      function occasionManage() {
        let occasionManager = document.getElementById('occasionManager');
        let occasionsManagementDiv = document.getElementById('occasionsManagementDiv');
        let occasionZone = document.getElementById('occasionZone');


        occasionManager.setAttribute("style", "visibility: hidden;");
        occasionsManagementDiv.setAttribute("style", "display: initial;");
        occasionZone.setAttribute("style", "opacity: 0.4;");
        populateOccasionManager();
      }

      function holidayManage() {
        let holidayManager = document.getElementById('holidayManager');
        let holidayManagementDiv = document.getElementById('holidayManagementDiv');
        let holidayZone = document.getElementById('holidayZone');


        holidayManager.setAttribute("style", "visibility: hidden;");
        holidayManagementDiv.setAttribute("style", "display: initial;");
        holidayZone.setAttribute("style", "opacity: 0.4;");
        populateHolidayManager();
      }

      function deleteBlock(blockId) {
        let deleteBlocktypeConfirm = document.getElementById('deleteBlocktypeConfirm');
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let blocktypeEditDiv = document.getElementById('blocktypeEditDiv');
        let deleteBlocktypeConfirmField = document.getElementById('deleteBlocktypeConfirmField');
        let deleteBlocktypeConfirmBar = document.getElementById('deleteBlocktypeConfirmBar');
        let deleteBlocktypeTitle = document.getElementById('deleteBlocktypeTitle');
        let deleteBlocktypeQuery = document.getElementById('deleteBlocktypeQuery');
        let deleteBlocktypeTotalBlocks = document.getElementById('deleteBlocktypeTotalBlocks');
        let deleteBlocktypePastBlocks = document.getElementById('deleteBlocktypePastBlocks');
        let deleteBlocktypeTodayBlocks = document.getElementById('deleteBlocktypeTodayBlocks');
        let deleteBlocktypeFutureBlocks = document.getElementById('deleteBlocktypeFutureBlocks');
        let deleteBlocktypeButtons = document.getElementById('deleteBlocktypeButtons');
        let deleteBlocktypeCancelConfirm = document.getElementById('deleteBlocktypeCancelConfirm');
        if (deleteBlocktypeCancelConfirm) {
          deleteBlocktypeCancelConfirm.parentNode.removeChild(deleteBlocktypeCancelConfirm);
          deleteBlocktypeCancelConfirm = document.createElement('a');
          deleteBlocktypeButtons.appendChild(deleteBlocktypeCancelConfirm);
          deleteBlocktypeCancelConfirm.id = 'deleteBlocktypeCancelConfirm';
          deleteBlocktypeCancelConfirm.className = 'btn';
          deleteBlocktypeCancelConfirm.innerHTML = 'confirm';
          deleteBlocktypeCancelConfirm.setAttribute("style", "cursor: pointer;");
        }
        let deleteBlocktypeCancelButton = document.getElementById('deleteBlocktypeCancelButton');
        if (deleteBlocktypeCancelButton) {
          deleteBlocktypeCancelButton.parentNode.removeChild(deleteBlocktypeCancelButton);
          deleteBlocktypeCancelButton = document.createElement('a');
          deleteBlocktypeButtons.appendChild(deleteBlocktypeCancelButton);
          deleteBlocktypeCancelButton.id = 'deleteBlocktypeCancelButton';
          deleteBlocktypeCancelButton.className = 'btn';
          deleteBlocktypeCancelButton.innerHTML = 'cancel';
          deleteBlocktypeCancelButton.setAttribute("style", "cursor: pointer;");
        }

        deleteBlocktypeConfirm.setAttribute("style", "display: initial;");
        reportForBlocktypes.setAttribute("style", "display: none;");
        blocktypeEditDiv.setAttribute("style", "display: none;");


        $http.get(`/blocktypes/${blockId}`)
        .then(blockData=>{
          let block = blockData.data;
          deleteBlocktypeConfirmField.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #abdada); background: -o-linear-gradient(135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(135deg, " + block.color + ", #abdada); background: linear-gradient(135deg, " + block.color + ", #abdada);");
          deleteBlocktypeConfirmBar.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(-135deg, " + block.color + ", #abdada); background: -o-linear-gradient(-135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(-135deg, " + block.color + ", #abdada); background: linear-gradient(-135deg, " + block.color + ", #abdada);");
          deleteBlocktypeTitle.innerHTML = 'Delete ' + block.type + '?';
          deleteBlocktypeQuery.innerHTML = 'Delete ' + block.type + '?';
          $http.get(`/timeblocksbyuser/${currentUserId}`)
          .then(timeblocksData=>{
            let timeblocks = timeblocksData.data;
            let total = timeblocks.filter(tblock=>{
              return(tblock.block_type === block.id);
            });
            if (total.length > 0) {
              if (total.length === 1) {
                deleteBlocktypeTotalBlocks.innerHTML = 'Currently referenced in ' + total.length + ' timeblock.';
              } else {
                deleteBlocktypeTotalBlocks.innerHTML = 'Currently referenced in ' + total.length + ' timeblocks.';
              }
              let past = total.filter(block=>{
                return(getTense(block) === 'past');
              });
              let present = total.filter(block=>{
                return(getTense(block) === 'present');
              });
              let future = total.filter(block=>{
                return(getTense(block) === 'future');
              });
              if (past.length > 0) {
                deleteBlocktypePastBlocks.innerHTML = 'Referenced in ' + past.length + " prior to today.";
              }
              if (present.length > 0) {
                deleteBlocktypeTodayBlocks.innerHTML = 'Referenced in ' + present.length + ' today.';
              }
              if (future.length > 0) {
                deleteBlocktypeFutureBlocks.innerHTML = 'Referenced in ' + future.length + ' after today.';
              }
            }

            deleteBlocktypeCancelConfirm.addEventListener('click', ()=>{
              $http.delete(`/blocktypes/${blockId}`)
              .then(()=>{
                deleteBlocktypeConfirm.setAttribute("style", "display: none;");
                blocktypeEditor();
                setUserBlockTypes();
              });
            });

            deleteBlocktypeCancelButton.addEventListener('click', ()=>{
              deleteBlocktypeConfirm.setAttribute("style", "display: none;");
              blocktypeEditDiv.setAttribute("style", "display: initial;");
            });

          });
        });


      }

      function getTense(block) {
        let tense = '';
        let today = new Date();
        let start = new Date(block.start_time.slice(0, 16));
        let end = new Date(block.end_time.slice(0, 16));
        let checkDate;
        if ((start.getFullYear() !== end.getFullYear()) || (start.getMonth() !== end.getMonth()) || (start.getDate() !== end.getDate())) {
          checkDate = new Date(end);
        } else {
          checkDate = new Date(start);
        }

        if (checkDate.getFullYear() < today.getFullYear()) {
          tense = 'past';
        } else if (checkDate.getFullYear() > today.getFullYear()) {
          tense = 'future';
        } else {
          if (checkDate.getMonth() < today.getMonth()) {
            tense = 'past';
          } else if (checkDate.getMonth() > today.getMonth()) {
            tense = 'future';
          } else {
            if (checkDate.getDate() < today.getDate()) {
              tense = 'past';
            } else if (checkDate.getDate() > today.getDate()) {
              tense = 'future';
            } else {
              tense = 'present';
            }
          }
        }

        return(tense);
      }

      function getHourTotal(timeblock) {

        let start = new Date(timeblock.start_time.slice(0, 16));
        let end = new Date(timeblock.end_time.slice(0, 16));
        let hours = 0;

        if ((end.getFullYear() > start.getFullYear()) || (end.getMonth() > start.getMonth()) || (end.getDate() > start.getDate())) {
          hours = 24 - start.getHours();
          if (start.getMinutes() === 30) {
            hours -= 0.5;
          }
        } else if ((end.getFullYear() < start.getFullYear()) || (end.getMonth() < start.getMonth()) || (end.getDate() < start.getDate())) {
          hours = end.getHours();
          if (end.getMinutes() === 30) {
            hours += 0.5;
          }
        } else {
          hours = (end.getHours() - start.getHours());


          if (end.getMinutes() === 30) {
            hours += 0.5;
          }
          if (start.getMinutes() === 30) {
            hours -= 0.5;
          }
        }




        return(hours);
      }

      function sevenDayBlocks(blocks) {
        let calendarBlocks = [];
        let navDate = new Date();
        let startTime;
        let endTime;
        let checkDate;

        for (let i = 0; i < 7; i++) {
          for (let index = 0; index < blocks.length; index++) {
            startTime = new Date(blocks[index].start_time.slice(0, 16));
            endTime = new Date(blocks[index].end_time.slice(0, 16));
            if ((startTime.getFullYear() !== endTime.getFullYear()) || (startTime.getMonth() !== endTime.getMonth()) || (startTime.getDate() !== endTime.getDate())) {
              checkDate = new Date(endTime);
            } else {
              checkDate = new Date(startTime);
            }
            if ((navDate.getFullYear() === checkDate.getFullYear()) && (navDate.getMonth() === checkDate.getMonth()) && (navDate.getDate() === checkDate.getDate())) {
              calendarBlocks.push(blocks[index]);
            }
          }
          navDate.setDate(navDate.getDate()+1);
        }

        return(calendarBlocks);
      }

      function calendarWeekBlocks(blocks) {
        let calendarBlocks = [];
        let navDate = new Date();
        let startTime;
        let endTime;
        let checkDate;
        if (navDate.getDay() !== 1) {
          while (navDate.getDay() !== 1) {
            navDate.setDate(navDate.getDate()-1);
          }
        }
        for (let i = 0; i < 7; i++) {
          for (let index = 0; index < blocks.length; index++) {
            startTime = new Date(blocks[index].start_time.slice(0, 16));
            endTime = new Date(blocks[index].end_time.slice(0, 16));
            if ((startTime.getFullYear() !== endTime.getFullYear()) || (startTime.getMonth() !== endTime.getMonth()) || (startTime.getDate() !== endTime.getDate())) {
              checkDate = new Date(endTime);
            } else {
              checkDate = new Date(startTime);
            }
            if ((navDate.getFullYear() === checkDate.getFullYear()) && (navDate.getMonth() === checkDate.getMonth()) && (navDate.getDate() === checkDate.getDate())) {
              calendarBlocks.push(blocks[index]);
            }
          }
          navDate.setDate(navDate.getDate()+1);
        }

        return(calendarBlocks);
      }

      function tallyBlocktypehours(index, timeblocks) {
        let totalHours = 0;
        let pastHours = 0;
        let presentHours = 0;
        let futureHours = 0;
        let calendarHours = 0;
        let sevenDayHours = 0;
        let total = timeblocks.filter(block=>{
          return(block.block_type === vm.blockreporter[index].id);
        });
        vm.blockreporter[index].totalTimeblocks = total.length;
        let past = total.filter(block=>{
          return(getTense(block) === 'past');
        });
        let present = total.filter(block=>{
          return(getTense(block) === 'present');
        });
        let future = total.filter(block=>{
          return(getTense(block) === 'future');
        });
        let calendarWeek = calendarWeekBlocks(total);
        let week = sevenDayBlocks(total);
        vm.blockreporter[index].pastBlockTotal = past.length;
        vm.blockreporter[index].todayBlockTotal = present.length;
        vm.blockreporter[index].futureBlockTotal = future.length;

        if (total.length > 0) {
          for (let totalIndex = 0; totalIndex < total.length; totalIndex++) {
            totalHours += getHourTotal(total[totalIndex]);
          }
        }
        if (past.length > 0) {
          for (let pastIndex = 0; pastIndex < past.length; pastIndex++) {
            pastHours += getHourTotal(past[pastIndex]);
          }
        }
        if (present.length > 0) {
          for (let presentIndex = 0; presentIndex < present.length; presentIndex++) {
            presentHours += getHourTotal(present[presentIndex]);
          }
        }
        if (future.length > 0) {
          for (let futureIndex = 0; futureIndex < future.length; futureIndex++) {
            futureHours += getHourTotal(future[futureIndex]);
          }
        }
        if (calendarWeek.length > 0) {
          for (let calendarWeekIndex = 0; calendarWeekIndex < calendarWeek.length; calendarWeekIndex++) {
            calendarHours += getHourTotal(calendarWeek[calendarWeekIndex]);
          }
        }
        if (week.length > 0) {
          for (let weekIndex = 0; weekIndex < week.length; weekIndex++) {
            sevenDayHours += getHourTotal(week[weekIndex]);
          }
        }
        vm.blockreporter[index].blocktypeHours = totalHours;
        vm.blockreporter[index].blocktypePastHours = pastHours;
        vm.blockreporter[index].blocktypeTodayHours = presentHours;
        vm.blockreporter[index].blocktypeFutureHours = futureHours;
        vm.blockreporter[index].blocktypeProjectedCalendarWeekHours = calendarHours;
        vm.blockreporter[index].blocktypeProjectedWeekHours = sevenDayHours;
      }

      function blockReportCollectData() {
        $http.get(`/timeblocksbyuser/${currentUserId}`)
        .then(timeblocksData=>{
          let timeblocks = timeblocksData.data;
          if (vm.blockreporter.length > 0) {
            for (let i = 0; i < vm.blockreporter.length; i++) {
              tallyBlocktypehours(i, timeblocks);
            }
          }
        });
      }

      function blocktypeReport() {
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let userExistingBlockEditorDiv = document.getElementById('userExistingBlockEditorDiv');
        let blockEditDone = document.getElementById('blockEditDone');

        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(blocksData=>{
          let blocks = blocksData.data;
          vm.blockreporter = blocks.sort((a, b)=>{
            if (a.type.toLowerCase() < b.type.toLowerCase()) {
              return -1;
            } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          blockReportCollectData();
        });


        reportForBlocktypes.setAttribute("style", "display: initial;");
        userExistingBlockEditorDiv.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: hidden;");
      }

      function blocktypeReportDone() {
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let blockEditDone = document.getElementById('blockEditDone');


        reportForBlocktypes.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: visible;");
      }

      function createNewBlocktype() {
        let subObj = {
          user_id: currentUserId,
          type: '',
          keys: null,
          color: '#ffffff'
        };
        $http.post('/blocktypes', subObj)
        .then(submittedBlockData=>{
          let submittedBlock = submittedBlockData.data[0];
          editBlock(submittedBlock.id);
        });
      }

      function deleteTheBlankBlock(theId) {
        $http.delete(`/blocktypes/${theId}`)
        .then();
      }

      function userExistingBlocksEditorDone() {
        let userExistingBlockEditorDiv = document.getElementById('userExistingBlockEditorDiv');
        let blockEditDone = document.getElementById('blockEditDone');

        userExistingBlockEditorDiv.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: visible;");
        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(userBlocksData=>{
          let userBlocks = userBlocksData.data;
          let emptyBlocks = userBlocks.filter((blok)=>{
            return (blok.type === '');
          });
          if (emptyBlocks.length > 0) {
            for (let i = 0; i < emptyBlocks.length; i++) {
              deleteTheBlankBlock(emptyBlocks[i].id);
            }
          } else {
            setUserBlockTypes();
          }
        });

      }

      function subsubValuesEventListeners(deleteButton, textEntry, block, index) {

        deleteButton.addEventListener('click', ()=>{
          let subObj = {
            keys: block.keys
          };
          if (block.keys.keys.length !== index) {
            subObj.keys.keys.splice(index, 1);
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              setSubSubtypes(deleteButton.parentNode, patched);
            });
          } else {
            textEntry.parentNode.removeChild(textEntry);
            deleteButton.parentNode.removeChild(deleteButton);
          }
        });

        textEntry.addEventListener('focusout', ()=>{
          if (textEntry.value !== '') {
            let subObj = {
              keys: block.keys
            };
            subObj.keys.keys[index] = textEntry.value;
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              console.log(patched);
            });
          }
        });
      }

      function valuesEventListeners(deleteButton, textEntry, block, index) {

        deleteButton.addEventListener('click', ()=>{
          let subObj = {
            keys: block.keys
          };
          if (subObj.keys[subObj.keys.keys[0] + 'Values'].length !== index) {
            subObj.keys[subObj.keys.keys[0] + 'Values'].splice(index, 1);
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              setSubtypes(deleteButton.parentNode, patched);

            });
          } else {
            textEntry.parentNode.removeChild(textEntry);
            deleteButton.parentNode.removeChild(deleteButton);
          }
        });

        textEntry.addEventListener('focusout', ()=>{
          if (textEntry.value !== '') {
            let subObj = {
              keys: block.keys
            };
            subObj.keys[subObj.keys.keys[0] + 'Values'][index] = textEntry.value;
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              console.log(patched);
            });
          }
        });
      }

      function setSubSubtypes(element, block) {
        let delBut;
        let valueText;

        while (element.children[0]) {
          element.removeChild(element.children[0]);
        }
        if (block.keys.keys.length > 1) {
          for (let i = 1; i < block.keys.keys.length; i++) {
            delBut = document.createElement('button');
            element.appendChild(delBut);
            delBut.className = 'removal';
            delBut.innerHTML = 'DELETE';
            valueText = document.createElement('input');
            element.appendChild(valueText);
            valueText.type = 'text';
            valueText.className = "pure-input-1";
            valueText.value = block.keys.keys[i];
            subsubValuesEventListeners(delBut, valueText, block, i);
          }
        }
        delBut = document.createElement('button');
        element.appendChild(delBut);
        delBut.className = 'removal';
        delBut.innerHTML = 'DELETE';
        valueText = document.createElement('input');
        element.appendChild(valueText);
        valueText.type = 'text';
        valueText.className = "pure-input-1";
        subsubValuesEventListeners(delBut, valueText, block, block.keys.keys.length);
      }

      function setSubtypes(element, block) {
        let delBut;
        let valueText;

        while (element.children[0]) {
          element.removeChild(element.children[0]);
        }
        if (block.keys[block.keys.keys[0] + 'Values'].length > 0) {
          for (let i = 0; i < block.keys[block.keys.keys[0] + 'Values'].length; i++) {
            delBut = document.createElement('button');
            element.appendChild(delBut);
            delBut.className = 'removal';
            delBut.innerHTML = 'DELETE';
            valueText = document.createElement('input');
            element.appendChild(valueText);
            valueText.type = "text";
            valueText.className = "pure-input-1";
            valueText.value = block.keys[block.keys.keys[0] + 'Values'][i];
            valuesEventListeners(delBut, valueText, block, i);
          }
        }
        delBut = document.createElement('button');
        element.appendChild(delBut);
        delBut.className = 'removal';
        delBut.innerHTML = 'DELETE';
        valueText = document.createElement('input');
        element.appendChild(valueText);
        valueText.type = "text";
        valueText.className = "pure-input-1";
        valuesEventListeners(delBut, valueText, block, block.keys[block.keys.keys[0] + 'Values'].length);
      }

      function editBlock(blockId) {
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let userExistingBlockEditorDiv = document.getElementById('userExistingBlockEditorDiv');
        let blockEditDone = document.getElementById('blockEditDone');
        let existingBlockEditorTitle = document.getElementById('existingBlockEditorTitle');
        let userExistingBlocksEditorBar = document.getElementById('userExistingBlocksEditorBar');
        let existingBlocksEditorForm = document.getElementById('existingBlocksEditorForm');
        let existingBlocktypeEditorTypeDiv = document.getElementById('existingBlocktypeEditorTypeDiv');
        let existingBlocktypeEditorType = document.getElementById('existingBlocktypeEditorType');
        if (existingBlocktypeEditorType) {
          existingBlocktypeEditorType.parentNode.removeChild(existingBlocktypeEditorType);
          existingBlocktypeEditorType = document.createElement('input');
          existingBlocktypeEditorTypeDiv.appendChild(existingBlocktypeEditorType);
          existingBlocktypeEditorType.id = 'existingBlocktypeEditorType';
          existingBlocktypeEditorType.type = 'text';
          existingBlocktypeEditorType.className = "pure-input-1";
        }
        let existingBlocktypeColorDiv = document.getElementById('existingBlocktypeColorDiv');
        let existingBlocktypeEditorColor = document.getElementById('existingBlocktypeEditorColor');
        if (existingBlocktypeEditorColor) {
          existingBlocktypeEditorColor.parentNode.removeChild(existingBlocktypeEditorColor);
          existingBlocktypeEditorColor = document.createElement('input');
          existingBlocktypeColorDiv.appendChild(existingBlocktypeEditorColor);
          existingBlocktypeEditorColor.id = 'existingBlocktypeEditorColor';
          existingBlocktypeEditorColor.type = 'color';
          existingBlocktypeEditorColor.className = "pure-input-1";
        }
        let existingBlocktypesSubCheckDiv = document.getElementById('existingBlocktypesSubCheckDiv');
        let existingBlocktypeCheck = document.getElementById('existingBlocktypeCheck');
        if (existingBlocktypeCheck) {
          existingBlocktypeCheck.parentNode.removeChild(existingBlocktypeCheck);
          existingBlocktypeCheck = document.createElement('input');
          existingBlocktypesSubCheckDiv.appendChild(existingBlocktypeCheck);
          existingBlocktypeCheck.id = 'existingBlocktypeCheck';
          existingBlocktypeCheck.type = 'checkbox';
          existingBlocktypeCheck.className = "pure-input-1";
        }
        let existingBlockSubs = document.getElementById('existingBlockSubs');
        let existingSubFields = document.getElementById('existingSubFields');
        let existingAddNewDivAnchor = document.getElementById('existingAddNewDivAnchor');
        let existingBlockAddNewSubtype = document.getElementById('existingBlockAddNewSubtype');
        if (existingBlockAddNewSubtype) {
          existingBlockAddNewSubtype.parentNode.removeChild(existingBlockAddNewSubtype);
          existingBlockAddNewSubtype = document.createElement('button');
          existingAddNewDivAnchor.appendChild(existingBlockAddNewSubtype);
          existingBlockAddNewSubtype.id = 'existingBlockAddNewSubtype';
          existingBlockAddNewSubtype.innerHTML = 'add new';
        }
        let existingBlockSubSubtypesCheckboxAnchorDiv = document.getElementById('existingBlockSubSubtypesCheckboxAnchorDiv');
        let existingBlockSubSubtypes = document.getElementById('existingBlockSubSubtypes');
        if (existingBlockSubSubtypes) {
          existingBlockSubSubtypes.parentNode.removeChild(existingBlockSubSubtypes);
          existingBlockSubSubtypes = document.createElement('input');
          existingBlockSubSubtypesCheckboxAnchorDiv.appendChild(existingBlockSubSubtypes);
          existingBlockSubSubtypes.id = 'existingBlockSubSubtypes';
          existingBlockSubSubtypes.type = 'checkbox';
          existingBlockSubSubtypes.className = "pure-input-1";
        }
        let existingBlockSubSubs = document.getElementById('existingBlockSubSubs');
        let existingBlockAddNewSubtypeAnchorDiv = document.getElementById('existingBlockAddNewSubtypeAnchorDiv');
        let existingBlockAddNewSubSubtype = document.getElementById('existingBlockAddNewSubSubtype');
        if (existingBlockAddNewSubSubtype) {
          existingBlockAddNewSubSubtype.parentNode.removeChild(existingBlockAddNewSubSubtype);
          existingBlockAddNewSubSubtype = document.createElement('button');
          existingBlockAddNewSubtypeAnchorDiv.appendChild(existingBlockAddNewSubSubtype);
          existingBlockAddNewSubSubtype.id = 'existingBlockAddNewSubSubtype';
          existingBlockAddNewSubSubtype.innerHTML = 'add new';
        }
        let existingSubSubFields = document.getElementById('existingSubSubFields');



        $http.get(`/blocktypes/${blockId}`)
        .then(blockData=>{
          let block = blockData.data;
          existingBlockEditorTitle.innerHTML = block.type;
          userExistingBlocksEditorBar.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(-135deg, " + block.color + ", #abdada); background: -o-linear-gradient(-135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(-135deg, " + block.color + ", #abdada); background: linear-gradient(-135deg, " + block.color + ", #abdada);");
          existingBlocksEditorForm.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #abdada); background: -o-linear-gradient(135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(135deg, " + block.color + ", #abdada); background: linear-gradient(135deg, " + block.color + ", #abdada);");
          existingBlockAddNewSubtype.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #ffffff); background: -o-linear-gradient(135deg, " + block.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + block.color + ", #ffffff); background: linear-gradient(135deg, " + block.color + ", #ffffff);");
          existingBlockAddNewSubSubtype.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #ffffff); background: -o-linear-gradient(135deg, " + block.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + block.color + ", #ffffff); background: linear-gradient(135deg, " + block.color + ", #ffffff);");
          existingBlocktypeEditorType.value = block.type;
          existingBlocktypeEditorColor.value = block.color;
          if (block.keys !== null) {
            if (block.keys.keys !== undefined) {
              existingBlocktypeCheck.checked = true;
              existingBlockSubs.setAttribute("style", "display: initial;");
              setSubtypes(existingSubFields, block);
              if (block.keys.keys.length > 1) {
                existingBlockSubSubtypes.checked = true;
                existingBlockSubSubs.setAttribute("style", "display: initial;");
                setSubSubtypes(existingSubSubFields, block);
              } else {
                existingBlockSubSubtypes.checked = false;
                existingBlockSubSubs.setAttribute("style", "display: none;");
              }
            } else {
              existingBlocktypeCheck.checked = false;
              existingBlockSubs.setAttribute("style", "display: none;");
            }
          } else {
            existingBlocktypeCheck.checked = false;
            existingBlockSubs.setAttribute("style", "display: none;");
          }

          existingBlockAddNewSubSubtype.addEventListener('click', ()=>{
            console.log('logic goes here');
            let delBut;
            let valueText;
            let noBlankFields = true;
            if (existingSubSubFields.children[0]) {
              for (let i = 0; i < existingSubSubFields.children.length; i++) {
                if (existingSubSubFields.children[i] && (existingSubSubFields.children[i].innerHTML !== 'DELETE')) {
                  if (existingSubSubFields.children[i].value === '') {
                    noBlankFields = false;
                  }
                }
              }
            }
            if (noBlankFields) {
              delBut = document.createElement('button');
              existingSubSubFields.appendChild(delBut);
              delBut.className = 'removal';
              delBut.innerHTML = 'DELETE';
              valueText = document.createElement('input');
              existingSubSubFields.appendChild(valueText);
              valueText.type = "text";
              valueText.className = "pure-input-1";
              subsubValuesEventListeners(delBut, valueText, block, block.keys.keys.length);
            }
          });

          existingBlockSubSubtypes.addEventListener('click', ()=>{
            if (existingBlockSubSubtypes.checked) {
              existingBlockSubSubs.setAttribute("style", "display: initial;");
              setSubSubtypes(existingSubSubFields, block);
            } else {
              existingBlockSubSubs.setAttribute("style", "display: none;");
            }
          });

          existingBlocktypeCheck.addEventListener('click', ()=>{
            if(existingBlocktypeCheck.checked) {
              existingBlockSubs.setAttribute("style", "display: initial;");
              if (block.keys === null) {
                let subObj = {
                  keys: {}
                };
                subObj.keys.keys = [];
                subObj.keys.keys[0] = block.type + 'Type';
                subObj.keys[subObj.keys.keys[0] + 'Values'] = [];
                $http.patch(`/blocktypes/${block.id}`, subObj)
                .then(patchedData=>{
                  let patched = patchedData.data;
                  block = patched;
                  setSubtypes(existingSubFields, block);
                });
              } else {
                setSubtypes(existingSubFields, block);
              }
            } else {
              existingBlockSubs.setAttribute("style", "display: none;");
            }
           });

           existingBlockAddNewSubtype.addEventListener('click', ()=>{
             let delBut;
             let valueText;
             let noBlankFields = true;
             if (existingSubFields.children[0]) {
               for (let i = 0; i < existingSubFields.children.length; i++) {
                 if (existingSubFields.children[i] && (existingSubFields.children[i].innerHTML !== 'DELETE')) {
                   if (existingSubFields.children[i].value === '') {
                     noBlankFields = false;
                   }
                 }
               }
             }
             if (noBlankFields) {
               delBut = document.createElement('button');
               existingSubFields.appendChild(delBut);
               delBut.className = 'removal';
               delBut.innerHTML = 'DELETE';
               valueText = document.createElement('input');
               existingSubFields.appendChild(valueText);
               valueText.type = "text";
               valueText.className = "pure-input-1";
               valuesEventListeners(delBut, valueText, block, block.keys[block.keys.keys[0] + 'Values'].length);
             }
           });

          existingBlocktypeEditorColor.addEventListener('change', ()=>{
            let subObj = {
              color: existingBlocktypeEditorColor.value
            };
            userExistingBlocksEditorBar.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -o-linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -moz-linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada);");
            existingBlocksEditorForm.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada);");
            existingBlockAddNewSubtype.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -o-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -moz-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff);");
            existingBlockAddNewSubSubtype.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -o-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -moz-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff);");
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData;
              block.color = patched.color;
            });
          });
          existingBlocktypeEditorType.addEventListener('focusout', ()=>{
            let subObj = {
              type: existingBlocktypeEditorType.value
            };
            if (existingBlocktypeEditorType.value !== '') {
              existingBlockEditorTitle.innerHTML = existingBlocktypeEditorType.value;
              $http.patch(`/blocktypes/${block.id}`, subObj)
              .then(patchedData=>{
                let patched = patchedData.data;
                block.type = patched.type;
                console.log(patched);
              });
            }
          });
        });

        userExistingBlockEditorDiv.setAttribute("style", "display: initial;");
        reportForBlocktypes.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: hidden;");
      }

      function photUploader() {
        let photoUploadFormDiv = document.getElementById('photoUploadFormDiv');
        let dashboard = document.getElementById('dashboard');
        let userProfilePhotoForm = document.getElementById('userProfilePhotoForm');
        let photoUploaderButtonsField = document.getElementById('photoUploaderButtonsField');
        let photoSubmit = document.getElementById('photoSubmit');
        if (photoSubmit) {
          photoSubmit.parentNode.removeChild(photoSubmit);
          photoSubmit = document.createElement('a');
          photoUploaderButtonsField.appendChild(photoSubmit);
          photoSubmit.id = 'photoSubmit';
          photoSubmit.className = 'btn';
          photoSubmit.setAttribute("style", "cursor: pointer;");
          photoSubmit.innerHTML = 'submit';
          photoSubmit.type = 'submit';
        }
        let photoCancel = document.getElementById('photoCancel');
        if (photoCancel) {
          photoCancel.parentNode.removeChild(photoCancel);
          photoCancel = document.createElement('a');
          photoUploaderButtonsField.appendChild(photoCancel);
          photoCancel.id = 'photoCancel';
          photoCancel.className = 'btn';
          photoCancel.setAttribute("style", "cursor: pointer;");
          photoCancel.innerHTML = 'cancel';
        }
        let userPhotoInput = document.getElementById('userPhotoInput');


        photoUploadFormDiv.setAttribute("style", "visibility: visible; z-index: 2;");
        dashboard.setAttribute("style", "opacity: 0.3;");
        userProfilePhotoForm.setAttribute("style", "visibility: hidden;");

        photoSubmit.addEventListener('click', ()=>{

          console.log(userPhotoInput.files[0]);
          console.log(userPhotoInput);
          // $http.post('/photo_upload', subObj)
          // .then(data=>{
          //   console.log(data.data);
          // });
        });

        photoCancel.addEventListener('click', ()=>{
          photoUploadFormDiv.setAttribute("style", "visibility: hidden; z-index: -2;");
          dashboard.setAttribute("style", "opacity: 1;");
          userProfilePhotoForm.setAttribute("style", "visibility: visible;");
        });
      }

      function logout() {
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          document.cookie = 'h168userId' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = user.security.key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          $http.post('/users/logout', {})
          .then(()=>{
            profileClock = false;
            $state.go('landing');
          });
        });
      }

      function gotoWeek() {
        profileClock = false;
        let navDay = new Date();
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
          }
        }
        let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        dayClock = false;
        $state.go('weekview', {id: idString});
      }

      function userPhotoEditDone() {
        let userProfilePhotoDiv = document.getElementById('userProfilePhotoDiv');
        let changeProfilePhoto = document.getElementById('changeProfilePhoto');
        let userProfileDone = document.getElementById('userProfileDone');
        let changePassword = document.getElementById('changePassword');
        let changeEmail = document.getElementById('changeEmail');
        let changeFriends = document.getElementById('changeFriends');
        let newPhotoURL = document.getElementById('newPhotoURL');
        let photoReference = document.getElementById('photoReference');
        let profilePhoto = document.getElementById('profilePhoto');

        userProfilePhotoDiv.setAttribute("style", "display: none;");
        changeProfilePhoto.setAttribute("style", "visibility: visible;");
        userProfileDone.setAttribute("style", "visibility: visible;");
        changePassword.setAttribute("style", "visibility: visible;");
        changeEmail.setAttribute("style", "visibility: visible;");
        changeFriends.setAttribute("style", "visibility: visible;");
        newPhotoURL.value = '';
        $http.get(`/users/${currentUserId}`)
        .then((userData=>{
          let user = userData.data;
          if (user.user_avatar_url !== '') {
            photoReference.src = user.user_avatar_url;
            profilePhoto.src = user.user_avatar_url;
          }
        }));
      }

      function userPhotoEditor() {
        let userProfilePhotoDiv = document.getElementById('userProfilePhotoDiv');
        let changeProfilePhoto = document.getElementById('changeProfilePhoto');
        let userProfileDone = document.getElementById('userProfileDone');
        let changePassword = document.getElementById('changePassword');
        let changeEmail = document.getElementById('changeEmail');
        let changeFriends = document.getElementById('changeFriends');
        let verifyOrSubmit = document.getElementById('verifyOrSubmit');
        let verifyPhotoURL = document.getElementById('verifyPhotoURL');
        if (verifyPhotoURL) {
          verifyPhotoURL.parentNode.removeChild(verifyPhotoURL);
          verifyPhotoURL = document.createElement('a');
          verifyOrSubmit.appendChild(verifyPhotoURL);
          verifyPhotoURL.id = 'verifyPhotoURL';
          verifyPhotoURL.className = 'btn';
          verifyPhotoURL.innerHTML = 'verify';
          verifyPhotoURL.setAttribute("style", "cursor: pointer;");
        }
        let updatePhotoURL = document.getElementById('updatePhotoURL');
        if (updatePhotoURL) {
          updatePhotoURL.parentNode.removeChild(updatePhotoURL);
          updatePhotoURL = document.createElement('a');
          verifyOrSubmit.appendChild(updatePhotoURL);
          updatePhotoURL.id = 'updatePhotoURL';
          updatePhotoURL.className = 'btn';
          updatePhotoURL.innerHTML = 'submit';
          updatePhotoURL.setAttribute("style", "cursor: pointer;");
        }
        let newPhotoURL = document.getElementById('newPhotoURL');
        let photoReference = document.getElementById('photoReference');
        let profilePhoto = document.getElementById('profilePhoto');


        userProfilePhotoDiv.setAttribute("style", "display: initial;");
        changeProfilePhoto.setAttribute("style", "visibility: hidden;");
        userProfileDone.setAttribute("style", "visibility: hidden;");
        changePassword.setAttribute("style", "visibility: hidden;");
        changeEmail.setAttribute("style", "visibility: hidden;");
        changeFriends.setAttribute("style", "visibility: hidden;");

        verifyPhotoURL.addEventListener('click', ()=>{
          if (newPhotoURL.value !== '') {
            photoReference.src = newPhotoURL.value;
          }
        });
        updatePhotoURL.addEventListener('click', ()=>{
          if (newPhotoURL.value !== '') {
            let subObj = {
              user_avatar_url: newPhotoURL.value
            };
            console.log(subObj);
            $http.patch(`/users/${currentUserId}`, subObj)
            .then(userData=>{
              let user = userData.data;
              console.log(user);
              if (user.user_avatar_url !== '') {
                photoReference.src = user.user_avatar_url;
                profilePhoto.src = user.user_avatar_url;
              }
            });
          }
        });
      }

      function blocktypeEditor() {
        let blocktypeManager = document.getElementById('blocktypeManager');
        let blocktypeEditDiv = document.getElementById('blocktypeEditDiv');
        let blocktypeZone = document.getElementById('blocktypeZone');


        blocktypeManager.setAttribute("style", "visibility: hidden;");
        blocktypeEditDiv.setAttribute("style", "display: initial;");
        blocktypeZone.setAttribute("style", "opacity: 0.4;");
      }

      function profileEditor() {
        let userEditor = document.getElementById('userEditor');
        let userEditorDiv = document.getElementById('userEditorDiv');
        let adminAccess = document.getElementById('adminAccess');
        let profileZone = document.getElementById('profileZone');
        let weekSubsEntry = document.getElementById('weekSubsEntry');
        let updateUserName = document.getElementById('updateUserName');
        let userNameInput = document.getElementById('userNameInput');
        if (updateUserName) {
          updateUserName.parentNode.removeChild(updateUserName);
          updateUserName = document.createElement('a');
          weekSubsEntry.appendChild(updateUserName);
          updateUserName.id = 'updateUserName';
          updateUserName.className = "btn";
          updateUserName.innerHTML = 'submit';
          updateUserName.setAttribute("style", "float: left; margin-left: 2.2em; cursor: pointer;");
        }

        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          if (user.is_admin) {
            adminAccess.setAttribute("style", "visibility: visible;");
          } else {
            adminAccess.setAttribute("style", "visibility: hidden;");
          }

          updateUserName.addEventListener('click', ()=>{
            if (userNameInput.value !== '') {
              $http.patch(`/users/${currentUserId}`, {name: userNameInput.value})
              .then((userData)=>{
                let user = userData.data;
                updateGreetingStrip(user);
              });
            }
          });
        });

        userEditor.setAttribute("style", "visibility: hidden;");
        userEditorDiv.setAttribute("style", "display: initial;");
        profileZone.setAttribute("style", "opacity: 0.4;");


      }

      function closeBlocktypeEditor() {
        let blocktypeManager = document.getElementById('blocktypeManager');
        let blocktypeEditDiv = document.getElementById('blocktypeEditDiv');
        let blocktypeZone = document.getElementById('blocktypeZone');


        blocktypeManager.setAttribute("style", "visibility: visible;");
        blocktypeEditDiv.setAttribute("style", "display: none;");
        blocktypeZone.setAttribute("style", "opacity: 1;");
      }

      function closeUserEditor() {
        let userEditor = document.getElementById('userEditor');
        let userEditorDiv = document.getElementById('userEditorDiv');
        let userNameInput = document.getElementById('userNameInput');
        let profileZone = document.getElementById('profileZone');

        userEditor.setAttribute("style", "visibility: visible;");
        userEditorDiv.setAttribute("style", "display: none;");
        userNameInput.value = '';
        profileZone.setAttribute("style", "opacity: 1;");
      }

      function gotoDayview() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + 1 + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        //myTimer = undefined;
        //weekClock = false;
        $state.go('dayview', {id: idString});
      }

      function gotoMonthView() {
        let navDay = new Date();
        profileClock = false;
        let increment = 0;
        let dayMonth = (navDay.getMonth() + 1);
        let dayYear = navDay.getFullYear();
        let mondayYear = dayYear;
        let mondayMonth = dayMonth;
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
            ++increment;
          }
        }
        mondayMonth = (navDay.getMonth() + 1);
        mondayYear = navDay.getFullYear();
        if (dayMonth !== mondayMonth) {
          if (increment > 4) {
            dayMonth = mondayMonth;
            if (mondayYear !== dayYear) {
              dayYear = mondayYear;
            }
          }
        }
        let idString = 'user=' + currentUserId + '&year=' + dayYear + '&month=' + dayMonth;
        dayClock = false;
        $state.go('monthview', {id: idString});
      }

      function setUserBlockTypes() {
        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(userBlocksData=>{
          let userBlocks = userBlocksData.data;

          vm.userblocktypes = userBlocks.sort((a, b)=>{
            if (a.type.toLowerCase() < b.type.toLowerCase()) {
              return -1;
            } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });


        });
      }

      function updateGreetingStrip(user) {
        let weekday = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let greetingsUser = document.getElementById('greetingsUser');
        let greetingsDate = document.getElementById('greetingsDate');
        let today = new Date();


        greetingsUser.innerHTML = "Hello, " + user.name + ".";
        greetingsDate.innerHTML = "Today is: " + weekday[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();


      }




      function onInit() {
        console.log("profileview is lit");
        currentUserId = $stateParams.id;

        var myTimer = setInterval(setClock,1000);
        let userCookie = getCookie('h168userId');
        if (parseInt(userCookie) !== parseInt(currentUserId)) {

          alert('forbidden user access');
          profileClock = false;
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {

              alert('access denied');
              dayClock = false;
              $state.go('landing');
            }
            updateGreetingStrip(userAccount);
            setUserBlockTypes();
            let userPic = document.getElementById('userPic');
            let profilePhoto = document.createElement('img');
            let photoReference = document.getElementById('photoReference');
            userPic.appendChild(profilePhoto);
            profilePhoto.id = 'profilePhoto';
            if (userAccount.user_avatar_url !== '') {
              profilePhoto.src = userAccount.user_avatar_url;
              photoReference.src = userAccount.user_avatar_url;

            } else {
              profilePhoto.src = '../img/blank-profile-picture-973460_1280.png';
              photoReference.src = '../img/blank-profile-picture-973460_1280.png';
            }
            profilePhoto.setAttribute("style", "height: 7em; width: 7em; margin-left: 1.6em; margin-top: 1.2em; border: 2px solid #0000cc;");
            photoReference.setAttribute("style", "height: 10em; width: 10em; margin-left: 4.6em; margin-top: 1.2em; border: 2px solid #0000cc;");
          });
        }


      }
    }


}());
