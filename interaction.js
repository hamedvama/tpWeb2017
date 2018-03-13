// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.Debut_X = 0;
    this.Fin_X = 0;
    this.Debut_Y = 0;
    this.Fin_Y = 0;
    this.canvas = canvas;
    this.interactor = interactor;

    this.getDebut_X = function () {
        return this.Debut_X
    }.bind(this);
    this.getFin_X = function () {
        return this.Fin_X
    }.bind(this);
    this.getDebut_Y = function () {
        return this.Debut_Y
    }.bind(this);
    this.getFin_Y = function () {
        return this.Fin_Y
    }.bind(this);

    this.setDebut_X = function (x) {
        this.Debut_X = x;
    }.bind(this);
    this.setFin_X = function (x) {
        this.Fin_X = x;
    }.bind(this);
    this.setDebut_Y = function (y) {
        this.Debut_Y = y;
    }.bind(this);
    this.setFin_Y = function (y) {
        this.Fin_Y = y;
    }.bind(this);

    // Developper les 3 fonctions gérant les événements
    this.pression = function (evt) {
        this.setDebut_X(getMousePosition(canvas, evt).abs);
        this.setDebut_Y(getMousePosition(canvas, evt).ord);
        this.interactor.onInteractionStart(this);
    }.bind(this);

    this.deplacement = function (evt) {
    }.bind(this);

    this.relachement = function (evt) {
        this.setFin_X(getMousePosition(canvas, evt).abs);
        this.setFin_Y(getMousePosition(canvas, evt).ord);
        this.interactor.onInteractionEnd(this);
        this.interactor.onInteractionUpdate(this);

    }.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    this.canvas.addEventListener('mousedown', this.pression, false);
    this.canvas.addEventListener('mousemove', this.deplacement, false);
    this.canvas.addEventListener('mouseup', this.relachement, false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        abs: evt.clientX - rect.left,
        ord: evt.clientY - rect.top
    };
};
