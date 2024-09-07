import ProfilePage from "@/components/Dashboard/ProfilePage";
import React from "react";

const Profile = () => {
  const user = {
    firstName: "Ram",
    lastName: "Singh",
    phoneNo:"7877669925",
    profileImage: "",
  };
  return <ProfilePage user={user} />;
};

export default Profile;
