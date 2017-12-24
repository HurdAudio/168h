'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('october_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('october_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Autumnal',
          type: 'default',
          src_string: '../img/october_tiles/autumnalDefault.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#926A50',
          color_medium: '#CA993C',
          color_light: '#E0BC5E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/autumnal_glass_bump_abstract_by_don64738-d5lemnq.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#846353',
          color_medium: '#E54237',
          color_light: '#F3E82D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Autumnal',
          type: 'mtwt',
          src_string: '../img/october_tiles/leaves-1648179_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#0C000A',
          color_medium: '#945046',
          color_light: '#E3A140',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/sycamore_leaf_tree_nature_color_fall_maple_season-863153.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#F32D04',
          color_medium: '#83880D',
          color_light: '#FDD61E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/trees-1789120_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#432F16',
          color_medium: '#B55825',
          color_light: '#D2A423',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/yellow-2957044_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#141815',
          color_medium: '#C9AB37',
          color_light: '#A5BFB5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/pumpkins-457716_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#100F0B',
          color_medium: '#802A06',
          color_light: '#FDAC40',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/oak-2893996_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#130505',
          color_medium: '#D79062',
          color_light: '#F3C94E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/rhus-180922_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#22241C',
          color_medium: '#AD4704',
          color_light: '#FCFDFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/pumpkin-1639298_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#08070C',
          color_medium: '#C33A0E',
          color_light: '#D7C7CD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/leaves-1539460_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#24120B',
          color_medium: '#655005',
          color_light: '#B1771F',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/pumpkin-448842_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#001A12',
          color_medium: '#6F3824',
          color_light: '#FAFBF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/autumn-72735_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#0A0001',
          color_medium: '#E3A610',
          color_light: '#F9F9F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/burning-bush-2638896_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#2E0807',
          color_medium: '#6E914F',
          color_light: '#DCC6A1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/leaf-2751553_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#2A0D02',
          color_medium: '#DBAD2A',
          color_light: '#C6BBA7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_tiles_id_seq', (SELECT MAX(id) FROM october_tiles));");
    });
};
