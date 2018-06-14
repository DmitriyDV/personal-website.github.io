function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1>Hello, {formatName(user)}!</h1>;

//ReactDOM.render(element, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);


//it is for google map(working)

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

initMap();



var app = angular.module("myFirstApp", []);
//insert Google map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
