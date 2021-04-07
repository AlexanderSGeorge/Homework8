const Me = {
    name: "Alex",
    countries: [
      {name: "Mexico", year: 2009},
      {model: "Germany", color: 2018},
      {model: "India", color: 2018}
    ]
  };
  
  // Send this object as JSON data to the server
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Me)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    });
  