var a = true;
var b = false;
document.write ("<th class='color2'> " + "p" +"</th>"+ " <th class='color2'>" + "q" + "</th> " + " <th class='color2'>" + "Operador OR (p || q)" + " </th>");
document.write ("<tr class='color'> <td>" + a +"</td>"+ " <td>" + a + "</td> " + " <td>" + (a||a) + "</td></tr>");
document.write ("<tr class='color'> <td>" + a +"</td>"+ " <td>" + b + "</td> " + " <td>" + (a||b) + "</td></tr>");
document.write ("<tr class='color'> <td>" + b +"</td>"+ " <td>" + a + "</td> " + " <td>" + (b||a) + "</td></tr>");
document.write ("<tr class='color'> <td>" + b +"</td>"+ " <td>" + b + "</td> " + " <td>" + (b||b) + "</td></tr>");