angular.module('expenses-tracker')

.controller('AddController',['$http' ,function($http) {
  this.handleClick = () => {
    
   var req = {
     method: 'POST',
     url: '/insert',
     headers: {
       'Content-Type': 'application/json'
     },
     data: { category:this.category, amount:this.amount, month: this.month }
   }

   $http(req).then((data)=>{
    var req2 = {
     method: 'GET',
     url: '/total'
   }
   $http(req2).then((data2)=>{
      this.total = data2.data;
      console.log(this.total)
   })
  }, (err)=>{console.log(err);

  })
  };
}])
.component('add', {

  controller: 'AddController',
  templateUrl: 'src/templates/add.html'
  });
