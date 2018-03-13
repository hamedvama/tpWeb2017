// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.listForm = [];
    this.getForms = function () {
        return this.listForm
    }.bind(this);
    this.addForm = function (form) {
        this.listForm.push(form);
    }.bind(this);
}

function Rectangle(abs, ord, width, heigth, thickness, color) {

    Form.call(this, thickness, color);
    this.abs = abs;
    this.ord = ord;
    this.largeur = width;
    this.hauteur = heigth;

    this.get_X = function () {
        return this.abs
    }.bind(this);
    this.get_Y = function () {
        return this.ord
    }.bind(this);
    this.get_Width = function () {
        return this.largeur
    }.bind(this);
    this.get_Heigth = function () {
        return this.hauteur
    }.bind(this);
    this.get_Thickness = function () {
        return this.thickness
    }.bind(this);
    this.get_Color = function () {
        return this.color
    }.bind(this);

    this.updateShapeList = function () {
        shapeList.innerHTML += '<li>Rectangle <button type="button" class="btn btn-default">' +
            '<span class="glyphicon glyphicon-remove-sign"></span>' +
            '</button></li>';
    }.bind(this);
}

function Line(abs1, abs2, ord1, ord2, thickness, color) {

    Form.call(this, thickness, color);
    this.abs1 = abs1;
    this.abs2 = abs2;
    this.ord1 = ord1;
    this.ord2 = ord2;

    this.getDebut_X = function () {
        return this.abs1
    }.bind(this);
    this.getFin_X = function () {
        return this.abs2
    }.bind(this);
    this.getDebut_Y = function () {
        return this.ord1
    }.bind(this);
    this.getFin_Y = function () {
        return this.ord2
    }.bind(this);
    this.get_Thickness = function () {
        return this.thickness
    }.bind(this);
    this.get_Color = function () {
        return this.color
    }.bind(this);

    this.updateShapeList = function () {
        shapeList.innerHTML += '<li>Line<button type="button" class="btn btn-default">' +
            '<span class="glyphicon glyphicon-remove-sign"></span>' +
            '</button></li>';
    }.bind(this);

    this.toString = function () {
        console.log(this);
    }
}

function Form(epaisseur, couleur) {
    this.thickness = epaisseur;
    this.color = couleur;
}