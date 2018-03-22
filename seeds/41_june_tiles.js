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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_tiles_id_seq', (SELECT MAX(id) FROM june_tiles));");
    });
};
