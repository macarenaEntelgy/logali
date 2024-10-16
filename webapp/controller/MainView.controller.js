sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */
function (Controller) {
    "use strict";

    return Controller.extend("dev.invoices.controller.MainView", {

        onInit: function () {
            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("./model/pantallaDeSeleccion.json");
            oView.setModel(oJSONModel, "pantallaDeSeleccion");
        }
    });
});
