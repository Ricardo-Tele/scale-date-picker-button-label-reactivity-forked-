<template>
  <div>
    <scale-button
      @click="setLocalization('en')"
      variant="ghost"
    >
      EN
    </scale-button>
    <scale-button
      @click="setLocalization('de')"
      variant="ghost"
    >
      DE
    </scale-button>
    <scale-date-picker
      :localization="
        localization === 'de' ? translateDatePickerToGerman() : translateDatePickerToEnglish()
      "
      label="Localization"
    ></scale-date-picker>
  </div>
</template>

<script setup lang="ts">
const localization = ref("");

function setLocalization(locale: string) {
  localization.value = locale;
  console.log(`Localization set to ${localization.value}`);
}

function translateDatePickerToGerman() {
  return {
    placeholder: "TT.MM.JJJJ",
    selectedDateMessage: "Gewähltes Datum",
    prevMonthLabel: "Vorheriger Monat",
    nextMonthLabel: "Nächster Monat",
    monthSelectLabel: "Monat",
    yearSelectLabel: "Jahr",
    closeLabel: "Fenster schließen",
    keyboardInstruction: "Sie können mit den Pfeiltasten vor und zurück navigieren",
    calendarHeading: "Datum wählen",
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    monthNames: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    today: "heute",
    locale: "de-DE",
  };
}

function translateDatePickerToEnglish() {
  return {
    placeholder: "YYYY-MM-DD",
    selectedDateMessage: "Selected date",
    prevMonthLabel: "Previous month",
    nextMonthLabel: "Next month",
    monthSelectLabel: "Month",
    yearSelectLabel: "Year",
    closeLabel: "Close window",
    keyboardInstruction: "You can navigate with the arrow keys",
    calendarHeading: "Select date",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    locale: "en-US",
  };
}
</script>
