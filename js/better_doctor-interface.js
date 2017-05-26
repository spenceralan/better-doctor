let Doctors = require("./../js/better_doctor.js").doctorsModule;

let error = function() {
    $(".results").append(`<h1>something went wrong. just like your condition.</h1>`);
}

let displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $(".results").append(`<h1>there were no results. no one can help you.</h1>`);
  } else {
    doctors.forEach(function(doctor){
      let first_name = doctor.profile.first_name;
      let last_name = doctor.profile.last_name;
      $(".results").append(`<h1>Doctor ${first_name} ${last_name}</h1>`);

      doctor.specialties.forEach(function(specialty){
        let specialty_ies = doctor.specialties.length > 1 ? "Specialties" : "Specialty";
        $(".results").append(`<h4>${specialty_ies}: ${specialty.name}</h4>`);
      });

    });
  }
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
