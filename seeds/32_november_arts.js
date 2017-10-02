'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/thicket-no-2-1990.jpg',
          title: 'Thicket No. 2',
          artist: 'Roni Horn',
          year: '1990',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 13, 20 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/colour-as-a-shadow-2005.jpg',
          title: 'Colour as a Shadow',
          artist: 'Katsuhito Nishikawa',
          year: '2005',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/seascape-north-atlantic-ocean-cape-breton-1996.jpg',
          title: 'Seascape: North Atlantic Ocean, Cape Breton',
          artist: 'Hiroshi Sugimoto',
          year: '1996',
          rule: {
            "monday": [ 2, 7, 13, 20 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/painting-06-13-2006.jpg',
          title: 'Painting #06-13',
          artist: 'Rudolf de Crignis',
          year: '2006',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 13, 20 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/12-part-line-painting-1984.jpg',
          title: '12 Part Line Painting',
          artist: 'Alan Charlton',
          year: '1984',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 13, 20 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/pintura-1972.jpg',
          title: 'Pintura',
          artist: 'Fernando Calhau',
          year: '1972',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 13, 20 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/bivest-1-1965.jpg',
          title: 'Bivest + 1',
          artist: 'Gianni Piacentino',
          year: '1965',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 21 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-no-5-1974.jpg',
          title: 'Untitled No. 5',
          artist: 'Michael Heizer',
          year: '1974',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 21 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-2001.jpg',
          title: 'Untitled',
          artist: 'Olivier Mosset',
          year: '2001',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/deep-rhythm-of-lights-1975.jpg',
          title: 'Deep Rhythm of Lights',
          artist: 'Kishio Suga',
          year: '1975',
          rule: {
            "monday": [ 3, 8, 14, 21 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1986.jpg',
          title: 'Untitled',
          artist: 'Fred Sandback',
          year: '1986',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 21 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/the-whole-soul-summed-up-1979.jpg',
          title: 'The Whole Soul Summed Up',
          artist: 'Christopher Wilmarth',
          year: '1979',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 21 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/yellow-painting-14-1995.jpg',
          title: 'Yellow Painting #14',
          artist: 'Joseph Marioni',
          year: '1995',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 14, 21 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-1993.jpg',
          title: 'Untitled',
          artist: 'Gunter Umberg',
          year: '1993',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 22 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/step-by-step-2002.jpg',
          title: 'Step by Step',
          artist: 'Richard Tuttle',
          year: '2002',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 22 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/vii-15-din-14-1989.jpg',
          title: 'VII 15 Din 14',
          artist: 'Hanne Darboven',
          year: '1989',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/d-finition-m-thode-505-lettre-au-docteur-barnes-2010.jpg',
          title: 'dé-finition/méthode #505: lettre au docteur barnes',
          artist: 'Claude Rutault',
          year: '2010',
          rule: {
            "monday": [ 4, 9, 15, 22 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/untitled-712-7ft-x-7ft-1978.jpg',
          title: 'Untitled, 712, 7ft x 7ft',
          artist: 'Robert Swain',
          year: '1978',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 22 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/green-portrait-9.jpg',
          title: 'Green Portrait #9',
          artist: 'Phil Sims',
          year: '?',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 22 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/as-if-to-1992.jpg',
          title: 'As, If, To',
          artist: 'Peter Downsbrough',
          year: '1992',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 22 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/stanza-azzurra-2006.jpg',
          title: 'Stanza azzurra',
          artist: 'Ettore Spalletti',
          year: '2006',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 23 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/portrait-1993.jpg',
          title: 'Portrait',
          artist: 'Imi Knoebel',
          year: '1993',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 23 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/la-maison-de-la-celle-saint-cloud-1974.jpg',
          title: 'La Maison de La Celle-Saint-Cloud',
          artist: 'Jean-Pierre Raynaud',
          year: '1974',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/barcelona-7-1989.jpg',
          title: 'Barcelona 7',
          artist: 'Larry Bell',
          year: '1989',
          rule: {
            "monday": [ 5, 10, 16, 23 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/maleri-1964.jpg',
          title: 'Maleri',
          artist: 'Jan Groth',
          year: '1964',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 23 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/for-pearl-1970(1).jpg',
          title: 'For Pearl',
          artist: 'Brice Marden',
          year: '1970',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 23 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/photo-souvenir-1-carr-1-cercle-4-triangles-hauts-reliefs-situ-s-h-travail-situ-2010.jpg',
          title: 'Photo-souvenir: 1 carré = 1 cercle + 4 triangles, Hauts-reliefs situés H, travail situé',
          artist: 'Daniel Buren',
          year: '2010',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 23 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/sem-titulo-1983.jpg',
          title: 'Sem titulo',
          artist: 'Angelo de Sousa',
          year: '1983',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 24 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/28-septembre-1984-1992.jpg',
          title: '28 septembre 1984',
          artist: 'Michel Parmentier',
          year: '1992',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 24 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'minimalism',
          img_path: './img/november/always-now-1981.jpg',
          title: 'Always Now',
          artist: 'Tess Jaray',
          year: '1981',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_arts_id_seq', (SELECT MAX(id) FROM november_arts));");
    });
};
