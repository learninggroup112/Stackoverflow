/**
 * Questionire is a root class from using this class reference you can invoke contact manager, catalogue manager and param receipt.
 * Objects can accessable:
 * catalogueManager, paramReceiptManager
 * 
 * @example
 * let Questionire = new Questionire({url:"http://localhost:8545"})
 */
class Questionire {

    /**
     * Using catalogueManager, we can able to perform catalogue related operations.
     * @memberof Questionire.prototype
     * @member {CatalogueManager} catalogueManager
     * @example 
     * Usage
     *  Questionire.catalogueManager.addCatalogue(<OPTIONS>)
     */

    /**
     * Using paramReceiptManager, we can able to create or modify receipt. Able to get the details about receipts.
     * @memberof Questionire.prototype
     * @member {ParamReceipt}  paramReceiptManager
     */


    /**
     * Default constructor for setting config like url.
     *  
     * @param {JSON} _config - {"url":"", modules:['contact','catalog']}
     */
    constructor(_config){
        // if(_config)
        this.setConfig(_config);
    }
    /**
     * Using this method you can set config.
     * 
     * @param {JSON} config - {"url":"", modules:['contact','catalog']}
     * @example
     * let Questionire = new Questionire();
     * Questionire.setConfig({url:"http://localhost:8545"})
     */
    setConfig(config){
        if(!config){
            return;
        }

        let Web3 = require('web3');
        let currentProvider;
        if(config.enableCors){
            let HttpHeaderProvider = require('httpheaderprovider');
            const CORS_HEADERS = {
                'Access-Control-Allow-Origin': '*'
            }
            currentProvider = new HttpHeaderProvider(config.url, CORS_HEADERS);
        } else {
            currentProvider = new Web3.providers.HttpProvider(config.url);
        }

        this.web3 = new Web3(currentProvider);

        const ContactManager = require('./contact-manager/index');
        const CatalogueManager = require('./catalogue-manager/index');
        const ParamReceipt =  require('./param-receipt/index');
        this.contactManager = new ContactManager(this);
        this.catalogueManager = new CatalogueManager(this);
        this.paramReceiptManager = new ParamReceipt(this);
    }

    /**
     * Using this method you can set config.
     * 
     * @deprecated
     * @example
     * let Questionire = new Questionire();
     * Questionire.getConfig()
     */
    getConfig(){
       return this.web3;
    }

    /**
     * Using this method you get param access object.
     * 
     * @example
     * let Questionire = new Questionire();
     * Questionire.getConnection()
     */
    getConnection(){
        return this.web3;
    }
}

module.exports = Questionire;