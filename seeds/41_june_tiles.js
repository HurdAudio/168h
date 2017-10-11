'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'light',
          type: 'default',
          src_string: '../img/june_tiles/black-and-white-lights-sun-ray-of-sunshine.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#181818',
          color_medium: '#5D5D5D',
          color_light: '#FBFBFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_tiles_id_seq', (SELECT MAX(id) FROM june_tiles));");
    });
};
