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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leatherDefault.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leatherWeek1.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/mtwtLeather.jpeg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leather-texture.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/0058-leather-texture-seamless.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/baseball-2472519_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/art-leather-529602_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/art-leather-579789_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leather-532734_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/chair-2822929_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/books-584999_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/shoes-597396_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/zip-1509757_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leather-1331954_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/handle-2474417_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/baseball-336631_1920.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/zip-1284545_1280.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leather-carving---running-horsesl.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/vest.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/TexturesCom_BookCovers0003_M.jpg',
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
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/gloves-454561_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#070803',
          color_medium: '#6D866D',
          color_light: '#F3EFF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/a3942cb6d1a342fe2f430973363beee6.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#322A28',
          color_medium: '#5A1108',
          color_light: '#6F4950',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leather-jacket.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#020206',
          color_medium: '#522515',
          color_light: '#A78583',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/levis-lvc-1930-distressed-leather-jacket-5.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#070705',
          color_medium: '#564734',
          color_light: '#B5ADA0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/pocket.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#1B0B0C',
          color_medium: '#4A2C24',
          color_light: '#BCABB1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/6edbc0f1347016bebbae44433c3c68bd--vintage-gloves-baseball-gloves.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#343237',
          color_medium: '#867482',
          color_light: '#DEEBF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/41473660-leather-texture-vector-seamless-pattern.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#802904',
          color_medium: '#FF6715',
          color_light: '#FDA720',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/_original.jpeg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0B0200',
          color_medium: '#381D12',
          color_light: '#817B7D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/ASL-206-2.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#090001',
          color_medium: '#5E2F26',
          color_light: '#846158',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leather-2981074_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1C1525',
          color_medium: '#6A4D4F',
          color_light: '#B68463',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/1175BW-2.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#230E03',
          color_medium: '#99524E',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/brand.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#362E3B',
          color_medium: '#8B556C',
          color_light: '#9E7891',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/ebd160405.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1F1E1C',
          color_medium: '#718484',
          color_light: '#FBFBF1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/$_86.JPG',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1D2333',
          color_medium: '#4D5E77',
          color_light: '#B0C1DB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/msFQyqtSeHTsi8MBUCB4Y_w.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0E0906',
          color_medium: '#4B4440',
          color_light: '#6D6F6C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/baseballleather.jpeg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#1C0300',
          color_medium: '#842B17',
          color_light: '#FEE2C5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/71vCWVNQt-L._AC_UL320_SR318,320_.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000104',
          color_medium: '#C1A290',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/durangodarkgoldcrocc2_2.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#180C06',
          color_medium: '#726E70',
          color_light: '#B19B76',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/RIMG6678.JPG',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#000000',
          color_medium: '#333831',
          color_light: '#D1D1D1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/486920299_XS.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#251812',
          color_medium: '#634D49',
          color_light: '#F6F7F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/baseball-1091210_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#211D38',
          color_medium: '#4D7F27',
          color_light: '#E6CFA5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/impressive-green-leather-sofa-stunning-1960s-grass-desire-as-well-11.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#010007',
          color_medium: '#0F6500',
          color_light: '#BDD3CB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/ostrich.jpeg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#0A0907',
          color_medium: '#1D1C1A',
          color_light: '#383637',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/car-3321387_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010103',
          color_medium: '#A34442',
          color_light: '#F2F1ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/IMG_0012.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#060606',
          color_medium: '#726E65',
          color_light: '#F6FEFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/dsc01237.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#0A080A',
          color_medium: '#907A6A',
          color_light: '#BBCFDA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/cdc9a70a6782dd298d2e54131853de60.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#372F37',
          color_medium: '#AD937E',
          color_light: '#F6F4F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/shoulder.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#12110F',
          color_medium: '#61605E',
          color_light: '#BABBC0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/chris-knight-473205-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#010101',
          color_medium: '#A26436',
          color_light: '#D8D1C8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/vince-gaspar-503209-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#020001',
          color_medium: '#362B25',
          color_light: '#F6F1EE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/catphoto.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#27281C',
          color_medium: '#844D43',
          color_light: '#F5FFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/chris-lawton-236413-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#4E394F',
          color_medium: '#D1B999',
          color_light: '#C8C3AB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/lazlo-panaflex-131345-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#050505',
          color_medium: '#654226',
          color_light: '#D0C3B0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/rebecca-aldama-585108-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0D0101',
          color_medium: '#734826',
          color_light: '#CDD8DA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/ember-ivory-431240-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0D1215',
          color_medium: '#C48867',
          color_light: '#E5E7EB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/natalia-y-504860-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#2D271B',
          color_medium: '#811518',
          color_light: '#D1D6C2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/annie-spratt-413813-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#2D1C14',
          color_medium: '#614424',
          color_light: '#D1C8C1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/robbie-noble-220875-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#131313',
          color_medium: '#64312E',
          color_light: '#F8F7F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/fancycrave-310191-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#00080E',
          color_medium: '#B85854',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/marvin-meyer-567020-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '157%',
          color_dark: '#2A2A2A',
          color_medium: '#545253',
          color_light: '#E2E4E3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/giammarco-boscaro-380903-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#131315',
          color_medium: '#364049',
          color_light: '#EEEFF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/james-l-w-639581-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#1F0E0A',
          color_medium: '#B0685A',
          color_light: '#E3E2DD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/hat-2388173_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#26262D',
          color_medium: '#AD7572',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/belts-2164358_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#1B1F25',
          color_medium: '#95A4CB',
          color_light: '#DEEBFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Leather',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/kay-529112-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#06122A',
          color_medium: '#F2636B',
          color_light: '#DADCE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Leather',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/shoes-918543_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0E0E10',
          color_medium: '#C39054',
          color_light: '#DFE6EE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Leather',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/boots-3235507_1920.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#121311',
          color_medium: '#3A4013',
          color_light: '#CAC6AF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Leather',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/clean-leather-chair.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#010607',
          color_medium: '#6B221B',
          color_light: '#E4D2C4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Leather',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/september_tiles/leather_stitching_1_by_ellestock.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#2F0F00',
          color_medium: '#AE5F36',
          color_light: '#CCAF85',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_tiles_id_seq', (SELECT MAX(id) FROM september_tiles));");
    });
};
