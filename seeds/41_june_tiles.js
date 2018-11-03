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
          theme: 'Light',
          type: 'default',
          src_string: '../img/june_tiles/black-and-white-lights-sun-ray-of-sunshine.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#181818',
          color_medium: '#5D5D5D',
          color_light: '#FBFBFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/lights-932185_640.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000000',
          color_medium: '#906218',
          color_light: '#FFFBCB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Light',
          type: 'mtwt',
          src_string: '../img/june_tiles/lights-2618332_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#080F2B',
          color_medium: '#9B5E41',
          color_light: '#F6EAD2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/LGTFX.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#0B0B0D',
          color_medium: '#10A650',
          color_light: '#FDEC7C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/light2.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#010602',
          color_medium: '#D7A057',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/sun-light.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#4378AE',
          color_medium: '#8B80B8',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/fireworks___texture_by_b3hindhersmil3.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1C0903',
          color_medium: '#F77A42',
          color_light: '#F9FFF8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/textures-106-l.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#0B0704',
          color_medium: '#61574E',
          color_light: '#F9D8DC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/concert-336695_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#030303',
          color_medium: '#B9C4AC',
          color_light: '#E2E5E4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/sunbeam-76825_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0C121E',
          color_medium: '#303547',
          color_light: '#EADFC9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/light-2994535_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#7D8293',
          color_medium: '#F9B840',
          color_light: '#F9E7C3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/lichtreflex-421101_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#FE3D04',
          color_medium: '#FD9D39',
          color_light: '#FAFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/sunsets-251381_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#060506',
          color_medium: '#8D2021',
          color_light: '#F9FFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/sky-644552_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#200904',
          color_medium: '#D2631B',
          color_light: '#F7F2EE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/lamp-2336619_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0E0D09',
          color_medium: '#544329',
          color_light: '#FFFEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/sun-1545406_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#291D0F',
          color_medium: '#906320',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/background-1469937_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#050100',
          color_medium: '#AF4300',
          color_light: '#F0F880',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/lamp-277504_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#000201',
          color_medium: '#D8C090',
          color_light: '#ECEBE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/dj-937260_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#000C1D',
          color_medium: '#B3FEFF',
          color_light: '#FEFEF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/lamp-1978098_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#020300',
          color_medium: '#4C3523',
          color_light: '#FBFDF8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/lighthouse-66943_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#000000',
          color_medium: '#0C3088',
          color_light: '#FEFFF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/gas-1238150_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#030207',
          color_medium: '#BA5701',
          color_light: '#FBFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/black-1743380_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#090506',
          color_medium: '#B1B5C0',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/lamp-2558697_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#031627',
          color_medium: '#01EEF5',
          color_light: '#DAFCE1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/lamp-700727_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#371803',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/background-767924_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#030200',
          color_medium: '#6C4A00',
          color_light: '#F8F9F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/burn-3133231_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#140500',
          color_medium: '#800700',
          color_light: '#FEFFFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/street-light-684585_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '154%',
          color_dark: '#040404',
          color_medium: '#712606',
          color_light: '#FFFEEE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/amusement-21573_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#040404',
          color_medium: '#B5F853',
          color_light: '#FCFFFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/berlin-1104047_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#4C0909',
          color_medium: '#975F3E',
          color_light: '#FDFFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/shine-2889298_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#17120F',
          color_medium: '#5E5245',
          color_light: '#F0E8DD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/fractal-1782165_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#050912',
          color_medium: '#809111',
          color_light: '#FFEE67',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/fluorescent-1142762_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#010101',
          color_medium: '#666664',
          color_light: '#EFF0F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/fire-617417_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010101',
          color_medium: '#782303',
          color_light: '#FCFECA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/light-1124497_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#0E0301',
          color_medium: '#4E1B00',
          color_light: '#FFFFFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/redwoods-1455738_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#1A100F',
          color_medium: '#344124',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/background-322189_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '144%',
          color_dark: '#000400',
          color_medium: '#3D2D83',
          color_light: '#FEF117',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/street-lights-384615_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#000000',
          color_medium: '#BD5320',
          color_light: '#FFFBF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/fair-2033778_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#020001',
          color_medium: '#1276F4',
          color_light: '#EAFCF2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/highway-409126_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#080808',
          color_medium: '#5F0100',
          color_light: '#EEEFED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/orange-peel-oil-lamps-2140976_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#000000',
          color_medium: '#FD5E1E',
          color_light: '#FCFFC1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/lamp-2280568_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0B0B17',
          color_medium: '#40362D',
          color_light: '#FFFBB5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/light-1498860_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#010706',
          color_medium: '#FEDE87',
          color_light: '#FFFEF5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/city-2593764_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0B0A10',
          color_medium: '#95B8C8',
          color_light: '#F0EBE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/lamp-1304959_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#010302',
          color_medium: '#CA935A',
          color_light: '#FDFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/candle-1921517_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#000000',
          color_medium: '#2FC3EF',
          color_light: '#FFFFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/star-522548_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#040301',
          color_medium: '#FC9D3C',
          color_light: '#FFFBF6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/background-626714_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#00010E',
          color_medium: '#050C43',
          color_light: '#FFFDFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/mixer-2498644_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#020202',
          color_medium: '#FF0C00',
          color_light: '#FEFCFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/candles-1703470_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#020202',
          color_medium: '#FDB350',
          color_light: '#FFFFFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/bulbs-2521549_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '168%',
          color_dark: '#282822',
          color_medium: '#4F1F07',
          color_light: '#FDFEF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/light-bulb-964312_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#050C04',
          color_medium: '#037716',
          color_light: '#FFFFFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/esteban-lopez-272467-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#001645',
          color_medium: '#00E97E',
          color_light: '#D7F9E2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/filip-mroz-191060-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#1A1B20',
          color_medium: '#F6C2EA',
          color_light: '#FFFBFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/mikael-kristenson-242079-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#010D1E',
          color_medium: '#763927',
          color_light: '#E4ECD4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/yucel-moran-451087-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#272727',
          color_medium: '#7A2D1E',
          color_light: '#DFDFDF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/jf-martin-655838-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#050302',
          color_medium: '#D8A44A',
          color_light: '#FDFDFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/jean-philippe-delberghe-667771-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0B0A0F',
          color_medium: '#96A6C5',
          color_light: '#F9EED0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/serge-kutuzov-239838-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000202',
          color_medium: '#80B4FF',
          color_light: '#FDFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/diz-play-31367-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#080405',
          color_medium: '#BA7C15',
          color_light: '#F9FFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/connor-mcsheffrey-87379-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#181C1D',
          color_medium: '#A48E6E',
          color_light: '#FCF9F4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Light',
          type: 'holiday',
          src_string: '../img/june_tiles/yeshi-kangrang-296068-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#01121A',
          color_medium: '#006C6E',
          color_light: '#E7D4CE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Light',
          type: 'week',
          src_string: '../img/june_tiles/krissia-cruz-353941-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#0B0601',
          color_medium: '#A97635',
          color_light: '#FEFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Light',
          type: 'friday',
          src_string: '../img/june_tiles/jesse-collins-264791-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#200100',
          color_medium: '#A40001',
          color_light: '#FEFCEF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Light',
          type: 'saturday',
          src_string: '../img/june_tiles/mohammad-saifullah-410256-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#020804',
          color_medium: '#026FB2',
          color_light: '#C5CFD1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Light',
          type: 'sunday',
          src_string: '../img/june_tiles/berrak-soyral-766399-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#05090C',
          color_medium: '#151D31',
          color_light: '#DCDFCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_tiles_id_seq', (SELECT MAX(id) FROM june_tiles));");
    });
};
