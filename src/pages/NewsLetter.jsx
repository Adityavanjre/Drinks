import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/newsletter");
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        {" "}
        Newsletter{" "}
      </h4>

      {/* name */}

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          name="name"
          required
        />
      </div>
      {/* lastName */}

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last Name
        </label>
        <input
          type="text"
          className="form-input"
          id="lastName"
          name="lastName"
          required
        />
      </div>
      {/* email */}

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          id="email"
          name="email"
          required
        />
      </div>
      <button type="submit" className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default NewsLetter;
