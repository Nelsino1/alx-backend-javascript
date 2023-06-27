export default function asyncUploadUser;

import { uploadPhoto, createUser } from "./utils.js";

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

// export default asyncUploadUser;
