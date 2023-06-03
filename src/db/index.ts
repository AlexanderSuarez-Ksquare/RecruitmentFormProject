import { Sequelize } from "sequelize";
import { setUpUser } from "../models/user";
import { setUpPersonalInfo } from "../models/personalinfo";
import { setUpAddress } from "../models/address";
import { setUpAddressExtraInfo } from "../models/addressextrainfo";
import { setUpGovernmentInfo } from "../models/governmentinfo";
import { setUpProfile } from "../models/profile";
import { setUpAcademicInfo } from "../models/academicinfo";
import { setUpFormalEducationInfo } from "../models/formaleducationinfo";
import { setUpScholarshipInfo} from "../models/scholarshipinfo";
import { setUpBankAccountInfo } from "../models/bankaccountinfo";
import { setUpSkill } from "../models/skill";


export let sequelize : Sequelize;

export const startDB = (url : string): Sequelize=>{
    sequelize = new Sequelize(url);
    setUpUser(sequelize);
    setUpPersonalInfo(sequelize);
    setUpAddress(sequelize);
    setUpAddressExtraInfo(sequelize);
    setUpGovernmentInfo(sequelize);
    setUpProfile(sequelize);
    setUpAcademicInfo(sequelize);
    setUpFormalEducationInfo(sequelize);
    setUpScholarshipInfo(sequelize);
    setUpBankAccountInfo(sequelize);
    setUpSkill(sequelize);

    return sequelize;
}
