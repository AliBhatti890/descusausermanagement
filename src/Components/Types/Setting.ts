export interface Settings {

    id?: number;
  
    groupid?: number;
  
    isCapitalLetterMandatory?: string;
  
    isEnableMultiFactor?: string;
  
    isNumericValueMandatory?: string;
  
    isSetPasswordPolicies?: string;
  
    isSpecialCharacterMandatory?: string;
  
    passwordMinimumLength?: number;
  
    isActive?: string;
  
    [key: string]: any; // Add this line
}