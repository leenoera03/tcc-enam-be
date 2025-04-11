import { Sequelize } from "sequelize";

const db = new Sequelize('task2_db', 'root','', {
    host: '35.238.144.225',
    dialect: 'mysql',
} );

export default db;
