var _a;
var employees = [
    { name: "John", base: 50000, rating: 10 },
    { name: "Jane", base: 40000, rating: 5 },
];
var list = document.getElementById("employeeList");
// Show base salary and rating on load
employees.forEach(function (e) {
    var li = document.createElement("li");
    li.textContent = "".concat(e.name, " | Base: $").concat(e.base, " | Rating: ").concat(e.rating);
    list.appendChild(li);
});
// Show bonus on button click
(_a = document.getElementById("showBonusButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    employees.forEach(function (e) {
        var bonus = e.base * (e.rating === 10 ? 0.2 : 0.1);
        var li = document.createElement("li");
        li.textContent = "".concat(e.name, " gets bonus: $").concat(bonus.toFixed(2));
        list.appendChild(li);
    });
});
