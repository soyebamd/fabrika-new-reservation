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
// C#7d0101its:
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
"use strict";

import { FabrikaReservationTables } from "./src/reservationTables.js";

import { BookedTable } from "./src/bookedTable.js";

document.addEventListener("DOMContentLoaded", function () {
  const result = document.querySelector("#result");

  const scrollContainer = document.querySelector(".in-one-row-scroll");

  // Base to trace days
  const showDays = [0, 4, 5, 6];

  const GeneralAdmission__Tier_1 = [20, 20, 50, 50];
  let GeneralAdmission__Tier_1_array = [...GeneralAdmission__Tier_1];

  const GeneralAdmission__Tier_2 = [20, 20, 75, 75];
  let GeneralAdmission__Tier_2_array = [...GeneralAdmission__Tier_2];

  const GeneralAdmission__Tier_3 = [10, 10, 40, 40];

  let SpecialShowPrice = [...GeneralAdmission__Tier_1];

  //Min Spend
  const minSpend = [0, 0, 50, 100];
  let minSpendArray = [...minSpend];

  //Show Hours
  const showHours = [
    "1:00 PM to 2:00PM",
    "7:30 PM - 8:00PM",
    "8:00 PM - 9:00PM",
    "7:30 PM to Close",
  ];
  let showHoursArray = [...showHours];

  //Show Starting Time
  const showStartingTime = ["1:00 PM", "7:30 PM", "8:00 PM", "7:30 PM"];
  let showStartingTimeArray = [...showStartingTime];
  // #End
  //Show features image
  const featureImage = document.querySelector("#featured-image");

  const showFeatureImage = [
    "https://fabrikaphilly.com/wp-content/uploads/2024/08/sunday-drag-brunch.jpg",
    "https://fabrikaphilly.com/wp-content/uploads/2024/08/thursday-burlesque.jpeg",
    "https://fabrikaphilly.com/wp-content/uploads/2024/07/DSC04654.jpeg",
    "https://fabrikaphilly.com/wp-content/uploads/2024/07/DSC04654.jpeg",
  ];
  let showFeatureImageArray = [...showFeatureImage];
  // #End
  const showWrapper = document.querySelector("#show");

  const showName = document.querySelector("#show-name-span");

  const showStartSpan = document.querySelector("#show-start-span");

  const getBookedDay = document.querySelector("#show-day-span");

  const minSpendSpan = document.querySelector("#min-spend");

  const showDate = document.querySelector("#show-date");

  const showHoursSpan = document.querySelector("#show-hours");

  const showInfo = document.querySelector("#show-info");

  const customerInformation = document.querySelector("#customer-information");
  customerInformation.style.display = "none";
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let timeIdSlot = [];

  // Create a Set of unique booked tables
  const BookedTableSet = new Set(
    BookedTable.map(
      (booked) =>
        `${booked.table_id}__${booked.table_location}__${booked.table_booking_date}__${booked.time_Id}`
    )
  );
  console.log(BookedTableSet);

  //Scroll content cetner

  function scrollContentCenter() {
    console.log("Scroll cotent scroll");
    if (scrollContainer) {
      scrollContainer.scrollLeft =
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
    }
  }

  //console.log(BookedTableSet.table_location);

  let showEventShow = false;
  let showInfoDisplay = false;

  function showEvent(show) {
    showEventShow = show;

    eventWrapper.style.display = show ? "block" : "none";
  }

  // Feature Image Display
  function featureImageDisplay(url) {
    featureImage.innerHTML = "";
    const featureImg = document.createElement("img");
    featureImg.src = url;
    featureImg.className = "feature-image img-fluid";

    featureImage.appendChild(featureImg);
  }
  // End

  const eventWrapper = document.querySelector("#events");

  // Main Floor

  const tableSlot = document.querySelectorAll(".table-slot");

  const group1_tables = document.querySelector("#row-AB");

  const group2_tables = document.querySelector("#row-109-105");

  const group3_tables = document.querySelector("#row-104-100");

  const group4_tables = document.querySelector("#row-200-204");

  const group5_tables = document.querySelector("#row-205-209");

  const group6_tables = document.querySelector("#row-110-115");

  //Mezzanine Floor
  const mezzanine_group1_tables = document.querySelector("#row-305-315");

  //checkout div
  const checkout = document.querySelector("#checkout");

  checkout;

  let total = 0;

  let showLocation;

  let mainFloorTables = [];

  const selectedCheckboxes = {}; // Store selected checkboxes (table_number => [seat_numbers])
  const selectedTime = {};
  const timeSlotWrapper = document.querySelector("#time-slot");

  let seatingTime = {
    sundayTimeSlot: ["12:00", "12:15", "12:30", "12:45", "13:00", "13:15"],

    thursdayTimeSlot: [
      "18:00",
      "18:15",
      "18:30",
      "18:45",
      "19:00",
      "19:15",
      "19:30",
    ],

    fridayTimeSlot: [
      "18:00",
      "18:15",
      "18:30",
      "19:00",
      "19:15",
      "19:30",
      "19:45",
      "20:00",
      "20:15",
    ],

    saturdayTimeSlot: [
      "18:00",
      "18:15",
      "18:30",
      "19:00",
      "19:15",
      "19:30",
      "19:45",
    ],
    timeSlot: function () {
      return [
        this.sundayTimeSlot,
        this.thursdayTimeSlot,
        this.fridayTimeSlot,
        this.saturdayTimeSlot,
      ];
    },
  };

  let seatingTimeArray = Object.values(seatingTime);

  let showId = "";

  const showNames = [
    {
      show_id: "all",
      show_name: "All",
      show_link: "#",
      show_description: "All Show",
    },
    {
      show_id: "bordello",
      show_name: "Bordello (Burlesque)",
      show_link: "#",
      show_description: "A night of burlesque.",
    },
    {
      show_id: "opus",
      show_name: "Opus (Variety Show)",
      show_link: "#",
      show_description: "A fun variety show with performances.",
    },
    {
      show_id: "drag_brunch",
      show_name: "Drag Brunch",
      show_link: "#",
      show_description: "Brunch with fabulous drag performances.",
    },
  ];
  let { timeSlot } = seatingTime;

  const slots = timeSlot.call(seatingTime);
  let slotsArray = [...slots];

  console.log(slotsArray + "Slot array");

  let showNamesArray = [...showNames];

  const showDisplayName = [
    showNamesArray[3]["show_name"],
    showNamesArray[1]["show_name"],
    showNamesArray[2]["show_name"],
    showNamesArray[2]["show_name"],
  ];
  let showDisplayNameArray = [...showDisplayName];

  let currentDay = new Date().getDay(); //### Get the current day (0 = Sunday, ..., 6 = Saturday)

  //🧑‍💻⚡ Insert New Show Name
  const newShows = [
    {
      show_id: "wicked-cabaret",
      show_name: "A Wicked Cabaret Ticket February 8 Ticket",
      show_link: "#",
      show_description: "A night Special of burlesque.",
      showDates: ["02/01/2025", "02/08/2025", "02/15/2025"],
      ShowStartAt: "10:30 PM",
      ShowHours: "10:00 PM",
      MinSpend: "0",
      seatingTime: ["22:00", "22:15", "22:30", "22:45", "23:00"],
    },

    {
      show_id: "love-inferno-ticket",
      show_name: "Love, Inferno Show 1",
      show_link: "#",
      show_description:
        "The Season of Love is right aound the corner! What better way to spend it than under the lights at Fabrika for our special performance: Love, Inferno",
      showDates: ["02/14/2025"],
      ShowStartAt: "06:30 PM",
      ShowHours: "Doors Open: 5:30 pm - 8:00 pm",
      MinSpend: "0",
      seatingTime: ["17:30", "17:45", "18:00", "18:15", "18:30"],
    },
    {
      show_id: "love-inferno-ticket-2",
      show_name: "Love, Inferno Show 2",
      show_link: "#",
      show_description:
        "The Season of Love is right aound the corner! What better way to spend it than under the lights at Fabrika for our special performance: Love, Inferno",
      showDates: ["02/14/2025"],
      ShowStartAt: "09:30 PM",
      ShowHours: "Doors Open: 8:30 pm - close",
      MinSpend: "0",
      seatingTime: ["17:30", "17:45", "18:00", "18:15", "18:30"],
    },
  ];
  showNamesArray = [...showNamesArray, ...newShows];

  console.log(showNamesArray);

  // initialize the inseertNewShow function

  const chooseLocation = document.querySelectorAll(".location");

  let bookingDate = new Date();

  bookingDate = $.datepicker.formatDate("mm/dd/yy", bookingDate);

  // get reservation info in array
  const reservationData = [];

  eventWrapper.style.display = "none";

  // Add minSpend to array according to day

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
        //  console.log(showLocation); // This will log the selected location  value from the radio button

        mainFloorTables = FabrikaReservationTables.filter(
          (table) => table.location === showLocation
        );
        //### TRIGGER THE RESERVATION TABLES FUNCTION
        ReservationTables(currentDay);

        console.log(reservationData);

        //END
      }
    });
  });
  //END

  function triggerDatepickerUpdate(ID) {
    let specialShow = newShows.find((show) => show.show_id === ID);

    if (specialShow && specialShow.showDates.length > 0) {
      let firstAvailableDate = specialShow.showDates[0];

      console.log(`Jumping to first available date: ${firstAvailableDate}`);

      // **Update the datepicker to the first valid date**
      $("#datepicker").datepicker("setDate", firstAvailableDate);
      $("#datepicker").datepicker("option", "defaultDate", firstAvailableDate);
    }
  }

  function insertNewShow(ID, dayIndexs) {
    const currentDate = bookingDate; // Assuming bookingDate is defined somewhere

    newShows.some((show) => {
      if (ID === show.show_id && show.showDates.includes(currentDate)) {
        console.log(`Current Show for ${currentDate}: ${show.show_name}`);

        console.log(dayIndexs + " Get the day index");

        console.log(showDisplayNameArray[dayIndexs] + " Get show index");

        console.log(showDisplayNameArray[dayIndexs] + " Get show index");
        console.log(show.show_name + " Show Get show index");

        showDisplayNameArray[dayIndexs] = show.show_name;

        console.log(
          showDisplayNameArray[dayIndexs] + " Updated Get show index"
        );
        //   $("#datepicker").datepicker("setDate", currentDate);

        return true; // Stop the loop
      } else {
        if (!show.showDates.includes(currentDate)) {
          showDisplayNameArray = [...showDisplayName];
        }
        return false; // Continue the loop
      }
    });
  }

  function displayShowName(count) {
    // Assuming you have a DOM element to display the show name

    console.log("Invalid index or DOM element not found");
  }

  function clearTables() {
    // group1_tables.innerHTML = "";
    // group2_tables.innerHTML = "";
    // group3_tables.innerHTML = "";
    // group4_tables.innerHTML = "";

    tableSlot.forEach((clearTableData) => {
      clearTableData.innerHTML = "";
    });

    mezzanine_group1_tables.innerHTML = "";
  }
  function clearTimeSlot() {
    timeSlotWrapper.innerHTML = "";
  }

  //### UPDATE DATEPICKER ACCORDING TO SHOW ID

  function setShowID(setNewShowID) {
    showId = setNewShowID;
    console.log(showId);
    $("#datepicker-container").datepicker("refresh");
  }

  //END

  function show() {
    showNamesArray.forEach((show) => {
      console.log("Show Name: " + show.show_name);
      console.log("Show Link: " + show.show_link);
      console.log("Show Description: " + show.show_description); // Logs the show description

      const showItems = document.createElement("li");
      showItems.textContent = show.show_name;
      showItems.setAttribute("data_id", show.show_id);
      showItems.className = "show-link";

      showWrapper.appendChild(showItems);

      const firstItem = document.querySelector(".show-link");

      firstItem.classList.add("active");

      //### ON CLICK SHOW NAMES
      showItems.addEventListener("click", function () {
        showInfoDisplay = false;
        eventWrapper.style.display = "none";
        console.log(showInfoDisplay);
        showId = this.getAttribute("data_id");
        //   showName.textContent = show.show_name;
        setShowID(showId);
        insertNewShow(showId, showDays.indexOf(currentDay));
        document
          .querySelectorAll(".show-link")
          .forEach((link) => link.classList.remove("active"));
        this.classList.add("active");

        ReservationTables(currentDay);
      });
    });
  }
  show();

  //END

  function ReservationTables(currentDay) {
    console.log(showId + "Show ID");

    //### INSERT NEW SHOW
    insertNewShow(showId, showDays.indexOf(currentDay));

    newShows.forEach((newShow) => {
      console.log(`${bookingDate} Booking date for show`);

      //🧑‍💻⚡Default things update for special shows

      if (
        newShow.showDates.includes(bookingDate) &&
        showId === newShow.show_id
      ) {
        const index = showDays.indexOf(currentDay);
        minSpendArray[index] = newShow.MinSpend;
        showStartingTimeArray[index] = newShow.ShowStartAt;
        showHoursArray[index] = newShow.ShowHours;
        slotsArray[index] = newShow.seatingTime;
      }

      //🧑‍💻⚡Seating price update for wicked-cabaret
      if (["wicked-cabaret"].includes(showId)) {
        GeneralAdmission__Tier_1_array[showDays.indexOf(currentDay)] = 40;
      }

      //🧑‍💻⚡Seating price update for love-inferno-ticket, love-inferno-ticket-2
      if (["love-inferno-ticket", "love-inferno-ticket-2"].includes(showId)) {
        GeneralAdmission__Tier_1_array[showDays.indexOf(currentDay)] = 85;
        GeneralAdmission__Tier_2_array[showDays.indexOf(currentDay)] = 130;
      }

      //🧑‍💻⚡Reset to remaining shows
      if (["all", "bordello", "opusShow", "drag_brunch"].includes(showId)) {
        minSpendArray = [...minSpend];
        showStartingTimeArray = [...showStartingTime];
        showHoursArray = [...showHours];
        slotsArray = [...slots];
        GeneralAdmission__Tier_1_array = [...GeneralAdmission__Tier_1];
        GeneralAdmission__Tier_2_array = [...GeneralAdmission__Tier_2];
      }
    });

    //END
    console.log("Display by Default");

    console.log(bookingDate + "Current Date");

    console.log(currentDay + "Current DAY");

    // show info only in default show date
    showInfo.style.display = showInfoDisplay ? "block" : "none";

    // Get current show
    showName.textContent = "";
    showDays.forEach((displayname, index) => {
      if (displayname == currentDay) {
        showName.textContent = showDisplayNameArray[index];
        displayShowName(showDisplayNameArray[index]);
      }
    });

    const dayofWeek = daysOfWeek[currentDay];

    // Get current Day
    getBookedDay.textContent = dayofWeek;

    // Conditional requirment for starting time
    /* if (bookingDate === "01/24/2025") {
  
    showStartingTimeArray[showDays.indexOf(currentDay)] = "22:00 PM";
  } else {
    showStartingTimeArray = [...showStartingTime];
  }*/
    // End

    // Show Starting Time
    showStartSpan.textContent =
      showStartingTimeArray[showDays.indexOf(currentDay)];

    //Min Spend Block
    // Conditional requirment for Min Spend
    /*if (bookingDate === "01/24/2025") {
    minSpendArray[showDays.indexOf(currentDay)] = 150;
  } else {
    minSpendArray = [...minSpend];
  }*/
    // End
    minSpendSpan.textContent = `$${
      minSpendArray[showDays.indexOf(currentDay)]
    }`;
    // End MinSpend
    // show Date

    showDate.textContent = bookingDate;

    // Show Hours
    showHoursSpan.textContent = showHoursArray[showDays.indexOf(currentDay)];

    // Show Feature Image
    let featureImageUrl = showFeatureImageArray[showDays.indexOf(currentDay)];

    if (featureImageUrl) featureImageDisplay(featureImageUrl);

    // If special show overwirte exiting

    // End
    //### TIME SLOT MANAGEMENT
    clearTimeSlot();

    // convert to stagndard time

    function convertTime(time24) {
      let [hours, minutes] = time24.split(":").map(Number);
      let period = hours >= 12 ? "PM" : "AM";

      // Convert hours from 24-hour format to 12-hour format
      hours = hours % 12 || 12; // Convert 0 (midnight) to 12

      return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
    }

    function timeSlotManagment(timeslot) {
      if (timeslot === 0) {
        timeslot = slotsArray[0];
      } else if (timeslot === 4) {
        timeslot = slotsArray[1];
      } else if (timeslot === 5) {
        timeslot = slotsArray[2];
      } else if (timeslot === 6) {
        timeslot = slotsArray[3];
      } else {
      }

      console.log;

      timeslot.forEach((time, index) => {
        //  console.log(time, index);

        // Create label for time slot
        const label = document.createElement("label");

        // Create li element for time slot
        const wrapTimeSlots = document.createElement("li");
        wrapTimeSlots.setAttribute("name", convertTime(time));
        wrapTimeSlots.value = convertTime(time);
        wrapTimeSlots.textContent = convertTime(time);

        // Create input radio element
        const convertedTime = "time_" + time.replace(/[:\s]/g, "");
        const wrapTimeSlots_input = document.createElement("input");
        wrapTimeSlots_input.setAttribute("type", "radio");
        wrapTimeSlots_input.className = "show-times";
        wrapTimeSlots_input.setAttribute("name", "selected_time");
        wrapTimeSlots_input.setAttribute("id", convertedTime);
        wrapTimeSlots_input.value = convertTime(time);

        const time_id = `${convertedTime}_${index}_${showLocation.replace(
          / /g,
          ""
        )}`;

        timeIdSlot.push(convertedTime);

        //console.log(time_id + "dddddddddddddddddddddddddddddddddddd");

        // Initialize or check if the time slot is already selected for this location
        if (
          selectedTime[showLocation] &&
          selectedTime[showLocation][time_id] === index
        ) {
          wrapTimeSlots_input.checked = true; // If the time slot is selected for the current location
        } else {
          wrapTimeSlots_input.checked = false; // Deselect if it's not selected
        }

        // Handle change event when a time slot is selected or deselected
        wrapTimeSlots_input.addEventListener("change", function () {
          // if (reservationData.time_slot == wrapTimeSlots_input.value) {
          //   console.log("Value " + reservationData.time_slot);
          // }

          // First, uncheck all checkboxes
          const resetOnTimeChange =
            document.querySelectorAll(".form-check-input");
          resetOnTimeChange.forEach((reset) => {
            reset.checked = false;
          });

          showEvent(true);

          if (this.checked) {
            // Find and check the corresponding checkbox
            console.log(reservationData);

            reservationData.forEach((reservation) => {
              console.log("Time slot value:", wrapTimeSlots_input.value);

              // Check if this reservation has the same time slot
              if (wrapTimeSlots_input.value === reservation.time_slot) {
                const checkboxes =
                  document.querySelectorAll(".form-check-input");

                checkboxes.forEach((checkbox) => {
                  // Check if checkbox ID matches the reservation's table_id
                  if (checkbox.id === reservation.table_id) {
                    checkbox.checked = true;
                  }
                });
              }
            });

            //   console.log(this.id + " checkbox id");

            // Initialize the selectedTime object for the current location if not already done
            if (!selectedTime[showLocation]) {
              selectedTime[showLocation] = {};
            }

            // Deselect all other checkboxes for the current location
            for (const key in selectedTime[showLocation]) {
              if (selectedTime[showLocation].hasOwnProperty(key)) {
                selectedTime[showLocation][key] = null; // Unselect any previously selected time for the current location
              }
            }

            // Update the selectedTime object with the new time selection for the current location
            selectedTime[showLocation][time_id] = index; // Only store the latest selection for this floor

            // Update the reservation data with the selected time slot
            reservationData.time_slot = this.value;

            // Log updated reservation data
            //   console.log("Updated selectedTime:", selectedTime);
            //  console.log("Current Value" + this.value);
          }

          //  console.log(showLocation + " - Trace location");
          console.log(reservationData);
          //  console.log(reservationData.table_location);
        });

        // Append the radio input and the label to the DOM
        timeSlotWrapper.appendChild(label);
        label.appendChild(wrapTimeSlots_input);
        label.appendChild(wrapTimeSlots);
      });
    }
    if (currentDay === 0 || currentDay >= 4) {
      timeSlotManagment(currentDay);
    }
    //END

    total = 0; // Reset the total price to zero for now once the day changes and table will still be selected value if checked
    clearTables(); // Clear existing tables before creating new ones

    /*
  result.innerHTML = `<thead><tr>
    <td>Table Number</td>
      <td> Minimum Seats</td>
      <td> Maximum Seats</td>
      <td> Price</td>
      <td> Description</td>
      <td> Image URL</td>
  </tr></thead>
 `;*/

    /*🧑‍💻
  ⚡- Update table price according to day 
  ⚡- Get tableData from mainfloorTable loop == reservation table loop
  */

    mainFloorTables.forEach((tableData) => {
      //###IF DAY IS SUNDAY DAY VALUE 0

      //If current day is 0 == Sunday

      //🧑‍💻⚡ Change Tier number according to sheet

      //Default add tier Price
      tableData.tier = 1;

      let tier_color = "#ff0000";

      //Table 100 to 104
      if ((currentDay == 0 || currentDay == 4) && tableData.tier == 1) {
        tier_color = "#cb82e6";
      }

      const isWeekend = currentDay === 5 || currentDay === 6; // Check if it's Friday or Saturday

      if (isWeekend) {
        // 🧑‍💻⚡Main Floor tables
        if (
          (tableData.table_number >= 100 && tableData.table_number <= 104) ||
          (tableData.table_number >= 200 && tableData.table_number <= 204)
        ) {
          tableData.tier = 2;
          tier_color = "#cb82e6";
        }

        // 🧑‍💻⚡ Mezzanine Floor Tables
        else if (
          tableData.table_number >= 305 &&
          tableData.table_number <= 315
        ) {
          tableData.tier = 1;
          tier_color = "#ff0000";
        }
      }

      // 🧑‍💻⚡ Automatically adjust price according to Tier
      if (tableData.tier === 1) {
        tableData.price =
          GeneralAdmission__Tier_1_array[showDays.indexOf(currentDay)];
      }

      if (tableData.tier === 2) {
        tableData.price =
          GeneralAdmission__Tier_2_array[showDays.indexOf(currentDay)];
      }

      //console.log(tableData);

      //END

      //### IF DAY IS MONDAY, TUESDAY, WEDNESDAY DAY VALUE 1, 2, 3
      //NON BOOKING DAYS
      /*
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
    */
      //END

      //🧑‍💻⚡ CREATE TABLES WITH OPTIONS ON FRONTEND MAIN.JS
      //🧑‍💻⚡ GROUP 1 TABLE  WITH A AND B TABLE NUMBER, ID row-AB
      if (tableData.table_number == "A" || tableData.table_number == "B") {
        createTable(tableData, group1_tables, tier_color, currentDay);
      }

      //### GROUP 2 TABLE  WITH 105 TO 109 TABLE NUMBER, ID row-109-105
      if (tableData.table_number >= 105 && tableData.table_number <= 109) {
        createTable(tableData, group2_tables, tier_color, currentDay);
      }

      //### GROUP 3 TABLE  WITH 100 TO 104 TABLE NUMBER, ID row-104-100
      if (tableData.table_number >= 100 && tableData.table_number <= 104) {
        createTable(tableData, group3_tables, tier_color, currentDay);
      }

      //### GROUP 3 TABLE  WITH 100 TO 104 TABLE NUMBER, ID row-104-100
      if (tableData.table_number >= 200 && tableData.table_number <= 204) {
        createTable(tableData, group4_tables, tier_color, currentDay);
      }

      //### GROUP 3 TABLE  WITH 100 TO 104 TABLE NUMBER, ID row-104-100
      if (tableData.table_number >= 205 && tableData.table_number <= 209) {
        createTable(tableData, group5_tables, tier_color, currentDay);
      }

      //### GROUP 3 TABLE  WITH 100 TO 104 TABLE NUMBER, ID row-104-100
      if (tableData.table_number >= 110 && tableData.table_number <= 115) {
        createTable(tableData, group6_tables, tier_color, currentDay);
      }
      //### GROUP 4 TABLE  WITH 305 TO 315 TABLE NUMBER, ID row-305-315
      if (tableData.table_number >= 305 && tableData.table_number <= 315) {
        createTable(tableData, mezzanine_group1_tables, tier_color, currentDay);
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

    createCol.classList.add("col-hold");
    // createCol.style.backgroundColor = color;
    createCol.innerHTML = `<div class="input-container"><div class="card text-white fw-bold text-center" style="background-color:${color}">$${data.price}
  <small style="font-size:10px;">${data.table_number}</small></div>
  </div>`;

    tableGroup.appendChild(createCol);

    const maxSeat = data.max_seat_requirment;

    for (let i = 1; i <= maxSeat; i++) {
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      inputCheckbox.setAttribute("id", `seat_number_${data.table_number}_${i}`);

      timeSlotWrapper.appendChild(inputCheckbox);

      // Assign the table ID

      const table_id = `seat_number_${data.table_number}_${i}`;

      const getTimeSlot = document.querySelectorAll(".show-times");
      // console.log("Fix booked table for location");

      // Function to update the selected time slot and call bookedTableData
      function updateTimeSlot(timeSlot) {
        data.time_Id = timeSlot.id;
        console.log(timeSlot.id + " Data time id");
        bookedTableData();
        scrollContentCenter();
      }

      // Loop through each time slot
      getTimeSlot.forEach((gettimeSlot) => {
        // ✅ If already checked by default, process it immediately
        if (gettimeSlot.checked) {
          console.log(gettimeSlot.id + " Time slot checked get id");
          updateTimeSlot(gettimeSlot);
        }

        // ✅ Add event listener to detect user changes
        gettimeSlot.addEventListener("change", function () {
          //  ✅ Ensure that all checked time slots update correctly
          getTimeSlot.forEach((slot) => {
            if (slot.checked) {
              updateTimeSlot(slot);
            }
          });
        });
      });

      function bookedTableData() {
        const traceBookedTable = `${table_id}__${data.location}__${bookingDate}__${data.time_Id}`;

        const inputCheckbox = document.getElementById(table_id);

        if (BookedTableSet.has(traceBookedTable)) {
          console.log(traceBookedTable + "trace booked table");

          inputCheckbox.style.border = "Solid 4px red";
          inputCheckbox.checked = true;
          inputCheckbox.setAttribute("disabled", true);
        } else {
          inputCheckbox.style.border = "0";
          inputCheckbox.checked = false;
          inputCheckbox.removeAttribute("disabled");
        }
      }

      //  console.log("Is it is in reservatoin visit to conrol???");

      // console.log(data);

      // Create label element
      const label = document.createElement("label");
      label.setAttribute("for", table_id); // Associate with checkbox using the same id
      //  label.textContent = `Seat ${i}`; // Add text content for the label

      // Create table image and insert in label

      // const tableImg = document.createElement("img");

      // tableImg.src = "/assets/Bar_Chairs_Back_Final_1x.webp";
      // tableImg.className = "table";

      // label.appendChild(tableImg);

      // function checkedImg(id) {
      //   const labelId = document.querySelector(`label[for="${id}"]`);

      //   const changeCheckedImg = labelId.querySelectorAll("img");

      //   changeCheckedImg[0].setAttribute(
      //     "src",
      //     "/assets/Bar_Chairs_Back_Final.webp"
      //   );
      // }

      if (
        selectedCheckboxes[table_id] &&
        selectedCheckboxes[table_id].includes(i)
      ) {
        inputCheckbox.checked = true;
      }

      inputCheckbox.setAttribute("name", "selected_table");
      inputCheckbox.setAttribute("class", "form-check-input");

      inputCheckbox.addEventListener("change", function () {
        // change checked seat image

        // if (this.checked) {
        //   checkedImg(this.id);
        // }
        //### GET SLOT TIME

        let slotTime;
        let slotTimeID;

        getTimeSlot.forEach((slot) => {
          if (slot.checked) {
            console.log("slot are checked");

            slotTime = slot.value;
            slotTimeID = slot.id;
          }
        });
        //END
        //### IF CHECKED REMAIN CHECKED OPTION

        if (this.checked) {
          console.log("checkbox checked");

          if (!selectedCheckboxes[table_id]) {
            selectedCheckboxes[table_id] = [];
          }

          selectedCheckboxes[table_id].push(i);

          //END

          total += data.price; // Add the table price when checked

          console.log(currentDay + "current selected date");

          let showName;

          let currentShowDay;

          if (showDays.includes(currentDay)) {
            showName = showDays.indexOf(currentDay);
            currentShowDay = daysOfWeek[currentDay];
            console.log(showName + "current Day");
          }

          //### ADD DATA TO ARRAY
          reservationData.push({
            show_name: showDisplayNameArray[showName],
            show_day: currentShowDay,
            table_id: table_id,
            table_number: data.table_number,
            table_price: data.price,
            table_location: data.location,
            table_booking_date: bookingDate,
            time_slot: slotTime,
            time_Id: slotTimeID,
          });

          updateTableDisplay(this);

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

            updateTableDisplay();
            customerInformation.style.display =
              removeBookingIndex == 0 ? "none" : "block";
          }
        }

        function updateTableDisplay(isTimeSelected) {
          checkout.innerHTML = "";

          // Create a map to track unique table_id + time_slot combinations
          const uniqueReservations = new Map();

          // Process reservations to keep only the latest entry for duplicate table_id + time_slot
          reservationData.forEach((data, index) => {
            if (data.time_slot === undefined) {
              alert("Please select time slot first");
              isTimeSelected.checked = false;
              reservationData.splice(index, 1);
              return;
            }

            const key = `${data.table_id}_${data.time_slot}`;
            uniqueReservations.set(key, { data, index });
          });

          // Clear existing reservationData array
          reservationData.length = 0;

          // Rebuild reservationData and display with unique entries
          uniqueReservations.forEach(({ data, index }) => {
            // Add back to reservationData
            reservationData.push(data);

            // Show/hide customer information
            customerInformation.style.display = "block";

            // Add reservation to display
            checkout.innerHTML += `
      <div class="reservation-item">
        <p>#${index + 1}</p>
        <p><strong>Show Name</strong>: ${data.show_name}</p>
        <p><strong>Show Day</strong>: ${data.show_day}</p>
        <p><strong>Date</strong>: ${data.table_booking_date}</p>
        <p><strong>Seating Time</strong>: ${data.time_slot}</p>
        <p><strong>${data.table_location}</strong>: $${data.table_price}</p>
        <p>For dev use only:</p>
        <p><strong>Table</strong>: ${data.table_id}</p>
      </div>
    `;
          });
        }
      });

      // inputCheckbox.appendChild(document.createTextNode(i));
      const inputWrapper = tableGroup.querySelectorAll(".input-container");

      inputWrapper.forEach((input) => {
        input.appendChild(inputCheckbox);
        input.appendChild(label);
      });

      if (i % 2 === 0) {
        inputWrapper.forEach((input) => {
          input.parentNode.insertBefore(inputCheckbox, input);
          input.parentNode.insertBefore(label, input);
        });
      } else {
        inputWrapper.forEach((input) => {
          input.parentNode.insertBefore(inputCheckbox, input.nextSibling);
          input.parentNode.insertBefore(label, input.nextSibling);
        });
      }

      // if (i % 2 === 0) {
      //   console.log(i + " Even");
      //   inputCheckbox.style.border = "1px solid #7d0101";
      // }
    }
  }
  //END

  function resetData(bookingSelectedDate) {
    console.log(bookingSelectedDate + " RESET Booking DATE");

    // First, uncheck all checkboxes
    const selectedSeatReset = document.querySelectorAll(".form-check-input");
    selectedSeatReset.forEach((reset) => {
      reset.checked = false;
    });

    // Then, check boxes that match reservations for the selected date
    reservationData.forEach((data) => {
      if (data.table_booking_date.includes(bookingSelectedDate)) {
        const checkbox = document.querySelector(`#${data.table_id}`);
        if (checkbox) {
          checkbox.checked = true;
          console.log(`Checkbox ${checkbox.id} checked`);
        }
      }
    });

    //Reset time slot

    // First unchked all time slot

    // First, uncheck all checkboxes
    const timeSlotReset = document.querySelectorAll(".show-times");
    timeSlotReset.forEach((reset) => {
      reset.checked = false;
    });
    reservationData.forEach((data) => {
      if (data.table_booking_date.includes(bookingSelectedDate)) {
        const checkbox = document.querySelector(`#${data.time_Id}`);
        // console.log(checkbox.id + "time slot");
        if (checkbox) {
          checkbox.checked = true;
          console.log(`Checkbox ${checkbox.id} checked`);
        }
      }
    });
  }
  //END

  //### TRIGGER THE RESERVATION TABLES FUNCTION WITH CURRENT DAY
  if (currentDay == showDays[currentDay])
    ReservationTables(showDays[currentDay]);
  //END

  //# DATE PICKER FUNCTION
  $(function () {
    const maxDay = new Date();

    // Initialize the datepicker
    $("#datepicker-container").datepicker({
      minDate: maxDay,
      //onload
      beforeShowDay: function (date) {
        /*  
      
      ###GET TODAY DATE IF NEED

      var today = new Date();
 
      var currentDayFormatted = $.datepicker.formatDate("mm/dd/yy", date);

      var todayFormatted = $.datepicker.formatDate("mm/dd/yy", today);

      if (todayFormatted === currentDayFormatted) {
        console.log(todayFormatted);
      }*/

        // console.log("bookingDate" + bookingDate);
        var formattedDate = $.datepicker.formatDate("mm/dd/yy", date);

        let specialShow = newShows.find((show) => show.show_id === showId);

        if (specialShow) {
          // Enable only the dates in showDates
          if (specialShow.showDates.includes(formattedDate)) {
            return [true];
          }
          return [false]; // Disable all other dates
        }

        if (showId === "bordello") {
          // If the day is Thursday (getDay() === 4), return [true] to make it active
          if (date.getDay() === 4) {
            currentDay = 4;
            return [true]; // Enable Thursday
          }
          return [false]; // Disable other days
        } else if (showId === "opus" || showId === "wicked-cabaret") {
          currentDay = 5;
          // If the day is Thursday (getDay() === 4), return [true] to make it active
          if (date.getDay() === 5 || date.getDay() === 6) {
            return [true]; // Enable Thursday
          }
          return [false]; // Disable other days
        } else if (showId === "drag_brunch") {
          currentDay = 0;
          // If the day is Thursday (getDay() === 4), return [true] to make it active
          if (date.getDay() === 0) {
            return [true]; // Enable Thursday
          }
          return [false]; // Disable other days
        }

        var day = date.getDay();

        // Disable Monday (1), Tuesday (2), Wednesday (3)
        if (day == 1 || day == 2 || day == 3) {
          return [false]; // Disable these days
        }

        return [true];
      },
      beforeShow: function (input, inst) {
        let specialShow = newShows.find((show) => show.show_id === showId);

        if (specialShow && specialShow.showDates.length > 0) {
          let firstAvailableDate = specialShow.showDates[0];

          // Set the datepicker to the first available date
          $(this).datepicker("setDate", firstAvailableDate);

          // Optional: Move the datepicker to the first available date
          $(this).datepicker("option", "defaultDate", firstAvailableDate);
        }
      },
      onSelect: function (dateText, inst) {
        //  result.innerHTML = "";

        const selectedDate = new Date(dateText);
        // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

        bookingDate = $.datepicker.formatDate("mm/dd/yy", selectedDate);
        //  console.log("Formatted Date:", bookingDate);

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

        //displayShowName.indexOf(showDays);

        showInfoDisplay = true;

        console.log(showInfoDisplay + "Show info");

        ReservationTables(currentDay);

        resetData(bookingDate);
        scrollContentCenter();
        //END
      },
    });
  });
});
