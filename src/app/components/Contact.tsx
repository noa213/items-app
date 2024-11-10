import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function SignOrLog() {
//   const navigate = useNavigate();
//   sessionStorage.clear();

//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

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

//   const logContinue = async () => {
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
//   };

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

//   const change = () => {
//     status == "log" ? setStatus("sign") : setStatus("log");
//   };

//   if (status == "log") {
//     return (
//       <div className="form" id="login">
//         <h1 className="form_title">Login</h1>
//         <div className="login_field">
//           <input
//             type="text"
//             onBlur={insertUserName}
//             className="logIn_input"
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
//             className="logIn_input"
//             placeholder="Password"
//           />
//         </div>
//         <button type="submit" onClick={logContinue} className="form_button">
//           Continue
//         </button>
//         <p className="form_text">
//           <a href="#" className="form_link" onClick={change}>
//             Dont have an account? create account
//           </a>
//         </p>
//       </div>
//     );
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
