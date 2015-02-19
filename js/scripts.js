var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};

$(document).ready(function() {
  var newAccount = Object.create(BankAccount);

  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val())

    newAccount.name = inputName;
    newAccount.deposit(initialDeposit);

    $("#customer-name").append(newAccount.name + "'s ");
    $("h3#balance").append("$" + newAccount.balance);

    $("input#name").val("");
    $("input#initial-deposit").val("")

    $("h3#balance").show();

  });

  $("form#account-interact").submit(function(event) {
    event.preventDefault();

    $("h3#balance").text("");

    var depositAmount = parseInt($("input#deposit").val());
    var withdrawAmount = parseInt($("input#withdraw").val());

    if (depositAmount >= 0) {
      newAccount.deposit(depositAmount);
    } else if (withdrawAmount >= 0) {
      newAccount.withdraw(withdrawAmount);
    } else {
      alert("You must enter a value.")
    }

    $("h3#balance").append("$" + newAccount.balance);

    $("input#withdraw").val("");
    $("input#deposit").val("")

  })
});
