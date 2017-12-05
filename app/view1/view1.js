'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: '$ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  var vm = this;
  
  vm.map = { 
    center: { 
      latitude: -34.639743, 
      longitude: -58.609379 
    }, 
    zoom: 14,
    googleMapOptions: {
      streetViewControl: false,
      clickableIcons: false
    },
    poligons : {
      stroke: {
        color: '#6060FB',
        weight: 3
      },
      static: true,
      draggable: false,
      geodesic: false,
      visible: true,
      clickable: false,
      fill: {
        color: '#2c8aa7',
        opacity: 0.4
      }      
    }
  };
  
  vm.markers = [
    {
      id: 1,
      coords: {
        latitude: -34.639743,
        longitude: -58.609379
      },
      title: 'ForkLift 1',
      options: {
        labelAnchor: "28 -5",
        labelClass: 'markerlabel',
        labelContent: 'ForkLift 1'
      }
    },
    {
      id: 2,
      coords: {
        latitude: -34.636743,
        longitude: -58.605379
      },
      title: 'ForkLift 2',
      options: {
        labelAnchor: "28 -5",
        labelClass: 'markerlabel',
        labelContent: 'ForkLift 2'
      }
    }    
  ];

  vm.infoWindow = {
    visible: false,
    coords: {},
    param: {}
  };

  vm.showInfoWindow = function(marker, eventName, model) {
    vm.infoWindow.param = { 
      title: model.title,
      coords: model.coords
     };
    vm.infoWindow.coords = model.coords;
    vm.infoWindow.visible = !vm.infoWindow.visible;
  };

  vm.closeInfoWindow = function() {
    vm.infoWindow.visible = false;
  };

  vm.poligons = [
    {
      id: 1,
      path: [
        {
          latitude: -34.636743,
          longitude: -58.609379
        },
        {
          latitude: -34.639743,
          longitude: -58.609379
        },
        {
          latitude: -34.639743,
          longitude: -58.605379
        },
        {
          latitude: -34.636743,
          longitude: -58.605379
        },
      ]
    }
  ];

}]);