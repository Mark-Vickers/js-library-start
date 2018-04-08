var a = start();
document.write(a.showPublic());

document.write('<br/>');

var b = start(7,8,9);
document.write(b.showPublic());

document.write('<br/>');

document.write(b.showPrivate());
