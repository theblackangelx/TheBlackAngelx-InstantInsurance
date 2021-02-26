exports.mod = () => 

{

    logger.logInfo("[mod] NoRepairPenalty by TheBlackAngelx");
    let config = require("../config.json");
    if (config.insurance.Instant_Insurance_Prapor == true) 
   
    {
       
        data= fileIO.readParsed(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base)
        data.insurance.min_return_hour=0
        data.insurance.max_return_hour=0
        fileIO.write(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base, data)
       
        logger.logSuccess("[MOD INS] Prapor insurance return time set to 0");
       
    }

}