'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('july_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('july_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'steam',
          type: 'default',
          src_string: '../img/july_tiles/Mammatus-storm-clouds_San-Antonio.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#010D1B',
          color_medium: '#7A838C',
          color_light: '#FFFFFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'steam',
          type: 'week',
          src_string: '../img/july_tiles/clouds-2239564_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '240%',
          color_dark: '#0B335C',
          color_medium: '#5A8399',
          color_light: '#D0CABC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'steam',
          type: 'mtwt',
          src_string: '../img/july_tiles/steamdays.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#090B0A',
          color_medium: '#636560',
          color_light: '#989991',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'steam',
          type: 'friday',
          src_string: '../img/july_tiles/fridaySteam.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#010101',
          color_medium: '#424149',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'steam',
          type: 'saturday',
          src_string: '../img/july_tiles/saturdaySteam.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#010101',
          color_medium: '#2E353F',
          color_light: '#A3BDD4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_tiles_id_seq', (SELECT MAX(id) FROM july_tiles));");
    });
};
