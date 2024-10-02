const Contents = ["salt", "dirt", "calcite", "uranium", "rubber"];
const FilterOut = ["uranium", "dirt"];

function filterAndDisplay() {
    const filteredWater = filterWater(Contents, FilterOut);

    const result = document.getElementById("result");

    result.innerHTML = "Filtered Water: " + filteredWater.join(", ");
}

function filterWater(waterContents, FilterOut) {
    return waterContents.filter(item => !FilterOut.includes(item));
}
