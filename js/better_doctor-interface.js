let Doctors = require("./../js/better_doctor.js").doctorsModule;

let error = function() {
    $(".results").append(`<h1>something went wrong. just like your condition.</h1>`);
};

let displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $(".results").append(`<h1>there were no results. no one can help you.</h1>`);
  } else {
    doctors.forEach(function(doctor){
      let first_name = doctor.profile.first_name;
      let last_name = doctor.profile.last_name;
      let phone_number = doctor.practices[0].phones[0].number;
      let street_address = doctor.practices[0].visit_address.street;
      let city = doctor.practices[0].visit_address.city;
      let state = doctor.practices[0].visit_address.state;
      let zipcode = doctor.practices[0].visit_address.zip;

      $(".results").append(`<h1>Doctor ${first_name} ${last_name}</h1>`);
      $(".results").append(`<h4>${phone_number}</h4>`);
      $(".results").append(`<h4>${street_address}</h4>`);
      $(".results").append(`<h4>${city}, ${state} ${zipcode}</h4>`);

    });
  }
};

let displaySpecialtyList = function(specialties) {
  specialties.forEach(function(specialty){
    $("#specialty-list").append(`<option value="${specialty.uid}">${specialty.name}</option>`);
  });
};

$(document).ready(function(){

  let doctor = new Doctors({});
  doctor.allSpecialties(displaySpecialtyList);

  $("#get-doctors-by-condition").click(function(event){
    event.preventDefault();
    $(".results").empty();

    let doctors = new Doctors({condition: $("#condition").val()});
    $("#condition").val("");
    doctors.byCondition(displayDoctors);

  });

  $("#get-doctors-by-specialty").click(function(event){
    event.preventDefault();
    $(".results").empty();

    let doctors = new Doctors({specialty: $("#specialty-list").val()});
    $("#specialty-list").val("");
    doctors.bySpecialty(displayDoctors);

  });

});
