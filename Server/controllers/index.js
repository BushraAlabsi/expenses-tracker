var db = require('../db');

module.exports = {
    subtotal: (req, res) => {
     db.expenses.sum('amount', { where: { category: req.params.category , 
      month:req.params.month } })
     .then(sum => {
      res.json(sum);
})
    },
    total: function (req, res) {
      db.expenses.sum('amount').then(sum => {
          res.json(sum);
        });
    },
    add: function (req, res) {
      db.expenses.create({ 
        amount:req.body.amount,
        category: req.body.category,
        month: req.body.month}).
      then(resutl => {
       res.sendStatus(201);
      });
    }
  
};
