'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      'Users', 
        [
          {
            full_name: "Lucky Laurens",
            email: "luckylaurens1511@gmail.com",
            phone_number : "082290100141",
            password : "password",
            date_of_birth : "2002-11-15"
          },
          {
            full_name: "Rizki Putra Awali",
            email: "rizkiputraawali@gmail.com",
            phone_number : "08221231231",
            password : "password",
            date_of_birth : "1988-01-01"
          }
        ], {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
