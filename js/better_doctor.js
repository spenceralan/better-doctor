const apiKey = require("./../.env").apiKey;

class Doctors {
  constructor(condition) {
    this.condition = condition;
  }

  byCondition(displayDoctors) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.condition}&location=or-portland&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=${apiKey}`).then(function(query){
      displayDoctors(query.data);
    }).fail(function(query) {
      console.log("fail");
    });
  }

}

exports.doctorsModule = Doctors;