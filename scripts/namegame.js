angular.module('NameGameApp', [])
  .controller('MainCtrl', function($scope, $http) {
    var names = []; // set controller wide variable of all of the team members
    $http.get("http://api.namegame.willowtreemobile.com/").success(function(response){
      for(var i = 0; i < 98; i++){
        names.push(response[i]);
      };
    });

    //initialize the memorization board
    $scope.board = function(size){
      //set initial variables
      var count = 0
      var randNums = [];
      var team = [];

      if(size == "easy"){
        while(count < 5){
          num = getNum(randNums) //set a new random number insuring that no numbers on the board are used more than once
          names[num]['color'] = getRandomColor(); //set a corresponding color to identify the correct matchup
          randNums.push(num);
          team.push(names[num]);
          count++
        };
        count = 0; //reset the counter variable to re-initialize the board if the user chooses
      }else if(size == "medium"){
        while(count < 10){
          num = getNum(randNums)
          names[num]['color'] = getRandomColor()
          randNums.push(num)
          team.push(names[num]);
          count++
        };
        count = 0;
      }else if(size == "hard"){
        while(count < 15){
          num = getNum(randNums)
          names[num]['color'] = getRandomColor()
          randNums.push(num)
          team.push(names[num]);
          count++
        };
        count = 0;
      };
      $scope.teammates = team;
    };

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var hexColor = '#';
      for (var i = 0; i < 6; i++ ) {
          hexColor += letters[Math.floor(Math.random() * 16)];
      }
      return hexColor;
    }

    function getNum(numArray){
      var num = Math.floor((Math.random()) * 98 + 1)
      if (numArray.indexOf(num) == -1){
        return num;
      } else {
        getNum(numArray);
      };
    };

  });
