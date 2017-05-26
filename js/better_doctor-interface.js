let Doctors = require("./../js/better_doctor.js").doctorsModule;

let displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $(".results").append(`<h1>there were no results. no one can help you.</h1>`);
  } else {
    doctors.forEach(function(doctor){
      let first_name = doctor.profile.first_name
      let last_name = doctor.profile.last_name
      $(".results").append(`<h1>Doctor ${first_name} ${last_name}</h1>`);
    });
  };
};

$(document).ready(function(){

  $("#get-doctors").click(function(event){
    event.preventDefault();
    $(".results").empty();

    let condition = $("#condition").val();
    doctors = new Doctors(condition);

    doctors.byCondition(displayDoctors);

  });

});
