'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/44-04,Suspense.jpg',
          title: 'Suspense Comics',
          artist: 'Nina Albright',
          year: '1944',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 29, 11, 19, 25 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/34-00,The NatlGrdsman.jpg',
          title: 'National Guardsman',
          artist: 'Newton H. Alfred',
          year: '1934',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 29, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/17-00,Maupassant.jpg',
          title: 'Book Illustration',
          artist: 'James E. Allen',
          year: '1917',
          rule: {
            "monday": [ 29, 11, 19, 25 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/06-06,MotorBoys.jpg',
          title: 'The Motor Boys',
          artist: 'W. M. Allison',
          year: '1906',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 29, 11, 19, 25 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/1941-04,SpicyMystery.jpg',
          title: 'Spicy Mystery',
          artist: 'Allen Anderson',
          year: '1941',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 29, 11, 19, 25 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/21-07,TheAmer1.jpg',
          title: 'The American',
          artist: 'Frederic A. Anderson',
          year: '1921',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 29, 11, 19, 25 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/45-01,PlanetCmx.jpg',
          title: 'Planet Comics',
          artist: 'Murphy Anderson',
          year: '1945',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 30, 12, 20, 26 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/30-00,Interior1.jpg',
          title: 'Clues illus.',
          artist: 'Lyman Anderson',
          year: '1930',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 30, 12, 20, 26 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/25-01-24,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Joe Archibald',
          year: '1925',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 30, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/50-00,FantPubCo-17.jpg',
          title: 'book cover',
          artist: 'Jon Arfstrom',
          year: '1950',
          rule: {
            "monday": [ 30, 12, 20, 26 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/27-06,Yearbook.jpg',
          title: 'High School Yearbook',
          artist: 'Ed Ashe, Jr.',
          year: '1927',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 30, 12, 20, 26 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/35-12,NewComics.jpg',
          title: 'New Comics',
          artist: 'Rafael Astarita',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 30, 12, 20, 26 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/13-02,StNicholas.jpg',
          title: 'St. Nicholas',
          artist: 'George Avison',
          year: '1913',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 30, 12, 20, 26 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/39-00,CliffCornwall1.jpg',
          title: 'Cliff Cornwall',
          artist: 'John E. Ayman',
          year: '1941',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 31, 13, 21, 27 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/28-01-28,LoveS-2.jpg',
          title: 'Love Story',
          artist: 'Constance Benson Bailey',
          year: '1928',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 31, 13, 21, 27 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/17-05,DeWittClinton.jpg',
          title: 'DeWitt Clinton',
          artist: 'Adolphe Barreaux',
          year: '1917',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 31, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/50-04,Argosy.jpg',
          title: 'Argosy',
          artist: 'Harry Barton',
          year: '1950',
          rule: {
            "monday": [ 31, 13, 21, 27 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/41-05,DocSavage.jpg',
          title: 'Doc Savage Comics',
          artist: 'Ken Battefield',
          year: '1941',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 31, 13, 21, 27 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/1931-11,Gnglnd.jpg',
          title: 'Gangland Stories',
          artist: 'Walter Baumhofer',
          year: '1931',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 31, 13, 21, 27 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/29-10,JuniorHome.JPG',
          title: 'Junior Home',
          artist: 'Robert Beebe',
          year: '1929',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 31, 13, 21, 27 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/28-08-16,War.jpg',
          title: 'War Stories',
          artist: 'Rudolph Belarski',
          year: '1928',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 1, 14, 22, 28 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/52-00,Illus2.jpg',
          title: 'illustration',
          artist: 'Jim Bentley',
          year: '1952',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 1, 14, 22, 28 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/34-00,Dutton.jpg',
          title: 'Dutton Books',
          artist: 'David Berger',
          year: '1934',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 1, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/35-10,Bedtime.jpg',
          title: 'Bedtime Stories',
          artist: 'Earle Bergey ',
          year: '1935',
          rule: {
            "monday": [ 1, 14, 22, 28 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/36-08,ThrillWndr.jpg',
          title: 'Thrilling Wonder',
          artist: 'Jack Binder',
          year: '1936',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 1, 14, 22, 28 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/35-05,AllStarFcton.jpg',
          title: 'All Star Fiction',
          artist: 'Lorence Bjorklund',
          year: '1935',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 1, 14, 22, 28 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/1929-08,MM1.jpg',
          title: 'Modern Mechanics',
          artist: '(Blaine) Normand Saunders',
          year: '1929',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 1, 14, 22, 28 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/28-00,Kiss.jpg',
          title: 'Kiss The Crocodile',
          artist: 'Frederick Blakeslee',
          year: '1928',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 2, 15, 23, 29 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/36-06,Yearbook.jpg',
          title: 'School Yearbook',
          artist: 'Chester Bloom',
          year: '1936',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 2, 15, 23, 29 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/34-01,WRom-1.jpg',
          title: 'Western Romances',
          artist: 'Jon L. Blummer',
          year: '1934',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 2, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/1941-05,Cosmic.jpg',
          title: 'Cosmic',
          artist: 'Hannes Bok',
          year: '1941',
          rule: {
            "monday": [ 2, 15, 23, 29 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/23-04-21,Judge.jpg',
          title: 'Judge',
          artist: 'Enoch Bolles',
          year: '1923',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 2, 15, 23, 29 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/52-00,MysteryRanch.jpg',
          title: 'Pocket Book #895',
          artist: 'Stanley Borack',
          year: '1952',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 2, 15, 23, 29 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/02-00,TheFrenchReople.jpg',
          title: 'The French People',
          artist: 'Arthur R. Bowker',
          year: '1902',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 2, 15, 23, 29 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/42-08,FantAdv1.jpg',
          title: 'Fantastic Adv.',
          artist: 'William J. Brady',
          year: '1942',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 3, 16, 24, 30 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/45-09,CaptFlight9.jpg',
          title: 'Capt. Flight',
          artist: 'Ann Brewster',
          year: '1945',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 3, 16, 24, 30 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/29-12,AmazingS.JPG',
          title: 'Amazing Stories',
          artist: 'Austin Briggs',
          year: '1929',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 3, 16, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/06-00,SchroeberWindow.jpg',
          title: 'Stained Glass',
          artist: 'W. C. Brigham',
          year: '1906',
          rule: {
            "monday": [ 3, 16, 24, 30 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/22-03-01,Mystery.jpg',
          title: 'Mystery',
          artist: 'W. C. Brigham, Jr.',
          year: '1922',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 3, 16, 24, 30 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/23-10,Munseys.jpg',
          title: 'Munsey\'s Magazine',
          artist: 'Howard V. Brown',
          year: '1923',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 3, 16, 24, 30 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7 , 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/18-00,KrushingKaiser.jpg',
          title: 'Krushing Kaiserism',
          artist: 'Ken Browne',
          year: '1918',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 3, 16, 24, 30 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7 , 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/32-06,Oriental.jpg',
          title: 'Oriental Stories',
          artist: 'Margaret Brundage',
          year: '1932',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 4, 17, 25, 31 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/02-06-29,NYHerald.jpg',
          title: 'N Y Herald',
          artist: 'Leighton Budd',
          year: '1902',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 4, 17, 25, 31 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/1928-11,WzBng1.jpg',
          title: 'Whiz Bang',
          artist: 'Carl Buettner',
          year: '1928',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 4, 17, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/35-07-1st,RnchRom2.jpg',
          title: 'Ranch Romances',
          artist: 'H. D. Bugbee',
          year: '1935',
          rule: {
            "monday": [ 4, 17, 25, 31 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/22-00,Ad.jpg',
          title: 'Advertisement',
          artist: 'R. A. Burley',
          year: '1924',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 4, 17, 25, 31 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/10-00,JohnMrsch.jpg',
          title: 'John Marsh\'s Millions',
          artist: 'Samuel Cahan',
          year: '1910',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 4, 17, 25, 31 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/19-11.BoysLife.jpg',
          title: 'Boy\'s Life',
          artist: 'Robert A. Cameron',
          year: '1919',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 4, 17, 25, 31 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/21-09,BreezyS.jpg',
          title: 'Breezy Stories',
          artist: 'Jules Cannert',
          year: '1921',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 5, 18, 26, 1 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/35-12,Prison-p21.jpg',
          title: 'Prison Life',
          artist: 'Ralph Carlson',
          year: '1935',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 5, 18, 26, 1 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/25-Win,Follies.jpg',
          title: 'Win Follies',
          artist: 'Worth Carnahan',
          year: '1925',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 5, 18, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/1893,WitchofSalem.jpg',
          title: 'Witch of Salem',
          artist: 'F. A. Carter',
          year: '1893',
          rule: {
            "monday": [ 5, 18, 26, 1 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/38-03-15,Shadow1.jpg',
          title: 'Shadow illus.',
          artist: 'Edd Cartier',
          year: '1938',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 5, 18, 26, 1 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/37-06,WTls.jpg',
          title: 'Western Trails',
          artist: 'Richard Case',
          year: '1937',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 5, 18, 26, 1 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/36-05,MystAdv3.jpg',
          title: 'Mystery Adventure',
          artist: 'Jim Chambers',
          year: '1936',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 5, 18, 26, 1 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/25-00,ShirtAd.jpg',
          title: 'Advertisement',
          artist: 'Joseph Chenoweth',
          year: '1925',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 28, 3 ],
            "friday": [ 6, 19, 27, 2 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/29-01,Mohawk.jpg',
          title: 'Mohawk Magazine',
          artist: 'Sam Cherry',
          year: '1929',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 28, 3 ],
            "saturday": [ 6, 19, 27, 2 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/41-11,ThllMyst.jpg',
          title: 'Thrilling Mystery',
          artist: 'Ernest Chiriacka',
          year: '1941',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 28, 3 ],
            "sunday": [ 6, 19, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/34-02,TDA.jpg',
          title: 'Ten Detective Aces',
          artist: 'Emery Clarke',
          year: '1934',
          rule: {
            "monday": [ 6, 19, 27, 2 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/19-04-26,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Henry Clive',
          year: '1919',
          rule: {
            "monday": [ 7, 20, 28, 3 ],
            "tuesday": [ 6, 19, 27, 2 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/37-08,Romance.jpg',
          title: 'Romance',
          artist: 'John Clymer',
          year: '1937',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 28, 3 ],
            "wednesday": [ 6, 19, 27, 2 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/44-00,Sword2.jpg',
          title: 'The Sword is Drawn',
          artist: 'Dunc Coburn',
          year: '1944',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 28, 3 ],
            "thursday": [ 6, 19, 27, 2 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/29-03,AirStories.jpg',
          title: 'Air Stories',
          artist: 'C. B. Colby',
          year: '1929',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 29, 4 ],
            "friday": [ 7, 20, 8, 3 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/43-00,PhoenixPress.jpg',
          title: 'Phoenix Press',
          artist: 'L. B. Cole',
          year: '1943',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 29, 4 ],
            "saturday": [ 7, 20, 8, 3 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/17-04-08,Newspaper.jpg',
          title: 'Newspaper',
          artist: 'Charles Coll',
          year: '1917',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 29, 4 ],
            "sunday": [ 7, 20, 8, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/41-Fal,FamousW.jpg',
          title: 'Fall Famous Western',
          artist: 'Sam Cooper',
          year: '1941',
          rule: {
            "monday": [ 7, 20, 8, 3 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/24-00,FarmHouse.jpg',
          title: 'Farm House',
          artist: 'Thomas Cooper',
          year: '1924',
          rule: {
            "monday": [ 8, 21, 29, 4 ],
            "tuesday": [ 7, 20, 8, 3 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/14-00,Chicago.jpg',
          title: 'Chicago Tribune',
          artist: 'Dean Cornwell',
          year: '1914',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 29, 4 ],
            "wednesday": [ 7, 20, 8, 3 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/37-01,ThrllW.jpg',
          title: 'Thrilling Western',
          artist: 'Peter Costanza',
          year: '1937',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 29, 4 ],
            "thursday": [ 7, 20, 8, 3 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/13-11-15,Pop.jpg',
          title: 'The Popular',
          artist: 'John A. Coughlin',
          year: '1913',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 30, 5 ],
            "friday": [ 8, 21, 9, 4 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/44-00,Illus2.jpg',
          title: 'illustration',
          artist: 'Lee Brown Coye',
          year: '1944',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 30, 5 ],
            "saturday": [ 8, 21, 9, 4 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/23-00,Ad.jpg',
          title: 'Advertisement',
          artist: 'Fred Craft',
          year: '1914',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 30, 5 ],
            "sunday": [ 8, 21, 9, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/52-12,GiantW.jpg',
          title: 'Giant Western',
          artist: 'Mel Crair',
          year: '1952',
          rule: {
            "monday": [ 8, 21, 9, 4 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/40-00,ComeColorsCome.jpg',
          title: 'Come Colors Come',
          artist: 'Reed Crandall',
          year: '1940',
          rule: {
            "monday": [ 9, 22, 30, 5 ],
            "tuesday": [ 8, 21, 9, 4 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/10-00,UMYrbk1.jpg',
          title: 'Univ of MO Year Book',
          artist: 'Monte Crews',
          year: '1910',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 30, 5 ],
            "wednesday": [ 8, 21, 9, 4 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/23-02,Classic.jpg',
          title: 'Movie Classic',
          artist: 'Truda Dahl',
          year: '1923',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 30, 5 ],
            "thursday": [ 8, 21, 9, 4 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/06-12,NtlAccts2.jpg',
          title: 'Business Man\'s',
          artist: 'Walter Darr',
          year: '1906',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 31, 6 ],
            "friday": [ 9, 22, 10, 5 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/25-00,ComicStrip.jpg',
          title: 'Percy Plantaganet',
          artist: 'Wynne W. Davies',
          year: '1925',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 31, 6 ],
            "saturday": [ 9, 22, 10, 5 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/33-12-16,Lbty1.jpg',
          title: 'Liberty',
          artist: 'Ray Dean',
          year: '1933',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 31, 6 ],
            "sunday": [ 9, 22, 10, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/29-00,Illus.jpg',
          title: 'Magazine Illustration',
          artist: 'Charles DeFeo',
          year: '1929',
          rule: {
            "monday": [ 9, 22, 10, 5 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 31, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/27-05,Everybody\'s.jpg',
          title: 'Everybody\'s',
          artist: 'Gerard Delano',
          year: '1927',
          rule: {
            "monday": [ 10, 23, 31, 6 ],
            "tuesday": [ 9, 22, 10, 5 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/40-08-24,WS.jpg',
          title: 'Western Story',
          artist: 'Ed DeLavy',
          year: '1940',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 31, 6 ],
            "wednesday": [ 9, 22, 10, 5 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/37-03,GayBook1.jpg',
          title: 'Gay Book',
          artist: 'R. C. Dell',
          year: '1937',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 31, 6 ],
            "thursday": [ 9, 22, 10, 5 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/08-11,Pearsons.jpg',
          title: 'Pearson\'s Magazine',
          artist: 'Walter De Maris',
          year: '1908',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 1, 7 ],
            "friday": [ 10, 23, 11, 6 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/34-01,ThllDet.jpg',
          title: 'Thrilling Detective',
          artist: 'Rafael de Soto',
          year: '1934',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 1, 7 ],
            "saturday": [ 10, 23, 11, 6 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/22-05,Engraver.jpg',
          title: 'Engraver',
          artist: 'Harold C. Detje',
          year: '1922',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 1, 7 ],
            "sunday": [ 10, 23, 11, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/12-06,YrBk-01.jpg',
          title: 'College Yearbook',
          artist: 'Elliott Dold',
          year: '1912',
          rule: {
            "monday": [ 10, 23, 11, 6 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/25-12,WeirdTales.jpg',
          title: 'Weird Tales',
          artist: 'Joseph Doolin',
          year: '1925',
          rule: {
            "monday": [ 11, 24, 1, 7 ],
            "tuesday": [ 10, 23, 11, 6 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/44-00,ClimLab.jpg',
          title: 'Army Climate Lab',
          artist: 'Clarence Doore',
          year: '1944',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 1, 7 ],
            "wednesday": [ 10, 23, 11, 6 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/37-07,PrsnlAdvS.jpg',
          title: 'Personal Adventure',
          artist: 'Albert Drake',
          year: '1937',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 1, 7 ],
            "thursday": [ 10, 23, 11, 6 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/47-00,Bantam107.jpg',
          title: 'Bantam #107',
          artist: 'Joseph Dreany',
          year: '1947',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 2, 8 ],
            "friday": [ 11, 24, 12, 7 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/25-00,Days49.jpg',
          title: 'Book Jacket',
          artist: 'John Drew',
          year: '1925',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 2, 8 ],
            "saturday": [ 11, 24, 12, 7 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/38-06,SilkStks.jpg',
          title: 'Silk Stockings',
          artist: 'Peter Driben',
          year: '1938',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 2, 8 ],
            "sunday": [ 11, 24, 12, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/37-Win,Aces04.jpg',
          title: 'Winter Aces',
          artist: 'Roderick Duff',
          year: '1937',
          rule: {
            "monday": [ 11, 24, 12, 7 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/07-00,Plowman.jpeg',
          title: 'The Plowman',
          artist: 'Harvey Dunn',
          year: '1907',
          rule: {
            "monday": [ 12, 25, 2, 8 ],
            "tuesday": [ 11, 24, 12, 7 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/03-06,Pearsons.jpg',
          title: 'Pearson\'s Magazine',
          artist: 'W. Herbert Dunton',
          year: '1903',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 2, 8 ],
            "wednesday": [ 11, 24, 12, 7 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/41-08-30,SEP.jpg',
          title: 'Sat Evening Post',
          artist: 'Charles Dye',
          year: '1941',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 2, 8 ],
            "thursday": [ 11, 24, 12, 7 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/22-04-13,PrintersIncAd.jpg',
          title: 'Advertisement',
          artist: 'Frank A. Eboli',
          year: '1922',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 3, 9 ],
            "friday": [ 12, 25, 13, 8 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/27-03-15,AceHi.jpg',
          title: 'Ace-High',
          artist: 'Nicholas Eggenhofer',
          year: '1927',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 3, 9 ],
            "saturday": [ 12, 25, 13, 8 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/35-09,PrsnLf.jpg',
          title: 'Prison Life',
          artist: 'Monroe Eisenberg',
          year: '1935',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 3, 9 ],
            "sunday": [ 12, 25, 13, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/37-02-20,Cartoon.jpg',
          title: 'High School Comic',
          artist: 'Jill Elgin',
          year: '1937',
          rule: {
            "monday": [ 12, 25, 13, 8 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/41-12,HitComics.jpg',
          title: 'Hit Comics',
          artist: 'Maxwell Elkan',
          year: '1941',
          rule: {
            "monday": [ 13, 26, 3, 9 ],
            "tuesday": [ 12, 25, 13, 8 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/29-01-29,JaneArden.jpg',
          title: 'Jane Arden',
          artist: 'Frank Ellis',
          year: '1929',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 3, 9 ],
            "wednesday": [ 12, 25, 13, 8 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/03-00BretHarte.jpg',
          title: 'Book Illustration',
          artist: 'R. Farrington Elwell',
          year: '1903',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 3, 9 ],
            "thursday": [ 12, 25, 13, 8 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/36-03,ScyMvTls-9.jpg',
          title: 'Saucy Movie Tales',
          artist: 'Will Ely',
          year: '1936',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 4, 10 ],
            "friday": [ 13, 26, 14, 9 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/09-01,Hamptons.jpg',
          title: 'The Hamptons',
          artist: 'C. Emerson',
          year: '1909',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 4, 10 ],
            "saturday": [ 13, 26, 14, 9 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/52-08,ThrlWdr.jpg',
          title: 'Thrilling Wonder',
          artist: 'Ed Emshwiller',
          year: '1952',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 4, 10 ],
            "sunday": [ 13, 26, 14, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/42-11,RngldRom.jpg',
          title: 'Rangeland Romances',
          artist: 'Irene Endris',
          year: '1942',
          rule: {
            "monday": [ 13, 26, 14, 9 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/41-00,MobyDick.jpg',
          title: 'Moby Dick',
          artist: 'Fred C. Eng',
          year: '?',
          rule: {
            "monday": [ 14, 27, 4, 10 ],
            "tuesday": [ 13, 26, 14, 9 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/50-08-12,Colliers.jpg',
          title: 'Collier\'s',
          artist: 'Frederick R. Eng',
          year: '1950',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 4, 10 ],
            "wednesday": [ 13, 26, 14, 9 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/24-00,Directory.jpg',
          title: 'Artist Directory',
          artist: 'Renaldo C. Epworth',
          year: '1924',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 4, 10 ],
            "thursday": [ 13, 26, 14, 9 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/19-00,WarPoster.jpg',
          title: 'Red Army Poster',
          artist: 'Julius Erbit',
          year: '1919',
          rule: {
            "monday": [ 18, 31, 8, 14 ],
            "tuesday": [ 17, 30, 7, 13 ],
            "wednesday": [ 16, 29, 6, 12 ],
            "thursday": [ 15, 28, 5, 11 ],
            "friday": [ 14, 27, 15, 10 ],
            "saturday": [ 20, 2, 10, 16 ],
            "sunday": [ 19, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/38-06,MysteryTls.jpg',
          title: 'Mystery Tales',
          artist: 'James A. Ernst',
          year: '1938',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 5, 11 ],
            "saturday": [ 14, 27, 15, 10 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/27-04,Mystery.jpg',
          title: 'Mystery Magazine',
          artist: 'Frederick T. Everett',
          year: '1927',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 5, 11 ],
            "sunday": [ 14, 27, 15, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/32-08,ActNvls.jpg',
          title: 'Action Novels',
          artist: 'John Falter',
          year: '1932',
          rule: {
            "monday": [ 14, 27, 15, 10 ],
            "tuesday": [ 20, 2, 10, 16 ],
            "wednesday": [ 19, 1, 9, 15 ],
            "thursday": [ 18, 31, 8, 14 ],
            "friday": [ 17, 30, 7, 13 ],
            "saturday": [ 16, 29, 6, 12 ],
            "sunday": [ 15, 28, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/04-00,Newspaper',
          title: 'Newspaper Ad',
          artist: 'J. W. Farrah',
          year: '1904',
          rule: {
            "monday": [ 15, 28, 5, 11 ],
            "tuesday": [ 14, 27, 15, 10 ],
            "wednesday": [ 20, 2, 10, 16 ],
            "thursday": [ 19, 1, 9, 15 ],
            "friday": [ 18, 31, 8, 14 ],
            "saturday": [ 17, 30, 7, 13 ],
            "sunday": [ 16, 29, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/13-02-15,Hank',
          title: 'Hank & Knobbs',
          artist: 'Joseph A. Farren',
          year: '1913',
          rule: {
            "monday": [ 16, 29, 6, 12 ],
            "tuesday": [ 15, 28, 5, 11 ],
            "wednesday": [ 14, 27, 15, 10 ],
            "thursday": [ 20, 2, 10, 16 ],
            "friday": [ 19, 1, 9, 15 ],
            "saturday": [ 18, 31, 8, 14 ],
            "sunday": [ 17, 30, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/45-00,Susabelle',
          title: 'Susabelle Comic Strip',
          artist: 'Elton Fax',
          year: '1943',
          rule: {
            "monday": [ 17, 30, 7, 13 ],
            "tuesday": [ 16, 29, 6, 12 ],
            "wednesday": [ 15, 28, 5, 11 ],
            "thursday": [ 14, 27, 15, 10 ],
            "friday": [ 20, 2, 10, 16 ],
            "saturday": [ 19, 1, 9, 15 ],
            "sunday": [ 18, 31, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/40-01,WT',
          title: 'Weird Tales',
          artist: 'Virgil Finlay',
          year: '1940',
          rule: {
            "monday": [ 19, 1, 9, 15 ],
            "tuesday": [ 18, 31, 8, 14 ],
            "wednesday": [ 17, 30, 7, 13 ],
            "thursday": [ 16, 29, 6, 12 ],
            "friday": [ 15, 28, 16, 11 ],
            "saturday": [ 21, 3, 11, 17 ],
            "sunday": [ 20, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Pulp Art',
          img_path: './img/december/11-02-11,SEP',
          title: 'Sat. Even. Post',
          artist: 'Anton Otto Fischer',
          year: '1911',
          rule: {
            "monday": [ 20, 2, 10, 16 ],
            "tuesday": [ 19, 1, 9, 15 ],
            "wednesday": [ 18, 31, 8, 14 ],
            "thursday": [ 17, 30, 7, 13 ],
            "friday": [ 16, 29, 6, 12 ],
            "saturday": [ 15, 28, 16, 11 ],
            "sunday": [ 21, 3, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_arts_id_seq', (SELECT MAX(id) FROM december_arts));");
    });
};
