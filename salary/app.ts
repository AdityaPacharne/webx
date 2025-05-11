const employees = [
  { name: "John", base: 50000, rating: 10 },
  { name: "Jane", base: 40000, rating: 5 },
];

const list = document.getElementById("employeeList") as HTMLElement;

// Show base salary and rating on load
employees.forEach(e => {
  const li = document.createElement("li");
  li.textContent = `${e.name} | Base: $${e.base} | Rating: ${e.rating}`;
  list.appendChild(li);
});

// Show bonus on button click
document.getElementById("showBonusButton")?.addEventListener("click", () => {
  employees.forEach(e => {
    const bonus = e.base * (e.rating === 10 ? 0.2 : 0.1);
    const li = document.createElement("li");
    li.textContent = `${e.name} gets bonus: $${bonus.toFixed(2)}`;
    list.appendChild(li);
  });
});
