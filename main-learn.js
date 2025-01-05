import { FabrikaReservationTables } from "./src/reservationTables.js";

const result = document.querySelector("#result");

const showDays = [0, 4, 5, 6];

// Main Floor
const group1_tables = document.querySelector("#row-AB");
const group2_tables = document.querySelector("#row-109-105");
const group3_tables = document.querySelector("#row-104-100");

// Mezzanine Floor
const mezzanine_group1_tables = document.querySelector("#row-305-315");

let total = 0;
let showLocation;
let mainFloorTables = [];
const selectedCheckboxes = {}; // Store selected checkboxes (table_number => [seat_numbers])

const chooseLocation = document.querySelectorAll(".location");

let currentDay = new Date().getDay(); //### Get the current day (0 = Sunday, ..., 6 = Saturday)

//### GET THE DEFAULT LOCATION VALUE
if (chooseLocation.length > 0) {
  chooseLocation[0].checked = true; // Select the first option
  showLocation = chooseLocation[0].value; // Set the default location

  // Filter tables for the default location
  mainFloorTables = FabrikaReservationTables.filter(
    (table) => table.location === showLocation
  );

  //### TRIGGER THE RESERVATION TABLES FUNCTION
  ReservationTables(currentDay);
}
//END

//### GET THE SELECTED LOCATION VALUE THROUGH RADIO BUTTON EVENT LISTENER
chooseLocation.forEach((location) => {
  location.addEventListener("change", function () {
    if (location.checked) {
      showLocation = location.value;
      console.log(showLocation); // This will log the selected location value from the radio button

      mainFloorTables = FabrikaReservationTables.filter(
        (table) => table.location === showLocation
      );

      //### CLEAR EXISTING TABLES BEFORE RE-RENDERING
      clearTables();

      //### TRIGGER THE RESERVATION TABLES FUNCTION
      ReservationTables(currentDay);
    }
  });
});
//END

function clearTables() {
  // Clear all table groups to avoid duplication
  group1_tables.innerHTML = "";
  group2_tables.innerHTML = "";
  group3_tables.innerHTML = "";
  mezzanine_group1_tables.innerHTML = "";
}

function ReservationTables(currentDay) {
  total = 0; // Reset the total price to zero for now once the day changes and table will still be selected value if checked

  // Clear existing tables before creating new ones
  clearTables();

  result.innerHTML = `<thead><tr>
    <td>Table Number</td>
    <td> Minimum Seats</td>
    <td> Maximum Seats</td>
    <td> Price</td>
    <td> Description</td>
    <td> Image URL</td>
  </tr></thead>
  `;

  mainFloorTables.forEach((tableData) => {
    // Set the price based on the day
    setTablePrice(tableData, currentDay);

    // Display the table data in the result
    if (currentDay >= 1 && currentDay <= 3) {
      result.innerHTML = `OFF DAY`;
    } else {
      result.innerHTML += `<tr>
        <td> ${tableData.table_number}</td>
        <td>  ${tableData.min_seat_requirment}</td>
        <td> ${tableData.max_seat_requirment}</td>
        <td>   $${tableData.price}</td>
        <td> ${tableData.desc}</td>
        <td>    ${tableData.image}</td>
      </tr>`;
    }

    //### CREATE TABLES WITH OPTIONS ON FRONTEND MAIN.JS
    createTablesBasedOnGroup(tableData, currentDay);
  });
}

function setTablePrice(tableData, currentDay) {
  // Adjust price based on day
  if (currentDay == showDays[0]) {
    // Sunday pricing logic
    tableData.price = calculateSundayPrice(tableData);
  } else if (currentDay == showDays[1]) {
    // Thursday pricing logic
    tableData.price = calculateThursdayPrice(tableData);
  } else if (currentDay == showDays[2] || currentDay == showDays[3]) {
    // Friday/Saturday pricing logic
    tableData.price = calculateWeekendPrice(tableData);
  } else {
    tableData.price = 20; // Default price for off days
  }
}

function calculateSundayPrice(tableData) {
  // Sunday specific pricing
  if (tableData.table_number == "A" || tableData.table_number == "B") {
    return 75;
  } else if (tableData.table_number >= 500 && tableData.table_number <= 501) {
    return 300;
  }
  return 20; // Default Sunday price
}

function calculateThursdayPrice(tableData) {
  // Thursday specific pricing
  if (tableData.table_number >= 500 && tableData.table_number <= 506) {
    return 100;
  }
  return 20; // Default Thursday price
}

function calculateWeekendPrice(tableData) {
  // Weekend specific pricing
  if (tableData.table_number >= 500 && tableData.table_number <= 503) {
    return 750;
  }
  return 50; // Default weekend price
}

function createTablesBasedOnGroup(tableData, currentDay) {
  // Only create tables if it's a valid booking day
  if (currentDay >= 1 && currentDay <= 3) {
    return; // Skip creating tables on non-booking days
  }

  if (tableData.table_number == "A" || tableData.table_number == "B") {
    createTable(tableData, group1_tables, "red", currentDay);
  }

  if (tableData.table_number >= 105 && tableData.table_number <= 109) {
    createTable(tableData, group2_tables, "red", currentDay);
  }

  if (tableData.table_number >= 100 && tableData.table_number <= 104) {
    createTable(tableData, group3_tables, "violet", currentDay);
  }

  if (tableData.table_number >= 305 && tableData.table_number <= 315) {
    createTable(tableData, mezzanine_group1_tables, "violet", currentDay);
  }
}

function createTable(data, tableGroup, color, currentDay) {
  console.log("Current Day: " + currentDay);

  if (currentDay >= 1 && currentDay <= 3) {
    console.log("Non-booking day: No tables created");
    return; // Exit the function if it's an off day
  }

  const createCol = document.createElement("div");
  createCol.classList.add("col");
  createCol.innerHTML = `<div class="inputContain"><div class="card text-white fw-bold text-center" style="background-color:${color}">$${data.price}
  <small style="font-size:10px;">${data.table_number}</small></div>
  </div>`;

  tableGroup.appendChild(createCol);

  const maxSeat = data.max_seat_requirment;
  for (let i = 1; i <= maxSeat; i++) {
    const inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.setAttribute("id", `table_${data.table_number}_${i}`);
    inputCheckbox.setAttribute("name", "selected_table");
    inputCheckbox.setAttribute("class", "form-check-input");

    // Reapply the selected state from `selectedCheckboxes`
    if (
      selectedCheckboxes[data.table_number] &&
      selectedCheckboxes[data.table_number].includes(i)
    ) {
      inputCheckbox.checked = true;
    }

    inputCheckbox.addEventListener("change", function () {
      // Store the selected seats for this table
      if (this.checked) {
        if (!selectedCheckboxes[data.table_number]) {
          selectedCheckboxes[data.table_number] = [];
        }
        selectedCheckboxes[data.table_number].push(i);
        total += data.price;
      } else {
        const index = selectedCheckboxes[data.table_number].indexOf(i);
        if (index > -1) {
          selectedCheckboxes[data.table_number].splice(index, 1);
          total -= data.price;
        }
      }

      console.log(
        `${data.price} - ${data.table_number} - ${total} total selected table price`
      );
    });

    createCol.appendChild(inputCheckbox);
  }
}

//### TRIGGER THE RESERVATION TABLES FUNCTION WITH CURRENT DAY
ReservationTables(showDays[currentDay]);

//### DATE PICKER FUNCTION
$(function () {
  const maxDay = new Date();
  const todayFormatted = $.datepicker.formatDate("mm/dd/yy", maxDay);

  // Initialize the datepicker
  $("#datepicker-container").datepicker({
    minDate: maxDay,
    onSelect: function (dateText, inst) {
      const selectedDate = new Date(dateText);
      currentDay = selectedDate.getDay();

      //### CLEAR EXISTING TABLES BEFORE RE-RENDERING
      clearTables();

      //### TRIGGER THE RESERVATION TABLES FUNCTION
      ReservationTables(currentDay);
    },
  });
});
