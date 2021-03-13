'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [{
        "firstName": "Valerie",
        "lastName": "Ivanova",
        "username": "valerie",
        "profileDescription": "hi welcome to my wishlist",
        "createdAt": new Date(), "updatedAt": new Date(),
      }],
      {}
    );
    const firstUserId = (await queryInterface.sequelize.query(
      `SELECT id FROM "Users";`
    ))[0][0].id;
    await queryInterface.bulkInsert(
      'Products',
      [
        { source: "https://www.ozon.ru/context/detail/id/141977985", UserId: firstUserId, "createdAt": new Date(), "updatedAt": new Date(), },
        { source: "https://www.ozon.ru/context/detail/id/168125487", UserId: firstUserId, "createdAt": new Date(), "updatedAt": new Date(), },
        { source: "https://www.ozon.ru/context/detail/id/208565057", UserId: firstUserId, "createdAt": new Date(), "updatedAt": new Date(), },
        { source: "https://www.ozon.ru/context/detail/id/205958752", UserId: firstUserId, "createdAt": new Date(), "updatedAt": new Date(), },
        { source: "https://www.ozon.ru/context/detail/id/194084035", UserId: firstUserId, "createdAt": new Date(), "updatedAt": new Date(), },
        { source: "https://www.ozon.ru/context/detail/id/191321443", UserId: firstUserId, "createdAt": new Date(), "updatedAt": new Date(), },
        { source: "https://www.ozon.ru/context/detail/id/195145484", UserId: firstUserId, "createdAt": new Date(), "updatedAt": new Date(), },
      ],
      {}
    )
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
