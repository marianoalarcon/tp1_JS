var a = true;
var b = false;
document.write("<tr id= 'color3'>"+ "<td>" + "p" + "</td>" + "<td>" + "q" + "</td>"+ "<td>" + "r" + "</td>"+ "<td>"+ "(NOT p OR r) AND NOT(q OR p AND NOT r)" + "</td>" + "</tr>");
document.write("<tr class='color'><td>" + a + "</td><td>" +  a + "</td><td>"+ a + "</td><td>"+ ((!a||a)&&(!(a|| (a&&!a)))) +    "</td></tr>");
document.write("<tr class='color'><td>" + a + "</td><td>" +  a + "</td><td>"+ b + "</td>" + "<td>"+ ((!a||a)&&(!(a|| (a&&!a)))) + "</td>" + "</tr>");
document.write("<tr class='color'><td>" + a + "</td><td>" +  b + "</td><td>"+ a + "</td>" + "<td>"+ ((!b||b)&&(!(b|| (a&&!a)))) + "</td>" + "</tr>");
document.write("<tr class='color'><td>" + a + "</td><td>" +  b + "</td><td>"+ b + "</td>" + "<td>"+ ((!a||a)&&(!(a|| (a&&!a)))) + "</td>" + "</tr>");
document.write("<tr class='color'><td>" + b + "</td><td>" +  a + "</td><td>"+ a + "</td>" + "<td>"+ ((!b||a)&&(!(a|| (b&&!b)))) + "</td>" + "</tr>");
document.write("<tr class='color'><td>" + b + "</td><td>" +  a + "</td><td>"+ b + "</td>" + "<td>"+ ((!b||b)&&(!(a|| (b&&!b)))) + "</td>" + "</tr>");
document.write("<tr class='color'><td>" + b + "</td><td>" +  b + "</td><td>"+ a + "</td>" + "<td>"+ ((!b||a)&&(!(b|| (b&&!a)))) + "</td>" + "</tr>");
document.write("<tr class='color'><td>" + b + "</td><td>" +  b + "</td><td>"+ b + "</td>" + "<td>"+ ((!b||b)&&(!(b|| (b&&!b)))) + "</td>" + "</tr>");