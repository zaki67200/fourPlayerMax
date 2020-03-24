function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;

oReq.open("get", "https://arfp.eu/dataset/cards.json", true);
oReq.send();

function alert_ajax(xhr)
{
  var docJSON= JSON.parse(oReq.responseText);

  var items = docJSON.getElementsByTagName("id");
  var items1 = docJSON.getElementsByTagName("name");
  var items2 = docJSON.getElementsByTagName("level");
  var items3 = docJSON.getElementsByTagName("description");
  var items4 = docJSON.getElementsByTagName("power");
  var items5 = docJSON.getElementsByTagName("attack");
  var items6 = docJSON.getElementsByTagName("armor");
  var items7 = docJSON.getElementsByTagName("damage");
  var items8 = docJSON.getElementsByTagName("mitigation");
  var items9 = docJSON.getElementsByTagName("played");
  var items10 = docJSON.getElementsByTagName("victory");
  var items11 = docJSON.getElementsByTagName("defeat");
  var items12 = docJSON.getElementsByTagName("draw");

  alert(items.length);


var _headerData = new Array("id","name","level","description","power",
"attack","armor","damage","mitigation","played","victory","defeat","draw");

for (i=0;i<items.length;i++)
{
var _tableData = new Array("items.item(i).firstChild.data",
"items1.item(i).firstChild.data",
"items2.item(i).firstChild.data",
"items3.item(i).firstChild.data",
"items4.item(i).firstChild.data",
"items5.item(i).firstChild.data",
"items6.item(i).firstChild.data",
"items7.item(i).firstChild.data",
"items8.item(i).firstChild.data",
"items9.item(i).firstChild.data",
"items10.item(i).firstChild.data",
"items11.item(i).firstChild.data",
"items12.item(i).firstChild.data",);
}



}
