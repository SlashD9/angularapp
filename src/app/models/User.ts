// User Interface object that is exported to be used within components
export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    address?: {
        street?: string,
        city?: string,
        state?: string
    },
    isActive?: Boolean,
    registered?: any
}