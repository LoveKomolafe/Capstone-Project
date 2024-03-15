import { auth, db } from "../firebase";

const profileService = {
  updateProfile: async (userId, profileData) => {

    console.log(db)
    try {
      // const userId = auth.currentUser.uid;

      await db.collection("profiles").doc(userId).set(profileData);
      return true;
    } catch (error) {
      console.log("Error updating profile: ", error);
      return false;
    }
  },
};

// Function to get profile data from Firebase

getProfile: async (userId) => {
  try {
    const profileRef = await db.collection("profiles").doc(userId).get();
    if (profileRef.exists) {
      const profileData = profileRef.data();
      return profileData;
    } else {
      console.log("Profile not found for user: ", userId);
      return null;
    }
  } catch (error) {
    console.error("Error getting profile: ", error);
    return null;
  }
};

export default profileService;
