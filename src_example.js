//Here is a IONIC/Angular controller
.controller('MyCtrl', function ($scope, $ionicPopup, $timeout, $http, $state, $interval) {


$http.get('assets/XXX.json').success(function (data) {
     obj = angular.fromJson(data);
     // DBOpen(WebSQL)
     db = openDatabase("words.db", "1.0", "words", 1024 * 1024 * 10);

     //XXX.json is taken from assets/ folder
     for (var i = 0; i < obj.length; i++) {
          addItem(i, 1);  //you can add your code here.
       }
     });


   //Here is only a example (This example is trying to add three tables)
    var addItem = function (i, sqlpattern) {
        var sqlpattern;

        switch (sqlpattern) {

            case 1://XXX
                var _word, _form, _meaning;
                _word = obj[i].word;
                _form = obj[i].form;
                _meaning = obj[i].meaning;

                db_insert_XXX(_word, _form, _meaning)

                break;

            case 2://YYY
                var _word, _source, _sentence, _correctAns, _otherAns1, _otherAns2, _otherAns3, _Japanese;
                _word = obj[i].word;
                _sentence = obj[i].sentence;
                _source = obj[i].source;
                _correctAns = obj[i].correctAns;
                _otherAns1 = obj[i].otherAns1;
                _otherAns2 = obj[i].otherAns2;
                _otherAns3 = obj[i].otherAns3;
                _Japanese = obj[i].Japanese;

                db_insert_YYY(_word, _source, _sentence, _correctAns, _otherAns1, _otherAns2, _otherAns3, _Japanese);


                break;

            case 3://ZZZ
                var _word, _word_family;
                _word = obj[i].word;
                _word_family = obj[i].word_family;

                db_insert_ZZZ(_word, _word_family)

                break;
        }

    }


    //Here is only a example
    var db_insert_XXX = function (word, form, meaning) {

        strsql = "INSERT INTO XXX VALUES (?, ?, ?) "
        db2.transaction(function (tr) {
            tr.executeSql(strsql, [word, form, meaning],
              function () {                  
                  intm_wordsCnt = intm_wordsCnt + 1

                  //for progress bar
                  startprogress();  //start 
                  lngProgress = Number(lngProgress + (1 / m_wordsLength) * 33.333)
                  $scope.progressval =lngProgress.toFixed(1); 

                  if (intm_wordsCnt == m_wordsLength) {
                      console.log("XXX OK")

                      //After XXX, we'll create YYY next
                      $http.get('assets/YYY.json').success(function (data) {
                          obj = angular.fromJson(data);
                          intm_word_questionsCnt = 0; 

                          // DB open
                          db3 = openDatabase("words.db", "1.0", "words", 1024 * 1024 * 10);

                          for (var i = 0; i < obj.length; i++) {
                              addItem(i, 2);  //sqlpattern=2 is YYY
                          }
                          m_word_questionsLength = obj.length;
                      });
                      
                  }
              },
              $scope.sqlError);
        });
    }


    var db_insert_YYY = function (word, source, sentence, correctAns, otherAns1, otherAns2, otherAns3, Japanese) {

        strsql = "INSERT INTO m_word_questions VALUES (?, ?, ? ,?, ?, ?, ?, ?) "
        db3.transaction(function (tr) {
            tr.executeSql(strsql, [word, source, sentence, correctAns, otherAns1, otherAns2, otherAns3, Japanese],
              function () {
                  intm_word_questionsCnt = intm_word_questionsCnt + 1

                  //for progress bar
                  lngProgress = Number(lngProgress + (1 / m_word_questionsLength) * 33.333)
                  $scope.progressval = lngProgress.toFixed(1); 


                  if (intm_word_questionsCnt == m_word_questionsLength) {
                      console.log("m_word_questionsOK")

                      //After finishing YYY, then execute ZZZ
                      $http.get('assets/ZZZ.json').success(function (data) {
                          obj = angular.fromJson(data);
                          intm_word_familyCnt = 0; 

                          // DBopen
                          db4 = openDatabase("words.db", "1.0", "words", 1024 * 1024 * 10);

                          for (var i = 0; i < obj.length; i++) {
                              addItem(i, 3);  //sqlpattern=3 is ZZZ
                          }
                          m_word_familyLength = obj.length;
                      });

                  }
                  /*console.log("m_word_questions INSERT OK");*/
              },
              $scope.sqlError);
        });
    }

    var db_insert_ZZZ = function (word, word_family) {

        strsql = "INSERT INTO ZZZ VALUES (?, ?) "
        db4.transaction(function (tr) {
            tr.executeSql(strsql, [word, word_family],
              function () {                  
                  intm_word_familyCnt = intm_word_familyCnt + 1

                  //for progress bar
                  lngProgress = Number(lngProgress + (1 / m_word_familyLength) * 34)
                  $scope.progressval = lngProgress.toFixed(1); 

                  if (intm_word_familyCnt == m_word_familyLength) {
                      console.log("ZZZ OK")

                      //If you want to move to HOME
                      location.href = '#/page1/page2'
                  }
                  /*console.log("ZZZ OK"); */
              },
              $scope.sqlError);
        });
    }


    //for progress bar
    $scope.progressval = 0;
    $scope.stopinterval = null;
  
  
    function startprogress()
    {
        //$scope.progressval = 0;
    
        if ($scope.stopinterval)
        {
            $interval.cancel($scope.stopinterval);
        }
        
        //Get Interval
        $scope.stopinterval = $interval(function() {
           // $scope.progressval = $scope.progressval + 1;
            if( $scope.progressval >= 100 ) {
                $interval.cancel($scope.stopinterval);
                $state.go('tabsController.myPage');  //In this case we go back "myPage"
                return;
            }
        }, 100);
    }


})
