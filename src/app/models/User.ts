// User Interface object that is exported to be used within components
export interface User {
    firstName: string,
    lastName: string,
    email: string,
    isActive?: Boolean,
    registered?: any,
    hide?: boolean
}