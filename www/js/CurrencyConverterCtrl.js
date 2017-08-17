angular.module('CurrencyConverter')
.controller('CurrencyConverterCtrl', function ($scope) {
  var results = {
    '(3 * 10 ARS) + 5 USD': {
      'USD': 8,
      'ARS': 80
    },
    '3 * 10 ARS': {
      'USD': 3,
      'ARS': 30
    },
    '5 USD': {
      'USD': 5,
      'ARS': 50
    }
  };
  $scope.currencies = [
    {
      name: 'USD',
      rate: '1 USD = 10 ARS'
    },
    {
      name: 'ARS',
      rate: '10 ARS = 1 USD'
    }
  ];
  $scope.selectedCurrency = $scope.currencies[0];
  $scope.convert = function (expression, selectedCurrency) {
    $scope.result = (results[expression][selectedCurrency.name] || '0')
      + ' ' + selectedCurrency.name;
  };
});
