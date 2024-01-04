"use client";

import React from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: string;
}) => {
  const router = useRouter();

  return (
    <form
      className="hidden"
      action={action}
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(action, {
          method: "POST",
          body: formData,
          redirect: "manual",
        });
        console.log(response);
        if (response.status === 0) {
          // redirected
          // when using `redirect: "manual"`, response status 0 is returned
          return router.refresh();
        } else {
          window.alert(
            "Server Received An Error - idk will fine tune error handling sometime"
          );
        }
      }}
    >
      {children}
    </form>
  );
};

export default AuthForm;
