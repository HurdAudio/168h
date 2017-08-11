(function() {
  'use strict';


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




      function onInit() {
        console.log("Dayview is lit");
        var myTimerDayview = setInterval(setClockDay,1000);


      }

    }

}());
