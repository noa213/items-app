"use client";
// import React from 'react'
// import React, { useState, /*useEffect*/ } from "react";
// import { useNavigate } from "react-router-dom";

import IError from "@/app/types/error";
import React, { useState } from "react";
import { z, ZodError } from "zod";

const Auth = () => {
  //   const navigate = useNavigate();
  //   sessionStorage.clear();
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [status /*setStatus*/] = useState("log");

  const userSchema = z.object({
    idNumber: z.string().min(9, "ID must contain at least 9 characters"),
    firstName: z
      .string()
      .min(2, "First name must contain at least 2 characters"),
    lastName: z.string().min(2, "Last name must contain at least 2 characters"),
    dateOfBirth: z
      .date()
      .max(new Date(), { message: "Date of birth must be in the past" }),
    email: z.string().email("Invalid email"),
  });

  const [formData, setFormData] = useState({
    idNumber: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
  });

  const [errors, setErrors] = useState<IError>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validData = {
        ...formData,
        dateOfBirth: new Date(formData.dateOfBirth),
      };

      userSchema.parse(validData);
      alert("User registered successfully!");

  
      //     const data = await fetch("http://localhost:3090/customers/signIn", {
      //       method: "PUT",
      //       headers: {
      //         Accept: "application/json",
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         userName: userName,
      //         email: email,
      //         password: password,
      //       }),
      //     });
      //     const customer = await data.json();
      //     console.log(customer);
      //     if (!customer) {
      //       alert("מייל זה בשימוש");
      //     } else {
      //       navigate(`/osher-ad.co.il/market/${customer.type}`, {
      //         state: customer.user[0],
      //       });
      //     }
    } catch (err) {
      if (err instanceof ZodError) {
        const formattedErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          formattedErrors[error.path[0]] = error.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  //   useEffect(() => {}, []);
  //   const insertUserName = (event) => {
  //     setUserName(event.target.value);
  //   };
  //   const insertPassword = (event) => {
  //     setPassword(event.target.value);
  //   };
  //   const insertEmail = (event) => {
  //     setEmail(event.target.value);
  //   };
  const logContinue = async () => {
    //     const data = await fetch("http://localhost:3090/customers/logIn", {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         userName: userName,
    //         email: email,
    //         password: password,
    //       }),
    //     });
    //     const customer = await data.json();
    //     console.log(customer);
    //     if (customer == false) {
    //       alert("נא להרשם!");
    //       setStatus("sign");
    //     } else {
    //       sessionStorage.setItem("currentuser", JSON.stringify(customer.user[0]));
    //       navigate(`/osher-ad.co.il/market/${customer.type}`, {
    //         state: customer.user[0],
    //       });
    //     }
  };
  // const signContinue = async () => {
  //     const data = await fetch("http://localhost:3090/customers/signIn", {
  //       method: "PUT",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userName: userName,
  //         email: email,
  //         password: password,
  //       }),
  //     });
  //     const customer = await data.json();
  //     console.log(customer);
  //     if (!customer) {
  //       alert("מייל זה בשימוש");
  //     } else {
  //       navigate(`/osher-ad.co.il/market/${customer.type}`, {
  //         state: customer.user[0],
  //       });
  //     }
  //   };
  //   const ConfirmPassword = (event) => {
  //     if (password != event.target.value) alert("הסיסמאות אינן תואמות, נסה שוב");
  // };
  const change = () => {
    // status == "log" ? setStatus("sign") : setStatus("log");
  };
  if (status == "log") {
    return (
      <div className="form" id="login">
        <h1 className="form_title">Login</h1>
        <div className="login_field">
          <input
            type="text"
            // onBlur={insertUserName}
            className="logIn_input"
            autoFocus
            placeholder="User Name"
          />
        </div>
        <div className="login_field">
          <input
            type="email"
            // onBlur={insertEmail}
            className="logIn_input"
            placeholder="Email"
          />
        </div>
        <div className="login_field">
          <input
            type="password"
            // onBlur={insertPassword}
            className="logIn_input"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={logContinue} className="form_button">
          Continue
        </button>
        <p className="form_text">
          <a href="#" className="form_link" onClick={change}>
            Dont have an account? create account
          </a>
        </p>
      </div>
    );
  } else {
    return (
      // <div className="form" id="createAccount">
      //   <h1 className="form_title">Create Account</h1>
      //   <div className="login_field">
      //     <input
      //       type="text"
      //       // onBlur={insertUserName}
      //       className="signIn_input"
      //       autoFocus
      //       placeholder="User Name"
      //     />
      //   </div>
      //   <div className="login_field">
      //     <input
      //       type="email"
      //       // onBlur={insertEmail}
      //       className="logIn_input"
      //       placeholder="Email"
      //     />
      //   </div>
      //   <div className="login_field">
      //     <input
      //       type="password"
      //       // onBlur={insertPassword}
      //       className="signIn_input"
      //       placeholder="Password"
      //     />
      //   </div>
      //   <div className="login_field">
      //     <input
      //       type="password"
      //       // onBlur={ConfirmPassword}
      //       className="signIn_input"
      //       placeholder="Confirm Password"
      //     />
      //   </div>
      //   <button type="submit" onClick={signContinue} className="form_button">
      //     Continue
      //   </button>
      //   <p className="form_text">
      //     <a href="#" className="form_link" onClick={change}>
      //       Already have an account? Sign in
      //     </a>
      //   </p>
      // </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-8 mb-8"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        <label className="block text-gray-700 text-sm font-medium mb-4">
          ID Number:
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-300"
          />
          {errors.idNumber && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.idNumber}
            </p>
          )}
        </label>

        <label className="block text-gray-700 text-sm font-medium mb-4">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-300"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.firstName}
            </p>
          )}
        </label>

        <label className="block text-gray-700 text-sm font-medium mb-4">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-300"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.lastName}
            </p>
          )}
        </label>

        <label className="block text-gray-700 text-sm font-medium mb-4">
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-300"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.dateOfBirth.toString()}
            </p>
          )}
        </label>

        <label className="block text-gray-700 text-sm font-medium mb-4">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-300"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
          )}
        </label>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 mt-6"
        >
          Register
        </button>
      </form>
    );
  }
};

export default Auth;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// function SignOrLog() {
//   const navigate = useNavigate();
//   sessionStorage.clear();

// const [userName, setUserName] = useState("");
// const [password, setPassword] = useState("");
// const [email, setEmail] = useState("");

//   const [status, setStatus] = useState("log");

//   useEffect(() => {}, []);

//   const insertUserName = (event) => {
//     setUserName(event.target.value);
//   };

//   const insertPassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const insertEmail = (event) => {
//     setEmail(event.target.value);
//   };

// const logContinue = async () => {
//     const data = await fetch("http://localhost:3090/customers/logIn", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userName: userName,
//         email: email,
//         password: password,
//       }),
//     });
//     const customer = await data.json();
//     console.log(customer);
//     if (customer == false) {
//       alert("נא להרשם!");
//       setStatus("sign");
//     } else {
//       sessionStorage.setItem("currentuser", JSON.stringify(customer.user[0]));
//       navigate(`/osher-ad.co.il/market/${customer.type}`, {
//         state: customer.user[0],
//       });
//     }
// };

//   const signContinue = async () => {
//     const data = await fetch("http://localhost:3090/customers/signIn", {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userName: userName,
//         email: email,
//         password: password,
//       }),
//     });
//     const customer = await data.json();
//     console.log(customer);
//     if (!customer) {
//       alert("מייל זה בשימוש");
//     } else {
//       navigate(`/osher-ad.co.il/market/${customer.type}`, {
//         state: customer.user[0],
//       });
//     }
//   };

//   const ConfirmPassword = (event) => {
//     if (password != event.target.value) alert("הסיסמאות אינן תואמות, נסה שוב");
//   };

// const change = () => {
// status == "log" ? setStatus("sign") : setStatus("log");
// };

//   if (status == "log") {
// return (
//   <div className="form" id="login">
//     <h1 className="form_title">Login</h1>
//     <div className="login_field">
//       <input
//         type="text"
//         // onBlur={insertUserName}
//         className="logIn_input"
//         autoFocus
//         placeholder="User Name"
//       />
//     </div>
//     <div className="login_field">
//       <input
//         type="email"
//         // onBlur={insertEmail}
//         className="logIn_input"
//         placeholder="Email"
//       />
//     </div>
//     <div className="login_field">
//       <input
//         type="password"
//         // onBlur={insertPassword}
//         className="logIn_input"
//         placeholder="Password"
//       />
//     </div>
//     <button type="submit" onClick={logContinue} className="form_button">
//       Continue
//     </button>
//     <p className="form_text">
//       <a href="#" className="form_link" onClick={change}>
//         Dont have an account? create account
//       </a>
//     </p>
//   </div>
// );
//   } else {
//     return (
//       <div className="form" id="createAccount">
//         <h1 className="form_title">Create Account</h1>
//         <div className="login_field">
//           <input
//             type="text"
//             onBlur={insertUserName}
//             className="signIn_input"
//             autoFocus
//             placeholder="User Name"
//           />
//         </div>
//         <div className="login_field">
//           <input
//             type="email"
//             onBlur={insertEmail}
//             className="logIn_input"
//             placeholder="Email"
//           />
//         </div>
//         <div className="login_field">
//           <input
//             type="password"
//             onBlur={insertPassword}
//             className="signIn_input"
//             placeholder="Password"
//           />
//         </div>
//         <div className="login_field">
//           <input
//             type="password"
//             onBlur={ConfirmPassword}
//             className="signIn_input"
//             placeholder="Confirm Password"
//           />
//         </div>
//         <button type="submit" onClick={signContinue} className="form_button">
//           Continue
//         </button>
//         <p className="form_text">
//           <a href="#" className="form_link" onClick={change}>
//             Already have an account? Sign in
//           </a>
//         </p>
//       </div>
//     );
//   }
// }

// export default SignOrLog;
