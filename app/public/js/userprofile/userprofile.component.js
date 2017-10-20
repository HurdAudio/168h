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

        holidayManagerDone.setAttribute("style", "visibility: visible;");
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


        holidayManagerDone.setAttribute("style", "visibility: hidden;");
        userHolidayEditorDiv.setAttribute("style", "display: initial;");

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

      function closeOccasionsManager() {
        let occasionManager = document.getElementById('occasionManager');
        let occasionsManagementDiv = document.getElementById('occasionsManagementDiv');
        let occasionZone = document.getElementById('occasionZone');


        occasionManager.setAttribute("style", "visibility: visible;");
        occasionsManagementDiv.setAttribute("style", "display: none;");
        occasionZone.setAttribute("style", "opacity: 1;");
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
