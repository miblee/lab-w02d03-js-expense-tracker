console.log("Hello");

var tbody = document.querySelector('tbody');
var btn = document.querySelector('button');
var expName = document.querySelector('input[name="exp-name"]');
var expAmount = document.querySelector('input[name="exp-amount"]');
// variables with '$' == DOM node
var expTotal = document.querySelector('.total');
var total = 0;
var expenses = [];

var handleClick = function(evt){
  evt.preventDefault();
  var expense = getValues();
  if (expense.name == '' || expense.value == NaN){
    return false;
  }
  expenses.push(expense);
  updateTotal(expense.amount);
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
  var val = parseFloat(expAmount.value) || 0;
  // target DOM for inputs and save the values
  // expName.value = expName.value;
  // expAmount.value = expAmount.value;
  return {
    name: expName.value,
    amount: val
  };
}

var updateTotal = function(amount){

  total += amount;
  expTotal.textContent = total;
}

var clearInputs = function() {
  expName.value = '';
  expAmount.value = '';
}



var row = renderRow('coffee', '2.00');
tbody.appendChild(row);
row = renderRow('muffin', '2.00');
tbody.appendChild(row);
