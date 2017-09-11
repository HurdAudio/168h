(function() {
  'use strict';
  var dayClock = false;
  var weekClock = false;
  var myTimer = setInterval(setClockWeek,1000);
  var currentUserId = 1;

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

      function gotoToday() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        myTimer = undefined;
        dayClock = true;
        weekClock = false;
        $state.go('dayview', {id: idString});
      }


      function onInit() {
        console.log("Weekview is lit");
        //check cookies for user already logged in - change page state if this is a return user
        dayClock = false;
        weekClock = true;

      }

    }

}());
