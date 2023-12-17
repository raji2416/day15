let form=document.getElementById("form");

let table=document.getElementById("data");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let FirstName = document.getElementById("First-Name").value;
  let LastName = document.getElementById("Last-Name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let Gender = document.getElementById("Gender").value;
    let Food = document.getElementById("Food").value;
    let State = document.getElementById("State").value;
    let Country = document.getElementById("Country").value;


  let newArray = [FirstName,LastName,address,pincode,Gender,Food,State,Country];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode("item");
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 
}