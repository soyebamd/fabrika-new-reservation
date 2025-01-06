// ============================
// Fabrika Reservation System - Main Script
// ============================

// Copyright © 2025 Gloria Esposito & Soyeb Ahmed. All rights reserved.
//
// This script is responsible for managing the reservation system for a restaurant or similar venue.
// It dynamically updates table availability based on the current day of the week and user-selected location.
// It also allows users to interact with available tables, select seats, and view the total cost for their reservation.

// Key features of this system:
// - Table availability is shown based on the current day of the week.
// - Tables have varying prices based on the day (e.g., Sunday, Thursday, Friday, Saturday) and location.
// - Users can choose their location (Main Floor or Mezzanine) and see corresponding table information.
// - A date picker allows users to select a different day for reservation, updating the table options accordingly.
// - The system dynamically adjusts to show which tables are available, with a price and seat options for each table.

// Structure Overview:
// - The reservation tables are divided into different "groups" based on their location (Main Floor or Mezzanine).
// - Each table's data includes information like table number, minimum and maximum seat requirements, description, and price.
// - The system updates the display whenever a user changes the location or selects a different day via the date picker.

// Main Components:
// 1. **Location Selection**: Users can choose between the Main Floor or Mezzanine, and the available tables update accordingly.
// 2. **Day-based Pricing**: Prices for tables change depending on the selected day of the week (e.g., weekends may have higher prices).
// 3. **Dynamic Table Creation**: Tables are dynamically created and displayed with checkboxes for selecting seats.
// 4. **Date Picker**: Allows users to select a different date and see available tables for that day.

// ============================
// Credits:
// ============================
// Developed by: Soyeb Ahmed
// Concept/Design by: Gloria Esposito (https://gloriaesposito.com/)
// ============================

// The flow of the code is as follows:
// 1. Initialization of variables and default settings (like location and current day).
// 2. Table reservation data is dynamically updated and displayed based on user input (location, day, seat selection).
// 3. Pricing is adjusted depending on the selected day, and users can interact with the checkboxes to add/remove tables.
// 4. The system uses a date picker to select a future day for reservation and updates the table view accordingly.
//
// Please refer to the individual functions below for specific logic on each feature (like the day-based pricing, table creation, and seat selection).
// ============================

import { FabrikaReservationTables } from "./src/reservationTables.js";

const result = document.querySelector("#result");

const showDays = [0, 4, 5, 6];

// Main Floor
const group1_tables = document.querySelector("#row-AB");

const group2_tables = document.querySelector("#row-109-105");

const group3_tables = document.querySelector("#row-104-100");

//Mezzanine Floor
const mezzanine_group1_tables = document.querySelector("#row-305-315");

let total = 0;

let showLocation;

let mainFloorTables = [];

const selectedCheckboxes = {}; // Store selected checkboxes (table_number => [seat_numbers])

const seatingTime = "7:00 PM";

const chooseLocation = document.querySelectorAll(".location");

let currentDay = new Date().getDay(); //### Get the current day (0 = Sunday, ..., 6 = Saturday)

let bookingDate;
// get reservation info in array
const reservationData = [];

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
      console.log(showLocation); // This will log the selected location  value from the radio button

      mainFloorTables = FabrikaReservationTables.filter(
        (table) => table.location === showLocation
      );
      //### TRIGGER THE RESERVATION TABLES FUNCTION
      ReservationTables(currentDay);
      //END
    }
  });
});
//END

function clearTables() {
  group1_tables.innerHTML = "";
  group2_tables.innerHTML = "";
  group3_tables.innerHTML = "";
  mezzanine_group1_tables.innerHTML = "";
}

function ReservationTables(currentDay) {
  total = 0; // Reset the total price to zero for now once the day changes and table will still be selected value if checked
  clearTables(); // Clear existing tables before creating new ones

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
    //###IF DAY IS SUNDAY DAY VALUE 0
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
    //END

    //### IF DAY IS THURSDAY DAY VALUE 4
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
    //END

    //### IF DAY IS FRIDAY & SATURDAY DAY VALUE 5 & 6
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
    //END

    //### IF DAY IS MONDAY, TUESDAY, WEDNESDAY DAY VALUE 1, 2, 3
    //NON BOOKING DAYS

    if (currentDay >= 1 && currentDay <= 3) {
      // console.log("non booking days");
      // Display the properties you need
      result.innerHTML = `OFF DAY`;
    } else {
      //### DISPLAY THE TABLES DATA
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
    //END

    //### CREATE TABLES WITH OPTIONS ON FRONTEND MAIN.JS
    //### GROUP 1 TABLE  WITH A AND B TABLE NUMBER, ID row-AB
    if (tableData.table_number == "A" || tableData.table_number == "B") {
      createTable(tableData, group1_tables, "red", currentDay);
    }

    //### GROUP 2 TABLE  WITH 105 TO 109 TABLE NUMBER, ID row-109-105
    if (tableData.table_number >= 105 && tableData.table_number <= 109) {
      createTable(tableData, group2_tables, "red", currentDay);
    }

    //### GROUP 3 TABLE  WITH 100 TO 104 TABLE NUMBER, ID row-104-100
    if (tableData.table_number >= 100 && tableData.table_number <= 104) {
      createTable(tableData, group3_tables, "violet", currentDay);
    }

    //### GROUP 4 TABLE  WITH 305 TO 315 TABLE NUMBER, ID row-305-315
    if (tableData.table_number >= 305 && tableData.table_number <= 315) {
      createTable(tableData, mezzanine_group1_tables, "violet", currentDay);
    }
  });
}

//### CREATE TABLES FUNCTION WITH CHOOSE SEAT NUMBER
function createTable(data, tableGroup, color, currentDay) {
  // console.log("Current Day" + currentDay);
  if (currentDay >= 1 && currentDay <= 3) {
    // console.log("Non-booking day: No tables created");
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

  for (let i = 1; i <= maxSeat; i++) {
    const inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.setAttribute("id", `table_${data.table_number}_${i}`);

    const table_id = `${data.table_number}_${i}`;

    if (
      selectedCheckboxes[table_id] &&
      selectedCheckboxes[table_id].includes(i)
    ) {
      inputCheckbox.checked = true;
    }

    inputCheckbox.setAttribute("name", "selected_table");
    inputCheckbox.setAttribute("class", "form-check-input");

    inputCheckbox.addEventListener("change", function () {
      //### IF CHECKED REMAIN CHECKED OPTION
      if (this.checked) {
        if (!selectedCheckboxes[table_id]) {
          selectedCheckboxes[table_id] = [];
        }

        selectedCheckboxes[table_id].push(i);

        //END

        total += data.price; // Add the table price when checked

        //### ADD DATA TO ARRAY
        reservationData.push({
          table_id: table_id,
          table_number: data.table_number,
          table_price: data.price,
          table_location: data.location,
          table_booking_date: bookingDate,
        });

        console.log(reservationData);

        //END
      } else {
        const index = selectedCheckboxes[table_id].indexOf(i);
        if (index > -1) {
          selectedCheckboxes[table_id].splice(index, 1);
          total -= data.price;
        }
        total -= data.price; // Subtract the table price when unchecked
        //

        //### FIND TABLE NUMBER (INDEX) OF THE ELEMENT AND REMOVE IT.
        const removeBookingIndex = reservationData.findIndex(
          (reservation) =>
            reservation.table_id === table_id &&
            reservation.table_booking_date === bookingDate
        );

        if (removeBookingIndex !== -1) {
          reservationData.splice(removeBookingIndex, 1);
          console.log("Removed Reservation:", reservationData);
        }
      }
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
//END

//### TRIGGER THE RESERVATION TABLES FUNCTION WITH CURRENT DAY
if (currentDay == showDays[currentDay]) ReservationTables(showDays[currentDay]);
//END

//# DATE PICKER FUNCTION
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
      //  result.innerHTML = "";

      const selectedDate = new Date(dateText);
      // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

      bookingDate = $.datepicker.formatDate("mm/dd/yy", selectedDate);
      console.log("Formatted Date:", bookingDate);

      const dayOfWeek = selectedDate.getDay();
      // Get the day of the month (1 to 31)
      const dayOfMonth = selectedDate.getDate();
      // Get the full name of the day (e.g., Monday, Tuesday)
      const dayName = selectedDate.toLocaleString("default", {
        weekday: "long",
      });
      // Log the results
      //   console.log("Day of the week (0-6):", dayOfWeek); // Sunday = 0, Monday = 1, etc.
      //  console.log("Day of the month (1-31):", dayOfMonth);
      //   console.log("Day name (e.g., 'Monday'):", dayName);
      currentDay = dayOfWeek;

      //### TRIGGER THE RESERVATION TABLES FUNCTION
      ReservationTables(currentDay);
      //END
    },
  });
});
