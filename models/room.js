'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      this.Facilities = Room.hasMany(models.Facilities, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "room_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
      this.Book = Room.hasMany(models.Book, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "room_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
    }
  }
  Room.init({
    room_id :  {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    room_name : DataTypes.STRING,
    price : DataTypes.INTEGER,
    category_name : DataTypes.STRING,
    available : DataTypes.INTEGER,
    main_image : DataTypes.STRING,
    detail_image1 : DataTypes.STRING,
    detail_image2 : DataTypes.STRING,
    detail_image3 : DataTypes.STRING,
    discount : DataTypes.FLOAT,
    room_description : DataTypes.TEXT,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms'
  });
  return Room;
};