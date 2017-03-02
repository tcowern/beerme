angular.module("rockyMtnHops")
 .controller("mainCtrl", mainController);

 mainController.$inject = ["$http"];

function mainController($http){
  var main = this;
  console.log("test")
  var state = "";

  main.getState = function() {
    // state = document.getElementsByName("state")[0].value;
    state = document.getElementById("state").value;
    console.log("State: " + state);
    main.getBeer();
  }


  main.getBeer = function() {
    $http({
      method: "GET",
      url: "http://api.brewerydb.com/v2/locations", 
      params: {
        region: state,
        key: "419c311c1fd3d1f6916ee57f16cb09d9"
      }
    })
    .then(function(res, status){
      console.log(res.data)
        main.beerData = res.data;
    },
    function(res, status){
        console.log("Failure:",status);
    });
  }
  // main.getBeer();
}
