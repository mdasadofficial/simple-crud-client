
import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;

const user = await getUserById(userId);
console.log(user);
  return (
    <div>
      <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
    </div>
  );
};

export default UserDetailPage;
