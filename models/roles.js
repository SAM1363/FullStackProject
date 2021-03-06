'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    role: DataTypes.STRING
  }, {});
  roles.associate = function(models) {
    // associations can be defined here
    roles.hasMany(models.users,{
      onDelete:'CASCADE',
      foreignKey:'role_id'
    });
  };
  return roles;
};