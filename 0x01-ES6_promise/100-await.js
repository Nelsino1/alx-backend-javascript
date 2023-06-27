/*import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;*/

// utils.js
export const uploadPhoto = async () => {
  // Upload logic here
};

export const createUser = async () => {
  // Create user logic here
};

// 100-main.js
import { uploadPhoto, createUser } from "./utils";

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user
    };
  } catch (error) {
    // Handle any errors that occurred during photo upload or user creation
    console.error("Error:", error);
    throw error;
  }
};

export default asyncUploadUser;

