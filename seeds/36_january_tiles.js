'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('january_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('january_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Ice',
          type: 'default',
          src_string: '../img/january_tiles/pattern-2054291_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '1050%',
          color_dark: '#8E8B92',
          color_medium: '#BFBFCB',
          color_light: '#F3F4F8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/ice_texture_by_kikariz_stock.jpg',
          repeat_value: 'no-repeat',
          size_value: '350%',
          color_dark: '#08080D',
          color_medium: '#4B677F',
          color_light: '#C0DCE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Ice',
          type: 'mtwt',
          src_string: '../img/january_tiles/depositphotos_26348373-stock-photo-seamless-ice-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#7D7D7D',
          color_medium: '#BEBEBE',
          color_light: '#D9D9D9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/ice-709307_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#210A04',
          color_medium: '#98603D',
          color_light: '#EBC386',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/ChiseledIce.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#647D9C',
          color_medium: '#91AED7',
          color_light: '#CEE2FA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/7581993-Rime-texture-Stock-Photo-ice-texture-snow.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#143F56',
          color_medium: '#5BA1D4',
          color_light: '#E8F4F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/ice-2381291_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#3C62B3',
          color_medium: '#79AFDE',
          color_light: '#F1F4F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/ice-melting6a.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#1B4C48',
          color_medium: '#7FFBED',
          color_light: '#B0EEED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/53e761b2082a7.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#5B7F90',
          color_medium: '#8DA7B8',
          color_light: '#D0D4D7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/ice-wallpapers-002.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#191D2A',
          color_medium: '#72BEFA',
          color_light: '#CDDCF1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/19-cool-blue-ice-texture-free-hi-res.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#131A25',
          color_medium: '#5891E5',
          color_light: '#73B2F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/eis-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#23281F',
          color_medium: '#707DA7',
          color_light: '#BFB9C3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/17-dark-ice-texture-free-hi-res.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#878CA2',
          color_medium: '#C0CDDD',
          color_light: '#F9FAFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/ice-1998082_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#020003',
          color_medium: '#4E585A',
          color_light: '#DCDCDC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/18712675-Seamless-ice-texture-computer-graphic-big-collection-Stock-Photo.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#1A6B86',
          color_medium: '#76E6EC',
          color_light: '#BFECF2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/tyler-agte-tyleragte-icepattern.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#4DA8BC',
          color_medium: '#6ACADA',
          color_light: '#77DEE3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/winter-wonderland-1961970_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#3D2A21',
          color_medium: '#A0A19A',
          color_light: '#C2C3C4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/depositphotos_36103545-stock-photo-ice-texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#435388',
          color_medium: '#B2BFEC',
          color_light: '#DFEAFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/two-1231475_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#02040E',
          color_medium: '#5A6B85',
          color_light: '#EDFAFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/depositphotos_63077593-stock-photo-frozen-ice-seamless-and-tileable.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#587C9D',
          color_medium: '#91BFD7',
          color_light: '#CFF2F7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/cuevas-de-hielo-alasca.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#010302',
          color_medium: '#004A71',
          color_light: '#3CC8DC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/50879485-transparent-texture-of-natural-ice-of-blue-color-for-an-abstract-background.jpg',
          repeat_value: 'no-repeat',
          size_value: '151%',
          color_dark: '#0E396F',
          color_medium: '#0C69C1',
          color_light: '#EEF7FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/white_marble_texture_01_by_goodtextures.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#9CA0AE',
          color_medium: '#DCDFE7',
          color_light: '#DEE0EC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/Ice-cube-dreamstime_xxl_3038365.png',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#061F3B',
          color_medium: '#42BBF0',
          color_light: '#F2EBEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/6c73e6367b7aff12089fe447152c14ad.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#474A50',
          color_medium: '#767680',
          color_light: '#DDE0E7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/185753.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#304766',
          color_medium: '#7BADF8',
          color_light: '#E2FFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/clear-ice-gallery-600-4.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#030504',
          color_medium: '#979BA6',
          color_light: '#F3F3F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/ice-texture-13517276.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#4C847D',
          color_medium: '#7AA19E',
          color_light: '#A8FEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/12-cubes-ice-texture-free-hi-res.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#354751',
          color_medium: '#56605F',
          color_light: '#FCFBEA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/icenine.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#7A7C88',
          color_medium: '#B1B1B3',
          color_light: '#FBFCFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/e181386486f1cd3f13c75dd6828cdb12.jpg',
          repeat_value: 'no-repeat',
          size_value: '163%',
          color_dark: '#01416B',
          color_medium: '#6CA6D6',
          color_light: '#D6E7F6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/thawing-ice-and-water-bubbles-close-up-timelapse-4k-uhd-3840x2160_bqea6q1r_thumbnail-full01.png',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#2A4D89',
          color_medium: '#80C2DC',
          color_light: '#DEF7FC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/612b33acb524bb138862c1838c58fe60.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#4E3D4A',
          color_medium: '#596783',
          color_light: '#CCD0DB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/icy-blue-abstract-patterns-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#164AAF',
          color_medium: '#2F93E8',
          color_light: '#6EBFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/shutterstock_342261938.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#4379A7',
          color_medium: '#629EC3',
          color_light: '#B3D6DC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/ice-3194663_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#141615',
          color_medium: '#ABB3BF',
          color_light: '#FBFBFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/red-rose-on-ice-3193996_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0E0100',
          color_medium: '#FC6067',
          color_light: '#F3F3F3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/frozen-583241_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#454747',
          color_medium: '#868686',
          color_light: '#CFD5D3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/vector-blue-water-drops-texture-background.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#020D58',
          color_medium: '#1C5BAB',
          color_light: '#A0E1FE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/8856361c119cb72.jpg',
          repeat_value: 'no-repeat',
          size_value: '225%',
          color_dark: '#053155',
          color_medium: '#67BBEA',
          color_light: '#F9FFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/ice-stalagmites-lake-baikal-siberia-russia-ICEFORMS1217.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#18161B',
          color_medium: '#94B0BE',
          color_light: '#D1D7DD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/frozen-ice-seamless-tileable-background-texture-high-definition-glacier-cracked-shiny-you-can-create-49305609.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#3F636E',
          color_medium: '#9CC3D2',
          color_light: '#FFFEFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/window-frost-glass-winter.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#182B56',
          color_medium: '#6AA4E3',
          color_light: '#B1E0FB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/dionys-moser-deep-blue-ice.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#031427',
          color_medium: '#1689CC',
          color_light: '#96CCE2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/satice.jpeg',
          repeat_value: 'no-repeat',
          size_value: '154%',
          color_dark: '#06174D',
          color_medium: '#4448B4',
          color_light: '#F44471',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/Abstract-Ice-Texture.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#141E63',
          color_medium: '#607F83',
          color_light: '#AFBEAA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/apsdofih.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#01061C',
          color_medium: '#2B5A8A',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/frozen-bike-1424674.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#040308',
          color_medium: '#EFD7BF',
          color_light: '#F7FBFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/ice-texture-32-p1040785.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#0D0D0F',
          color_medium: '#7E673F',
          color_light: '#F0EBDD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/depositphotos_63077547-stock-photo-frozen-ice-seamless-and-tileable.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#163248',
          color_medium: '#B7DBD6',
          color_light: '#FFFEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/_47066186_iceyground_nyssa_brown_cornwall.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0A0B16',
          color_medium: '#89939C',
          color_light: '#F0F7FA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/ice-2219574_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#552111',
          color_medium: '#868C0A',
          color_light: '#FDFFFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/melting-ice-water-drop_1600.jpg',
          repeat_value: 'no-repeat',
          size_value: '175%',
          color_dark: '#020C3B',
          color_medium: '#008CA8',
          color_light: '#E4F6F6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/Blue-Ice-Wallpaper-Desktop.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#04133F',
          color_medium: '#1337BF',
          color_light: '#FCFCFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/Matej-Kriz-Ice-Cave-photography-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#000511',
          color_medium: '#01B5CE',
          color_light: '#C4C5C5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/Antarctica-Ice.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0E284C',
          color_medium: '#5CBAEE',
          color_light: '#B7DFFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/ghost-presenter-423596-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#00040A',
          color_medium: '#006FB6',
          color_light: '#E6EEF4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/norbert-von-niman-372598-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#2A2A2A',
          color_medium: '#4B8AA2',
          color_light: '#F5F5F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/chris-liverani-510544-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#221E14',
          color_medium: '#79070A',
          color_light: '#E1F0FC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/david-becker-670907-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '163%',
          color_dark: '#040404',
          color_medium: '#AC949E',
          color_light: '#E9EEF5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/aaron-burden-202624-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0C1E58',
          color_medium: '#5B7DC7',
          color_light: '#CDD3F1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/simon-matzinger-527482-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#071424',
          color_medium: '#8690A7',
          color_light: '#DFDBD9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/sergey-pesterev-230407-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#030A0F',
          color_medium: '#0080CE',
          color_light: '#F5F4EF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Ice',
          type: 'friday',
          src_string: '../img/january_tiles/jorge-guillen-59680-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#382421',
          color_medium: '#6B5B54',
          color_light: '#CBD0D6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Ice',
          type: 'saturday',
          src_string: '../img/january_tiles/krystal-ng-771465-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#052131',
          color_medium: '#5AC1B1',
          color_light: '#D0F1E6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Ice',
          type: 'sunday',
          src_string: '../img/january_tiles/john-bakator-571760-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#020204',
          color_medium: '#7F6E66',
          color_light: '#DCE3ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Ice',
          type: 'holiday',
          src_string: '../img/january_tiles/aaron-burden-554299-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#15352B',
          color_medium: '#FFD8A5',
          color_light: '#D8D5DF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Ice',
          type: 'week',
          src_string: '../img/january_tiles/robin-vet-435901-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#030D0E',
          color_medium: '#197E86',
          color_light: '#FAFDFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_tiles_id_seq', (SELECT MAX(id) FROM january_tiles));");
    });
};
