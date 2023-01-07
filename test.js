var myApp = angular.module("myModule", []);
var myController = function ($scope)
     {
          var Employee = [
          {
            LongTerm: "Shared Capitals",MediumTerm: "Bank loans",ShortTerm: "Bank overdraft",
          },
          {
            LongTerm: "Retained Profits",MediumTerm: "Leasing",ShortTerm: "Trade creditors",
          },
          {
            LongTerm: "Venture Capital",MediumTerm: "Hire purchase",ShortTerm: "Factoring",
          },
          {
            LongTerm: "Mortgages",MediumTerm: "Government grants",ShortTerm: "Commercial bank loans",
          },
          {
            LongTerm: "Loand term bank loans",MediumTerm: "Borrowing from public deposit",ShortTerm: "Secured loans",
          }];
     $scope.Emp = Employee;
     };
myApp.controller("myCont", myController);