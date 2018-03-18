module.exports = (sequelize, DataTypes) => {
    const DeliveryType = sequelize.define('DeliveryType', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {});

    DeliveryType.associate = (models) => {
    };

    return DeliveryType;
};
