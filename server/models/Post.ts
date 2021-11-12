import { DataTypes, Model } from 'sequelize';
import { Optional } from 'sequelize/types';
import db from '../libs/db';

interface PostAttributes {
  id: number;
  text: string;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

export interface PostInstance
  extends Model<PostAttributes, PostCreationAttributes>,
    PostAttributes {}

const Post = db.define<PostInstance>('Post', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING(512),
    allowNull: false,
  },
});

export default Post;
