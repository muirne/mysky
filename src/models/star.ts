// import {Model, Sequelize, DataTypes} from 'sequelize';
// import {Constellation} from "./contellation";
// import {sequelize} from "../config/database";
//
// export class Star extends Model {
//     public id!: number;
//     public name!: string;
//     public description!: string;
//     public imageLink!: string;
//     public constellationId!: number;
//
//     public readonly constellation?: Constellation;
// }
//
// Star.init(
//     {
//         id: {
//             type: DataTypes.INTEGER.UNSIGNED,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         imageLink: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         constellationId: {
//             type: DataTypes.INTEGER.UNSIGNED,
//             allowNull: false,
//             references: {
//                 model: Constellation,
//                 key: 'id',
//             },
//         },
//     },
//     {
//         sequelize,
//         tableName: 'stars',
//     },
// );
// Star.sync().then((result) => console.log("The result: " + result));
//
