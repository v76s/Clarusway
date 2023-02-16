function showRow(row)
{
var x=row.cells;
document.getElementById("firstname").value = x[0].innerHTML;
document.getElementById("lastname").value = x[1].innerHTML;
document.getElementById("age").value = x[2].innerHTML;
document.getElementById("total").value = x[3].innerHTML;
document.getElementById("discount").value = x[4].innerHTML;
document.getElementById("diff").value = x[5].innerHTML;
}