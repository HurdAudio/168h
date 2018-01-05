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
          theme: 'Leather',
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
          theme: 'Leather',
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
          theme: 'Leather',
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
          theme: 'Leather',
          type: 'friday',
          src_string: '../img/september_tiles/leather-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#462B18',
          color_medium: '#784C27',
          color_light: '#A77445',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: '../img/september_tiles/0058-leather-texture-seamless.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#04080D',
          color_medium: '#242527',
          color_light: '#DADDC5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: '../img/september_tiles/baseball-2472519_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#120500',
          color_medium: '#B3511B',
          color_light: '#D7B77F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: '../img/september_tiles/art-leather-529602_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#0C0812',
          color_medium: '#3C357B',
          color_light: '#FAFCFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: '../img/september_tiles/art-leather-579789_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1A0400',
          color_medium: '#813B1C',
          color_light: '#9F7858',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: '../img/september_tiles/leather-532734_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#15100C',
          color_medium: '#2D251D',
          color_light: '#756B69',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: '../img/september_tiles/chair-2822929_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1A1512',
          color_medium: '#612A23',
          color_light: '#C49672',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: '../img/september_tiles/books-584999_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#313236',
          color_medium: '#AC7A85',
          color_light: '#F7E9E3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: '../img/september_tiles/shoes-597396_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010101',
          color_medium: '#3277B0',
          color_light: '#D8EBF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: '../img/september_tiles/zip-1509757_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#020403',
          color_medium: '#4B4044',
          color_light: '#FBFDFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: '../img/september_tiles/leather-1331954_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#9D1F11',
          color_medium: '#F28370',
          color_light: '#FCCBA6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: '../img/september_tiles/handle-2474417_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#0F0705',
          color_medium: '#C9671E',
          color_light: '#E2E68E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: '../img/september_tiles/baseball-336631_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#180C16',
          color_medium: '#C88664',
          color_light: '#F5E7C1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: '../img/september_tiles/zip-1284545_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#080A16',
          color_medium: '#5F7187',
          color_light: '#FCFBF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: '../img/september_tiles/leather-carving---running-horsesl.jpg',
          repeat_value: 'no-repeat',
          size_value: '183%',
          color_dark: '#5C5D57',
          color_medium: '#6E4432',
          color_light: '#A05337',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: '../img/september_tiles/vest.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#2F2F32',
          color_medium: '#AB774A',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: '../img/september_tiles/TexturesCom_BookCovers0003_M.jpg',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#151508',
          color_medium: '#9D6835',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: '../img/september_tiles/gloves-454561_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#070803',
          color_medium: '#6D866D',
          color_light: '#F3EFF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_tiles_id_seq', (SELECT MAX(id) FROM september_tiles));");
    });
};
