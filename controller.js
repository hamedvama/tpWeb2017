var editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#320f1f';
    this.currentShape = 0;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    this.dnd = new DnD(canvas, this);

    //Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionEnd = function (dnd) {
        if (this.currEditingMode == editingMode.line) {
            var line = new Line(dnd.getDebut_X(), dnd.getFin_X(), dnd.getDebut_Y(), dnd.getFin_Y(), this.currLineWidth, this.currColour);
            line.updateShapeList();
            line.paint(ctx);
        }
        else if (this.currEditingMode == editingMode.rect) {
            var largeur = dnd.getFin_X() - dnd.getDebut_X();
            var hauteur = dnd.getFin_Y() - dnd.getDebut_Y();
            var rectangle = new Rectangle(dnd.getDebut_X(), dnd.getDebut_Y(), largeur, hauteur, this.currLineWidth, this.currColour);
            rectangle.updateShapeList();
            console.log('rectangle');
            rectangle.paint(ctx);
        }
    }.bind(this);

    this.onInteractionStart = function (dnd) {
    }.bind(this);

    this.onInteractionUpdate = function (dnd) {
        console.log("M-A-J");
    }.bind(this);

    this.setCurrEditingMode = function (mode) {
        this.currEditingMode = mode;
    }.bind(this);

    this.setCurrLineWidth = function (width) {
        this.currLineWidth = width;
    }.bind(this);

    this.setCurrColour = function (color) {
        this.currColour = color;
    }.bind(this);

    this.setCurrentShape = function (x) {
        this.currentShape = x;
    }.bind(this);

};