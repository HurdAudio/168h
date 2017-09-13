(function() {
  'use strict';



  // function setClock(){
  //      document.getElementById("clockPasswordreset").innerHTML=new Date().toLocaleTimeString('en-GB');
  // }

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



  angular.module('app')
    .component('monthview', {
      controller: MonthviewController,
      templateUrl: '/js/monthview/monthview.template.html'
    });

    MonthviewController.$inject = ['$http', '$state', '$stateParams'];

    function MonthviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.gotoDay = gotoDay

      function gotoDay() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + 1 + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        //myTimer = undefined;
        //dayClock = true;
        //weekClock = false;
        $state.go('dayview', {id: idString});
      }


      function onInit() {
        console.log("Monthview is lit");


        //var myTimer = setInterval(setClock,1000);


      }
    }


}());
