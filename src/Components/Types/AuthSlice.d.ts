interface User {
    id?: string | null;
    email?: string;
    passwordHash?: string | null;
    phoneNumber?: string;
    userCategory?: string;
    userName?: string;
    employeeId?: string;
    name?: string;
    user_type?: string;
}


interface AuthState {
    user: User | null;
    token: string | null;
}