// from data.js
var tableData = data;

//select table body
var tbody = d3.select("tbody");

console.log(tableData);

//write table date
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

//define runEnter
function runEnter() {
  //clear table body
  tbody.html("");

  // Select the input element 
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  
  // filter data on input value
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);

  // Write filtered values in table
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};


