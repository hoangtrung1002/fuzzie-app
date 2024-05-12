"use server";

import { db } from "../db";

const removeProfileImage = async () => {
  const response = await db.user.update({
    where: { clerkId: authUser.id },
    data: { profileImage: "" },
  });
  return response;
};
