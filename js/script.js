// year footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// age calculation
const birthYear = 2011;
const ageEl = document.getElementById('age');
if (ageEl) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    ageEl.textContent = age;
}