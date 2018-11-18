angular.module('expenses-tracker')
.controller('AppController',function() {
  this.add = true;
  this.first = true;

})
.component('app', {
  controller: 'AppController',
  templateUrl: 'src/templates/app.html'
  });
