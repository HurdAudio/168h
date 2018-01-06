'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('june_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('june_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/my-small-world.jpg',
          title: 'My Small World',
          artist: 'Achraf Baznani',
          year: '2014',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/tumblr-nvtla1gqan1qdsei8o1-1280.jpg',
          title: 'Chloë Sevigny',
          artist: 'Wolfgang Tillmans',
          year: '1995',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/eight-piles-2003.jpg',
          title: 'Eight Piles',
          artist: 'David Burdeny',
          year: '2003',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/gold-in-the-morning-series.jpg',
          title: 'Gold in the morning (A - J)',
          artist: 'Alfredo Jaar',
          year: '1985',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/ratingen-swimming-pool-1987.jpg',
          title: 'Ratingen Swimming Pool',
          artist: 'Andreas Gursky',
          year: '1987',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-cigarettes-1979.jpg',
          title: 'Untitled (Cigarettes)',
          artist: 'Richard Prince',
          year: '1978 - 1979',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-35mm-transparency-1990.jpg',
          title: 'Untitled (35mm Transparency)',
          artist: 'Li Yuan-chia',
          year: '1990',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-1930.jpg',
          title: 'Untitled',
          artist: 'Kansuke Yamamoto',
          year: '1930',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/pavilion-de-l-elegance-madeleine-vionnet-1937.jpg',
          title: 'Pavilion de l\'elegance (Madeleine Vionnet)',
          artist: 'Wols',
          year: '1937',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/ridiculous-portrait-contact-sheet-1972.jpg',
          title: 'Ridiculous Portrait (Contact Sheet)',
          artist: 'May Wilson',
          year: '1972',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/blindman-s-buff-1898.jpg',
          title: 'Blindman\'s Buff',
          artist: 'Clarence White',
          year: '1898',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/nude-1925.jpg',
          title: 'Nude',
          artist: 'Edward Weston',
          year: '1925',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/1994-6-1994.jpg',
          title: '1994.6',
          artist: 'Ai Weiwei',
          year: '1994',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/arnold-schwarzenegger-1977.jpg',
          title: 'Arnold Schwarzenegger',
          artist: 'Andy Warhol',
          year: '1977',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/fotogramma-1997.jpg',
          title: 'Fotogramma',
          artist: 'Luigi Veronesi',
          year: '1997',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 3, 13, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/surimpression-1934.jpg',
          title: 'Surimpression',
          artist: 'Raoul Ubac',
          year: '1934',
          rule: {
            "monday": [ 3, 13, 23, 30 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/atlas-i-1995.jpg',
          title: 'Atlas I',
          artist: 'Rirkrit Tiravanija',
          year: '1995',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 3, 13, 23, 30 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/wolfgangtillmans-1992lutz-alex-sitting-in-the-trees-1.jpg',
          title: 'Lutz Alex Sitting in the Trees 1',
          artist: 'Wolfgang Tillmans',
          year: '1992',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 3, 13, 23, 30 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/photograph-of-photograph-1973.jpg',
          title: 'Photograph of Photograph',
          artist: 'Takamatsu Jiro',
          year: '1973',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 3, 13, 23, 30 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/self-portrait-with-dada-kopf-dada-head-1920.jpg',
          title: 'Self-portrait with Dada-Kopf (Dada Head)',
          artist: 'Sophie Taeuber-Arp',
          year: '1920',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 3, 13, 23, 30 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/cabot-street-cinema-massachusetts-1978.jpg',
          title: 'Cabot Street Cinema, Massachusetts',
          artist: 'Hiroshi Sugimoto',
          year: '1978',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 4, 14, 24, 1 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/self-portrait-1886.jpg',
          title: 'Self-portrait',
          artist: 'Alfred Stieglitz',
          year: '1886',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 4, 14, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/prince-albert-1938.jpg',
          title: 'Prince Albert',
          artist: 'Frederick Sommer',
          year: '1938',
          rule: {
            "monday": [ 4, 14, 24, 1 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 19, 27 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/las-animas-1997.jpg',
          title: 'Las Animas',
          artist: 'Kiki Smith',
          year: '1997',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 4, 14, 24, 1 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/gloucester-16a-1944.jpg',
          title: 'Gloucester 16A',
          artist: 'Aaron Siskind',
          year: '1944',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 4, 14, 24, 1 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-b-1975.jpg',
          title: 'Untitled B',
          artist: 'Cindy Sherman',
          year: '1975',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 28, 26 ],
            "thursday": [ 4, 14, 24, 1 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/doylestown-house-the-stove-1917.jpg',
          title: 'Doylestown House—The Stove',
          artist: 'Charles Sheeler',
          year: '1917',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 28, 26 ],
            "friday": [ 4, 14, 24, 1 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/rooftops-1916.jpg',
          title: 'Rooftops',
          artist: 'Morton Shamberg',
          year: '1916',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 29, 9, 29, 27 ],
            "saturday": [ 5, 15, 25, 2 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-burning-of-rome-1907.jpg',
          title: 'The Burning of Rome',
          artist: 'George Seeley',
          year: '1907',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 30, 10, 20, 28 ],
            "saturday": [ 29, 9, 29, 27 ],
            "sunday": [ 5, 15, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/amourette-schadography-1918.jpg',
          title: 'Amourette (Schadography)',
          artist: 'Christian Schad',
          year: '1918',
          rule: {
            "monday": [ 5, 15, 25, 2 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 29, 9, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/conoco-shamrock-texas-from-five-views-from-the-panhandle-series.jpg',
          title: 'Conoco - Shamrock, Texas (from Five Views from the Panhandle Series)',
          artist: 'Edward Ruscha',
          year: 'XX cent.',
          rule: {
            "monday": [ 29, 9, 29, 27 ],
            "tuesday": [ 5, 15, 25, 2 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/postcard-1968.jpg',
          title: 'Postcard',
          artist: 'Dieter Roth',
          year: '1968',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 29, 9, 29, 27 ],
            "wednesday": [ 5, 15, 25, 2 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/vormittagsspuk-1927.jpg',
          title: 'Vormittagsspuk',
          artist: 'Hans Richter',
          year: '1927',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 29, 9, 29, 27 ],
            "thursday": [ 5, 15, 25, 2 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-coat-stand-1920.jpg',
          title: 'The Coat Stand',
          artist: 'Man Ray',
          year: '1920',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 29, 9, 29, 27 ],
            "friday": [ 5, 15, 25, 2 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-cowboys-1986.jpg',
          title: 'Untitled (Cowboys)',
          artist: 'Richard Prince',
          year: '1986',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [30, 10, 20, 28 ],
            "saturday": [ 6, 16, 26, 3 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-1959.jpg',
          title: 'Untitled',
          artist: 'Otto Piene',
          year: '1959',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 30, 10, 20, 28 ],
            "sunday": [ 6, 16, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-egg-1967.jpg',
          title: 'The Egg',
          artist: 'Lygia Pape',
          year: '1967',
          rule: {
            "monday": [ 6, 16, 26, 3 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 30, 10, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/whirlpool-eye-of-the-storm-1973.jpg',
          title: 'Whirlpool (Eye of the Storm)',
          artist: 'Dennis Oppenheim',
          year: '1973',
          rule: {
            "monday": [ 30, 10, 20, 28 ],
            "tuesday": [ 6, 16, 26, 3 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/1965-1-d-tail-photo-1965.jpg',
          title: '1965 / 1 - ∞ /détail photo ?',
          artist: 'Roman Opalka',
          year: '1965',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 30, 10, 20, 28 ],
            "wednesday": [ 6, 16, 26, 3 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-1980.jpg',
          title: 'Untitled',
          artist: 'Eduardo Nery',
          year: '1980',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 30, 10, 20, 28 ],
            "thursday": [ 6, 16, 26, 3 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/l-odalisque-turbulente-1967.jpg',
          title: 'L\'odalisque turbulente',
          artist: 'Pierre Molinier',
          year: '1967',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 30, 10, 20, 28 ],
            "friday": [ 6, 16, 26, 3 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/double-portrait.jpg',
          title: 'Double Portrait',
          artist: 'Laszlo Moholy-Nagy',
          year: 'c.1923',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 1, 11, 21, 29 ],
            "saturday": [ 7, 17, 27, 4 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-1970-3.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 1, 11, 21, 29 ],
            "sunday": [ 7, 17, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/le-pont-neuf-daguerreotype-1848.jpg',
          title: 'Le Pont Neuf (daguerreotype)',
          artist: 'Anton Melbye',
          year: '1848',
          rule: {
            "monday": [ 7, 17, 27, 4 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 1, 11, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/painting-objects-1980.jpg',
          title: 'Painting-Objects',
          artist: 'Florin Maxa',
          year: '1980',
          rule: {
            "monday": [ 1, 11, 21, 29 ],
            "tuesday": [ 7, 17, 27, 4 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/eros-crom-tico-1964.jpg',
          title: 'Eros Cromático',
          artist: 'Jorge Martins',
          year: '1964',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 1, 11, 21, 29 ],
            "wednesday": [ 7, 17, 27, 4 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/antiportrait-1984.jpg',
          title: 'Antiportrait',
          artist: 'Marcel Marien',
          year: '1984',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 1, 11, 21, 29 ],
            "thursday": [ 7, 17, 27, 4 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/new-york-boy-shining-shoes-july-1952-1952.jpg',
          title: 'New York (Boy Shining Shoes), July 1952',
          artist: 'Vivian Maier',
          year: '1952',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 1, 11, 21, 29 ],
            "friday": [ 7, 17, 27, 4 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/double-portrait-1930.jpg',
          title: 'Double Portrait',
          artist: 'Dora Maar',
          year: '1930',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 2, 12, 22, 30 ],
            "saturday": [ 8, 18, 28, 5 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/buried-cube-containing-an-object-of-importance-but-little-value-1968.jpg',
          title: 'Buried Cube Containing an Object of Importance but Little Value',
          artist: 'Sol LeWitt',
          year: '1968',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 2, 12, 22, 30 ],
            "sunday": [ 8, 18, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/meine-diana-1896.jpg',
          title: 'Meine Diana',
          artist: 'Heinrich Kuhn',
          year: '1896',
          rule: {
            "monday": [ 8, 18, 28, 5 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 2, 12, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/portrait.jpg',
          title: 'Portrait',
          artist: 'Alekos Kontopoulos',
          year: 'XX cent.',
          rule: {
            "monday": [ 2, 12, 22, 30 ],
            "tuesday": [ 8, 18, 28, 5 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/leap-into-the-void-1960.jpg',
          title: 'Leap into the Void',
          artist: 'Yves Klein',
          year: '1960',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 2, 12, 22, 30 ],
            "wednesday": [ 8, 18, 28, 5 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/from-five-04-2.jpg',
          title: 'From Five',
          artist: 'Abbas Kiarostami',
          year: '2005',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 2, 12, 22, 30 ],
            "thursday": [ 8, 18, 28, 5 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/portrait-of-marguerite-khnopff-1890.jpg',
          title: 'Portrait of Marguerite Khnopff',
          artist: 'Fernand Khnopff',
          year: '1890',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 2, 12, 22, 30 ],
            "friday": [ 8, 18, 28, 5 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/circus-budapest-19-may-1920-1920.jpg',
          title: 'Circus, Budapest, 19 May 1920',
          artist: 'Andre Kertesz',
          year: '1920',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 3, 13, 23, 1 ],
            "saturday": [ 9, 19, 29, 6 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/chief-flying-hawk-1898.jpg',
          title: 'Chief Flying Hawk',
          artist: 'Gertrude Kasebier',
          year: '1898',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 3, 13, 23, 1 ],
            "sunday": [ 9, 19, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/gipsy-camp-1910.jpg',
          title: 'Gipsy Camp',
          artist: 'David Kakabadze',
          year: '1910',
          rule: {
            "monday": [ 9, 19, 29, 6 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 3, 13, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/girl-t-1996.jpg',
          title: 'Girl-T',
          artist: 'Leiko Ikemura',
          year: '1996',
          rule: {
            "monday": [ 3, 13, 23, 1 ],
            "tuesday": [ 9, 19, 29, 6 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/duration-piece-4-bradford-massachusetts-1968.jpg',
          title: 'Duration Piece #4 Bradford Massachusetts',
          artist: 'Douglas Huebler',
          year: '1968',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 3, 13, 23, 1 ],
            "wednesday": [ 9, 19, 29, 6 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-from-the-series-still-water-the-river-thames-for-example-1999.jpg',
          title: 'Untitled (from the series Still Water (The River Thames, for Example))',
          artist: 'Roni Horn',
          year: '1999',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 3, 13, 23, 1 ],
            "thursday": [ 9, 19, 29, 6 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/sixty-seconds-of-light-1970.jpg',
          title: 'Sixty Seconds of Light',
          artist: 'John Hilliard',
          year: '1970',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 3, 13, 23, 1 ],
            "friday": [ 9, 19, 29, 6 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/typographic-nude-1965.jpg',
          title: 'Typographic Nude',
          artist: 'Robert Heinecken',
          year: '1965',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 4, 14, 24, 2 ],
            "saturday": [ 10, 20, 30, 7 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-1942.jpg',
          title: 'Untitled',
          artist: 'David Hare',
          year: '1942',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 4, 14, 24, 2 ],
            "sunday": [ 10, 20, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-self-portrait-2000.jpg',
          title: 'Untitled (Self-Portrait)',
          artist: 'Ann Hamilton',
          year: '2000',
          rule: {
            "monday": [ 10, 20, 30, 7 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 4, 14, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/garters-1939.jpg',
          title: 'Garters',
          artist: 'Philippe Halsman',
          year: '1939',
          rule: {
            "monday": [ 4, 14, 24, 2 ],
            "tuesday": [ 10, 20, 30, 7 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/shanghai-2000.jpg',
          title: 'Shanghai',
          artist: 'Andreas Gursky',
          year: '2000',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 4, 14, 24, 2 ],
            "wednesday": [ 10, 20, 30, 7 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-diptych-1984.jpg',
          title: 'Untitled Diptych',
          artist: 'Gunther Forg',
          year: '1984',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 4, 14, 24, 2 ],
            "thursday": [ 10, 20, 30, 7 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/seascape-ibiza-1972.jpg',
          title: 'Seascape, Ibiza',
          artist: 'Franco Fontana',
          year: '1972',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 4, 14, 24, 2 ],
            "friday": [ 10, 20, 30, 7 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/forty-eight-view-of-lochness-1997.jpg',
          title: 'Forty-Eight View of Lochness',
          artist: 'Spencer Finch',
          year: '1997',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 5, 15, 25, 3 ],
            "saturday": [ 11, 21, 1, 8 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/main-d-artiste-1967.jpg',
          title: 'Main d\'artiste',
          artist: 'Robert Filliou',
          year: '1967',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 5, 15, 25, 3 ],
            "sunday": [ 11, 21, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/male-nude-1897.jpg',
          title: 'Male Nude',
          artist: 'Frank Eugene',
          year: '1897',
          rule: {
            "monday": [ 11, 21, 1, 8 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 5, 15, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/new-york-city-1953.jpg',
          title: 'New York City',
          artist: 'Elliott Erwitt',
          year: '1953',
          rule: {
            "monday": [ 5, 15, 25, 3 ],
            "tuesday": [ 11, 21, 1, 8 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/monument-valley-grand-scale-1997.jpg',
          title: 'Monument Valley (Grand Scale)',
          artist: 'Tracey Emin',
          year: '1997',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 5, 15, 25, 3 ],
            "wednesday": [ 11, 21, 1, 8 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-island-series-1997.jpg',
          title: 'The island series',
          artist: 'Olafur Eliasson',
          year: '1997',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 5, 15, 25, 3 ],
            "thursday": [ 11, 21, 1, 8 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/downtown-morton-mississippi-1969.jpg',
          title: 'Downtown Morton, Mississippi',
          artist: 'William Eggleston',
          year: '1969',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 5, 15, 25, 3 ],
            "friday": [ 11, 21, 1, 8 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/thomas-eakins-and-j-laurie-wallace-1883-1.jpg',
          title: 'Thomas Eakins and J. Laurie Wallace',
          artist: 'Thomas Eakins',
          year: '1883',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 6, 16, 26, 4 ],
            "saturday": [ 12, 22, 2, 9 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/behind-the-scenes-1902.jpg',
          title: 'Behind the Scenes',
          artist: 'Pierre Dubreuil',
          year: '1902',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 6, 16, 26, 4 ],
            "sunday": [ 12, 22, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/kiss-by-the-hotel-de-ville-1950.jpg',
          title: 'Kiss by the Hotel de Ville',
          artist: 'Robert Doisneau',
          year: '1950',
          rule: {
            "monday": [ 12, 22, 2, 9 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 6, 16, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/behind-the-scenes-1904.jpg',
          title: 'Behind the Scenes',
          artist: 'Robert Demachy',
          year: '1904',
          rule: {
            "monday": [ 6, 16, 26, 4 ],
            "tuesday": [ 12, 22, 2, 9 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/un-cantique-1895.jpg',
          title: 'Un Cantique',
          artist: 'Adolph de Meyer',
          year: '1895',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 6, 16, 26, 4 ],
            "wednesday": [ 12, 22, 2, 9 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/un-chien-andalou-film-still-1928.jpg',
          title: 'Un Chien Andalou (film still)',
          artist: 'Salvador Dali',
          year: '1928',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 6, 16, 26, 4 ],
            "thursday": [ 12, 22, 2, 9 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/2-1.jpg',
          title: 'untitled',
          artist: 'daisuke yokota',
          year: '2015',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 6, 16, 26, 4 ],
            "friday": [ 12, 22, 2, 9 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/buckley.jpg',
          title: 'Buckley',
          artist: 'Ralston Crawford',
          year: 'XX cent.',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 7, 17, 27, 5 ],
            "saturday": [ 13, 23, 3, 10 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/st-paul-s-and-cogs-1904.jpg',
          title: 'St. Paul\'s and Cogs',
          artist: 'Alvin Langdon Coburn',
          year: '1904',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 7, 17, 27, 5 ],
            "sunday": [ 13, 23, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/teatro-de-sombras-as-cinco-esta-es-still-1976-1.jpg',
          title: 'Teatro de Sombras, As Cinco Estações (still)',
          artist: 'Lourdes Castro',
          year: '1976',
          rule: {
            "monday": [ 13, 23, 3, 10 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 7, 17, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-quai-st-bernard-near-the-gare-d-austerlitz-paris-1932.jpg',
          title: 'The Quai St Bernard, near the Gare d\'Austerlitz, Paris',
          artist: 'Henri Cartier-Bresson',
          year: '1932',
          rule: {
            "monday": [ 7, 17, 27, 5 ],
            "tuesday": [ 13, 23, 3, 10 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/self-portrait-1855.jpg',
          title: 'Self Portrait',
          artist: 'Lewis Carroll',
          year: '1855',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 7, 17, 27, 5 ],
            "wednesday": [ 13, 23, 3, 10 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-second-step-2005.jpg',
          title: 'The Second Step',
          artist: 'Mircea Cantor',
          year: '2005',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 7, 17, 27, 5 ],
            "thursday": [ 13, 23, 3, 10 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-discovery-of-geometry-1978.jpg',
          title: 'The Discovery of Geometry',
          artist: 'Luis Camnitzer',
          year: '1978',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 7, 17, 27, 5 ],
            "friday": [ 13, 23, 3, 10 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/materializa-o-de-um-quadro-imagin-rio-1975.jpg',
          title: 'Materialização de um quadro imaginário',
          artist: 'Fernando Calhau',
          year: '1975',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 8, 18, 28, 6 ],
            "saturday": [ 14, 24, 4, 11 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/drift-10-grand-beach-manitoba-2005.jpg',
          title: 'Drift #10: Grand Beach, Manitoba',
          artist: 'David Burdeny',
          year: '2005',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 8, 18, 28, 6 ],
            "sunday": [ 14, 24, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/figuras-en-el-castillo-1920.jpg',
          title: 'Figuras en el Castillo',
          artist: 'Manuel Alvarez Bravo',
          year: '1920',
          rule: {
            "monday": [ 14, 24, 4, 11 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 8, 18, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/towards-white-1976.jpg',
          title: 'Towards White',
          artist: 'Geta Bratescu',
          year: '1976',
          rule: {
            "monday": [ 8, 18, 28, 6 ],
            "tuesday": [ 14, 24, 4, 11 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/bassin-du-luxembourg-1930.jpg',
          title: 'Bassin du Luxembourg',
          artist: 'Brassai',
          year: '1930',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 8, 18, 28, 6 ],
            "wednesday": [ 14, 24, 4, 11 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/picnic-in-the-mountains.jpg',
          title: 'Picnic in the Mountains',
          artist: 'Fernando Botero',
          year: '1966',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 8, 18, 28, 6 ],
            "thursday": [ 14, 24, 4, 11 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/comic-vignettes-parents-wedding-1974.jpg',
          title: 'Comic Vignettes, Parents’ wedding',
          artist: 'Christian Boltanski',
          year: '1974',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 8, 18, 28, 6 ],
            "friday": [ 14, 24, 4, 11 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/four-blind-men-bhavnagar-gujarat-1968.jpg',
          title: 'Four blind men, Bhavnagar, Gujarat',
          artist: 'Jyoti Bhatt',
          year: '1968',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 9, 19, 29, 7 ],
            "saturday": [ 15, 25, 5, 12 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/art-is-ego-1971.jpg',
          title: 'Art Is Ego',
          artist: 'Ben',
          year: '1971',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 9, 19, 29, 7 ],
            "sunday": [ 15, 25, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-doll-1934.jpg',
          title: 'The Doll',
          artist: 'Hans Bellmer',
          year: '1934',
          rule: {
            "monday": [ 15, 25, 5, 12 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 9, 19, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/human-being.jpg',
          title: 'Human Being',
          artist: 'Achraf Baznani',
          year: 'XX cent.',
          rule: {
            "monday": [ 9, 19, 29, 7 ],
            "tuesday": [ 15, 25, 5, 12 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/liquid-detergent-vancouver-british-columbia-1965.jpg',
          title: 'Liquid Detergent, Vancouver, British Columbia',
          artist: 'Iain Baxter&',
          year: '1965',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 9, 19, 29, 7 ],
            "wednesday": [ 15, 25, 5, 12 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/land-of-the-spotted-eagle-1983.jpg',
          title: 'Land of the Spotted Eagle',
          artist: 'Lothar Baumgarten',
          year: '1983',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 9, 19, 29, 7 ],
            "thursday": [ 15, 25, 5, 12 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/wrong-1967.jpg',
          title: 'Wrong',
          artist: 'John Baldessari',
          year: '1967',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 9, 19, 29, 7 ],
            "friday": [ 15, 25, 5, 12 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/art-declared-found-activity-lathering-alicante-spain-april-1960-1-1960.jpg',
          title: 'Art Declared Found Activity (Lathering, Alicante Spain, April 1960) 1',
          artist: 'Billy Apple',
          year: '1960',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 10, 20, 30, 8 ],
            "saturday": [ 16, 26, 6, 13 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/voar-2001.jpg',
          title: 'Voar',
          artist: 'Helena Almeida',
          year: '2001',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 10, 20, 30, 8 ],
            "sunday": [ 16, 26, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/bum-thumb-rock-ploumanach-brittany-1936.jpg',
          title: 'Bum-Thumb Rock, Ploumanach, Brittany',
          artist: 'Eileen Agar',
          year: '1936',
          rule: {
            "monday": [ 16, 26, 6, 13 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 10, 20, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/all-my-clothes-1970.jpg',
          title: 'All my clothes',
          artist: 'Bas Jan Ader',
          year: '1970',
          rule: {
            "monday": [ 10, 20, 30, 8 ],
            "tuesday": [ 16, 26, 6, 13 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/mirror-lake-morning-yosemite-national-park.jpg',
          title: 'Mirror Lake, Morning, Yosemite National Park',
          artist: 'Ansel Adams',
          year: '1928',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 10, 20, 30, 8 ],
            "wednesday": [ 16, 26, 6, 13 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/theme-song-1973.jpg',
          title: 'Theme Song',
          artist: 'Vito Acconci',
          year: '1973',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 10, 20, 30, 8 ],
            "thursday": [ 16, 26, 6, 13 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/charles-hay-cameron-1864.jpg',
          title: 'Charles Hay Cameron',
          artist: 'Julia Margaret Cameron',
          year: '1864',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 10, 20, 30, 8 ],
            "friday": [ 16, 26, 6, 13 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/hunting-by-steam-in-melville-bay-1869.jpg',
          title: 'Hunting by Steam in Melville Bay',
          artist: 'William Bradford',
          year: '1869',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 11, 21, 1, 9 ],
            "saturday": [ 17, 27, 7, 14 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/chateau-wood-1917.jpg',
          title: 'Chateau Wood',
          artist: 'Frank Hurley',
          year: '1917',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 11, 21, 1, 9 ],
            "sunday": [ 17, 27, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/3e7c1dcd49363410cbf16f56884b6cd0.jpg',
          title: 'Child with a toy hand grenade in Central Park',
          artist: 'Diane Arbus',
          year: '1962',
          rule: {
            "monday": [ 17, 27, 7, 14 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 11, 21, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/tillmans-web6.jpg',
          title: 'Open Heart Bypass',
          artist: 'Wolfgang Tillmans',
          year: '2015',
          rule: {
            "monday": [ 11, 21, 1, 9 ],
            "tuesday": [ 17, 27, 7, 14 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/max-ernst-1946.jpg',
          title: 'Frederick Sommer',
          artist: 'Max Ernst',
          year: '1946',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 11, 21, 1, 9 ],
            "wednesday": [ 17, 27, 7, 14 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/study-of-king-david-1866.jpg',
          title: 'Study of King David',
          artist: 'Julia Margaret Cameron',
          year: '1866',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 11, 21, 1, 9 ],
            "thursday": [ 17, 27, 7, 14 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/times-square-new-york-1997.jpg',
          title: 'Times Square, New York',
          artist: 'Andreas Gursky',
          year: '1997',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 11, 21, 1, 9 ],
            "friday": [ 17, 27, 7, 14 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-fashion-1984(1).jpg',
          title: 'Untitled (Fashion)',
          artist: 'Richard Prince',
          year: '1982 - 1984',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 12, 22, 2, 10 ],
            "saturday": [ 18, 28, 8, 15 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/seascape-cascade-river-lake-superior-1995.jpg',
          title: 'Seascape: Cascade River, Lake Superior',
          artist: 'Hiroshi Sugimoto',
          year: '1995',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 12, 22, 2, 10 ],
            "sunday": [ 18, 28, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/medallion-1948.jpg',
          title: 'Medallion',
          artist: 'Frederick Sommer',
          year: '1948',
          rule: {
            "monday": [ 18, 28, 8, 15 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 12, 22, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/siesta-1926.jpg',
          title: 'Siesta',
          artist: 'Laszlo Moholy-Nagy',
          year: '1926',
          rule: {
            "monday": [ 12, 22, 2, 10 ],
            "tuesday": [ 18, 28, 8, 15 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/radio-tower-berlin-1928.jpg',
          title: 'Radio Tower Berlin',
          artist: 'Laszlo Moholy-Nagy',
          year: '1928',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 12, 22, 2, 10 ],
            "wednesday": [ 18, 28, 8, 15 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/gala-as-madonna-of-port-lligat.jpg',
          title: 'Gala as Madonna of Port Lligat',
          artist: 'Salvador Dali',
          year: '1950',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 12, 22, 2, 10 ],
            "thursday": [ 18, 28, 8, 15 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-1962.jpg',
          title: 'Untitled',
          artist: 'Frederick Sommer',
          year: '1962',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 12, 22, 2, 10 ],
            "friday": [ 18, 28, 8, 15 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/anxious-corridor-1940.jpg',
          title: 'Anxious Corridor',
          artist: 'Kansuke Yamamoto',
          year: '1940',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 13, 23, 3, 11 ],
            "saturday": [ 19, 29, 9, 16 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/andy-warhol.jpg',
          title: 'Andy Warhol',
          artist: 'Philippe Halsman',
          year: '?',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 13, 23, 3, 11 ],
            "sunday": [ 19, 29, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-425-2004.jpg',
          title: 'Untitled #425',
          artist: 'Cindy Sherman',
          year: '2004',
          rule: {
            "monday": [ 19, 29, 9, 16 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 13, 23, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/hiroshima-1954.jpg',
          title: 'Hiroshima',
          artist: 'Kansuke Yamamoto',
          year: '1954',
          rule: {
            "monday": [ 13, 23, 3, 11 ],
            "tuesday": [ 19, 29, 9, 16 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/der-schnitter.jpg',
          title: 'The Reaper',
          artist: 'Nicola Perscheid',
          year: '1901',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 13, 23, 3, 11 ],
            "wednesday": [ 19, 29, 9, 16 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/1997.jpg',
          title: 'Donbass Chocolate',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 13, 23, 3, 11 ],
            "thursday": [ 19, 29, 9, 16 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/3-1.jpg',
          title: 'untitled',
          artist: 'daisuke yokota',
          year: '2015',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 13, 23, 3, 11 ],
            "friday": [ 19, 29, 9, 16 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/nude-c-1900.jpg',
          title: 'Nude',
          artist: 'Clarence White',
          year: '1900',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 14, 24, 4, 12 ],
            "saturday": [ 20, 30, 10, 17 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/broadway-at-night-1905.jpg',
          title: 'Broadway at Night',
          artist: 'Alvin Langdon Coburn',
          year: '1905',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 14, 24, 4, 12 ],
            "sunday": [ 20, 30, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/miss-mary-and-edeltrude-lying-in-the-grass-1910.jpg',
          title: 'Miss Mary and Edeltrude Lying in the Grass',
          artist: 'Heinrich Kuhn',
          year: '1910',
          rule: {
            "monday": [ 20, 30, 10, 17 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 14, 24, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/rain-03.jpg',
          title: 'Rain',
          artist: 'Abbas Kiarostami',
          year: '2006',
          rule: {
            "monday": [ 14, 24, 4, 12 ],
            "tuesday": [ 20, 30, 10, 17 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/new-york-two-hippos-1955.jpg',
          title: 'New York (Two Hippos)',
          artist: 'Vivian Maier',
          year: '1955',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 14, 24, 4, 12 ],
            "wednesday": [ 20, 30, 10, 17 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/hanna-ralph-c1918.jpg',
          title: 'Hanna Ralph',
          artist: 'Nicola Perscheid',
          year: '1918',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 14, 24, 4, 12 ],
            "thursday": [ 20, 30, 10, 17 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/nude-on-back-1920.jpg',
          title: 'Nude on Back',
          artist: 'Heinrich Kuhn',
          year: '1920',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 14, 24, 4, 12 ],
            "friday": [ 20, 30, 10, 17 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/mass-psychosis-1927.jpg',
          title: 'Mass Psychosis',
          artist: 'Laszlo Moholy-Nagy',
          year: '1927',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 15, 25, 5, 13 ],
            "saturday": [ 21, 1, 11, 18 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/versumpfung-einer-venus-5.jpg',
          title: 'Versumpfung Einer Venus 5',
          artist: 'Otto Muehl',
          year: '1963',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 15, 25, 5, 13 ],
            "sunday": [ 21, 1, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/11-1.jpg',
          title: 'Fashion at the Graveyard',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 21, 1, 11, 18 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 15, 25, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/3-2.jpg',
          title: 'Untitled',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 15, 25, 5, 13 ],
            "tuesday": [ 21, 1, 11, 18 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/3a-1.jpg',
          title: 'Extension #1',
          artist: 'Rodrigo Franzao',
          year: '2016',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 15, 25, 5, 13 ],
            "wednesday": [ 21, 1, 11, 18 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/robar-el-quedar-libre-2000.jpg',
          title: 'Robar el quedar libre',
          artist: 'Francis Naranjo',
          year: '2000',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 15, 25, 5, 13 ],
            "thursday": [ 21, 1, 11, 18 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/heimw-rts.jpg',
          title: 'Heimwärts',
          artist: 'Nicola Perscheid',
          year: '1901',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 15, 25, 5, 13 ],
            "friday": [ 21, 1, 11, 18 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/kiki-de-montparnasse.jpg',
          title: 'Kiki de Montparnasse',
          artist: 'Man Ray',
          year: '1922',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 16, 26, 6, 14 ],
            "saturday": [ 22, 2, 12, 19 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/view-from-the-berlin-radio-tower-in-winter-1928.jpg',
          title: 'View from the Berlin radio tower in Winter',
          artist: 'Laszlo Moholy-Nagy',
          year: '1928',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 16, 26, 6, 14 ],
            "sunday": [ 22, 2, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/lee-nevin-1963.jpg',
          title: 'Lee Nevin',
          artist: 'Frederick Sommer',
          year: '1963',
          rule: {
            "monday": [ 22, 2, 12, 19 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 16, 26, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/en-un-pa-s-lejano-utopos-1998.jpg',
          title: 'En un país lejano, Utopos',
          artist: 'Francis Naranjo',
          year: '1998',
          rule: {
            "monday": [ 16, 26, 6, 14 ],
            "tuesday": [ 22, 2, 12, 19 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/000010050012_1000-512x773.jpg',
          title: 'Numero Homme',
          artist: 'Matt Lambert',
          year: 'xxi cent.',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 16, 26, 6, 14 ],
            "wednesday": [ 22, 2, 12, 19 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/o-SHEILA-PREE-BRIGHT-facebook.jpg',
          title: 'Plastic Bodies',
          artist: 'Sheila Pree Bright',
          year: '2013',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 16, 26, 6, 14 ],
            "thursday": [ 22, 2, 12, 19 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/PAR129495.jpg',
          title: 'The 69th Tactical Missile Squadron',
          artist: 'Cornell Capa',
          year: '1958',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 16, 26, 6, 14 ],
            "friday": [ 22, 2, 12, 19 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/Abeles-M_Arm-Plant-Bottles-.jpg',
          title: 'Arm Plant Bottles 300',
          artist: 'Michele Abeles',
          year: '2011',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 17, 27, 7, 15 ],
            "saturday": [ 23, 3, 13, 20 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/Miki-invitation.jpg',
          title: 'Works',
          artist: 'Miki Kratsman',
          year: '2009',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 17, 27, 7, 15 ],
            "sunday": [ 23, 3, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/coin.jpg',
          title: 'Coin',
          artist: 'Achraf Baznani',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 20 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 17, 27, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/chicken-parts-1939.jpg',
          title: 'Chicken Parts',
          artist: 'Frederick Sommer',
          year: '1939',
          rule: {
            "monday": [ 17, 27, 7, 15 ],
            "tuesday": [ 23, 3, 13, 20 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/modern-and-contemporary-photography-circle-of-life-water-reflection-wasser-spiegelung-manfred.jpg',
          title: 'Modern and Contemporary Photography Circle of Life Water Reflection mirror Manfred Kielnhofer',
          artist: 'Manfred Kielnhofer',
          year: 'xx cent.',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 17, 27, 7, 15 ],
            "wednesday": [ 23, 3, 13, 20 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/naturaleza-soportada-1997.jpg',
          title: 'Naturaleza soportada',
          artist: 'Francis Naranjo',
          year: '1997',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 17, 27, 7, 15 ],
            "thursday": [ 23, 3, 13, 20 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/2-3.jpg',
          title: 'Fashion at the Graveyard',
          artist: 'Arsen Savadov',
          year: '1997',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 17, 27, 7, 15 ],
            "friday": [ 23, 3, 13, 20 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-35mm-transparency-1990-1.jpg',
          title: 'Untitled (35mm Transparency)',
          artist: 'Li Yuan-chia',
          year: '1990',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 18, 28, 8, 16 ],
            "saturday": [ 24, 4, 14, 21 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-distance-between-the-landscape-and-dusk-1956.jpg',
          title: 'The Distance Between the Landscape and Dusk',
          artist: 'Kansuke Yamamoto',
          year: '1956',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 18, 28, 8, 16 ],
            "sunday": [ 24, 4, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-8.jpg',
          title: 'Untitled 8',
          artist: 'Wols',
          year: 'xx cent.',
          rule: {
            "monday": [ 24, 4, 14, 21 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 18, 28, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/clouds-maine-1921.jpg',
          title: 'Clouds, Maine',
          artist: 'Clarence White',
          year: '1921',
          rule: {
            "monday": [ 18, 28, 8, 16 ],
            "tuesday": [ 24, 4, 14, 21 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/civilian-defence-1942.jpg',
          title: 'Civilian Defence',
          artist: 'Edward Weston',
          year: '1942',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 18, 28, 8, 16 ],
            "wednesday": [ 24, 4, 14, 21 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/img-8191.JPG',
          title: 'Untitled',
          artist: 'Daniel Johnson',
          year: '?',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 18, 28, 8, 16 ],
            "thursday": [ 24, 4, 14, 21 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/hand-of-fate.jpg',
          title: 'Hand of Fate',
          artist: 'Achraf Baznani',
          year: '?',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 18, 28, 8, 16 ],
            "friday": [ 24, 4, 14, 21 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/98bc3dcb98716bb4f17a86ba880f95ce.jpg',
          title: 'Chingaza',
          artist: 'Wolfgang Tillmans',
          year: '2012',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 25, 5, 15, 22 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/pink-dusk-antarctica-2008.jpg',
          title: 'Pink Dusk, Antarctica',
          artist: 'David Burdeny',
          year: '2008',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 25, 5, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/bahrain-i-2005.jpg',
          title: 'Bahrain I',
          artist: 'Andreas Gursky',
          year: '2005',
          rule: {
            "monday": [ 25, 5, 15, 22 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/self-portrait-2013(1).jpg',
          title: 'Self Portrait',
          artist: 'Richard Prince',
          year: '1973 - 2013',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 25, 5, 15, 22 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/seascape-aegean-sea-pillon-1990.jpg',
          title: 'Seascape: Aegean Sea, Pillon',
          artist: 'Hiroshi Sugimoto',
          year: '1990',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 25, 5, 15, 22 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/distorted-vision-a-1991.jpg',
          title: 'Distorted Vision (A)',
          artist: 'John Hilliard',
          year: '1991',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 25, 5, 15, 22 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/dialogue-with-ceausescu-1978.jpg',
          title: 'Dialogue with Ceausescu',
          artist: 'Ion Grigorescu',
          year: '1978',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 25, 5, 15, 22 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/sea-land-hb1-2007.jpg',
          title: 'Sea-Land HB1',
          artist: 'Jan Dibbets',
          year: '2007',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 19, 29, 9, 17 ],
            "saturday": [ 25, 5, 15, 22 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/trees-and-crows-02.jpg',
          title: 'Trees and Crows',
          artist: 'Abbas Kiarostami',
          year: '2006',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 19, 29, 9, 17 ],
            "sunday": [ 25, 5, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/jackson-mississippi-1970.jpg',
          title: 'Jackson, Mississippi',
          artist: 'William Eggleston',
          year: '1970',
          rule: {
            "monday": [ 25, 5, 15, 22 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 19, 29, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/landscape-as-an-attitude-1979.jpg',
          title: 'Landscape as an Attitude',
          artist: 'Luis Camnitzer',
          year: '1979',
          rule: {
            "monday": [ 19, 29, 9, 17 ],
            "tuesday": [ 25, 5, 15, 22 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/urban-landscape-los-angeles-1991.jpg',
          title: 'Urban Landscape, Los Angeles',
          artist: 'Franco Fontana',
          year: '1991',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 19, 29, 9, 17 ],
            "wednesday": [ 25, 5, 15, 22 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/meadowland.jpg',
          title: 'Meadowland',
          artist: 'Gerhard Richter',
          year: '1985',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 19, 29, 9, 17 ],
            "thursday": [ 25, 5, 15, 22 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/new-jersey-1966.jpg',
          title: 'New Jersey',
          artist: 'Elliott Erwitt',
          year: '1966',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 19, 29, 9, 17 ],
            "friday": [ 25, 5, 15, 22 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/new-york-woman-leaning-on-storefront-window-1960.jpg',
          title: 'New York (Woman Leaning on Storefront Window)',
          artist: 'Vivian Maier',
          year: '1960',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 20, 30, 10, 18 ],
            "saturday": [ 26, 6, 16, 23 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/cosinus-alpha-2.jpg',
          title: 'Cosinus Alpha 2',
          artist: 'Otto Muehl',
          year: '1964',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 20, 30, 10, 18 ],
            "sunday": [ 26, 6, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/85a9973f82bf880b1a9c978669bc0316.jpg',
          title: 'Bishop at the altar',
          artist: 'Diane Arbus',
          year: '1964',
          rule: {
            "monday": [ 26, 6, 16, 23 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 20, 30, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/untitled-1930-8.jpg',
          title: 'Untitled',
          artist: 'Kansuke Yamamoto',
          year: '1930',
          rule: {
            "monday": [ 20, 30, 10, 18 ],
            "tuesday": [ 26, 6, 16, 23 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/l-accordeoniste-rue-mouffetard-1951.jpg',
          title: 'L\'Accordeoniste, rue Mouffetard',
          artist: 'Robert Doisneau',
          year: '1951',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 20, 30, 10, 18 ],
            "wednesday": [ 26, 6, 16, 23 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/t-te-du-mannequin-d-andre-masson-1937.jpg',
          title: 'Tête du Mannequin d\'Andre Masson',
          artist: 'Raoul Ubac',
          year: '1937',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 20, 30, 10, 18 ],
            "thursday": [ 26, 6, 16, 23 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the-quai-de-javel-plasterers-paris-1932.jpg',
          title: 'The Quai de Javel, Plasterers, Paris',
          artist: 'Henri Cartier-Bresson',
          year: '1932',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 20, 30, 10, 18 ],
            "friday": [ 26, 6, 16, 23 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/barcelona-1932.jpg',
          title: 'Barcelona',
          artist: 'Dora Maar',
          year: '1932',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 21, 1, 11, 19 ],
            "saturday": [ 27, 7, 17, 23 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/voluptas-mors-1951.jpg',
          title: 'Voluptas Mors',
          artist: 'Philippe Halsman',
          year: '1951',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 21, 1, 11, 19 ],
            "sunday": [ 27, 7, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/allumeur-de-r-verb-res-place-de-la-concorde-1933.jpg',
          title: 'Allumeur de réverbères, place de la Concorde',
          artist: 'Brassai',
          year: '1933',
          rule: {
            "monday": [ 27, 7, 17, 23 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 21, 1, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/a-chronicle-of-drifting-1949.jpg',
          title: 'A Chronicle of Drifting',
          artist: 'Kansuke Yamamoto',
          year: '1949',
          rule: {
            "monday": [ 21, 1, 11, 19 ],
            "tuesday": [ 27, 7, 17, 23 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/old_church_boat_by_pajunen-dbvg2j1.jpg',
          title: 'Old Church Boat',
          artist: 'Tomi Pajunen',
          year: '2017',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 21, 1, 11, 19 ],
            "wednesday": [ 27, 7, 17, 23 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/c3baf2af62f62624d6dd5cfd0153e881-d41gtiy.jpg',
          title: 'Synaptic Overload',
          artist: 'Florian Schmidt ',
          year: '?',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 21, 1, 11, 19 ],
            "thursday": [ 27, 7, 17, 23 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/teashoulders_by_chutuliu-d2z4lil.jpg',
          title: 'teashoulders',
          artist: 'Nino`F',
          year: '2017',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 21, 1, 11, 19 ],
            "friday": [ 27, 7, 17, 23 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/beetle_at_the_gallery_by_cazzaritch.jpg',
          title: 'Beetle at the Gallery',
          artist: 'Carol Ritchie',
          year: '2010',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 22, 2, 12, 20 ],
            "saturday": [ 28, 8, 18, 24 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/28b9bc438311b011f7d62e80dd817bc6-dnm7rd.jpg',
          title: 'Paris Merry-Go-Round',
          artist: 'Martin Stavars',
          year: '2006',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 22, 2, 12, 20 ],
            "sunday": [ 28, 8, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/the_communist_spirit_by_matthias_haker-d5zklk5.jpg',
          title: 'The Communist Spirit',
          artist: 'Matthias Haker',
          year: '2013',
          rule: {
            "monday": [ 28, 8, 18, 24 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 22, 2, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/vertical_horizon__photo_book___page_027_by_romainjl-d61xi1o.jpg',
          title: 'Vertical Horizon #44',
          artist: 'Romain JL',
          year: '2012',
          rule: {
            "monday": [ 22, 2, 12, 20 ],
            "tuesday": [ 28, 8, 18, 24 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/blue_tiles_by_zerberuz-d4mree7.jpg',
          title: 'Blue tiles',
          artist: 'ZerberuZ',
          year: '2012',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 22, 2, 12, 20 ],
            "wednesday": [ 28, 8, 18, 24 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/0b4f71e0dd6b1cb9d34b43bf5a166b13-d58w12p.jpg',
          title: 'Anima',
          artist: 'Chloé & Joseph',
          year: '2012',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 22, 2, 12, 20 ],
            "thursday": [ 28, 8, 18, 24 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/capital_of_sweden_by_daghagerius-d5a6e4x.jpg',
          title: 'Capital of Sweden',
          artist: 'Dag Hagerius',
          year: '2012',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 22, 2, 12, 20 ],
            "friday": [ 28, 8, 18, 24 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/proposal_by_cecilla-d3fv7yt.jpg',
          title: 'Proposal',
          artist: 'Ewelina Paśko',
          year: '2011',
          rule: {
            "monday": [ 27, 7, 17, 25 ],
            "tuesday": [ 26, 6, 16, 24 ],
            "wednesday": [ 25, 5, 15, 23 ],
            "thursday": [ 24, 4, 14, 22 ],
            "friday": [ 23, 3, 13, 21 ],
            "saturday": [ 29, 9, 19, 25 ],
            "sunday": [ 28, 8, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/4e5b7c00c1f9956a.jpg',
          title: 'Sunday Morning Huddle',
          artist: 'Jill Auville',
          year: '2008',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 23, 3, 13, 21 ],
            "sunday": [ 29, 9, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/aquatic_ii_by_zoejanssen-d5sw5ul.jpg',
          title: 'Aquatic II',
          artist: 'Zoë Janssen',
          year: '2011',
          rule: {
            "monday": [ 29, 9, 19, 25 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 23, 3, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/music_above_by_cmtallman-dbyqddm.jpg',
          title: 'Music Above',
          artist: 'CM Tallman',
          year: '2018',
          rule: {
            "monday": [ 23, 3, 13, 21 ],
            "tuesday": [ 29, 9, 19, 25 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/thinking_of_you__wherever_you_are_by_screamingcolorart-dbytqwl.png',
          title: 'Thinking of You, Wherever You Are',
          artist: 'Christopher Davis',
          year: '2018',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 23, 3, 13, 21 ],
            "wednesday": [ 29, 9, 19, 25 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/cooking_stuff___by_xninabravexx-dbyo3cz.jpg',
          title: 'Cooking stuff..',
          artist: 'xNinabravexx',
          year: '2018',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 23, 3, 13, 21 ],
            "thursday": [ 29, 9, 19, 25 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/piano_skycraper_by_marikaiti-dbyjwrn.png',
          title: 'Piano Skycraper',
          artist: 'Marikaiti Nikolakaki',
          year: '2018',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 23, 3, 13, 21 ],
            "friday": [ 29, 9, 19, 25 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/bike_by_khrispandora-dbys8jo.jpg',
          title: 'Bike',
          artist: 'Kika Fonte',
          year: '2018',
          rule: {
            "monday": [ 28, 8, 18, 26 ],
            "tuesday": [ 27, 7, 17, 25 ],
            "wednesday": [ 26, 6, 16, 24 ],
            "thursday": [ 25, 5, 15, 23 ],
            "friday": [ 24, 4, 14, 22 ],
            "saturday": [ 30, 10, 20, 26 ],
            "sunday": [ 29, 9, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/sawssong.jpg',
          title: 'Saw\'s Song',
          artist: 'Max Sauco',
          year: '2014',
          rule: {
            "monday": [ 29, 9, 19, 27 ],
            "tuesday": [ 28, 8, 18, 26 ],
            "wednesday": [ 27, 7, 17, 25 ],
            "thursday": [ 26, 6, 16, 24 ],
            "friday": [ 25, 5, 15, 23 ],
            "saturday": [ 24, 4, 14, 22 ],
            "sunday": [ 30, 10, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/8d689bb6-2898-4cf1-ae81-8e930b1ea936.jpg',
          title: 'Out of Breath',
          artist: 'Hakan Simsek',
          year: '2017',
          rule: {
            "monday": [ 30, 10, 20, 26 ],
            "tuesday": [ 29, 9, 19, 27 ],
            "wednesday": [ 28, 8, 18, 26 ],
            "thursday": [ 27, 7, 17, 25 ],
            "friday": [ 26, 6, 16, 24 ],
            "saturday": [ 25, 5, 15, 23 ],
            "sunday": [ 24, 4, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/a5aaea79-50c0-4665-a790-5954142a2a65.jpg',
          title: 'Catania, Sicily, Italy',
          artist: 'Daniel Castro Garcia',
          year: '2017',
          rule: {
            "monday": [ 24, 4, 14, 22 ],
            "tuesday": [ 30, 10, 20, 26 ],
            "wednesday": [ 29, 9, 19, 27 ],
            "thursday": [ 28, 8, 18, 26 ],
            "friday": [ 27, 7, 17, 25 ],
            "saturday": [ 26, 6, 16, 24 ],
            "sunday": [ 25, 5, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/e4f8a496-ef06-48d4-bd2f-88e8dc7c7e4b.jpg',
          title: 'Skopje, Macedonia',
          artist: 'Dragana Jurisic',
          year: '?',
          rule: {
            "monday": [ 25, 5, 15, 23 ],
            "tuesday": [ 24, 4, 14, 22 ],
            "wednesday": [ 30, 10, 20, 26 ],
            "thursday": [ 29, 9, 19, 27 ],
            "friday": [ 28, 8, 18, 26 ],
            "saturday": [ 27, 7, 17, 25 ],
            "sunday": [ 26, 6, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Photography',
          img_path: './img/june/dd8005cb-d112-41aa-b758-d9b52e8abfdc.jpg',
          title: 'Simferopol, Crimea',
          artist: 'Justyna Mielnikiewicz',
          year: '2008',
          rule: {
            "monday": [ 26, 6, 16, 24 ],
            "tuesday": [ 25, 5, 15, 23 ],
            "wednesday": [ 24, 4, 14, 22 ],
            "thursday": [ 30, 10, 20, 26 ],
            "friday": [ 29, 9, 19, 27 ],
            "saturday": [ 28, 8, 18, 26 ],
            "sunday": [ 27, 7, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('june_arts_id_seq', (SELECT MAX(id) FROM june_arts));");
    });
};
