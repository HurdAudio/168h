'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'greenery',
          type: 'default',
          src_string: '../img/may_tiles/abstract-21918_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#025700',
          color_medium: '#22A60A',
          color_light: '#4FB706',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'greenery',
          type: 'week',
          src_string: '../img/may_tiles/leaf-2545169_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#469624',
          color_medium: '#55B28B',
          color_light: '#9EEDE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'greenery',
          type: 'mtwt',
          src_string: '../img/may_tiles/bud-2541947_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#1E3403',
          color_medium: '#618B03',
          color_light: '#E0FFD8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'greenery',
          type: 'friday',
          src_string: '../img/may_tiles/stevia-74187_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#17630B',
          color_medium: '#65BF3F',
          color_light: '#8BD95F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/39974347-green-grass-texture-you-can-use-for-your-projects.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#132C0A',
          color_medium: '#65843F',
          color_light: '#DFF4B4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/194-1258059592-d4c2bac619a7f3771177e71974077cc5.jpg',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#559311',
          color_medium: '#81B81D',
          color_light: '#C2DD55',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/Tl6aff5.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#020006',
          color_medium: '#0E5601',
          color_light: '#D4EB2F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'greenery',
          type: 'week',
          src_string: '../img/may_tiles/plant-texture-leaf-flower-green-botany-495915-pxhere.com.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#1E4907',
          color_medium: '#438010',
          color_light: '#F5F4A7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'greenery',
          type: 'friday',
          src_string: '../img/may_tiles/Rice_fields_-_panoramio.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#1E4607',
          color_medium: '#6EB232',
          color_light: '#88CD32',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/japanese-maple-2947680_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#000105',
          color_medium: '#457B01',
          color_light: '#CCDE0E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/tea-plantation-2220475_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#0E0613',
          color_medium: '#6A9310',
          color_light: '#FEFDF8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/dahlia-2552891_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '141%',
          color_dark: '#44685A',
          color_medium: '#98B308',
          color_light: '#FFC0FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'greenery',
          type: 'week',
          src_string: '../img/may_tiles/grass-1658749_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#070C05',
          color_medium: '#3D8218',
          color_light: '#E0FDE3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'greenery',
          type: 'friday',
          src_string: '../img/may_tiles/trees-408512_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0F140E',
          color_medium: '#5DA357',
          color_light: '#FFFEF7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/green-2892638_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#161920',
          color_medium: '#013F30',
          color_light: '#98B812',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/rice-194768_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#092403',
          color_medium: '#8CB91A',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/daisy-70910_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#070705',
          color_medium: '#40641A',
          color_light: '#F2F7F3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'greenery',
          type: 'week',
          src_string: '../img/may_tiles/fresh-839260_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#000407',
          color_medium: '#156236',
          color_light: '#AECE9E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'greenery',
          type: 'friday',
          src_string: '../img/may_tiles/grass-1551128_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#030601',
          color_medium: '#43922F',
          color_light: '#E6FAEE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/nature-2513138_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#060700',
          color_medium: '#414A2F',
          color_light: '#DBD987',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_tiles_id_seq', (SELECT MAX(id) FROM may_tiles));");
    });
};
