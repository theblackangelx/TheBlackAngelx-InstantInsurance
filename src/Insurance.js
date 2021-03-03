exports.mod = () => 

{
    logger.logInfo("[mod] Instant insurance by TheBlackAngelx")
    
    let config = require("../config.json")
    let base = fileIO.readParsed(db.user.configs.gameplay)
    let data = fileIO.readParsed(db.cacheBase.traders["54cb57776803fa99248b456e"].base) //therapist
    let datap = fileIO.readParsed(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base) //prapor
    let mint = config.insurance.Therapist_return_hour
    let minp = config.insurance.Prapor_return_hour
    let chance = config.ReturnChance.insureReturnChance

    
    //edits therapist returntime
    if (config.insurance.Therapist_min_return_hour == false) 
    {
        //do nothing
    } 

    else
    {
        
        data.insurance.min_return_hour = config.insurance.Therapist_return_hour //sets therapist min hour
        data.insurance.max_return_hour = config.insurance.Therapist_return_hour //sets therapist max hour

       
        logger.logSuccess("[MOD INS] Therapist insurance return time set to " + mint + " hour")
       
    }
   
    //edits prapor return time
    if (config.insurance.Prapor_return_hour == false) 
    {
        //do nothing
    } 
    
    else
    {
       
        datap.insurance.min_return_hour = config.insurance.Prapor_return_hour //sets prapor min hour
        datap.insurance.max_return_hour = config.insurance.Prapor_return_hour //sets prapor max hour

       
        logger.logSuccess("[MOD INS] Prapor insurance return time set to " + minp + " hour")
       
    }
    
   //edits returnchance
    if (config.ReturnChance.insureReturnChance == false)
    {
        // do nothing
    }
    else
    {
        base.trading.insureReturnChance = config.ReturnChance.insureReturnChance;


        logger.logSuccess("[MOD INS] Insurance returnchance succesfully set to " + chance +"%")
    }
    
    fileIO.write(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base, datap) // writes prapor setttings to file
    fileIO.write(db.cacheBase.traders["54cb57776803fa99248b456e"].base, data) // writes therapist settings to file
    fileIO.write(db.user.configs.gameplay, base) // writes returnchance to config
}
