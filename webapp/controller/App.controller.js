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

             




              //Global JSON Model 
              this.setGlobalDataModel();
                var oJsonModel = new sap.ui.model.json.JSONModel({
                    profile: sap.ui.require.toUrl("com/sap/demo/images/profile.jpeg")
                });
                    
                this.getView().setModel(oJsonModel);
                //Application Language Selection
                var browserLan = navigator.language,
                    lanModel;
                if (browserLan == 'es')
                    lanModel = "i18n_es";
                else if (browserLan == 'en')
                    lanModel = "i18n";
                else if (browserLan == 'de')
                    lanModel = "i18n_de";
                else
                    lanModel = "i18n";

                var oResourceModel = this.getOwnerComponent().getModel(lanModel);
                this.getOwnerComponent().setModel(oResourceModel, "i18n");
            },
            onOpenBankDetails: function (oEvent) {
                // create dialog lazily
                if (!this.moreBankDetail) {
                    this.moreBankDetail = this.loadFragment({
                        name: "com.sap.demo.view.fragments.MoreBankDetails"
                    });
                }
                this.moreBankDetail.then(function (oDialog) {
                    oDialog.open();
                });
            },

            onCloseDialog: function () {
                this.byId("bankDetailsDialogId").close();
            },

         // Set Global Data Model
            setGlobalDataModel: function(){
            let bankDetailsModel = this.getOwnerComponent().getModel("oBankDetails");
            this.getView().setModel(bankDetailsModel);
            }

        });
    });
