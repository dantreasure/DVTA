/*
 * GET home page.
 */

exports.index = function(Task) {
  return function(req, res) {
    Task.find({}, function(error, tasks) {
      res.render('index', {
        title: 'DATVM',
        tasks : tasks
      });
    });
  };
};

exports.addTask = function(Task) {
  return function(req, res) {
    var task = new Task(req.body);
    task.save(function(error, task) {
      if (error || !task) {
        res.json({ error : error });
      } else {
        res.json({ task : task });
      }
    });
  };
};

exports.remove = function(Task) {
  return function(req, res) {
    Task.findOneAndRemove({ _id : req.params.id }, function(error, task) {
      if (error || !task) {
        res.json({ error : error });
      } 
    });
  }
};