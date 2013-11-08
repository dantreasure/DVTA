/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'DVTA',
    todos : [
      {name: "Deadlift", count: 45},
      {name: "Cups of water", count: 12},
      {name: "Pages Read", count: 124}
    ]
  });
};