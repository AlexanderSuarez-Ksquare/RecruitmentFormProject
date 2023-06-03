export interface UserAttributes {
    id?: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  }
  
  export interface PersonalInfoAttributes {
    id: number;
    name: string;
    last_name: string;
    second_last_name: string;
    gender: string;
    gender_other: string | null;
    date_of_birth: Date;
    city_of_birth: string;
    state_of_birth: string;
    country_of_birth: string;
  }
  
  export interface AddressAttributes {
    id: number;
    street: string;
    in_between_street_a: string;
    in_between_street_b: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    proof_of_address: string;
  }
  
  export interface ProfileAttributes {
    id: number;
    phone: string;
    country_code: string;
    email: string;
    alt_email: string;
    reference: string;
    other_reference: string;
  }
  
  export interface AcademicInfoAttributes {
    id: number;
    software_devel_comments: string;
    degree_level: string;
    informal_education: string;
    other_education: string;
  }
  
  export interface FormalEducationInfoAttributes {
    id: number;
    university_name: string;
    state: string;
    country: string;
    career_name: string;
    classes_completed: boolean;
    proof_classes_completed: string;
    degree_completed: boolean;
    proof_degree_completed: string;
    license_completed: boolean;
    proof_license_completed: string;
  }
  
  export interface ScholarshipInfoAttributes {
    id: number;
    level: string;
    kind: string;
    period: number;
  }
  
  export interface BankAccountInfoAttributes {
    id: number;
    acc_number: bigint;
    clabe: bigint;
    bank: string;
  }
  
  export interface SkillAttributes {
    id: number;
    preferred_programming_language: string;
    experience: string;
    disability: string;
  }
  
  export interface AddressExtraInfoAttributes {
    id: number;
    type_of_residency: string;
    other_residency: string;
    people: string;
  }
  
  export interface GovernmentInfoAttributes {
    id: number;
    curp: string;
    identification_number: string;
  }
  