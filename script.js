const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const datePicker = document.querySelector("#datePicker");

let entries = JSON.parse(localStorage.getItem("entries")) || {};

datePicker.addEventListener("change", () => {
  const date = datePicker.value;
  textarea.value = entries[date] || "";
});

button.addEventListener("click", () => {
  const date = datePicker.value;
  const text = textarea.value;

  if (!date) {
    alert("Please select a date.");
    return;
  }

  if (text.trim() === "") {
    alert("Please write something before saving.");
    return;
  }

  entries[date] = text;
  localStorage.setItem("entries", JSON.stringify(entries));

  alert("Entry saved for " + date);
});

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  const date = datePicker.value;

  if (!date) {
    alert("Please select a date first.");
    return;
  }

  delete entries[date];
  localStorage.setItem("entries", JSON.stringify(entries));
  textarea.value = "";

  alert("Entry cleared for " + date);
});

const today = new Date().toISOString().split("T")[0];
datePicker.value = today;
textarea.value = entries[today] || "";

