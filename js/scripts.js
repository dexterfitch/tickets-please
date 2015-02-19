var MovieTicket = {
  total: 0,
  matinee: false,

  priceCalc: function(type, quantity) {

    if (type === "adult") {
      this.total += quantity * 10;
    } else if (type === "child") {
      this.total += quantity * 6;
    } else if (type === "special") {
      this.total += quantity * 8;
    }

    if (this.matinee === true) {
      this.total -= quantity * 3.5;
    }
  }
};

$(document).ready(function() {
  var newTransaction = Object.create(MovieTicket);

  $('.zoom').hover(function() {
    $(this).addClass('transition');
  }, function() {
    $(this).removeClass('transition');
  });

  $('.text-zoom').hover(function() {
    $(this).addClass('transition');
  }, function() {
    $(this).removeClass('transition');
  });

  $(".set1").click(function() {
    $("h3#notification").hide();
    $(".time-set-2").hide();
    $(".time-set-1").show();
  });

  $(".set2").click(function() {
    $("h3#notification").hide();
    $(".time-set-1").hide();
    $(".time-set-2").show();
  });

  $(".matinee").click(function() {
    newTransaction.matinee = true;
  });

  $(".showtime").click(function() {
    newTransaction.showTime = $(this).text();
  });

  $(".movie-poster-title").click(function() {
    newTransaction.movieName = $(this).children(".title").text();
  });

  $("form#tickets").submit(function(event) {
    event.preventDefault();

    var ticketType = $("select#ticket-type option:selected").val();
    var ticketTypeText = $("select#ticket-type option:selected").text();
    var ticketQuantity = parseInt($("#quantity").val());

    if ((newTransaction.showTime === undefined) || (newTransaction.movieName === undefined) || isNaN(ticketQuantity)) {
      alert("Please choose a movie, showtime, and quantity of tickets.");
    } else {
      $("#total").text("");
      newTransaction.priceCalc(ticketType, ticketQuantity);
      $("#total").append("$" + newTransaction.total);
      $("#tickets-list").append("<li>" + newTransaction.showTime + ", " + newTransaction.movieName + " - " + ticketTypeText + " (" + ticketQuantity + ")" + "</li>");
    }

    $("quantity").val("");
    $("h3#notification").show();
    $(".time-set-1").hide();
    $(".time-set-2").hide();
    newTransaction.movieName = undefined;
    newTransaction.showTime = undefined;

  });
});
