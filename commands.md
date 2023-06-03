npx sequelize model:generate --name User --attributes username:string,firstName:string,lastName:string,email:string,phone:string;

npx sequelize model:generate --name PersonalInfo --attributes name:string,last_name:string,second_last_name:string,gender:string,gender_other:string,date_of_birth:Date,city_of_birth:string,state_of_birth:string,country_of_birth:string;

npx sequelize model:generate --name Address --attributes street:string,in_between_street_a:string,in_between_street_b:string,city:string,state:string,country:string,zip:string,proof_of_address:string;

npx sequelize model:generate --name AddressExtraInfo --attributes type_of_residency:string,other_residency:string,people:string;

npx sequelize model:generate --name GovernmentInfo --attributes curp:string,identification_number:string;

npx sequelize model:generate --name Profile --attributes phone:string,country_code:string,email:string,alt_email:string,reference:string,other_reference:string;

npx sequelize model:generate --name AcademicInfo --attributes software_devel_comments:string,degree_level:string,informal_education:string,other_education:string;

npx sequelize model:generate --name FormalEducationInfo --attributes university_name:string,state:string,country:string,career_name:string,classes_completed:boolean,proof_classes_completed:string,degree_completed:boolean,proof_degree_completed:string,license_completed:boolean,proof_license_completed:string;

npx sequelize model:generate --name ScholarshipInfo --attributes level:string,kind:string,period:integer;

npx sequelize model:generate --name BankAccountInfo --attributes acc_number:bigint,clabe:bigint,bank:string;

npx sequelize model:generate --name Skill --attributes preferred_programming_language:string,experience:string,disability:string;

npx sequelize migration:generate --name FkPersonalInfoUser
npx sequelize migration:generate --name FkAddressUser
npx sequelize migration:generate --name FkAddressExtraInfoAddress
npx sequelize migration:generate --name FkGovernmentInfoUser
npx sequelize migration:generate --name FkProfileUser
npx sequelize migration:generate --name FkAcademicInfoUser
npx sequelize migration:generate --name FkFormalEducationInfoUser
npx sequelize migration:generate --name FkScholarshipInfoUser
npx sequelize migration:generate --name FkBankAccountInfoUser
npx sequelize migration:generate --name FkSkillUser

npx sequelize-cli seed:generate --name UsersData
npx sequelize-cli seed:generate --name PersonalInfoData
npx sequelize-cli seed:generate --name AddressData
npx sequelize-cli seed:generate --name AddressExtraInfoData
npx sequelize-cli seed:generate --name GovernmentInfoData
npx sequelize-cli seed:generate --name ProfileData
npx sequelize-cli seed:generate --name AcademicInfoData
npx sequelize-cli seed:generate --name FormalEducationInfoData
npx sequelize-cli seed:generate --name ScholarshipInfoData
npx sequelize-cli seed:generate --name BankAccountInfoData
npx sequelize-cli seed:generate --name SkillsData

npx sequelize-cli db:migrate;
npx sequelize-cli db:migrate:undo:all;

npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all;

Crear modelos - migración?
Inicializar modelos - Seeding?
