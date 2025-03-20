// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { checkUser, createUser, signOut } from "./authApi";

// const initialState = {
//   loggedInUser: null,
//   status: "idle",
//   error: null,
// };

// export const createUserAsync = createAsyncThunk(
//   "auth/createUser",
//   async (userData) => {
//     const response = await createUser(userData);
//     return response.data;
//   }
// );

// export const checkUserAsync = createAsyncThunk(
//   "auth/checkUser",
//   async (loginInfo) => {
//     const response = await checkUser(loginInfo);
//     return response.data;
//   }
// );

// export const signOutAsync = createAsyncThunk(
//   "auth/signOut",
//   async () => {
//     const response = await signOut();
//     return response.data;
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUserAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(createUserAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.loggedInUser = action.payload;
//       })
//       .addCase(createUserAsync.rejected, (state, action) => {
//         state.status = "idle";
//         state.error = action.error;
//       })
//       .addCase(checkUserAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(checkUserAsync.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.loggedInUser = action.payload;
//       })
//       .addCase(checkUserAsync.rejected, (state, action) => {
//         state.status = "idle";
//         state.error = action.error;
//       })
//       .addCase(signOutAsync.fulfilled, (state) => {
//         state.loggedInUser = null;
//       });
//   },
// });

// export const selectLoggedInUser = (state) => state.auth.loggedInUser;
// export const selectError = (state) => state.auth.error;

// export default authSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkUser, createUser, signOut } from "./authApi";

// Initial state
const initialState = {
  loggedInUser: null,
  status: "idle",  // To track the loading state of async actions
  error: null,     // To store any error that occurs during the async calls
};

// Create user async thunk
export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

// Check user async thunk (for login)
export const checkUserAsync = createAsyncThunk(
  "auth/checkUser",
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    return response.data;
  }
);

// Sign out async thunk
export const signOutAsync = createAsyncThunk(
  "auth/signOut",
  async () => {
    await signOut();  // Call the sign-out API or clear session/cookies
    return null;  // Returning null to reset loggedInUser
  }
);

// Auth Slice with reducers and extraReducers to handle async actions
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create User
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload; // Set logged in user data
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })

      // Check User (Login)
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload; // Set logged in user data
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })

      // Sign Out
      .addCase(signOutAsync.fulfilled, (state) => {
        state.loggedInUser = null; // Reset user data on sign out
      });
  },
});

// Selector to get logged-in user from state
export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;
export const selectStatus = (state) => state.auth.status;

export default authSlice.reducer;
