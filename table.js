let table = document.getElementById("table");

const usersInfoString = localStorage.getItem("USERS");

  if (usersInfoString) {
    const usersInfo = JSON.parse(usersInfoString);
    let count = 0;
    usersInfo.forEach((user) => {
      console.log("user::: ",user)
      const newTr = document.createElement('tr');
    //   const nameTd = document.createElement("td");
    //   const lastNameTd = document.createElement("td");
    //   const dateCreatedTd = document.createElement("td");

    newTr.innerHTML = `<td>${++count}</td>
    <td>${user.name}</td>

    <td>${user.surname}</td>

    <td>${user.emailAddress}</td>

    <td>${user.isActive}</td>
    <td><img src="./images/vieww.png"></td>
    <td><img src="./images/delete.png"></td>`;
    

    table.appendChild(newTr);
    });
  }