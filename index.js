const enter = document.getElementById("enter");
const far = document.getElementById("far");
const cel = document.getElementById("cel");
const result = document.getElementById("result");

function convert(e) {
  e.preventDefault();
  let temp;
  if (far.checked) {
    temp = Number(enter.value);
    temp = (temp * 9) / 5 + 32;
    result.innerHTML = temp.toFixed(1) + "°F";
  } else if (cel.checked) {
    temp = Number(enter.value);
    temp = (temp - 32) * (5 / 9);
    result.innerHTML = temp.toFixed(1) + "°C";
  } else {
    result.innerHTML = "select";
  }
}
