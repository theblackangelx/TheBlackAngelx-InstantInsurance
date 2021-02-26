exports.mod = () =>{
    
    let config = require("../config.json")
    if (config.insurance.ReturnChanceModifier == true) //incase jugs all in one is installed, to prevent conflict
    {
    base = fileIO.readParsed(db.user.configs.gameplay)
    base.trading.insureReturnChance = config.insurance.insureReturnChance;
    chance = config.insurance.insureReturnChance
    fileIO.write(db.user.configs.gameplay, base)
    logger.logSuccess("[MOD INS] Insurance returnchance succesfully set to " + chance)
    }
    else
    {
        logger.logSuccess("[MOD INS] Insurance not applied")
    }





}