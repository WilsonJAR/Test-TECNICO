import axios from "axios";

const allCharacter = async () => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character");

    return response.data;
  } catch (error) {
    console.log(error);
    
    throw error;
  }
};

export default allCharacter;