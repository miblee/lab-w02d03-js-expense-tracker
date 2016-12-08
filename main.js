console.log("Hello");

var tbody = document.querySelector('tbody');
var btn = document.querySelector('button');
var expName = document.querySelector('input[name="exp-name"]');
var expAmount = document.querySelector('input[name="exp-amount"]');

var handleClick = function(evt){
  evt.preventDefault();
  var expense = getValues();
  var row = renderRow(expense.name, expense.amount);
  tbody.appendChild(row);
  clearInputs();
}

btn.addEventListener('click', handleClick);
    // <tr>
    //   <td>Coffee</td><td>2.00</td>
    // </tr>

var renderRow = function(name, amount) {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = name;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = amount;
  tr.appendChild(td);
  return tr;
}

var getValues = function(){
  var val = parseFloat(expAmount.value);
  // target DOM for inputs and save the values
  // expName.value = expName.value;
  // expAmount.value = expAmount.value;
  return {
    name: expName.value,
    amount: expAmount.value
  };
}

var clearInputs = function() {
  expName.value = '';
  expAmount.value = '';
}



var row = renderRow('coffee', '2.00');
tbody.appendChild(row);
row = renderRow('muffin', '2.00');
tbody.appendChild(row);
