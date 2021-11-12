import User from './User';
import Post from './Post';

User.hasMany(Post, { sourceKey: 'id' });
Post.belongsTo(User, { targetKey: 'id' });
