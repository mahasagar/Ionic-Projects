// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','myAppName.controllers'])

.run(function($ionicPlatform,$cordovaDevice,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $rootScope.device = $cordovaDevice.getDevice();
    $rootScope.manufacturer = device.manufacturer;
    $rootScope.model = device.model;
    $rootScope.uuid = device.uuid;


    if(window.cordova) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})
