"use server";

import { currentUser } from "@clerk/nextjs";
import { db } from "../db";

export const removeProfileImage = async () => {
  const authUser = await currentUser();
  if (!authUser) return;

  const response = await db.user.update({
    where: { clerkId: authUser.id },
    data: { profileImage: "" },
  });
  return response;
};

export const uploadProfileImage = async (image: string) => {
  const authUser = await currentUser();

  if (!authUser) return;

  try {
    const id = authUser.id;
    const response = await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInfo = async (name: string) => {
  const authUser = await currentUser();
  if (!authUser) return;
  try {
    const updateUser = await db.user.update({
      where: { clerkId: authUser.id },
      data: { name },
    });
    return updateUser;
  } catch (error) {
    console.error(error);
  }
};
