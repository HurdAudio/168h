'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('september_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('september_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'leather',
          type: 'default',
          src_string: '../img/september_tiles/leatherDefault.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#5D4940',
          color_medium: '#8A5B4B',
          color_light: '#8A5B4B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'leather',
          type: 'week',
          src_string: '../img/september_tiles/leatherWeek1.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#492A2E',
          color_medium: '#661723',
          color_light: '#A0717B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'leather',
          type: 'mtwt',
          src_string: '../img/september_tiles/mtwtLeather.jpeg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#512C1A',
          color_medium: '#66402D',
          color_light: '#6A3C26',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'leather',
          type: 'friday',
          src_string: '../img/september_tiles/leather-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#462B18',
          color_medium: '#784C27',
          color_light: '#A77445',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_tiles_id_seq', (SELECT MAX(id) FROM september_tiles));");
    });
};
