'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('occasions').del()
    .then(function () {
      // Inserts seed entries
      return knex('occasions').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Kay Lyn\'s birthday',
          day_of: new Date('2018-01-21'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          name: 'Nathan Grigg\'s birthday',
          day_of: new Date('2018-01-17'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          name: 'Birthday',
          day_of: new Date('2018-03-08'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          name: 'Jerrie Hurd\'s birthday',
          day_of: new Date('2018-04-03'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('occasions_id_seq', (SELECT MAX(id) FROM occasions));");
    });
};
