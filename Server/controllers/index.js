var db = require('../db');

module.exports = {
    subtotal: (req, res) => {
    },
    total: function (req, res) {
      db.expenses.sum('amount').then(sum => {
          res.json(sum);
        });
    },
    add: function (req, res) {
    
    }
  
};
