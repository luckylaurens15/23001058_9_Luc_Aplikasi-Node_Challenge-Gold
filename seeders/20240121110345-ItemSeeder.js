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
      'Items', 
        [
          {
            item_name: "Mouse Logitech G102",
            price: 200000,
            stock : 10
          },
          {
            item_name: "Nike Air Force 1",
            price: 1599000,
            stock : 50
          },
          {
            item_name: "Jersey Manchester United 23/24",
            price: 10000,
            stock : 100
          },
          {
            item_name: "Corkcicle 24oz",
            price: 500000,
            stock : 10
          },
          {
            item_name: "Case Iphone 12 Pro",
            price: 150000,
            stock : 75
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
