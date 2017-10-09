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
      vm.editBlock = editBlock;
      vm.userExistingBlocksEditorDone = userExistingBlocksEditorDone;
      vm.createNewBlocktype = createNewBlocktype;
      vm.blocktypeReport = blocktypeReport;
      vm.blocktypeReportDone = blocktypeReportDone;

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
