
//  setting up okay with the backend


export const register_user = async (formData : any) => {
    try {
        const res =  await fetch("/api/auth/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in Registering User (services) : " , error);
    }
}


export const login_user = async (formData : any) => {
    try {
        const res =  await fetch("/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in Login User (services) : " , error);
    }
}

export const reset_password = async (formData : any) => {
    try {
        const res =  await fetch("/api/auth/reset",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in Reset Password (services) : " , error);
    }
}