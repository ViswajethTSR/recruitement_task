import randToken from "rand-token";
class UtilClass {
    
    generateMongoId() {
        return randToken.generate(4);
    }
}

export default new UtilClass();