function display_in_log(value)
{
  console.log(value);
}

function add(value1, value2, log)
{
  if (log === true)
  {
    display_in_log (value1 + value2);
  }

  return value1 + value2;
}


function add_simple_int()
{
  var x1 = 2;
  var x2 = 2;

  console.log(x1 + x2);
}

function add_simple_str()
{
  var s1 = "Hello ";
  var s2 = "world!";
  console.log(s1 + s2);
}


function add_int()
{
  var x = 2;
  var y = 2;
  display_in_log(x + y);
}

function add_string()
{
  var a = "Hello ";
  var b = "world!";
  display_in_log(x + y);
}


function array_2d (amount_result)
{
  var array = [
                ['Golf', 'Burdie'],
                ['C++', 'Coding'],
                ['Hole in one', 'Triple bogey'],
                ['NYCDA', 'Amsterdam']
              ];

  for (var temp=0; temp<amount_result; temp++)
  {
    var d1 = Math.floor(Math.random() * array.length);
    var d2 = Math.floor(Math.random() * 2);

    display_in_log(array[d1][d2]);
  }
}

function checkvalue(value_defined, value_entered)
{

  if (Number(document.getElementById(value_entered).value) >= Number(document.getElementById(value_defined).value)) {
  //  If it is not, using the console, let the user know that what the variable was and that it was greater than 10
    display_in_log ("The variable entered is larger than or equal to the number " + document.getElementById(value_defined).value + ". You have entered " + document.getElementById(value_entered).value);
  }
  else
  {
    alert("The value you have entered is smaller than " + document.getElementById(value_defined).value);
  }

}

function checkvalue_str(value_defined, value_entered, id_response)
{

  if (isNaN(document.getElementById(value_defined).value) && isNaN(document.getElementById(value_entered).value))
  {
    display_in_log("Value entered OK");

    if (document.getElementById(value_defined).value === document.getElementById(value_entered).value)
    {
      document.getElementById(id_response).innerHTML = "Result: OKE, the values are the same";
    }
    else
    {
      document.getElementById(id_response).innerHTML = "Result: ERROR, the values are not the same. Please check";
    }
  }
  else
  {
    display_in_log("Value is not string");
    document.getElementById(id_response).innerHTML = "Result: ERROR, one of the boxes is not a string value. Please check";
  }

}


function calc (value1, value2, operator, outcome)
{

  switch (document.getElementById(operator).value)
  {
    case '*':
      document.getElementById(outcome).value = Number(document.getElementById(value1).value) * Number(document.getElementById(value2).value);
      break;
    case '+':
      document.getElementById(outcome).value = Number(document.getElementById(value1).value) + Number(document.getElementById(value2).value);
      break;
    case '-':
      document.getElementById(outcome).value = Number(document.getElementById(value1).value) - Number(document.getElementById(value2).value);
      break;
    case '/':
      document.getElementById(outcome).value = Number(document.getElementById(value1).value) / Number(document.getElementById(value2).value);
      break;
  }
}
