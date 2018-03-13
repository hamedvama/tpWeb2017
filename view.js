// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.get_Thickness();
    ctx.strokeStyle = this.get_Color();
    ctx.rect(this.get_X(), this.get_Y(), this.get_Width(), this.get_Heigth());
    ctx.stroke();
};

function ok(a) {
    setTimeout(function () {
        console.log("Hello " + self.a);
    }, 1000);
    console.log(a);
}

Line.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.get_Thickness();
    ctx.strokeStyle = this.get_Color();
    ctx.moveTo(this.getDebut_X(), this.getDebut_Y());
    ctx.lineTo(this.getFin_X(), this.getFin_Y());
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx, canvas) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};

Form.prototype.paint = function (ctx) {
    this.color = "";
    this.thickness = 0;
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = "red";
}