<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Do While Loop</h2>

<p id="demo"></p>

<script>
let name = [];
name[0] = "Maxwell Wright ";

let phone = [];
phone[0] = "(0191) 719 6495 ";

let email = [];
email[0] = "Curabitur.egestas.nunc@nonummyac.co.uk";

let i = 0;
let person = [];



do {
	person[i] = name[i] +"/"+ phone[i] +"/"+ email[i];
    document.getElementById("demo").innerHTML = person[i];
  i++;
}
while (i < name.length);



</script>

</body>
</html>
