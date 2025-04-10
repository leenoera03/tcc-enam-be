import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// pake users
const User = db.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false // nama
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // email
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false // notes
    }
}, {
    tableName: "users",
    freezeTableName: true,
    timestamps: false // Matikan createdAt dan updatedAt otomatis
});

export default User;

// try-catch biar tau klo server macet waktu sync
(async () => {
    try {
        await db.sync();
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Database sync error:", error);
    }
})();
