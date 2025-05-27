import { Platform } from "react-native";

const Url = Platform.OS === "web" 
  ? "http://localhost:3000/api/login" 
  : "http://10.0.2.2:3000/api/login";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(Url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      // puedes revisar status y lanzar distintos errores si quieres
      throw new Error("Credenciales incorrectas");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    // aquí podrías diferenciar errores de red o servidor
    throw new Error(error.message || "Error al iniciar sesión");
  }
};
