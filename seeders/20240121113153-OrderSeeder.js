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
      'Orders', 
        [
          {
            user_id: 1,
            item_id: 1,
            qty : 2
          },
          {
            user_id: 1,
            item_id: 3,
            qty : 1
          },
          {
            user_id: 1,
            item_id: 5,
            qty : 1
          },
          {
            user_id: 2,
            item_id: 2,
            qty : 3
          },
          {
            user_id: 2,
            item_id: 4,
            qty : 1
          },
          {
            user_id: 1,
            item_id: 4,
            qty : 2
          },
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
