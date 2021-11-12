import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from 'sequelize';

const db = new Sequelize('mysql://root:my-secret-pw@localhost:3306/ts4_dev');

// // These are all the attributes in the User model
// interface UserAttributes {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// // Some attributes are optional in `User.build` and `User.create` calls
// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// export class User
//   extends Model<UserAttributes, UserCreationAttributes>
//   implements UserAttributes
// {
//   public id!: number; // Note that the `null assertion` `!` is required in strict mode.
//   public firstName!: string;
//   public lastName!: string;
//   public email!: string;

//   // timestamps!
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;

//   // Since TS cannot determine model association at compile time
//   // we have to declare them here purely virtually
//   // these will not exist until `Model.init` was called.
//   public getTweets!: HasManyGetAssociationsMixin<Tweet>; // Note the null assertions!
//   public addTweet!: HasManyAddAssociationMixin<Tweet, number>;
//   public hasTweet!: HasManyHasAssociationMixin<Tweet, number>;
//   public countTweets!: HasManyCountAssociationsMixin;
//   public createTweet!: HasManyCreateAssociationMixin<Tweet>;

//   // You can also pre-declare possible inclusions, these will only be populated if you
//   // actively include a relation.
//   public readonly tweets?: Tweet[]; // Note this is optional since it's only populated when explicitly requested in code

//   public static associations: {
//     tweets: Association<User, Tweet>;
//   };
// }

// interface TweetAttributes {
//   id: number;
//   userId: number;
//   title: string;
//   text: string;
// }

// interface TweetCreationAttributes extends Optional<TweetAttributes, 'id'> {}

// class Tweet
//   extends Model<TweetAttributes, TweetCreationAttributes>
//   implements TweetAttributes
// {
//   public id!: number;
//   public userId!: number;
//   public title!: string;
//   public text!: string;

//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// Tweet.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//     },
//     title: {
//       type: new DataTypes.STRING(128),
//       allowNull: false,
//     },
//     text: {
//       type: new DataTypes.STRING(512),
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: db,
//     tableName: 'projects',
//   }
// );

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     firstName: {
//       type: new DataTypes.STRING(128),
//       allowNull: false,
//     },
//     lastName: {
//       type: new DataTypes.STRING(128),
//       allowNull: true,
//     },
//     email: {
//       type: new DataTypes.STRING(128),
//       allowNull: true,
//     },
//   },
//   {
//     tableName: 'Users',
//     sequelize: db, // passing the `sequelize` instance is required
//   }
// );

// // Here we associate which actually populates out pre-declared `association` static and other methods.
// User.hasMany(Tweet, {
//   sourceKey: 'id',
//   foreignKey: 'userId',
//   as: 'tweets', // this determines the name in `associations`!
// });

// export async function doStuffWithUser() {
//   const newUser = await User.create({
//     firstName: 'Johnny',
//     lastName: 'Mnemonic',
//     email: 'john.m@gmail.com',
//   });
//   (({ firstName, lastName, email }) =>
//     console.log({ firstName, lastName, email }))(newUser);

//   // const tweet = await newUser.createTweet({
//   //   title: 'first title!',
//   //   text: 'tweet content',
//   // });

//   const ourUser = await User.findByPk(1, {
//     include: [User.associations.tweets],
//     rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
//   });

//   // Note the `!` null assertion since TS can't know if we included
//   // the model or not
//   console.log('DO STUFF WITH USER', ourUser.tweets![0].title);
// }

export default db;
