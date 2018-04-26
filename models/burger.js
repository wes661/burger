var orm = require("../config/orm.js");

// orm.insertOne("Turkey Burger");

// orm.selectAll();

// orm.updateOne();

$("#createburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    orm.insertOne($("#createburger [name=burger]").val().trim())

    // var newburger = {
    //   burger_name: $("#createburger [name=burger]").val().trim()
    // };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });