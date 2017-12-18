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
        },
        {
          id: 5,
          user_id: 1,
          theme: 'leather',
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
          theme: 'leather',
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
          theme: 'leather',
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
          theme: 'leather',
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
          theme: 'leather',
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
          theme: 'leather',
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
          theme: 'leather',
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
          theme: 'leather',
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
          theme: 'leather',
          type: 'week',
          src_string: '../img/september_tiles/zip-1509757_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#020403',
          color_medium: '#4B4044',
          color_light: '#FBFDFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_tiles_id_seq', (SELECT MAX(id) FROM september_tiles));");
    });
};
