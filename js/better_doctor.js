const apiKey = require("./../.env").apiKey;

class Doctors {
  constructor(attributes) {
    this.condition = attributes.condition;
    this.specialty = attributes.specialty;
  }

  byCondition(displayDoctors) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.condition}&location=or-portland&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=${apiKey}`).then(function(query){
      displayDoctors(query.data);
    }).fail(function() {
      error();
    });
  }

  bySpecialty(displayDoctors) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${this.specialty}&location=or-portland&user_location=45.523%2C-122.676&skip=0&limit=20&user_key=${apiKey}`).then(function(query){
      displayDoctors(query.data);
    }).fail(function() {
      error();
    });
  }

  allSpecialties(displaySpecialtyList) {
    $.get(`https://api.betterdoctor.com/2016-03-01/specialties?user_key=${apiKey}`).then(function(query){
      displaySpecialtyList(query.data);
    }).fail(function() {
      specialtyError();
    });
  }

}

exports.doctorsModule = Doctors;