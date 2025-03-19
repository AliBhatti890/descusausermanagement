export const API_URL = import.meta.env.VITE_API_URL;
export const DOC_IMAGE_URL = import.meta.env.VITE_DOC_IMAGE_URL;

export const getUrl = (url: string) => {
    if (url === undefined) {
        return undefined;
    }
    return url.endsWith('/') ? url : `${url}/`;
};
export enum EndPoints {
    //Get All
    getAllPositions = "position/getall",
    getAllDepartments = "department/getall",
    getAllShifts = "/shift/getall",
    getAllOrganizations = "organization/getall",
    getAllBenefits = "benefit/getall",
    getAllOrganizationsUnits = "organizationunit/getall",
    getAllCandidates = "employee/getall",
    getAllEmployeeMeeting = "employeemeeting/getall",
    getAllEmployeeTraining = "employeetraining/getall",
    getAllEmployeeOrientation = "employeeorientation/getall",
    getAllDocumentlist = "documentlist/getall",



    //Get By ID
    getPositionById = "position/getsingle",
    getShiftById = "shift/getsingle",
    getOrganizationById = "organization/getsingle",
    getDepartmentById = "department/getsingle",
    getglobalSettingByGroupId = "globalsetting/getsinglebygroupid",
    getBenifitsById = "benefit/getsingle",
    getOrganizationUnitById = "organizationunit/getsingle",
    getOrOnboardingCandidateById = "employee/getsingle",
    getEmployeeSkillByEmployeeId = "employeeskill/getsinglebyemployeeid",
    getEmployeeEducationByEmployeeId = "employeeeducation/getsinglebyemployeeid",
    getEmployeeExperienceByEmployeeId = "employeeexperience/getsinglebyemployeeid",
    getEmployeeProfessionalByEmployeeId = "employeeprofessionalreference/getsinglebyemployeeid",
    getEmployeePersonalByEmployeeId = "employeepersonalreference/getsinglebyemployeeid",
    getEmployeeMeetingById = "employeemeeting/getsingle",
    getEmployeeTrainingById = "employeetraining/getsingle",
    getEmployeeOrientationById = "employeeorientation/getsingle",
    getEmployeeAssetById = "employeeasset/getsinglebyemployeeid",
    getIsRequiredbyEmployeeId = "employeedocument/getisrequiredbyemployeeid",
    getDocumentsSinglebyEmployeeId = "employeedocument/getsinglebyemployeeid",



    //Create
    createShift = "shift/create",
    createDepartment = "department/create",
    createPosition = "position/create",
    createOrganization = "organization/create",
    createBenefit = "benefit/create",
    createGlobalSetting = "globalsetting/create",
    createOrganizationUnit = "organizationunit/create",
    createOnboardingCandidate = "employee/create",
    createEmployeeEducation = "employeeeducation/create",
    createEmployeeExperience = "employeeexperience/create",
    createEmployeePersonalReference = "employeepersonalreference/create",
    createEmployeeProfessionalReference = "employeeprofessionalreference/create",
    createEmployeeSkill = "employeeskill/create",
    createEmployeeMeeting = "employeemeeting/create",
    createEmployeeTraining = "employeetraining/create",
    createEmployeeOrientation = "employeeorientation/create",
    createEmployeeAsset = "employeeasset/create",
    createEmployeeDocument = "employeedocumentlist/create",
    createIsRequired = "employeedocument/createisrequired",

    //Update
    updateOrganization = "organization/update",
    updatePosition = "position/update",
    updateshift = "shift/update",
    updateDepartment = "department/update",
    updateGlobalSetting = "globalsetting/update",
    updateorganizationUnits = "organizationunit/update",
    updateBenefit = "benefit/update",
    updateOnboardingCandidate = "employee/update",
    updateEducationByEmployeeID = "employeeeducation/update",
    updateExperienceByEmployeeID = "employeeexperience/update",
    updateSkillByEmployeeID = "employeeskill/update",
    updatePersonalByEmployeeID = "employeepersonalreference/update",
    updateProfessionalByEmployeeID = "employeeprofessionalreference/update",
    updateEmployeeMeeting = "employeemeeting/update",
    updateEmployeeTraining = "employeetraining/update",
    updateEmployeeOrientation = "employeeorientation/update",
    updateEmployeeAsset = "employeeasset/update",
    updateEmployeeDocument = "employeedocument/updateisrequired",
    updateEmployeeDocumentsFiles = "employeedocument/update",

    //Delete
    deleteOrganization = "organization/delete",
    deleteEmployeeEducation = "employeeeducation/delete",
    deleteEmployeeExperience = "employeeexperience/delete",
    deleteEmployeeProfessional = "employeeprofessionalreference/delete",
    deleteEmployeeSkill = "employeeskill/delete",
    deleteEmployeePersonal = "employeepersonalreference/delete",
    deleteOrganizationUnit = "organizationunit/delete",
    deletePosition = "position/delete",
    deleteShift = "shift/delete",
    deleteDepartment = "department/delete",
    deleteBenefit = "benefit/delete",
    deleteEmployeeMeeting = "employeemeeting/delete",
    deleteEmployeeTraining = "employeetraining/delete",
    deleteEmployeeOrientation = "employeeorientation/delete",
    deleteEmployeeAsset = "employeeasset/delete",
    deleteEmployeeDocument = "employeedocumentlist/delete/",






    //Child API
    getAllFactors = "factor/getall?page=1&pageSize=10",
    getAllEngineCapacity = "enginecapacity/getall?page=1&pageSize=50",
    getAllYears = "year/getall?page=1&pageSize=50",

    login = "auth/login",
    register = "Auth/register",









    createUser = "user/create",

    updateUser = "user/update   ",
    getAllUser = "user/getall",
    getUserById = "user/get",
    deleteUser = "user/delete",




    getAllTask = "task/getall",
    createTask = "task/create",
    getTaskById = "task/get",
    updateTask = "task/update",
    deleteTask = "task/delete",








}
