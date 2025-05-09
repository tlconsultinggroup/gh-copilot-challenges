import { User, Post, Friend } from '../04-agent-mode/models';
import mongoose from 'mongoose';

jest.setTimeout(20000);

describe('Models Test Suite', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb');
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  test('User model should save a user', async () => {
    const user = new User({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    });
    const savedUser = await user.save();
    expect(savedUser.email).toBe('test@example.com');
  });

  test('Post model should save a post', async () => {
    const user = new User({
      email: 'postuser@example.com',
      password: 'password123',
    });
    const savedUser = await user.save();

    const post = new Post({
      userId: savedUser._id,
      text: 'This is a test post',
    });
    const savedPost = await post.save();
    expect(savedPost.text).toBe('This is a test post');
  });

  test('Friend model should save a friend relationship', async () => {
    const user1 = new User({
      email: 'friend1@example.com',
      password: 'password123',
    });
    const user2 = new User({
      email: 'friend2@example.com',
      password: 'password123',
    });
    const savedUser1 = await user1.save();
    const savedUser2 = await user2.save();

    const friend = new Friend({
      userId: savedUser1._id,
      friends: [savedUser2._id],
    });
    const savedFriend = await friend.save();
    expect(savedFriend.friends).toContainEqual(savedUser2._id);
  });
});