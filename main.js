import { FabrikaReservationTables } from "./reservationTables.js";

const result = document.querySelector("#result");

const showDays = [0, 4, 5, 6];

const days = ["Sunday", "Thursday", "Friday", "Saturday"];

// Main Floor
const group1_tables = document.querySelector("#row-AB");

const group2_tables = document.querySelector("#row-109-105");

const group3_tables = document.querySelector("#row-104-100");

//Mezzanine Floor
const mezzanine_group1_tables = document.querySelector("#row-305-315");

let total = 0;

let showLocation;
let mainFloorTables = [];
const chooseLocation = document.querySelectorAll(".location");
let currentDay = new Date().getDay(); // Get the current day (0 = Sunday, ..., 6 = Saturday)

// Get the first radio button and set it as the default selected option
if (chooseLocation.length > 0) {
  chooseLocation[0].checked = true; // Select the first option
  showLocation = chooseLocation[0].value; // Set the default location
  console.log(`Default location: ${showLocation}`); // Log the default location

  // Filter tables for the default location
  mainFloorTables = FabrikaReservationTables.filter(
    (table) => table.location === showLocation
  );

  // Trigger ReservationTables for the default location
  ReservationTables(currentDay);
}

chooseLocation.forEach((location) => {
  location.addEventListener("change", function () {
    if (location.checked) {
      showLocation = location.value;
      console.log(showLocation); // This will log the selected location  value from the radio button

      mainFloorTables = FabrikaReservationTables.filter(
        (table) => table.location === showLocation
      );

      ReservationTables(currentDay);
    }
  });
});

function ReservationTables(currentDay) {
  total = 0; // Reset the total price to zero for now once the day changes and table will still be selected value if checked
  group1_tables.innerHTML = "";
  group2_tables.innerHTML = "";
  group3_tables.innerHTML = "";
  mezzanine_group1_tables.innerHTML = "";

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
    // IF DAY IS SUNDAY
    if (currentDay == showDays[0]) {
      if (tableData.table_number == "A" || tableData.table_number == "B") {
        tableData.price = 75;
      } else if (
        tableData.table_number >= 500 &&
        tableData.table_number <= 501
      ) {
        tableData.price = 300;
      } else if (
        tableData.table_number >= 502 &&
        tableData.table_number <= 504
      ) {
        tableData.price = 200;
      } else if (
        tableData.table_number >= 505 &&
        tableData.table_number <= 506
      ) {
        tableData.price = 300;
      } else if (
        tableData.table_number >= 315 &&
        tableData.table_number <= 317
      ) {
        tableData.price = 200;
      } else {
        tableData.price = 20;
      }

      console.log(
        tableData.price +
          " Table Price with table number " +
          tableData.table_number
      );
    }

    // IF DAY IS THURSDAY
    else if (currentDay == showDays[1]) {
      if (tableData.table_number >= 500 && tableData.table_number <= 506) {
        tableData.price = 100;
      } else if (
        tableData.table_number >= 315 &&
        tableData.table_number <= 340
      ) {
        tableData.price = 40;
      } else {
        tableData.price = 20;
      }

      // console.log(tableData); // This will log each table data, including the updated ones
    }

    // IF DAY IS FRIDAY & SATURDAY
    else if (currentDay == showDays[2] || currentDay == showDays[3]) {
      if (tableData.table_number >= 500 && tableData.table_number <= 503) {
        tableData.price = 750;
      } else if (
        tableData.table_number >= 504 &&
        tableData.table_number <= 506
      ) {
        tableData.price = 300;
      } else if (
        tableData.table_number >= 207 &&
        tableData.table_number <= 209
      ) {
        tableData.price = 50;
      } else if (
        tableData.table_number >= 230 &&
        tableData.table_number <= 314
      ) {
        tableData.price = 50;
      } else if (
        tableData.table_number >= 315 &&
        tableData.table_number <= 317
      ) {
        tableData.price = 650;
      } else if (
        (tableData.table_number >= 400 && tableData.table_number <= 403) ||
        (tableData.table_number >= 600 && tableData.table_number <= 603)
      ) {
        tableData.price = 40;
      } else if (
        tableData.table_number == "A" ||
        tableData.table_number == "B"
      ) {
        tableData.price = 100;
      }

      // console.log(tableData); // This will log each table data, including the updated ones
    }

    // if non booking days like MON, TUE, WED
    //console.log("currentDay" + currentDay);

    if (currentDay >= 1 && currentDay <= 3) {
      console.log("non booking days");
      // Display the properties you need
      result.innerHTML = `OFF DAY`;
      group1_tables.innerHTML = "";
      group2_tables.innerHTML = "";
      group3_tables.innerHTML = "";
      mezzanine_group1_tables.innerHTML = "";
    } else {
      // Display the properties you need
      result.innerHTML += `<tr>
    <td> ${tableData.table_number}</td>
  <td>  ${tableData.min_seat_requirment}</td>
   <td> ${tableData.max_seat_requirment}</td>
 <td>   $${tableData.price}</td>
  <td> ${tableData.desc}</td>
 <td>    ${tableData.image}</td>
  </tr>
 `;
    }

    // Group 1 tables AB
    if (tableData.table_number == "A" || tableData.table_number == "B") {
      createTable(tableData, group1_tables, "red", currentDay);
    }

    // Group 2 tables
    if (tableData.table_number >= 105 && tableData.table_number <= 109) {
      createTable(tableData, group2_tables, "red", currentDay);
    }

    // Group 1 tables
    if (tableData.table_number >= 100 && tableData.table_number <= 104) {
      createTable(tableData, group3_tables, "violet", currentDay);
    }

    // Group 1  mezzanine_group1_tables;
    if (tableData.table_number >= 305 && tableData.table_number <= 315) {
      createTable(tableData, mezzanine_group1_tables, "violet", currentDay);
    }
  });
}

function createTable(data, tableGroup, color, currentDay) {
  console.log("Current Day" + currentDay);
  if (currentDay >= 1 && currentDay <= 3) {
    console.log("Non-booking day: No tables created");
    return; // Exit the function if it's an off day
  }

  const createCol = document.createElement("div");

  createCol.classList.add("col");
  // createCol.style.backgroundColor = color;
  createCol.innerHTML = `<div class="inputContain"><div class="card text-white fw-bold text-center" style="background-color:${color}">$${data.price}
  <small style="font-size:10px;">${data.table_number}</small></div>
  </div>`;

  tableGroup.appendChild(createCol);

  const maxSeat = data.max_seat_requirment;
  let table_numbers;
  for (let i = 1; i <= maxSeat; i++) {
    const inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.setAttribute("id", `table_${data.table_number}_${i}`);
    // inputCheckbox.setAttribute("value", data.price);
    // inputCheckbox.dataset.price = data.price; // Assign price securely
    // inputCheckbox.setAttribute("value", i);

    //console.log("Table Price Updated?" + tablePrice);

    inputCheckbox.setAttribute("name", "selected_table");
    inputCheckbox.setAttribute("class", "form-check-input");

    inputCheckbox.addEventListener("change", function () {
      table_numbers = data.table_number;
      if (this.checked) {
        total += data.price; // Add the table price when checked
        table_numbers = data.table_number;
      } else {
        total -= data.price; // Subtract the table price when unchecked
      }

      console.log(
        `${data.price} - ${table_numbers} - ${total} total selected table price`
      );
    });

    // inputCheckbox.appendChild(document.createTextNode(i));
    const inputWrapper = tableGroup.querySelectorAll(".inputContain");

    inputWrapper.forEach((input) => {
      input.appendChild(inputCheckbox);
    });

    if (i % 2 === 0) {
      // Insert every second checkbox before the inputContain element
      inputWrapper.forEach((input) => {
        input.parentNode.insertBefore(inputCheckbox, input);
      });
    } else {
      // Append other checkboxes inside the inputContain element
      inputWrapper.forEach((input) => {
        input.appendChild(inputCheckbox);
      });
    }

    // if (i % 2 === 0) {
    //   console.log(i + " Even");
    //   inputCheckbox.style.border = "1px solid red";
    // }
  }
}
// Get the current date object by default according to day

ReservationTables(showDays[currentDay]);

$(function () {
  const maxDay = new Date();

  const todayFormatted = $.datepicker.formatDate("mm/dd/yy", maxDay); //
  // Initialize the datepicker
  $("#datepicker-container").datepicker({
    minDate: maxDay,
    //onload
    beforeShowDay: function (date) {
      return [true];
    },
    onSelect: function (dateText, inst) {
      result.innerHTML = "";

      const selectedDate = new Date(dateText);
      // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      const dayOfWeek = selectedDate.getDay();
      // Get the day of the month (1 to 31)
      const dayOfMonth = selectedDate.getDate();
      // Get the full name of the day (e.g., Monday, Tuesday)
      const dayName = selectedDate.toLocaleString("default", {
        weekday: "long",
      });
      // Log the results
      console.log("Day of the week (0-6):", dayOfWeek); // Sunday = 0, Monday = 1, etc.
      console.log("Day of the month (1-31):", dayOfMonth);
      console.log("Day name (e.g., 'Monday'):", dayName);
      currentDay = dayOfWeek;
      ReservationTables(currentDay);
    },
  });
});
