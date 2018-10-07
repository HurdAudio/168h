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
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/leaves-2326317_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1E0E0F',
          color_medium: '#894C51',
          color_light: '#FFF3FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/red-2804180_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1E0004',
          color_medium: '#D80815',
          color_light: '#FDFFFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/halloween-34781_1280.png',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#000000',
          color_medium: '#745817',
          color_light: '#CE9A1C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/nature-3151869_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010005',
          color_medium: '#B85020',
          color_light: '#FFFEE0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/red-leaf-2464857_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#2B0E10',
          color_medium: '#FB5B19',
          color_light: '#FCFBCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/autumn-2439241_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#191607',
          color_medium: '#D7C402',
          color_light: '#FFFEE3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/leaf-13907_640.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#272B2E',
          color_medium: '#E2B790',
          color_light: '#ECE113',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/pumpkin-1653007_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#120B01',
          color_medium: '#DC5015',
          color_light: '#FFF6BA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/autumn-975603_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#020C06',
          color_medium: '#BCAB39',
          color_light: '#FDFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/micah-hallahan-38148-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#09092B',
          color_medium: '#C67727',
          color_light: '#F3DFBC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/aaron-burden-398673-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#101113',
          color_medium: '#9C321A',
          color_light: '#D3CDD1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/al-x-399184-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#181B27',
          color_medium: '#006497',
          color_light: '#DBC1B2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/rodrigo-rodriguez-397538-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#010103',
          color_medium: '#B35F3B',
          color_light: '#E8E0D5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/jeremy-thomas-79493-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#140E08',
          color_medium: '#B8CE52',
          color_light: '#F3C2F4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/stephen-ellis-501607-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#02000A',
          color_medium: '#61C2EC',
          color_light: '#F6FEC1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Autumnal',
          type: 'saturday',
          src_string: '../img/october_tiles/fischer-twins-397437-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#35220D',
          color_medium: '#974953',
          color_light: '#D4DDD8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Autumnal',
          type: 'sunday',
          src_string: '../img/october_tiles/hybrid-440620-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#040706',
          color_medium: '#9E5261',
          color_light: '#F7AC83',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Autumnal',
          type: 'holiday',
          src_string: '../img/october_tiles/robert-zunikoff-1054155-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#0D1615',
          color_medium: '#E2564B',
          color_light: '#C4D7F3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Autumnal',
          type: 'week',
          src_string: '../img/october_tiles/davide-ragusa-38945-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#191A1E',
          color_medium: '#B85340',
          color_light: '#CDBD5B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Autumnal',
          type: 'friday',
          src_string: '../img/october_tiles/mihai-surdu-406935-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#0E1313',
          color_medium: '#AFC1D7',
          color_light: '#FDFDFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_tiles_id_seq', (SELECT MAX(id) FROM october_tiles));");
    });
};
