var app = angular.module("asMain", []);

app.directive("asHeader", function() {
    return {
        restrict: "E",
        templateUrl : "headerTemplate.html"
    };
});