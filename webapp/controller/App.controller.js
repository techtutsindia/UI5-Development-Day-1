sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.demo.controller.App", {
            onInit: function () {

            },
            onOpenBankDetails: function(oEvent){
                // create dialog lazily
                if (!this.moreBankDetail) {
                    this.moreBankDetail = this.loadFragment({
                        name: "com.sap.demo.view.fragments.MoreBankDetails"
                    });
                } 
                this.moreBankDetail.then(function(oDialog) {
                    oDialog.open();
                });
                            },
                
             onCloseDialog: function(){
             this.byId("bankDetailsDialogId").close();    
             },
                
        });
    });
