import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function AuthLayer({ children, authentication }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useState((state) => state.auth.status);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setErrors("");
    setLoading(true);
    try {
      if (authentication && authStatus == !authentication) {
        navigate("/login");
      } else if (!authentication && authStatus == !authentication) {
        navigate("/");
      }
    } catch (error) {
      setErrors(error.message);
    }
    setLoading(false)
  }, [authentication, navigate]);

  return loading ? <div>Loading Component</div> : { children };
}

export default AuthLayer;
