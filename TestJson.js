<script>
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://api.bincodes.com/cc-gen/?format=json&api_key=e59527907e84abb3eb3a82a8e52d1c36&input=visa');

ourRequest.onload = function() {

var Data = JSON.parse(ourRequest.responseText);

console.log(Data[0]);
document.getElementById('digits').innerHTML = Data.number
}

ourRequest.send();
</script>
