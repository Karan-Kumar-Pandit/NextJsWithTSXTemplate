import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

interface BlogState {
  blogs: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios.get('/api/blogs');
  return response.data;
});

export const createBlog = createAsyncThunk('blogs/createBlog', async (blog: Omit<BlogPost, 'id'>) => {
  const response = await axios.post('/api/blogs', blog);
  return response.data;
});

export const updateBlog = createAsyncThunk('blogs/updateBlog', async (blog: BlogPost) => {
  const response = await axios.put(`/api/blogs/${blog.id}`, blog);
  return response.data;
});

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id: string) => {
  await axios.delete(`/api/blogs/${id}`);
  return id;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch blogs';
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      });
  },
});

export const blogReducer = blogSlice.reducer;
