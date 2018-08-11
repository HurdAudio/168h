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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
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
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/nature-2513138_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#060700',
          color_medium: '#414A2F',
          color_light: '#DBD987',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/leaves-2612200_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0E1105',
          color_medium: '#5A8805',
          color_light: '#E6EC50',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/flower-165880_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#010000',
          color_medium: '#617245',
          color_light: '#F2DC7C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/Talbot-Greenery.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#012524',
          color_medium: '#1D5F19',
          color_light: '#AB980C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Greenery',
          type: 'friday',
          src_string: '../img/may_tiles/TexturesCom_TropicalFoliage0011_2_M.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#060E03',
          color_medium: '#577F08',
          color_light: '#DEDFBE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/cropped-Header-Picture.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#202C28',
          color_medium: '#704C58',
          color_light: '#B2CEA8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/Sunshine-greenery-tea-farm-good-morning.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#001304',
          color_medium: '#74C401',
          color_light: '#FFFFD9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/640px-Jasmine0001.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#141D03',
          color_medium: '#387201',
          color_light: '#EAECEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/pexels-photo-94847.jpeg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#3D6D19',
          color_medium: '#A6C982',
          color_light: '#FFFFFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Greenery',
          type: 'friday',
          src_string: '../img/may_tiles/danielridge6_fresh_new_ferns.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#081109',
          color_medium: '#5BB50F',
          color_light: '#B2CF7B',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/palm-1308809_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#0A1505',
          color_medium: '#2D4F02',
          color_light: '#E7F7C7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/images-of-amazing-nature-greenery-4.jpg',
          repeat_value: 'no-repeat',
          size_value: '164%',
          color_dark: '#060013',
          color_medium: '#459611',
          color_light: '#FAFFF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/xalpine-flowers-in-austria-b.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#0C1606',
          color_medium: '#215505',
          color_light: '#F9FBF6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/green-614396_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '154%',
          color_dark: '#15150D',
          color_medium: '#355C0A',
          color_light: '#909284',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Greenery',
          type: 'friday',
          src_string: '../img/may_tiles/leaves_plants_greenery_background_50118_2560x1600.jpg',
          repeat_value: 'no-repeat',
          size_value: '163%',
          color_dark: '#284002',
          color_medium: '#588C04',
          color_light: '#DCFBE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/Greenery_Detail_1024x1024.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#071C03',
          color_medium: '#90B186',
          color_light: '#FFFFF7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/apricots-214970_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#3A3230',
          color_medium: '#74831C',
          color_light: '#FDFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/jardim-com-flores-coloridas-17.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#050200',
          color_medium: '#CDAF01',
          color_light: '#D0DECE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/beautiful-garden-pictures-amazing-lush-greenery-gardens-wonderwordz-best-the-most-home.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#000100',
          color_medium: '#D4980E',
          color_light: '#FDFCF8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Greenery',
          type: 'friday',
          src_string: '../img/may_tiles/166504,xcitefun-green-living-walls-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#101A12',
          color_medium: '#4A732F',
          color_light: '#FCFCFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/tmb_28459_5164.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#093F05',
          color_medium: '#53A41A',
          color_light: '#FFFFFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/585958115-desktop-wallpaper-1280x1024.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#111409',
          color_medium: '#B791A3',
          color_light: '#FFFD28',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/holidayGreen.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#040207',
          color_medium: '#2D6522',
          color_light: '#FEFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/Fern-Leaf-Landscapes-Nature-Leaves-Green-Nature-Fr-9444.jpg',
          repeat_value: 'no-repeat',
          size_value: '133%',
          color_dark: '#10150F',
          color_medium: '#789159',
          color_light: '#F0EEE6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Greenery',
          type: 'friday',
          src_string: '../img/may_tiles/Peaceful_Greenery-_Nature_Photograph_ja0m2k.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#030B0C',
          color_medium: '#3AA600',
          color_light: '#E7EAB1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/nature-full-hd-green-best-wallpaper-images.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#151C0C',
          color_medium: '#39C104',
          color_light: '#F6F06E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/9197667453_4154c9e22e_o.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#020401',
          color_medium: '#094113',
          color_light: '#43ED0E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/15729479691_65321ae83d_b.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0A0A0E',
          color_medium: '#789464',
          color_light: '#FCFBF5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/flower-3342622_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#050600',
          color_medium: '#509119',
          color_light: '#C1C6C4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Greenery',
          type: 'friday',
          src_string: '../img/may_tiles/rays-sunlight-falling-leaves-fresh-lush-beech-trees-green-forest-creating-surreal-pleasing-atmosphere-53511140.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0C0C07',
          color_medium: '#355F09',
          color_light: '#E6F4C6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/7t87.jpeg',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#060C0C',
          color_medium: '#80BC10',
          color_light: '#C7DFC7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/fields-greenery-nice-sunlight-field-sunset-sky-dazzling-flwoers-meadow-pretty-nature-aamzing-sunshine-sunrise-clouds-spring-light-beautiful-grass-rays-path-wallpaper-green-1600x1080.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#000105',
          color_medium: '#61910F',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/flower_forest_nature_greenery_trees_23873_2560x1440.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#030301',
          color_medium: '#81AA45',
          color_light: '#E5E4DF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/nina-rumbines-87900-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#252827',
          color_medium: '#005F1B',
          color_light: '#BBFF26',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Greenery',
          type: 'friday',
          src_string: '../img/may_tiles/qingbao-meng-330658-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#0B0B03',
          color_medium: '#577714',
          color_light: '#AAAD98',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Greenery',
          type: 'saturday',
          src_string: '../img/may_tiles/david-clode-664954-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#000100',
          color_medium: '#3E6919',
          color_light: '#D8E1CD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Greenery',
          type: 'sunday',
          src_string: '../img/may_tiles/asoggetti-723684-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#110F03',
          color_medium: '#E1C302',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Greenery',
          type: 'holiday',
          src_string: '../img/may_tiles/juan-rojas-712924-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#040200',
          color_medium: '#E5B222',
          color_light: '#FED698',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Greenery',
          type: 'week',
          src_string: '../img/may_tiles/pandu-ior-204429-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#041205',
          color_medium: '#0E7810',
          color_light: '#7FB22E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_tiles_id_seq', (SELECT MAX(id) FROM may_tiles));");
    });
};
