'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('february_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('february_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'silk',
          type: 'default',
          src_string: '../img/february_tiles/Red-Silk-Fabric-Texture-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#76081B',
          color_medium: '#CD2C3A',
          color_light: '#E8526B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'silk',
          type: 'week',
          src_string: '../img/february_tiles/red_chenille_fabric_texture_by_beckas.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#2A0100',
          color_medium: '#9F0E11',
          color_light: '#CF0709',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'silk',
          type: 'mtwt',
          src_string: '../img/february_tiles/silk-326018_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#3B1512',
          color_medium: '#5A201C',
          color_light: '#EB564F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'silk',
          type: 'friday',
          src_string: '../img/february_tiles/il_340x270.1100550400_1zqt.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#6F0519',
          color_medium: '#E3202E',
          color_light: '#F97060',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'silk',
          type: 'saturday',
          src_string: '../img/february_tiles/elegant-red-silk-background-20.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#040404',
          color_medium: '#53040A',
          color_light: '#FC4541',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'silk',
          type: 'sunday',
          src_string: '../img/february_tiles/rose-2819660_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#412510',
          color_medium: '#FE372A',
          color_light: '#E86C6F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_tiles_id_seq', (SELECT MAX(id) FROM february_tiles));");
    });
};
