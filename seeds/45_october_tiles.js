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
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/red-leaves-918745_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#070705',
          color_medium: '#CB1236',
          color_light: '#E9E7EA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/pumpkin-512115_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#080401',
          color_medium: '#A35618',
          color_light: '#EFB353',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/leaf-1818436_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#000000',
          color_medium: '#821101',
          color_light: '#FDF608',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/pumpkins-328135_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#190E04',
          color_medium: '#BF110B',
          color_light: '#AFC183',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/autumn-2789234_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#000102',
          color_medium: '#F72934',
          color_light: '#CED5E7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/leaf-1699515_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#1C1C17',
          color_medium: '#1C2909',
          color_light: '#FFE5CC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/fall-950443_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#080108',
          color_medium: '#C8400E',
          color_light: '#F6EEC8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/autumn-265076_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#2C251D',
          color_medium: '#FB8807',
          color_light: '#F4FCF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/maple-1769753_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#201A04',
          color_medium: '#FB5D6B',
          color_light: '#BCAB17',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/autunm-1893526_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#000002',
          color_medium: '#111424',
          color_light: '#8AADC0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/sun-1092808_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#4A1604',
          color_medium: '#FDAB30',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/pumpkins-1572864_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#1C0902',
          color_medium: '#D44602',
          color_light: '#D4B37E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/maple-996425_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0F0E03',
          color_medium: '#425311',
          color_light: '#E8BE00',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/leaves-708396_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#14100D',
          color_medium: '#8B3301',
          color_light: '#ECFBFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/leaf-3074347_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#430E00',
          color_medium: '#FD7C4B',
          color_light: '#C0AE90',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/trees-2586350_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#010707',
          color_medium: '#C75A2D',
          color_light: '#C88D45',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/halloween-1953187_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#05010C',
          color_medium: '#C3A50A',
          color_light: '#E3FDFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/autumn-220111_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#231C07',
          color_medium: '#FEC506',
          color_light: '#FFF4AA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/leaves-2558342_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#0C0002',
          color_medium: '#F67550',
          color_light: '#B0B0AB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/autumn-2795093_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#060201',
          color_medium: '#888760',
          color_light: '#FAF673',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/autumn-2784055_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#090E14',
          color_medium: '#A47349',
          color_light: '#FAF6F1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/pumpkin-487140_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#090401',
          color_medium: '#D8490B',
          color_light: '#E6EFDD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/road-2602778_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#202020',
          color_medium: '#FDB77C',
          color_light: '#FFFFFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/autumn-2146409_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#370D00',
          color_medium: '#FF7E31',
          color_light: '#FAFEDC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_tiles_id_seq', (SELECT MAX(id) FROM october_tiles));");
    });
};
