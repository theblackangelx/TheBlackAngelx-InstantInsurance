exports.mod = () => 

{

    logger.logInfo("[mod] Instant insurance by TheBlackAngelx");
    let config = require("../config.json");
    if (config.insurance.Instant_Insurance_therapist == true) 
    
    {
       
        data= fileIO.readParsed(db.cacheBase.traders["54cb57776803fa99248b456e"].base)
        data.insurance.min_return_hour=0
        data.insurance.max_return_hour=0
        fileIO.write(db.cacheBase.traders["54cb57776803fa99248b456e"].base, data)
       
        logger.logSuccess("[MOD INS] Therapist insurance return time set to 0");
       
    }
    
}