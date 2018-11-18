angular.module('expenses-tracker')
.controller('ListController',['$http' ,function($http) {
  this.handleClick = (month) => {
    console.log(month,this.category)
   var req = {
     method: 'GET',
     url: `/subtotal/${month}/${this.category}`
 	}

   $http(req).then((data)=>{
   	this.subtotal = data.data;
  }, (err)=>{console.log(err);
  })
  };
}])
.component('list', {

  bindings: {
    category: '<'
  },
  controller: 'ListController',
  templateUrl: 'src/templates/List.html'
  });
