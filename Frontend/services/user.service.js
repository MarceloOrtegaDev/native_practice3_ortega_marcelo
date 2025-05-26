
const Url = "http://10.0.2.2:3000/api/login";

export const loginUser = async (username, password) => {
    try {
        
        const response = await fetch(Url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        
        if (response.ok){
            const data = await response.json();
            return data;
        } else {
             throw new Error("Credenciales incorrectas");
        }
    } catch (error) {
        throw new Error("Credenciales incorrectas");    }
}