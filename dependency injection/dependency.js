var transferService = require("./transferService");

 var doSomeWork = function(transportService) {
     var placeB = "Greece";
     transportService.transportTo(placeB);
 };


 doSomeWork (new transferService.Service());