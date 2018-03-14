// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
/**
 *
 * @param ctx Context
 */
Rectangle.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.get_Thickness();
    ctx.strokeStyle = this.get_Color();
    ctx.rect(this.get_X(), this.get_Y(), this.get_Width(), this.get_Heigth());
    ctx.stroke();
};
/**
 *
 * @param ctx context
 */
Line.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.get_Thickness();
    ctx.strokeStyle = this.get_Color();
    ctx.moveTo(this.getDebut_X(), this.getDebut_Y());
    ctx.lineTo(this.getFin_X(), this.getFin_Y());
    ctx.stroke();
};

/**
 *
 * @param ctx context
 * @param canvas Canvas
 */
Drawing.prototype.paint = function (ctx, canvas) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};

/**
 *
 * @param ctx context
 */
Form.prototype.paint = function (ctx) {
    this.color = "";
    this.thickness = 0;
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = "red";
}