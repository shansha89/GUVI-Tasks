async function loadNationalize(personName) {
  try {
    let response = await fetch(
      "https://api.nationalize.io/?name=" + personName
    );
    let person = await response.json();
    let person_country_list = person.country;
    let person_name =
      person.name.charAt(0).toUpperCase() + person.name.slice(1);
    let table_head = `<thead>
      <tr>
        <th>Country ID</th>
        <th>Probability</th>
      </tr>
    </thead>
    `;

    let person_data = person_country_list.slice(0, 2).map((i) => {
      return `
        <tr>
          <td>${i.country_id}</td>
          <td>${i.probability}</td>
        </tr>
      `;
    });

    document.getElementById("person_name").innerHTML = person_name;
    document.getElementById("country_details").innerHTML =
      table_head + person_data.join("");
  } catch (error) {
    let div_error = document.getElementById("response_error");
    div_error.style.display = "block";
    div_error.innerHTML = error;

    setTimeout(() => {
      div_error.style.display = "none";
    }, 3000);
  }
}
