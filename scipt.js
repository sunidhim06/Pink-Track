// CALCULATE
function calculateCycle() {

    let lastDate = document.getElementById("lastDate").value;
    let cycleLength = parseInt(document.getElementById("cycleLength").value);

    if (lastDate === "") {
        alert("Please select a date!");
        return;
    }

    let last = new Date(lastDate);

    let next = new Date(last);
    next.setDate(last.getDate() + cycleLength);

    let ovulation = new Date(next);
    ovulation.setDate(next.getDate() - 14);

    let fertileStart = new Date(ovulation);
    fertileStart.setDate(ovulation.getDate() - 5);

    document.getElementById("nextPeriod").innerText = next.toDateString();
    document.getElementById("ovulation").innerText = ovulation.toDateString();
    document.getElementById("fertile").innerText =
        fertileStart.toDateString() + " - " + ovulation.toDateString();
}

// MOOD
function saveMood(mood) {
    alert(mood + " mood saved!");
}

// NOTES SAVE
function saveNotes() {
    let note = document.getElementById("notes").value;
    localStorage.setItem("notes", note);
    alert("Notes saved!");
}

// LOAD NOTES
window.onload = function () {
    let saved = localStorage.getItem("notes");
    if (saved) {
        document.getElementById("notes").value = saved;
    }
    function openAboutEnd() {
    document.getElementById("popupEnd").style.display = "block";
}

function closeAboutEnd() {
    document.getElementById("popupEnd").style.display = "none";
}
function openBox() {
    document.getElementById("aboutBox").style.display = "block";
}

function closeBox() {
    document.getElementById("aboutBox").style.display = "none";
}
};
// LOAD NOTES
window.onload = function () {
    let saved = localStorage.getItem("notes");
    if (saved) {
        document.getElementById("notes").value = saved;
    }
};

// ✅ ABOUT POPUP FUNCTIONS (bahar hone chahiye)
function openBox() {
    document.getElementById("aboutBox").style.display = "block";
}

function closeBox() {
    document.getElementById("aboutBox").style.display = "none";
}
function openBox() {
    document.getElementById("aboutBox").style.display = "block";
}

function closeBox() {
    document.getElementById("aboutBox").style.display = "none";
}
