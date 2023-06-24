var selectedNumbers = [];

function generateNumbers() {

  var table = document.getElementById("number-table");
  table.style.display = "table";

  var hr = document.getElementById("table-hr");
  hr.style.display = "block";
  
  var from = parseInt(document.getElementById("from").value);
  var to = parseInt(document.getElementById("to").value);

  document.getElementById("number-result").innerHTML = "";
  selectedNumbers = [];

  var numbers = [];
  for (var i = 0; i < 50; i++) {
    var randomNumber = Math.floor(Math.random() * (to - from)) + from;
    numbers.push(randomNumber);
  }

  var resultTable = document.getElementById("number-result");

  for (var i = 0; i < numbers.length; i += 10) {
    var newRow = document.createElement("tr");

    for (var j = i; j < i + 10 && j < numbers.length; j++) {
      var newData = document.createElement("td");
      var newContent = document.createTextNode(numbers[j]);
      newData.appendChild(newContent);
      newRow.appendChild(newData);
    }

    resultTable.appendChild(newRow);
  }
}

function highlightNumbers() {
  var cells = document.getElementsByTagName("td");
  console.log("Highlight");
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove("highlight");
  }

  selectedNumbers = [];
  var selectedCount = 0;

  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
      if (this.classList.contains("highlight")) {
        this.classList.remove("highlight");
        var index = selectedNumbers.indexOf(parseInt(this.innerHTML));
        if (index > -1) {
          selectedNumbers.splice(index, 1);
        }
        selectedCount--;
      } else if (selectedCount < 10) {
        this.classList.add("highlight");
        selectedNumbers.push(parseInt(this.innerHTML));
        selectedCount++;
      }
    }
  }
}

function calculateSum() {
  var tableSum = document.getElementById("sum-table");
  tableSum.style.display = "table";

  var tableMultiply = document.getElementById("multiply-table");
  tableMultiply.style.display = "table";

  var hrSum = document.getElementById("sum-hr");
  hrSum.style.display = "block";
  var hrMulti = document.getElementById("multi-hr");
  hrMulti.style.display = "block";

  var sum = selectedNumbers.reduce((a, b) => a + b, 0);
  var multiply = selectedNumbers.reduce((a, b) => a * b, 1);
  var numberString = selectedNumbers.toString()
  // console.log(numberString);
  document.getElementById("sum-text-box").value = sum;
  document.getElementById("multiply-text-box").value = multiply;
  document.getElementById("all-numbers").innerHTML = numberString;
  document.getElementById("all-numbers-multiply").innerHTML = numberString;
}


