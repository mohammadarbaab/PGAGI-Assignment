// import { useDispatch, useSelector } from "react-redux";
// import { checkUserAsync, selectError, selectLoggedInUser } from "../store/auth/authSlice";
// import { useForm } from "react-hook-form";
// import { useRouter } from 'next/router';  // Import useRouter

// export default function Login() {
//   const dispatch = useDispatch();
//   const error = useSelector(selectError);
//   const user = useSelector(selectLoggedInUser);

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const router = useRouter(); // Initialize the router

//   // Redirect to home if the user is already logged in
//   if (user) {
//     router.push("/");  // Redirect to the home page using Next.js's useRouter
//     return null;  // Return nothing until the redirect happens
//   }

//   const onSubmit = (data) => {
//     dispatch(checkUserAsync({ email: data.email, password: data.password }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Sign in to your account
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <div className="mt-1">
//               <input
//                 id="email"
//                 type="email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
//                     message: "Email is not valid",
//                   },
//                 })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="mt-1">
//               <input
//                 id="password"
//                 type="password"
//                 {...register("password", {
//                   required: "Password is required",
//                 })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
//                 placeholder="Enter your password"
//               />
//               {errors.password && (
//                 <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
//               )}
//             </div>
//           </div>

//           {error && (
//             <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-sm text-red-600">{error.message}</p>
//             </div>
//           )}

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a
//               href="/signup"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useDispatch, useSelector } from "react-redux";
// import { checkUserAsync, selectError, selectLoggedInUser, createUserAsync } from "../store/auth/authSlice";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Auth() {
//   const dispatch = useDispatch();
//   const error = useSelector(selectError);
//   const user = useSelector(selectLoggedInUser);

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const router = useRouter();

//   const [isSignUp, setIsSignUp] = useState(false);  // State to toggle between login and signup

//   // Redirect to home if the user is already logged in
//   if (user) {
//     router.push("/");
//     return null;
//   }

//   const onSubmit = (data) => {
//     if (isSignUp) {
//       // Handle signup
//       dispatch(createUserAsync(data))
//         .unwrap()
//         .then(() => {
//           router.push("/"); // Redirect to home after successful signup
//         })
//         .catch((err) => {
//           console.error("Signup failed:", err);
//         });
//     } else {
//       // Handle login
//       dispatch(checkUserAsync({ email: data.email, password: data.password }));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">{isSignUp ? "Create an Account" : "Welcome Back"}</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             {isSignUp ? "Join us to get started" : "Sign in to your account"}
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <div className="mt-1">
//               <input
//                 id="email"
//                 type="email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
//                     message: "Email is not valid",
//                   },
//                 })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="mt-1">
//               <input
//                 id="password"
//                 type="password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: isSignUp ? {
//                     value: 6,
//                     message: "Password must be at least 6 characters"
//                   } : undefined
//                 })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
//                 placeholder="Enter your password"
//               />
//               {errors.password && (
//                 <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
//               )}
//             </div>
//           </div>

//           {error && (
//             <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-sm text-red-600">{error.message}</p>
//             </div>
//           )}

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
//             >
//               {isSignUp ? "Sign Up" : "Sign In"}
//             </button>
//           </div>
//         </form>

//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
//             <a
//               onClick={() => setIsSignUp(!isSignUp)}  // Toggle between login and signup
//               className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
//             >
//               {isSignUp ? "Log in" : "Sign up"}
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





// OHKEY
// import { useDispatch, useSelector } from "react-redux";
// import {
//   checkUserAsync,
//   selectError,
//   selectLoggedInUser,
//   createUserAsync,
// } from "../store/auth/authSlice";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Auth() {
//   const dispatch = useDispatch();
//   const error = useSelector(selectError);
//   const user = useSelector(selectLoggedInUser);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const router = useRouter();

//   const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup

//   // Redirect to home if the user is already logged in
//   if (user) {
//     router.push("/");
//     return null;
//   }

//   const onSubmit = (data) => {
//     if (isSignUp) {
//       // Handle signup
//       dispatch(createUserAsync(data))
//         .unwrap()
//         .then(() => {
//           router.push("/"); // Redirect to home after successful signup
//         })
//         .catch((err) => {
//           console.error("Signup failed:", err);
//         });
//     } else {
//       // Handle login
//       dispatch(checkUserAsync({ email: data.email, password: data.password }));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">
//             {isSignUp ? "Create an Account" : "Welcome Back"}
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             {isSignUp ? "Join us to get started" : "Sign in to your account"}
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email address
//             </label>
//             <div className="mt-1">
//               <input
//                 id="email"
//                 type="email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
//                     message: "Email is not valid",
//                   },
//                 })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="mt-2 text-sm text-red-600">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="mt-1">
//               <input
//                 id="password"
//                 type="password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: isSignUp
//                     ? {
//                         value: 6,
//                         message: "Password must be at least 6 characters",
//                       }
//                     : undefined,
//                 })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
//                 placeholder="Enter your password"
//               />
//               {errors.password && (
//                 <p className="mt-2 text-sm text-red-600">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {error && (
//             <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-sm text-red-600">{error.message}</p>
//             </div>
//           )}

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
//             >
//               {isSignUp ? "Sign Up" : "Sign In"}
//             </button>
//           </div>
//         </form>

//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
//             <a
//               onClick={() => setIsSignUp(!isSignUp)} // Toggle between login and signup
//               className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
//             >
//               {isSignUp ? "Log in" : "Sign up"}
//             </a>
//           </p>
//         </div>

       
//       </div>
//     </div>
//   );
// }









import { useDispatch, useSelector } from "react-redux";
import {
  checkUserAsync,
  selectError,
  selectLoggedInUser,
  createUserAsync,
} from "../store/auth/authSlice";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react"; // Import signIn from next-auth/react

export default function Auth() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const user = useSelector(selectLoggedInUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup

  // Redirect to home if the user is already logged in
  if (user) {
    router.push("/");
    return null;
  }

  const onSubmit = (data) => {
    if (isSignUp) {
      // Handle signup
      dispatch(createUserAsync(data))
        .unwrap()
        .then(() => {
          router.push("/"); // Redirect to home after successful signup
        })
        .catch((err) => {
          console.error("Signup failed:", err);
        });
    } else {
      // Handle login
      dispatch(checkUserAsync({ email: data.email, password: data.password }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isSignUp ? "Join us to get started" : "Sign in to your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: "Email is not valid",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: isSignUp
                    ? {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      }
                    : undefined,
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error.message}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>

        {/* Google Login Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => signIn("google")} // Trigger Google Sign-In
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
          >
            Sign In with Google
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <a
              onClick={() => setIsSignUp(!isSignUp)} // Toggle between login and signup
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              {isSignUp ? "Log in" : "Sign up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
