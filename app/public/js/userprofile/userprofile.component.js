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
