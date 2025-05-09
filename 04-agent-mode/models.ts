import { Schema, model } from 'mongoose';

// User Schema
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  bio: { type: String },
  location: { type: String },
  profileImage: { type: String },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

// Post Schema
const PostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String },
  image: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'User' },
      text: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

// Friend/Follower Schema
const FriendSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

// Models
const User = model('User', UserSchema);
const Post = model('Post', PostSchema);
const Friend = model('Friend', FriendSchema);

export { User, Post, Friend };