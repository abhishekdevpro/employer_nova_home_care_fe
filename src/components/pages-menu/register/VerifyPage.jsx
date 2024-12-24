import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyAccount = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `https://api.novahome.care/api/jobseeker/verifyaccount?token=${token}`
          );
          console.log(response, "new response");
          console.log(response.data, "response data");
          if (
            response ||
            response.data.status == "success" ||
            response.data.code == 200
          ) {
            toast.success(
              response.data.message || "Account verified successfully!"
            );

            // navigate("/login");
            window.location.href = "/login";
          }
        } catch (error) {
          console.error("Verification failed", error);
          toast.error(
            error.response?.data?.message || "Account verification failed."
          );
          //   navigate("/register");
          navigate("/login");
        }
      }
    };

    verifyAccount();
  }, [token, navigate]);

  return <></>;
};

export default VerifyPage;
