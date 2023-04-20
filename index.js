// Add your code here

const body = document.querySelector("body");
function submitData(name,email)
{


const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body:JSON.stringify({

        name,
        email,
      }),
  };

   return fetch("http://localhost:3000/users", configurationObject)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
   // console.log(object);
   document.body.innerHTML = data["id"];
})
.catch(function (err) {
  const error = document.createElement("div");
  error.innerHTML = "Unauthorized Access";
  body.append(error);

  });





}

