var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var btnRect = document.getElementById('butRect');
var btnLine = document.getElementById('butLine');
var spinnerWidth = document.getElementById('spinnerWidth');
var colour = document.getElementById('colour');
var shapeList = document.getElementById('shapeList');
canvas.width = 800
canvas.height = 600

// Code temporaire pour tester le DnD
//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

//Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//rec.paint(ctx);
var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);

//tester également Dessin.

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
drawing.addForm(rec);
drawing.addForm(ligne);
var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

btnRect.addEventListener('click', function () {
    pencil.setCurrEditingMode(editingMode.rect);
    console.log(pencil);
});

btnLine.addEventListener('click', function () {
    pencil.setCurrEditingMode(editingMode.line);
    console.log(pencil);
});

spinnerWidth.addEventListener('change', function () {
    pencil.setCurrLineWidth(this.value);
    console.log(pencil);
});

colour.addEventListener('change', function () {
    pencil.setCurrColour(this.value);
    console.log(pencil);
});




