const result = document.querySelector("#result");

const showDays = [0, 4, 5, 6];

const days = ["Sunday", "Thursday", "Friday", "Saturday"];

const FabrikaReservationTables = [
  {
    id: "A",
    table_number: "A",
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: "B",
    table_number: "B",
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 1,
    table_number: 100,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 2,
    table_number: 101,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 3,
    table_number: 102,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 4,
    table_number: 103,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 5,
    table_number: 104,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 6,
    table_number: 105,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 7,
    table_number: 106,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 8,
    table_number: 107,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 9,
    table_number: 108,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 10,
    table_number: 109,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 11,
    table_number: 110,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 12,
    table_number: 111,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 13,
    table_number: 112,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 14,
    table_number: 113,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 15,
    table_number: 114,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 16,
    table_number: 115,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 17,
    table_number: 116,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 18,
    table_number: 117,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 19,
    table_number: 118,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
  },
  {
    id: 20,
    table_number: 119,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 21,
    table_number: 120,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 22,
    table_number: 121,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 23,
    table_number: 122,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 24,
    table_number: 123,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 25,
    table_number: 124,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 26,
    table_number: 125,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 27,
    table_number: 126,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 28,
    table_number: 127,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 29,
    table_number: 128,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 30,
    table_number: 129,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 31,
    table_number: 130,
    min_seat_requirment: 4,
    max_seat_requirment: 6,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 32,
    table_number: 131,
    min_seat_requirment: 4,
    max_seat_requirment: 6,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 33,
    table_number: 132,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 34,
    table_number: 133,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 35,
    table_number: 500,
    min_seat_requirment: 2,
    max_seat_requirment: 6,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 36,
    table_number: 501,
    min_seat_requirment: 2,
    max_seat_requirment: 6,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 37,
    table_number: 502,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 38,
    table_number: 503,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 39,
    table_number: 504,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 40,
    table_number: 505,
    min_seat_requirment: 2,
    max_seat_requirment: 6,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 41,
    table_number: 506,
    min_seat_requirment: 2,
    max_seat_requirment: 6,
    price: 50,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 42,
    table_number: 200,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 43,
    table_number: 201,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 44,
    table_number: 202,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 45,
    table_number: 203,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 46,
    table_number: 204,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 47,
    table_number: 205,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 48,
    table_number: 206,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 49,
    table_number: 207,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 0,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 50,
    table_number: 208,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 0,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 51,
    table_number: 209,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 0,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 52,
    table_number: 210,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 53,
    table_number: 211,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 54,
    table_number: 212,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 55,
    table_number: 220,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 56,
    table_number: 221,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 57,
    table_number: 222,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 58,
    table_number: 230,
    min_seat_requirment: 4,
    max_seat_requirment: 6,
    price: 20,
    desc: "",
    image: "",
    location: "Main Floor",
  },
  {
    id: 59,
    table_number: 300,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 60,
    table_number: 301,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 61,
    table_number: 302,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 62,
    table_number: 303,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 63,
    table_number: 304,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 64,
    table_number: 305,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 65,
    table_number: 306,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 66,
    table_number: 307,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 67,
    table_number: 308,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 68,
    table_number: 309,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 69,
    table_number: 310,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 70,
    table_number: 311,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 71,
    table_number: 312,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 72,
    table_number: 313,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 73,
    table_number: 314,
    min_seat_requirment: 1,
    max_seat_requirment: 2,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 74,
    table_number: 315,
    min_seat_requirment: 2,
    max_seat_requirment: 6,
    price: "40 Per Person",
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 75,
    table_number: 316,
    min_seat_requirment: 2,
    max_seat_requirment: 6,
    price: "40 Per Person",
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 76,
    table_number: 317,
    min_seat_requirment: 2,
    max_seat_requirment: 6,
    price: "40 Per Person",
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 77,
    table_number: 400,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 78,
    table_number: 401,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 79,
    table_number: 402,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 80,
    table_number: 403,
    min_seat_requirment: 2,
    max_seat_requirment: 4,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 81,
    table_number: 600,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 82,
    table_number: 601,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 83,
    table_number: 602,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
  {
    id: 84,
    table_number: 603,
    min_seat_requirment: 6,
    max_seat_requirment: 8,
    price: 20,
    desc: "",
    image: "",
    location: "Mezzanine Floor",
  },
];

// Main Floor
const group1_tables = document.querySelector("#row-AB");

const group2_tables = document.querySelector("#row-109-105");

const group3_tables = document.querySelector("#row-104-100");

//Mezzanine Floor
const mezzanine_group1_tables = document.querySelector("#row-305-315");

let total = 0;
let table_number;
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
