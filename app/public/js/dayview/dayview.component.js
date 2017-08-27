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
  var pomoInterval = 25;
  var pomoBreakInterval = 5;
  var numberOfPomo = 4;
  var pomoStateArr = [ 'pomoTimerSetting', 'pomoBreakSetting', 'numberOfPomos', 'pomoCountdown'];
  var pomoState = 0;

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
      vm.addOccasionToDay = addOccasionToDay;
      vm.submitOccasionToDay = submitOccasionToDay;
      vm.editOccasion = editOccasion;
      vm.payBillButton = payBillButton;
      vm.billInfo = billInfo;
      vm.addBillToDay = addBillToDay;

      function addBillToDay() {
        let addBillButton = document.getElementById('addBillButton');
        let billEntryForm = document.getElementById('billEntryForm');
        let billEntryErrorField = document.getElementById('billEntryErrorField');
        let billEntryCancelButton = document.getElementById('billEntryCancelButton');
        let billSubmitButton = document.getElementById('billSubmitButton');
        let enterBillName = document.getElementById('enterBillName');
        let enterAmountDue = document.getElementById('enterAmountDue');
        let enterDueDate = document.getElementById('enterDueDate');
        let enterBalance = document.getElementById('enterBalance');
        let enterDebtHolder = document.getElementById('enterDebtHolder');
        let enterBillAddressLine1 = document.getElementById('enterBillAddressLine1');
        let enterBillAddressLine2 = document.getElementById('enterBillAddressLine2');
        let enterBillAddressCity = document.getElementById('enterBillAddressCity');
        let enterBillAddressState = document.getElementById('enterBillAddressState');
        let enterBillAddressZip = document.getElementById('enterBillAddressZip');

        addBillButton.setAttribute("style", "display: none;");
        billEntryForm.setAttribute("style", "display: initial;");

        billSubmitButton.addEventListener('click', ()=>{
          let billSubmit = {};
          if (enterBillName.value) {
            billSubmit.name = enterBillName.value;
            if (enterAmountDue.value) {
              billSubmit.amount_due = enterAmountDue.value;
              if (enterDueDate.value) {
                billSubmit.due_date = new Date(enterDueDate.value + 'T13:44:00.000Z');
                billSubmit.clean_date = getCleanDate(enterDueDate.value);
                billEntryErrorField.innerHTML = '';
                if (enterBalance.value) {
                  billSubmit.balance = enterBalance.value;
                }
                if (enterDebtHolder.value) {
                  billSubmit.pay_to = enterDebtHolder.value;
                }
                if (enterBillAddressLine1.value) {
                  billSubmit.address_line1 = enterBillAddressLine1.value;
                }
                if (enterBillAddressLine2.value) {
                  billSubmit.address_line2 = enterBillAddressLine2.value;

                }
                if (enterBillAddressCity.value) {
                  billSubmit.city = enterBillAddressCity.value;
                }
                if (enterBillAddressState.value) {
                  billSubmit.state = enterBillAddressState.value;
                }
                if (enterBillAddressZip.value) {
                  billSubmit.zip = enterBillAddressZip.value;
                }
                billSubmit.is_paid = false;
                billSubmit.amount_paid = 0.00;
                billSubmit.user_id = currentUserId;
                $http.post('/bills', billSubmit)
                .then(newBillData=>{
                  let newBill = newBillData.data;
                  newBill[0].clean_date = billSubmit.clean_date;
                  switch(getBillTense(viewDate, newBill.due_date)) {
                    case ('past'):

                      if (days === 1) {
                        newBill[0].due_state = ' was due yesterday.';
                      } else {
                        newBill[0].due_state = ' is ' + days + '  days overdue!';
                      }
                      break;
                    case ('present'):

                      newBill[0].due_state = ' is DUE today!';
                      break;
                    case ('future'):
                      days = getFutureDueDate(viewDate, newBill[0].due_date);
                      if (days === 1) {
                        newBill[0].due_state = ' is due tomorrow.';
                      } else {
                        newBill[0].due_state = ' is due in ' + days + ' days.';
                      }
                      break;
                    default:
                      console.log('non-standard state');
                  }
                  vm.bills.push(newBill[0]);

                  billEntryForm.setAttribute("style", "display: none;");
                  billEntryErrorField.innerHTML = '';
                  addBillButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
                  enterBillName.value = '';
                  enterAmountDue.value = '';
                  enterDueDate.value = '';
                  enterBalance.value = '';
                  enterDebtHolder.value = '';
                  enterBillAddressLine1.value = '';
                  enterBillAddressLine2.value = '';
                  enterBillAddressCity.value = '';
                  enterBillAddressState.value = '';
                  enterBillAddressZip.value = '';
                  billEntryErrorField.value = '';

                  billEntryCancelButton.removeEventListener('click', ()=>{
                    console.log('tidy');
                  });
                  billSubmitButton.removeEventListener('click', ()=>{
                    console.log('tidy');
                  });
                });

              } else {
                billEntryErrorField.innerHTML = 'Please enter a due date';
              }
            } else {
              billEntryErrorField.innerHTML = 'Please enter amount due';
            }
          } else {
            billEntryErrorField.innerHTML = 'Please enter bill name';
          }

        });

        billEntryCancelButton.addEventListener('click', ()=>{
          billEntryForm.setAttribute("style", "display: none;");
          billEntryErrorField.innerHTML = '';
          addBillButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");

          billEntryCancelButton.removeEventListener('click', ()=>{
            console.log('tidy');
          });
          billSubmitButton.removeEventListener('click', ()=>{
            console.log('tidy');
          });
        });
      }

      function billInfo(billId) {
        $http.get(`/bills/${billId}`)
        .then(theBillData=>{
          let theBill = theBillData.data;
          console.log(theBill);
          let infoButton = document.getElementById(theBill.name + theBill.id + theBill.name + theBill.id +theBill.name);
          let infoDiv = document.getElementById(theBill.name + theBill.id + theBill.name + theBill.id);
          let exitButton = document.getElementById(theBill.id + theBill.name + theBill.name + theBill.name);


          infoDiv.setAttribute("style", "display: initial;");
          infoButton.setAttribute("style", "display: none;");
          exitButton.addEventListener('click', ()=>{
            infoDiv.setAttribute("style", "display: none;");
            infoButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
            exitButton.removeEventListener('click', ()=>{
              console.log('removed event listener');
            });
          });
        });
      }

      function payBillButton(billId) {
        console.log(billId);
        $http.get(`/bills/${billId}`)
        .then(theBillData=>{
          let theBill = theBillData.data;
          let paymentAmount = document.getElementById(theBill.user_id + theBill.name + theBill.id);
          let firstPayButton = document.getElementById(theBill.name + theBill.user_id + theBill.id);
          let paidPalDiv = document.getElementById(theBill.id + theBill.name);
          let secondPayButton = document.getElementById(theBill.name + theBill.id + theBill.name);
          let cancelKey = document.getElementById(theBill.name + theBill.name + theBill.id);
          firstPayButton.setAttribute("style", "display:none;");
          paidPalDiv.setAttribute("style", "display: initial;");
          paymentAmount.value = theBill.amount_due;
          paymentAmount.setAttribute("style", "margin-left: 4em; width: 40%;");
          cancelKey.addEventListener('click', ()=>{
            firstPayButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
            paidPalDiv.setAttribute("style", "display: none; align-self: center;");
            cancelKey.removeEventListener('click', ()=>{
              console.log('don\'t really need event listener here');
              secondPayButton.removeEventListener('click', ()=>{
                console.log('safety');
              });
            });
          });
          secondPayButton.addEventListener('click', ()=>{
            let patchObject = {};
            patchObject.amount_paid = paymentAmount.value;
            patchObject.is_paid = true;
            patchObject.date_paid = new Date();
            $http.patch(`/bills/${billId}`, patchObject)
            .then(data=>{
              let patchedBill = data.data;
              let paidBillField = document.getElementById(theBill.name + theBill.id);
              console.log(patchedBill);
              paidPalDiv.setAttribute("style", "display: none;");
              paidBillField.parentNode.removeChild(paidBillField);
            });

            cancelKey.removeEventListener('click', ()=>{
              console.log('tidy');
            });
          });
        });
      }

      function editOccasion (occasionID) {
        console.log(occasionID);
        let editOccasionName = document.getElementById('editOccasionName');
        let addOccasionButton = document.getElementById('addOccasionButton');
        let occasionsList = document.getElementById('occasionsList');
        let editDeleteOccasion = document.getElementById('editDeleteOccasion');
        let deleteOccasionButton = document.getElementById('deleteOccasionButton');
        let editOccasionButton = document.getElementById('editOccasionButton');

        editOccasionName.value = '';
        addOccasionButton.setAttribute("style", "display: none;");
        occasionsList.setAttribute("style", "display: none;");
        editDeleteOccasion.setAttribute("style", "display: initial;");
        $http.get(`/occasions/${occasionID}`)
        .then(editData=>{
          let edit = editData.data;
          let listItem = document.getElementById(edit.name + edit.id);
          editOccasionName.value = edit.name;

          deleteOccasionButton.addEventListener('click', ()=>{
            $http.delete(`/occasions/${occasionID}`)
            .then(deletedData=>{
              let deleted = deletedData.data;

              listItem.parentNode.removeChild(listItem);

              addOccasionButton.setAttribute("style", "display: initial;");
              occasionsList.setAttribute("style", "display: initial;");
              editDeleteOccasion.setAttribute("style", "display: none;");
              deleteOccasionButton.removeEventListener('click', ()=>{
                console.log('removed');
              });
              editOccasionButton.removeEventListener('click', ()=>{
                console.log('removed');
              });
              console.log(vm.occasions);



            });
          });

          editOccasionButton.addEventListener('click', ()=>{
            console.log(editOccasionName.value);
            let patchObject = {};
            let patchedDisplay = document.getElementById(edit.name + edit.id);
            patchObject.name = editOccasionName.value;
            $http.patch(`/occasions/${occasionID}`, patchObject)
            .then(patchedData=>{
              let patched = patchedData.data;
              console.log(patched);
              patchedDisplay.innerHTML = '-' + patched.name;

            });
            addOccasionButton.setAttribute("style", "display: initial;");
            occasionsList.setAttribute("style", "display: initial;");
            editDeleteOccasion.setAttribute("style", "display: none;");
            editOccasionButton.removeEventListener('click', ()=>{
              console.log('removed');
            });
            deleteOccasionButton.removeEventListener('click', ()=>{
              console.log('removed');
            });
            editOccasionName.value = '';
          });

        });
      }

      function submitOccasionToDay () {

        let yyyy = viewDate.getFullYear();
        let mm = viewDate.getMonth() + 1;
        if (mm < 10) {
          mm = '0' + mm;
        }
        let dd = viewDate.getDate();
        if (dd < 10) {
          dd = '0' + dd;
        }
        let addOccasionButton = document.getElementById('addOccasionButton');
        let addNewOccasion = document.getElementById('addNewOccasion');
        let newOccasionsName = document.getElementById('newOccasionsName');
        let isAnnualOccasion = document.getElementById('isAnnualOccasion');
        let occasionEntryName = newOccasionsName.value;
        newOccasionsName.value = null;
        newOccasionsName.placeholder = 'occasion';
        if (occasionEntryName.length > 0) {
          let occasionObject = {};
          let addDate = new Date(yyyy + '-' + mm + '-' + dd + 'T00:54:02.315Z');
          occasionObject.user_id = currentUserId;
          occasionObject.name = occasionEntryName;
          occasionObject.day_of = addDate;
          occasionObject.is_annual = isAnnualOccasion.checked;
          //vm.occasions.push(occasionObject);
          $http.post('/occasions', occasionObject)
          .then(ocData=>{
            let oc = ocData.data;
            vm.occasions.push(oc[0]);
            //console.log(oc);
          });
        }


        //console.log(isAnnualOccasion.checked);

        addOccasionButton.setAttribute("style", "display: initial;");
        addNewOccasion.setAttribute("style", "display: none;");
      }

      function addOccasionToDay () {
        let addOccasionButton = document.getElementById('addOccasionButton');
        let addNewOccasion = document.getElementById('addNewOccasion');

        addOccasionButton.setAttribute("style", "display: none;");
        addNewOccasion.setAttribute("style", "display: initial;");
      }

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
            if (checkDate.getDate() > today.getDate()) {
              whatTense = 'future';
            } else if (checkDate.getDate() < today.getDate()) {
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

      function pomoHandler() {
        let pomoTimerSetting = document.getElementById('pomoTimerSetting');
        let pomoNext = document.getElementById('pomoNext');
        let decreasePomoInterval = document.getElementById('decreasePomoInterval');
        let setPomoInterval = document.getElementById('setPomoInterval');
        let increasePomoInterval = document.getElementById('increasePomoInterval');
        let pomoPrevious = document.getElementById('pomoPrevious');
        let pomoBreakSetting = document.getElementById('pomoBreakSetting');
        let setBreakInterval = document.getElementById('setBreakInterval');
        let numberOfPomos = document.getElementById('numberOfPomos');
        let decreaseBreakInterval = document.getElementById('decreaseBreakInterval');
        let increaseBreakInterval = document.getElementById('increaseBreakInterval');
        let pomoCountdown = document.getElementById('pomoCountdown');
        let decreaseNumberOfPomos = document.getElementById('decreaseNumberOfPomos');
        let increaseNumberOfPomos = document.getElementById('increaseNumberOfPomos');
        let setNumberOfPomos = document.getElementById('setNumberOfPomos');

        pomoCountdown.setAttribute("style", "display:none;");

        setPomoInterval.innerHTML = pomoInterval;
        setBreakInterval.innerHTML = pomoBreakInterval;
        setNumberOfPomos.innerHTML = numberOfPomo;

        increaseNumberOfPomos.addEventListener('click', ()=>{
          ++numberOfPomo;
          if (numberOfPomo === 8) {
            increaseNumberOfPomos.setAttribute("style", "display: none;");
            decreaseNumberOfPomos.setAttribute("style", "display: initial;");
          } else {
            increaseNumberOfPomos.setAttribute("style", "display: initial;");
            decreaseNumberOfPomos.setAttribute("style", "display: initial;");
          }
          setNumberOfPomos.innerHTML = numberOfPomo;
        });
        decreaseNumberOfPomos.addEventListener('click', ()=>{
          --numberOfPomo;
          if (numberOfPomo === 1) {
            increaseNumberOfPomos.setAttribute("style", "display: initial;");
            decreaseNumberOfPomos.setAttribute("style", "display: none;");
          } else {
            increaseNumberOfPomos.setAttribute("style", "display: initial;");
            decreaseNumberOfPomos.setAttribute("style", "display: initial;");
          }
          setNumberOfPomos.innerHTML = numberOfPomo;
        });
        decreaseBreakInterval.addEventListener('click', ()=>{
          --pomoBreakInterval;
          if (pomoBreakInterval === 1) {
            decreaseBreakInterval.setAttribute("style", "display: none;");
            increaseBreakInterval.setAttribute("style", "display: initial;");
          } else {
            decreaseBreakInterval.setAttribute("style", "display: initial;");
            increaseBreakInterval.setAttribute("style", "display: initial;");
          }
          setBreakInterval.innerHTML = pomoBreakInterval;
        });
        increaseBreakInterval.addEventListener('click', ()=>{
          ++pomoBreakInterval;
          if (pomoBreakInterval === 15) {
            decreaseBreakInterval.setAttribute("style", "display: initial;");
            increaseBreakInterval.setAttribute("style", "display: none;");
          } else {
            decreaseBreakInterval.setAttribute("style", "display: initial;");
            increaseBreakInterval.setAttribute("style", "display: initial;");
          }
          setBreakInterval.innerHTML = pomoBreakInterval;
        });

        decreasePomoInterval.addEventListener('click', ()=>{

          --pomoInterval;
          setPomoInterval.innerHTML = pomoInterval;
          if (pomoInterval === 1) {
            decreasePomoInterval.setAttribute("style", "display: none;");
            increasePomoInterval.setAttribute("style", "display: initial;");
          } else {
            decreasePomoInterval.setAttribute("style", "display: initial;");
            increasePomoInterval.setAttribute("style", "display: initial;");
          }
        });
        increasePomoInterval.addEventListener('click', ()=>{

          ++pomoInterval;
          setPomoInterval.innerHTML = pomoInterval;
          if (pomoInterval === 60) {
            increasePomoInterval.setAttribute("style", "display: none;");
            decreasePomoInterval.setAttribute("style", "display: initial;");
          } else {
            increasePomoInterval.setAttribute("style", "display: initial;");
            decreasePomoInterval.setAttribute("style", "display: initial;");
          }
        });


        pomoNext.addEventListener('click', ()=>{
          let timer = 1;
          let currentState = pomoState;
          let newState = currentState + 1;
          if (newState === pomoStateArr.length) {
            newState = 0;
            pomoPrevious.setAttribute("style", "display: none;");
          } else {
            pomoPrevious.setAttribute("style", "display: initial;");
          }
          pomoState = newState;
          switch (pomoStateArr[currentState]) {
            case ('pomoTimerSetting'):
              pomoTimerSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoTimerSetting.setAttribute("style", "display: none;");
                pomoBreakSetting.setAttribute("style", "display: initial;");
                pomoBreakSetting.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('pomoBreakSetting'):
              pomoBreakSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoBreakSetting.setAttribute("style", "display: none;");
                numberOfPomos.setAttribute("style", "display: initial;");
                numberOfPomos.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('numberOfPomos'):
              numberOfPomos.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              pomoNext.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                numberOfPomos.setAttribute("style", "display: none;");
                pomoNext.setAttribute("style", "visibility: visible; display: none;");
                pomoCountdown.setAttribute("style", "display: initial;");
                pomoCountdown.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            default:
              console.log('state is not accounted for');
          }



        });
        pomoPrevious.addEventListener('click', ()=>{
          let timer = 1;
          let currentState = pomoState;
          let newState = currentState - 1;
          if (newState < 0) {
            newState = pomoStateArr.length - 1;
            pomoNext.setAttribute("style", "display: none;");
          } else {
            pomoNext.setAttribute("style", "display: initial;");
          }
          if (newState === 0) {
            pomoPrevious.setAttribute("style", "display: none;");
          } else {
            pomoPrevious.setAttribute("style", "display: initial;");
          }
          pomoState = newState;
          switch (pomoStateArr[currentState]) {
            case ('pomoTimerSetting'):
              pomoTimerSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoTimerSetting.setAttribute("style", "display: none;");
                numberOfPomos.setAttribute("style", "display: initial;");
                numberOfPomos.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('pomoBreakSetting'):
              pomoBreakSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoBreakSetting.setAttribute("style", "display: none;");
                pomoTimerSetting.setAttribute("style", "display: initial;");
                pomoTimerSetting.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('numberOfPomos'):
              numberOfPomos.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                numberOfPomos.setAttribute("style", "display: none;");
                pomoBreakSetting.setAttribute("style", "display: initial;");
                pomoBreakSetting.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('pomoCountdown'):
              pomoCountdown.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              pomoNext.setAttribute("style", "display: initial;");
              setTimeout(()=>{
                pomoCountdown.setAttribute("style", "display: none;");
                numberOfPomos.setAttribute("style", "display: initial;");
                numberOfPomos.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            default:
              console.log('state is not accounted for');
          }



        });

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
          pomoHandler();
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

      function detectHolidays() {
        let holidayArray = [];
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(holidayData=>{
          let holidayList = holidayData.data;
          //console.log(holidayList);
          for (let i = 0; i < holidayList.length; i++) {
            // check for exact date match
            let yyyy = parseInt(holidayList[i].day_of.slice(0,4));
            let mm = parseInt(holidayList[i].day_of.slice(5,7));
            let dd = parseInt(holidayList[i].day_of.slice(8,10));

            if ((yyyy === viewDate.getFullYear()) && (mm === (viewDate.getMonth() + 1)) && (dd === viewDate.getDate())) {
              console.log(holidayList[i]);
              holidayArray.push(holidayList[i]);
            } else {
              if (holidayList[i].is_annual) {
                console.log(parseInt('01'));
                console.log(mm - 1);
                console.log(viewDate.getMonth());
                if (((mm - 1) === viewDate.getMonth()) && (dd === viewDate.getDate())) {
                  holidayArray.push(holidayList[i]);
                }
              } else {
                // check for floating holidays
                switch (holidayList[i].name) {
                  case ('Martin Luther King Day'):
                    if ((viewDate.getMonth() === 0) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 14) && (viewDate.getDate() < 22)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Clean Out Your Computer Day'):
                    if ((viewDate.getMonth() === 1) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 7) && (viewDate.getDate() < 15)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('President\'s Day'):
                    if ((viewDate.getMonth() === 1) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 14) && (viewDate.getDate() < 22)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Father\'s Day'):
                    if ((viewDate.getMonth() === 5) && (viewDate.getDay() === 0)) {
                      if ((viewDate.getDate() > 14) && (viewDate.getDate() < 22)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Labour Day'):
                    if ((viewDate.getMonth() === 8) && (viewDate.getDay() === 1)) {
                      if (viewDate.getDate() < 8) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Mother\'s Day'):
                    if ((viewDate.getMonth() === 4) && (viewDate.getDay() === 0)) {
                      if ((viewDate.getDate() > 7) && (viewDate.getDate() < 15)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Book Lover\'s Day'):
                    if ((viewDate.getMonth() === 9) && (viewDate.getDay === 7)) {
                      if (viewDate.getDay() < 8) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Thanksgiving Day'):
                    if ((viewDate.getMonth() === 10) && (viewDate.getDay() === 4)) {
                      if ((viewDate.getDate() > 21) && (viewDate.getDate() < 29)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Black Friday'):
                    if ((viewDate.getMonth() === 10) && (viewDate.getDay() === 5)) {
                      if (((viewDate.getDate() - 1) > 21) && ((viewDate.getDate() - 1) < 29)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Cyber Monday'):
                    if (((viewDate.getMonth() === 11) || (viewDate.getMonth() === 10)) && (viewDate.getDay() === 1)) {
                      if (((viewDate.getMonth() === 10) && ((viewDate.getDate() - 4) > 21) && ((viewDate.getDate() - 4) < 29)) || (viewDate.getMonth() === 11) && ((viewDate.getDate() - 4) < -1 )) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Advent'):
                    if (viewDate.getDay() === 6) {
                      if ((viewDate.getMonth() === 10) || (viewDate.getMonth() === 11)) {
                        let xmas = new Date(viewDate.getFullYear() + '-12-25T13:44:00.000Z');
                        switch (xmas.getDay()) {
                          case (0):
                            if ((viewDate.getDate() === 3) || (viewDate.getDate() === 10) || (viewDate.getDate() === 17) || (viewDate.getDate() === 24)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (1):
                            if ((viewDate.getDate() === 2) || (viewDate.getDate() === 9) || (viewDate.getDate() === 16) || (viewDate.getDate() === 23)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (2):
                            if ((viewDate.getDate() === 1) ||   (viewDate.getDate() === 8) || (viewDate.getDate() === 15) || (viewDate.getDate() === 22)) {
                            holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (3):
                            if ((viewDate.getDate() === 31) ||   (viewDate.getDate() === 7) || (viewDate.getDate() === 14) || (viewDate.getDate() === 21)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (4):
                            if ((viewDate.getDate() === 30) ||   (viewDate.getDate() === 6) || (viewDate.getDate() === 13) || (viewDate.getDate() === 20)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (5):
                            if ((viewDate.getDate() === 29) ||   (viewDate.getDate() === 5) || (viewDate.getDate() === 12) || (viewDate.getDate() === 19)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (6):
                            if ((viewDate.getDate() === 28) ||   (viewDate.getDate() === 4) || (viewDate.getDate() === 11) || (viewDate.getDate() === 18)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          default:
                          console.log('impossible situation for advent');
                        }
                      }
                    }
                    break;
                  case ('Victoria Day'):
                    if ((viewDate.getMonth() === 4) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 17) && (viewDate.getDate() < 25)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Civic Holiday (Canada)'):
                    if ((viewDate.getMonth() === 7) && (viewDate.getDay() === 1)) {
                      if (viewDate.getDate() < 8) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Indigenous Peoples\' Day'):
                    if ((viewDate.getMonth() === 8) && (viewDate.getDay() === 5)) {
                      if ((viewDate.getDate() > 21) && (viewDate.getDate() < 29)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Arbor Day'):
                    if ((viewDate.getMonth() === 3) &&(viewDate.getDay() === 5)) {
                      if (viewDate.getDate() > 23) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Canadian Thanksgiving'):
                    if ((viewDate.getMonth() === 9) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 7) && (viewDate.getDate() < 15)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Memorial Day'):
                    if ((viewDate.getMonth() === 4) && (viewDate.getDay() === 1)) {
                      if (viewDate.getDate() > 24) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  default:
                    console.log('non-float holiday');
                }

              }
            }


          }
          vm.holidays = holidayArray;
          //art override_content
          //music override_content
        });
      }

      function detectOccasions () {
        let occasionArray = [];
        //let occasionsTitle = document.getElementById('occasionsTitle');
        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(occasionsListData=>{
          let occasionsList = occasionsListData.data;
          for (let i = 0; i < occasionsList.length; i++) {
            let yyyy = parseInt(occasionsList[i].day_of.slice(0,4));
            let mm = parseInt(occasionsList[i].day_of.slice(5,7));
            let dd = parseInt(occasionsList[i].day_of.slice(8,10));

            if ((parseInt(yyyy) === viewDate.getFullYear()) && (mm === (viewDate.getMonth() + 1)) && (dd === viewDate.getDate())) {
              occasionArray.push(occasionsList[i]);
            } else {
              if (occasionsList[i].is_annual) {
                if ((mm === (viewDate.getMonth() + 1)) && (dd === viewDate.getDate())) {
                  occasionArray.push(occasionsList[i]);
                }
              }
            }
          }
          // if (occasionArray.length < 1) {
          //   occasionsTitle.innerHTML = '';
          // }
          vm.occasions = occasionArray;
        });
      }

      function sameDay(date1, date2) {
        let result = true;
        let comp1 = new Date(date1);
        let comp2 = new Date(date2);
        console.log('here!!');
        if (comp1.getFullYear() !== comp2.getFullYear()) {
          result = false;
        }
        if (comp1.getMonth() !== comp2.getMonth()) {
          result = false;
        }
        if (comp1.getDate() !== comp2.getDate()) {
          result = false;
        }
        console.log(result);
        return(result);
      }

      function getOverdueStatus(viewingDate, due) {
        let day = new Date(viewingDate);
        let dueDay = new Date(due);
        let result = 0;
        do {
          ++result;
          day.setDate(day.getDate()-1);
        } while(!sameDay(day, dueDay));

        return(result);
      }

      function getFutureDueDate(viewingDate, due) {
        let day = new Date(viewingDate);
        let dueDay = new Date(due);
        let result = 0;
        do {
          ++result;
          day.setDate(day.getDate()+1);
        } while(!sameDay(day, dueDay));

        return(result);
      }

      function getBillTense(calendarDate, billDate) {
        let compareToDate = new Date(calendarDate);
        let billDue = new Date(billDate);
        let tense = '';
        if (compareToDate.getFullYear() !== billDue.getFullYear()) {
          if (compareToDate.getFullYear() > billDue.getFullYear()) {
            tense = 'past';
          } else {
            tense = 'future';
          }
        } else if (compareToDate.getMonth() !== billDue.getMonth()) {
          if (compareToDate.getMonth() > billDue.getMonth()) {
            tense = 'past';
          } else {
            tense = 'future';
          }
        } else if (compareToDate.getDate() !== billDue.getDate()) {
          if (compareToDate.getDate() > billDue.getDate()) {
            tense = 'past';
          } else {
            tense = 'future';
          }
        } else {
          tense = 'present';
        }
        console.log(tense);
        return(tense);
      }

      function overdueFlash(elem) {
        elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(0deg, #ff0000, #cc9900); background: -o-linear-gradient(0deg, #ff0000, #cc9900);   background: -moz-linear-gradient(0deg, #ff0000, #cc9900); background: linear-gradient(0deg, #ff0000, #cc9900); transition: background 125ms ease;");
        setTimeout(()=>{
          elem.setAttribute("style", "background: #ee0011; background-color: -webkit-linear-gradient(45deg, #ee0011, #cc9900); background: -o-linear-gradient(45deg, #ee0011, #cc9900);   background: -moz-linear-gradient(45deg, #ee0011, #cc9900); background: linear-gradient(45deg, #ee0011, #cc9900); transition: background 125ms ease;");
          setTimeout(()=>{
            elem.setAttribute("style", "background: #dd0022; background-color: -webkit-linear-gradient(90deg, #dd0022, #cc9900); background: -o-linear-gradient(90deg, #dd0022, #cc9900);   background: -moz-linear-gradient(90deg, #dd0022, #cc9900); background: linear-gradient(90deg, #dd0022, #cc9900); transition: background 125ms ease;");
            setTimeout(()=>{
              elem.setAttribute("style", "background: #cc0033; background-color: -webkit-linear-gradient(135deg, #cc0033, #cc9900); background: -o-linear-gradient(135deg, #cc0033, #cc9900);   background: -moz-linear-gradient(135deg, #cc0033, #cc9900); background: linear-gradient(135deg, #cc0033, #cc9900); transition: background 125ms ease;");
              setTimeout(()=>{
                elem.setAttribute("style", "background: #bb1144; background-color: -webkit-linear-gradient(180deg, #bb1144, #cc9900); background: -o-linear-gradient(180deg, #bb1144, #cc9900);   background: -moz-linear-gradient(180deg, #bb1144, #cc9900); background: linear-gradient(180deg,#bb1144, #cc9900); transition: background 125ms ease;");
                setTimeout(()=>{
                  elem.setAttribute("style", "background: #aa2255; background-color: -webkit-linear-gradient(-135deg, #aa2255, #cc9900); background: -o-linear-gradient(-135deg, #aa2255, #cc9900);   background: -moz-linear-gradient(-135deg, #aa2255, #cc9900); background: linear-gradient(-135deg, #aa2255, #cc9900); transition: background 125ms ease;");
                  setTimeout(()=>{
                    elem.setAttribute("style", "background: #bb3344; background-color: -webkit-linear-gradient(-90deg, #bb3344, #cc9900); background: -o-linear-gradient(-90deg, #bb3344, #cc9900);   background: -moz-linear-gradient(-90deg, #bb3344, #cc9900); background: linear-gradient(-90deg, #bb3344, #cc9900); transition: background 125ms ease;");
                    setTimeout(()=>{
                      elem.setAttribute("style", "background: #cc4433; background-color: -webkit-linear-gradient(-45deg, #cc4433, #cc9900); background: -o-linear-gradient(-45deg, #cc4433, #cc9900);   background: -moz-linear-gradient(-45deg, #cc4433, #cc9900); background: linear-gradient(-45deg, #cc4433, #cc9900); transition: background 125ms ease;");
                      setTimeout(()=>{
                        elem.setAttribute("style", "background: #dd5522; background: -webkit-linear-gradient(0deg, #dd5522, #cc9900); background: -o-linear-gradient(0deg, #dd5522, #cc9900);   background: -moz-linear-gradient(0deg, #dd5522, #cc9900); background: linear-gradient(0deg, #dd5522, #cc9900); transition: background 125ms ease;");
                        setTimeout(()=>{
                          elem.setAttribute("style", "background: #ee4411; background: -webkit-linear-gradient(45deg, #ee4411, #cc9900); background: -o-linear-gradient(45deg, #ee4411, #cc9900);   background: -moz-linear-gradient(45deg, #ee4411, #cc9900); background: linear-gradient(45deg, #ee4411, #cc9900); transition: background 125ms ease;");
                          setTimeout(()=>{
                            elem.setAttribute("style", "background: #ff3300; background: -webkit-linear-gradient(90deg, #ff3300, #cc9900); background: -o-linear-gradient(90deg, #ff3300, #cc9900);   background: -moz-linear-gradient(90deg, #ff3300, #cc9900); background: linear-gradient(90deg, #ff3300, #cc9900); transition: background 125ms ease;");
                            setTimeout(()=>{
                              elem.setAttribute("style", "background: #ff2200; background: -webkit-linear-gradient(135deg, #ff2200, #cc9900); background: -o-linear-gradient(135deg, #ff2200, #cc9900);   background: -moz-linear-gradient(135deg, #ff2200, #cc9900); background: linear-gradient(135deg, #ff2200, #cc9900); transition: background 125ms ease;");
                              setTimeout(()=>{
                                elem.setAttribute("style", "background: #ff1100; background: -webkit-linear-gradient(180deg, #ff1100, #cc9900); background: -o-linear-gradient(180deg, #ff1100, #cc9900);   background: -moz-linear-gradient(180deg, #ff1100, #cc9900); background: linear-gradient(180deg, #ff1100, #cc9900); transition: background 125ms ease;");
                                setTimeout(()=>{
                                  elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-135deg, #ff0000, #cc9900); background: -o-linear-gradient(-135deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-135deg, #ff0000, #cc9900); background: linear-gradient(-135deg, #ff0000, #cc9900); transition: background 125ms ease;");
                                  setTimeout(()=>{
                                    elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-90deg, #ff0000, #cc9900); background: -o-linear-gradient(-90deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-90deg, #ff0000, #cc9900); background: linear-gradient(-90deg, #ff0000, #cc9900); transition: background 125ms ease;");
                                    setTimeout(()=>{
                                      elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-45deg, #ff0000, #cc9900); background: -o-linear-gradient(-45deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-45deg, #ff0000, #cc9900); background: linear-gradient(-45deg, #ff0000, #cc9900); transition: background 125ms ease;");
                                      setTimeout(()=>{
                                        overdueFlash(elem);
                                      }, 65);
                                    }, 65);
                                  }, 65);
                                }, 65);
                              }, 65);
                            }, 65);
                          }, 65);
                        }, 65);
                      }, 65);
                    }, 65);
                  }, 65);
                }, 65);
              }, 65);
            }, 65);
          }, 65);
        }, 65);
      }

      function getCleanDate(theDate) {
        let cleanString = '';
        let yyyy = theDate.slice(0, 4);
        let mm = theDate.slice(5, 7);
        let dd = theDate.slice(8, 10);
        if (dd[0] === '0') {
          dd = dd[1];
        }
        switch(mm) {
          case('01'):
            mm = 'January';
            break;
          case('02'):
            mm = 'February';
            break;
          case('03'):
            mm = 'March';
            break;
          case('04'):
            mm = 'April';
            break;
          case('05'):
            mm = 'May';
            break;
          case('06'):
            mm = 'June';
            break;
          case('07'):
            mm = 'July';
            break;
          case('08'):
            mm = 'August';
            break;
          case('09'):
            mm = 'September';
            break;
          case('10'):
            mm = 'October';
            break;
          case('11'):
            mm = "November";
            break;
          case('12'):
            mm = "December";
            break;
          default:
            console.log('date error ' + mm);
        }
        cleanString = dd + ' ' + mm + ' ' + yyyy;


        return(cleanString);
      }

      function detectBills() {
        $http.get(`/billsByUser/${currentUserId}`)
        .then(currentBillsData=>{
          let days = 0;
          let currentBills = currentBillsData.data;
          let currentBillsDue = [];
          let element = document.getElementById('billsList');
          let todaysBills = [];
          let yesterdaysBills = [];
          currentBillsDue = currentBills.filter((bill)=>{
            return (bill.is_paid === false);
          });
          if (currentBillsDue.length > 0) {
            for (let i = 0; i < currentBillsDue.length; i++) {
              currentBillsDue[i].clean_date = getCleanDate(currentBillsDue[i].due_date);
              console.log(currentBillsDue[i].due_date);
              switch(getBillTense(viewDate, currentBillsDue[i].due_date)) {
                case ('past'):
                  // element = document.getElementById(currentBillsDue[i].name + currentBillsDue[i].id);
                  // overdueFlash(element);
                  yesterdaysBills.push(currentBillsDue[i]);
                  days = getOverdueStatus(viewDate, currentBillsDue[i].due_date);
                  if (days === 1) {
                    currentBillsDue[i].due_state = ' was due yesterday.';
                  } else {
                    currentBillsDue[i].due_state = ' is ' + days + '  days overdue!';
                  }
                  break;
                case ('present'):
                  // element = document.getElementById(currentBillsDue[i].name + currentBillsDue[i].id);
                  // console.log(element);
                  // element.setAttribute("style", "background-color: #ff0000;");
                  todaysBills.push(currentBillsDue[i]);
                  currentBillsDue[i].due_state = ' is DUE today!';
                  break;
                case ('future'):
                  days = getFutureDueDate(viewDate, currentBillsDue[i].due_date);
                  if (days === 1) {
                    currentBillsDue[i].due_state = ' is due tomorrow.';
                  } else {
                    currentBillsDue[i].due_state = ' is due in ' + days + ' days.';
                  }
                  break;
                default:
                  console.log('non-standard state');
              }

            }
          } else {
            element.setAttribute("style", "display: none;");
          }
          vm.bills = currentBillsDue;
          console.log(todaysBills);
          let idString = '';

          setTimeout(()=>{
            if (todaysBills.length > 0) {
              for (let dueNow = 0; dueNow < todaysBills.length; dueNow++) {
                idString = todaysBills[dueNow].name + todaysBills[dueNow].id;
                console.log(idString);
                document.getElementById(idString).setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-45deg, #ff0000, #cc9900); background: -o-linear-gradient(-45deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-45deg, #ff0000, #cc9900); background: linear-gradient(-45deg, #ff0000, #cc9900);");
              }
            }
            if (yesterdaysBills.length > 0) {
              for (let dueThen = 0; dueThen < yesterdaysBills.length; dueThen++) {
                element = document.getElementById(yesterdaysBills[dueThen].name + yesterdaysBills[dueThen].id);
                overdueFlash(element);
              }
            }
          }, 1000);

        });
      }

      function onInit() {
        console.log("Dayview is lit");


        var myTimer = setInterval(setClockDay,1000);
        let weekdaySlot = document.getElementById('weekdaySlot');
        let numdaySlot = document.getElementById('numdaySlot');
        let monthSlot = document.getElementById('monthSlot');
        let yearSlot = document.getElementById('yearSlot');
        let pomoBreakSetting = document.getElementById('pomoBreakSetting');
        pomoBreakSetting.setAttribute("style", "display: none;");
        let numberOfPomos = document.getElementById('numberOfPomos');
        numberOfPomos.setAttribute("style", "display: none;");

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
        detectHolidays();
        detectOccasions();
        detectBills();

      }

    }

}());
