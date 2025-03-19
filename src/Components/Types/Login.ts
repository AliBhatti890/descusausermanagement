export interface Logins {
    id: string;
    email: string;
    password: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    CreatedBy: string;
    CreatedAt: string;
    UpdatedBy: string;
    UpdatedAt: string;
    IsActive: boolean;
    userCategory?: string;
    confirmPassword?: string;
    toEmail?: string;
    userName?: string
    userType: string;
    employeeId: string;

}


