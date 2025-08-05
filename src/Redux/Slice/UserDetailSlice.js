import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAction
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const res = await fetch(
      "https://688f92e2f21ab1769f899a85.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await res.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//readUSER

export const showUser = createAsyncThunk(
  "showUser",
  async (__, { rejectWithValue }) => {
    const res = await fetch("https://688f92e2f21ab1769f899a85.mockapi.io/crud");

    try {
      const result = await res.json();

      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
//DeleteUSER

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const res = await fetch(
      `https://688f92e2f21ab1769f899a85.mockapi.io/crud/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await res.json();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//EditUSER

export const editUser = createAsyncThunk(
  "editUser",
  async (data, { rejectWithValue }) => {
    console.log("Data", data);

    const response = await fetch(
      `https://688f92e2f21ab1769f899a85.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //Handle ShowUser
    builder.addCase(showUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    //Handle DeletUser
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((ele) => ele.id != action.payload.id);
    });

    //HAndle UserEdit
    builder.addCase(editUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.loading = false;

      state.users = state.users.map((item) =>
        item.id === action.payload.id ? state.users.push(action.payload) : item
      );
    });
  },
});

export default userDetail.reducer;
