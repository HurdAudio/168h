'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('july_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('july_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/the-liberty-leading-the-people-1830.jpg',
          title: 'The Liberty Leading the People',
          artist: 'Eugene Delacroix',
          year: '1830',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 29, 9, 20, 31 ],
            "saturday": [ 28, 8, 19, 30 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/marie-antoinette-on-a-visit-to-medellin.jpg',
          title: 'Marie Antoinette on a Visit to Medellin',
          artist: 'Fernando Botero',
          year: '1990',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 29, 9, 20, 31 ],
            "sunday": [ 28, 8, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/louis-xvi-on-a-visit-to-medellin.jpg',
          title: 'Louis XVI on a Visit to Medellin',
          artist: 'Fernando Botero',
          year: '1990',
          rule: {
            "monday": [ 28, 8, 19, 30 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 29, 9, 20, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/bastille-1928.jpg',
          title: 'Bastille',
          artist: 'Konstantin Korovin',
          year: '1928',
          rule: {
            "monday": [ 29, 9, 20, 31 ],
            "tuesday": [ 28, 8, 19, 30 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/place-de-la-bastille-1.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 29, 9, 20, 31 ],
            "wednesday": [ 28, 8, 19, 30 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/place-de-la-bastille.jpg',
          title: 'Place de la Bastille',
          artist: 'Gustave Loiseau',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 29, 9, 20, 31 ],
            "thursday": [ 28, 8, 19, 30 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/at-la-bastille-portrait-of-jeanne-wenz-1889.jpg',
          title: 'At La Bastille (Portrait of Jeanne Wenz)',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1889',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 29, 9, 20, 31 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/place-de-la-bastille-3.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 29, 9, 20, 31 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/bastille-flux-2007.jpg',
          title: 'Bastille Flux',
          artist: 'Gerard Fromanger',
          year: '2007',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 29, 9, 20, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/bastille-day-boulevard-rochechouart-paris.jpg',
          title: 'Bastille Day, Boulevard Rochechouart, Paris',
          artist: 'Childe Hassam',
          year: '1889',
          rule: {
            "monday": [ 29, 9, 20, 31 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/place-de-la-bastille-2.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 29, 9, 20, 31 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/place-de-la-bastille-6.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 29, 9, 20, 31 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/la-place-de-la-bastille-paris.jpg',
          title: 'La Place de la Bastille, Paris',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 30, 10, 21, 1 ],
            "thursday": [ 29, 9, 20, 31 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/place-de-la-bastille-33.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/place-de-la-bastille-4.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/la-derniere-bastille.jpg',
          title: 'La Derniere Bastille',
          artist: 'Theophile Steinlen',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/the-dreams-in-the-witch-house-h-p-lovecraft-2016-1.jpg',
          title: 'the Dreams in the Witch House (H P Lovecraft )',
          artist: 'Kim Prisu',
          year: '2016',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/luthier-1997.jpg',
          title: 'Luthier',
          artist: 'Jerome Mesnager',
          year: '1997',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/untitled-2002-1.jpg',
          title: 'Untitled',
          artist: 'Moon Pil Shim',
          year: '2002',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 30, 10, 21, 1 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/les-baronnes-130-x-162-2007.jpg',
          title: 'Les Baronnes',
          artist: 'Pietropoli Patrick',
          year: '2007',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/eurydice-n-19-1996.jpg',
          title: 'Eurydice n. 19',
          artist: 'Bracha L. Ettinger',
          year: '1996',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/the-oval-room-1967.jpg',
          title: 'The Oval Room',
          artist: 'Christian Boltanski',
          year: '1967',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/le-cri-1974.jpg',
          title: 'Le cri',
          artist: 'Ivan Tovar',
          year: '1974',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/ficelage-2.jpg',
          title: 'Ficelage',
          artist: 'Andre-Pierre Arnal',
          year: '?',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/peinture-acrylique-blanche-sur-tissu-ray-blanc-et-rouge-1970.jpg',
          title: 'Peinture acrylique blanche sur tissu rayé blanc et rouge',
          artist: 'Daniel Buren',
          year: '1970',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/imprints-of-a-no-50-paintbrush-repeated-at-regular-intervals-of-30-cm-1995.jpg',
          title: 'Imprints of a No. 50 Paintbrush Repeated at Regular Intervals of 30 cm.',
          artist: 'Niele Toroni',
          year: '1995',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/last-year-in-capri-exotic-title-1962.jpg',
          title: 'Last Year in Capri (exotic title)',
          artist: 'Martial Raysse',
          year: '1962',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/histoires-natturelles-1973.jpg',
          title: 'Histoires Natturelles',
          artist: 'Jorge Camacho',
          year: '1973',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/six-round-wooden-bars-1975.jpg',
          title: 'Six Round Wooden Bars',
          artist: 'Andre Cadere',
          year: '1975',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/1965-1-unknown-detail-of-detail-1.jpg',
          title: '1965 / 1 - ∞ / unknown detail of detail',
          artist: 'Roman Opalka',
          year: '1965',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/paris-review-1967.jpg',
          title: 'Paris Review',
          artist: 'Marisol Escobar',
          year: '1967',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/progression-1959.jpg',
          title: 'Progression',
          artist: 'Horacio Garcia-Rossi',
          year: '1959',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/don-quichotte-les-duegnes-1988.jpg',
          title: 'Don Quichotte: Les duegnes',
          artist: 'Bernard Buffet',
          year: '1988',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/unknown-title-1.jpg',
          title: 'unknown title',
          artist: 'Jacques Le Marechal',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/dock-1991.jpg',
          title: 'Dock',
          artist: 'Louis Pons',
          year: '1991',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/cosmique-1972.jpg',
          title: 'Cosmique',
          artist: 'Jean Miotte',
          year: '1972',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/signals-series-2-1968.jpg',
          title: 'Signals (Series 2)',
          artist: 'Takis',
          year: '1968',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/deux-noirs-sur-raies-vertes-1981.jpg',
          title: 'Deux noirs sur Raies Vertes',
          artist: 'Francois Arnal',
          year: '1981',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/notes-par-deux-2003.jpg',
          title: 'Notes par Deux',
          artist: 'Genevieve Asse',
          year: '2003',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/etude-pour-hommage-a-claude-nicolas-ledoux-1959.jpg',
          title: 'Etude pour Hommage a Claude Nicolas Ledoux',
          artist: 'Jacques Busse',
          year: '1959',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/palais-royal-fountain-paris-1996.jpg',
          title: 'Palais Royal Fountain, Paris',
          artist: 'Pol Bury',
          year: '1996',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/the-necrophile-dedicated-to-sergeant-bertrand-1965.jpg',
          title: 'The Necrophile (dedicated to Sergeant Bertrand)',
          artist: 'Jean Benoit',
          year: '1965',
          rule: {
            "monday": [ 7, 17, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/apocalypse-du-printemps.jpg',
          title: 'Apocalypse du printemps',
          artist: 'Jean Messagier',
          year: '?',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 17, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/04-08-1993-1993.jpg',
          title: '04-08-1993',
          artist: 'Zao Wou-Ki',
          year: '1993',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 17, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/la-tour-eiffel-et-la-rue-de-la-manutention.jpg',
          title: 'La Tour Eiffel et la rue de la manutention',
          artist: 'Maurice Boitel',
          year: '?',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 17, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/les-voiles-1984.jpg',
          title: 'Les Voiles',
          artist: 'Carlos Nadal',
          year: '1984',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 17, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/defil-des-soldats-de-plomb-1970.jpg',
          title: 'Defilé des Soldats de Plomb',
          artist: 'Natalia Dumitresco',
          year: '1970',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 17, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/personnages-1964.jpg',
          title: 'Personnages',
          artist: 'Aurel Cojan',
          year: '1964',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 17, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/untitled-3.jpg',
          title: 'Untitled',
          artist: 'Wols',
          year: '?',
          rule: {
            "monday": [ 8, 18, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/fen-tre-toil-e-1962.jpg',
          title: 'Fenêtre étoilée',
          artist: 'Adrien Dax',
          year: '1962',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 18, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/echiquier-1971.jpg',
          title: 'Echiquier',
          artist: 'Aurelie Nemours',
          year: '1971',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 18, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/personnage-sur-fond-nocturne-toil.jpg',
          title: 'Personnage sur fond nocturne étoilé',
          artist: 'Gaston Chaissac',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 18, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/terrasse-la-nuit-1986.jpg',
          title: 'Terrasse la nuit',
          artist: 'Jean Bertholle',
          year: '1986',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 18, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/rue-mouffetard-paris-1954.jpg',
          title: 'Rue Mouffetard, Paris',
          artist: 'Henri Cartier-Bresson',
          year: '1954',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 18, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/eau.jpg',
          title: 'Eau',
          artist: 'Dora Maar',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 18, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/along-the-way-1969.jpg',
          title: 'Along the Way..',
          artist: 'Georges Hugnet',
          year: '1969',
          rule: {
            "monday": [ 9, 19, 31, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/untitled(1).jpg',
          title: 'Untitled',
          artist: 'Pierre Tal-Coat',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 19, 31, 11 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/lutte-as-ciel-1937.jpg',
          title: 'Lutte as Ciel',
          artist: 'John Ferren',
          year: '1937',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 19, 31, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/loxos.jpg',
          title: 'Loxos',
          artist: 'Maurice Esteve',
          year: '?',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 19, 31, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/beetles-1951.jpg',
          title: 'Beetles',
          artist: 'Germaine Richier',
          year: '1951',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 19, 31, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/five-nudes-1950.jpg',
          title: 'Five Nudes',
          artist: 'Sanyu',
          year: '1950',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 19, 31, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/hymne-1961.jpg',
          title: 'Hymne',
          artist: 'Michel Seuphor',
          year: '1961',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 19, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/the-kiss-1935.jpg',
          title: 'The Kiss',
          artist: 'Brassai',
          year: '1935',
          rule: {
            "monday": [ 10, 20, 1, 12 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 19, 29, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/t-te-de-profil.jpg',
          title: 'Tête de profil',
          artist: 'Jean Fautrier',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 20, 1, 12 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 19, 29, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/couple-in-the-night.jpg',
          title: 'Couple in the night',
          artist: 'Andre Masson',
          year: '1958',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 20, 1, 12 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 19, 29, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/panneaux-de-signalisation-de-chemin-de-fer-1918.jpg',
          title: 'Panneaux de signalisation de chemin de fer',
          artist: 'Jean Hugo',
          year: '1918',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 20, 1, 12 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 19, 29, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/adoration.jpg',
          title: 'Adoration',
          artist: 'Erte',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 20, 1, 12 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 19, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/the-guitar-player.jpg',
          title: 'The Guitar Player',
          artist: 'Ossip Zadkine',
          year: '1920',
          rule: {
            "monday": [ 8, 19, 29, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 20, 1, 12 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/silence-ici-j-ordonne-nathalie-paley-en-sphinx-1932.jpg',
          title: 'Silence! Ici j’ordonne… (Nathalie Paley en sphinx)',
          artist: 'Jean Cocteau',
          year: '1932',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 19, 29, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 20, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/still-life-1920.jpg',
          title: 'Still Life',
          artist: 'Le Corbusier',
          year: '1920',
          rule: {
            "monday": [ 11, 21, 2, 13 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 20, 30, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/liberation-1944.jpg',
          title: 'Liberation',
          artist: 'Jules Lefranc',
          year: '1944',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 21, 2, 13 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 20, 30, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/abstract-composition.jpg',
          title: 'Abstract Composition',
          artist: 'Jean Arp',
          year: '1915',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 21, 2, 13 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 20, 30, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/chatting-1928.jpg',
          title: 'Chatting',
          artist: 'Lajos Tihanyi',
          year: '1928',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 21, 2, 13 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 20, 30, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/eiffel-tower-1.jpg',
          title: 'Eiffel Tower',
          artist: 'Robert Delaunay',
          year: '1911',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 21, 2, 13 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 20, 30, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'french revolution',
          img_path: './img/july/man-with-pipe-1919.jpg',
          title: 'Man with Pipe',
          artist: 'Henri Laurens',
          year: '1919',
          rule: {
            "monday": [ 9, 20, 30, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 21, 2, 13 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_arts_id_seq', (SELECT MAX(id) FROM july_arts));");
    });
};
