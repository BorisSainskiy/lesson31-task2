$(() => {
  let form = $("form");
  let result = $("#result");
  let numberOne, numberTwo, res;
  form.on("submit", e => {
    e.preventDefault();
    numberOne = parseFloat($("#numberOne").val());
    numberTwo = parseFloat($("#numberTwo").val());

    let buttons = $("button");
    buttons.on("click", function() {
      if ($(this).text() == "Sum") {
        res = numberOne + numberTwo;
        result.text(res);
      } else if ($(this).text() == "Dis") {
        res = numberOne - numberTwo;
        result.text(res);
      } else if ($(this).text() == "Multiply") {
        res = numberOne * numberTwo;
        result.text(res);
      } else if ($(this).text() == "dil") {
        res = numberOne / numberTwo;
        result.text(res);
      } else {
        alert("Error!!");
      }
    });
  });
});
