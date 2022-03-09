import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  isSucces: false,
  message: "",
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async () => {
  try {
    return await postsService.getById();
  } catch (error) {
    console.error(error);
  }
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  try {
    console.log(post);
    return await postsService.createPost(post);
  } catch (error) {
    console.error(error);
  }
});

export const updatePost = createAsyncThunk("posts/updatePost", async(_id)=>{
  try{
    return await postsService.updatePost(_id);
  }catch(error){
    console.error(error);
  }
})

export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
  try {
    return await postsService.deletePost(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostByName = createAsyncThunk("posts/getByName", async (title) => {
  try {
    return await postsService.getPostByName(title);
  } catch (error) {
    console.error(error);
  }
});

export const like = createAsyncThunk("posts/like", async (_id) => {
  try {
    return await postsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});

export const dislike = createAsyncThunk("posts/dislike", async (_id) => {
  try {
    return await postsService.dislike(_id);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload._id.toString()
        );
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [action.payload,...state.posts]
    })
      .addCase(dislike.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post;
        });
        state.posts = posts;
      })
      .addCase(like.fulfilled, (state, action) => {
        console.log(action.payload);
        const posts = state.posts.map((post) => {
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post;
        });
        state.posts = posts;
      });
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
