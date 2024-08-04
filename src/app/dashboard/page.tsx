"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddArchiveProjects from "@/components/dashboard/AddArchiveProjects";
import AddSiglePost from "@/components/dashboard/AddSinglePost";

export default function Dashboard() {
  const session = useSession();
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className=" mx-auto max-w-6xl">
      <div className=" my-8 mt-5 text-center text-3xl font-semibold text-primary-color">
        Dashboard
      </div>
      {session?.data?.user.isAdmin ? (
        <div>
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="dashboard_button"
          >
            {isClicked ? "Add Post" : "Add Project"}
          </button>
          {isClicked ? <AddArchiveProjects /> : <AddSiglePost />}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => signOut()}
            className="dashboard_button border-red-600 text-red-500 hover:text-red-600"
          >
            Sign Out From this Email
          </button>

          <div className="my-8 text-center text-2xl font-semibold">
            You are not authorized to access this page
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
