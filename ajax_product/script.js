document.getElementById("search").oninput = function () {
  const q = this.value;
  fetch(`/search?q=${q}`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("results");
      list.innerHTML = "";
      data.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.name;
        list.appendChild(li);
      });
    });
};
