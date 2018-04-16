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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
          theme: 'Minimalism',
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
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/tudy-attic-series-xiv-1991.jpg',
          title: 'tudy Attic Series XIV',
          artist: 'Robert Mangold',
          year: '1991',
          rule: {
            "monday": [ 6, 11, 17, 24 ],
            "tuesday": [ 12, 17, 23, 28 ],
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
          id: 32,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/schema-luminoso-variabile-rr66-1969.jpg',
          title: 'Schema luminoso variabile RR66',
          artist: 'Grazia Varisco',
          year: '1969',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 24 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1995 (1).jpg',
          title: 'Untitled',
          artist: 'James Licini',
          year: '1995',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 24 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/imprints-of-a-no-50-paintbrush-repeated-at-regular-intervals-of-30-cm-1989.jpg',
          title: 'Imprints of a No. 50 Paintbrush Repeated at Regular Intervals of 30 cm.',
          artist: 'Niele Toroni',
          year: '1989',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 24 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1970-9.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 25 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1974.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1974',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 25 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/island-no-1p-1967.jpg',
          title: 'Island No. 1p',
          artist: 'Frank Stella',
          year: '1967',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/w-ix-2006.jpg',
          title: 'W IX',
          artist: 'Joachim Bandau',
          year: '2006',
          rule: {
            "monday": [ 7, 12, 18, 25 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/sun-island-1985.jpg',
          title: 'Sun & Island',
          artist: 'Nanda Vigo',
          year: '1985',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 25 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/last-tangle-1976.jpg',
          title: 'Last Tangle',
          artist: 'Leo Valledor',
          year: '1976',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 25 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/mile-long-drawing.jpg',
          title: 'Mile Long Drawing',
          artist: 'Walter De Maria',
          year: '?',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 25 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/unknown-title.jpg',
          title: 'unknown title',
          artist: 'Roman Cotosman',
          year: '?',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 26 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/leeward-traffic-1966.jpg',
          title: 'Leeward Traffic',
          artist: 'Robert Huot',
          year: '1966',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 26 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/interval-2004.jpg',
          title: 'Interval',
          artist: 'John McCracken',
          year: '2004',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/aqua-same-1962.jpg',
          title: 'Aqua Same',
          artist: 'Walter Darby Bannard',
          year: '1960',
          rule: {
            "monday": [ 8, 13, 19, 26 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/castle-cccxxxiii-15-7-01-2001.jpg',
          title: 'Castle CCCXXXIII 15.7.01',
          artist: 'Bob Law',
          year: '2001',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 26 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/rouge-ocre-bleu-vert-1978.jpg',
          title: 'Rouge, Ocre, Bleu, Vert',
          artist: 'Yves Gaucher',
          year: '1978',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 26 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/serielles-1970.jpg',
          title: 'Serielles',
          artist: 'Victor Bonato',
          year: '1970',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 26 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/diagonal-of-personal-ecstasy-the-diagonal-of-may-25-1963-to-constantin-brancusi-1963.jpg',
          title: 'Diagonal of Personal Ecstasy (the Diagonal of May 25, 1963, to Constantin Brancusi)',
          artist: 'Dan Flavin',
          year: '1963',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 27 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/print-4-1967.jpg',
          title: 'Print 4',
          artist: 'Bernard Cohen',
          year: '1967',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 27 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/wake-1965.jpg',
          title: 'Wake',
          artist: 'Marc Vaux',
          year: '1965',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/laser-1974.jpg',
          title: 'Laser',
          artist: 'Jef Verheyen',
          year: '1974',
          rule: {
            "monday": [ 9, 14, 20, 27 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/black-painting-indigo-violet-vi-1969.jpg',
          title: 'Black Painting, Indigo Violet VI',
          artist: 'Ralph Hotere',
          year: '1969',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 27 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-ring-with-light-1966.jpg',
          title: 'Untitled (Ring with Light)',
          artist: 'Robert Morris',
          year: '1969',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 27 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/folquer-1972.jpg',
          title: 'Folquer',
          artist: 'Joan Hernandez Pijuan',
          year: '1972',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 27 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/fold-1966-2(1).jpg',
          title: 'Fold',
          artist: 'Charlotte Posenenske',
          year: '1966',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 28 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/superficie-argento-1973.jpg',
          title: 'Superficie Argento',
          artist: 'Enrico Castellani',
          year: '1973',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 28 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/prism-1984.jpg',
          title: 'Prism',
          artist: 'Frederic Matys Thursz',
          year: '1984',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1959.jpg',
          title: 'Untitled',
          artist: 'Robert Ryman',
          year: '1959',
          rule: {
            "monday": [ 10, 15, 21, 28 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/anomalia-1969.jpg',
          title: 'Anomalia',
          artist: 'Rodolfo Arico',
          year: '1969',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 28 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/egg-on-plate-with-knife-fork-and-spoon-1964.jpg',
          title: 'Egg on Plate with Knife, Fork, and Spoon',
          artist: 'Alex Hay',
          year: '1964',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 28 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/sex-symbol-1961.jpg',
          title: 'Sex Symbol',
          artist: 'Jo Baer',
          year: '1961',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 28 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/bet-you.jpg',
          title: 'Bet You',
          artist: 'Lyman Kipp',
          year: '?',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 17, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 29 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/light-orange-with-light-green-august-1989-1989.jpg',
          title: 'Light Orange with Light Green, August 1989',
          artist: 'Peter Joseph',
          year: '1989',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 17, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 29 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/viridian-1974.jpg',
          title: 'Viridian',
          artist: 'Marcia Hafif',
          year: '1974',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 17, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/arc-bands-1990.jpg',
          title: 'Arc Bands',
          artist: 'Sol LeWitt',
          year: '1990',
          rule: {
            "monday": [ 11, 16, 22, 29 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 17, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/early-1967.jpg',
          title: 'Early',
          artist: 'James Bishop',
          year: '1967',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 29 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 17, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/settlement-magenta-1980.jpg',
          title: 'Settlement Magenta',
          artist: 'Warren Rohrer',
          year: '1980',
          rule: {
            "monday": [ 13, 17, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 29 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1998.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1998',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 17, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 29 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/3-sheets-from-9-x-5-konkret-1973.jpg',
          title: '3 sheets from "9 x 5 konkret"',
          artist: 'Francois Morellet',
          year: '1973',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 18, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 30 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/object-1960.jpg',
          title: 'Object',
          artist: 'Edward Krasinski',
          year: '1960',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 18, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 30 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/swirling-retina-1967.jpg',
          title: 'Swirling Retina',
          artist: 'Marcel Barbeau',
          year: '1967',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 18, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/unknown-title-1.jpg',
          title: 'unknown title',
          artist: 'Martin Barre',
          year: '?',
          rule: {
            "monday": [ 12, 17, 23, 30 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 18, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1953.jpg',
          title: 'Untitled',
          artist: 'Herbert Zangs',
          year: '1953',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 30 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 18, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/corona-i-1995.jpg',
          title: 'Corona I',
          artist: 'Paul Brach',
          year: '1995',
          rule: {
            "monday": [ 14, 18, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 30 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/table-piece-xxviii-1967.jpg',
          title: 'Table Piece XXVIII',
          artist: 'Anthony Caro',
          year: '1967',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 18, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 30 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/organ-of-cause-and-effect-iii-1986.jpg',
          title: 'Organ of Cause and Effect III',
          artist: 'Richard Artschwager',
          year: '1986',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 19, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 1 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/colors-for-a-large-wall-1951.jpg',
          title: 'Colors for a Large Wall',
          artist: 'Ellsworth Kelly',
          year: '1951',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 19, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 1 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/atlantique-ii-1991.jpg',
          title: 'Atlantique II',
          artist: 'Genevieve Asse',
          year: '1991',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 19, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/18-1963-1963.jpg',
          title: '18-1963',
          artist: 'William Turnbull',
          year: '1963',
          rule: {
            "monday": [ 13, 18, 24, 1 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 19, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/parva-xxix-1993.jpg',
          title: 'Parva XXIX',
          artist: 'Anne Truitt',
          year: '1993',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 1 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 19, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/coltrane-1970.jpg',
          title: 'Coltrane',
          artist: 'Ronald Bladen',
          year: '1970',
          rule: {
            "monday": [ 15, 19, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 1 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1.jpg',
          title: 'Untitled',
          artist: 'Mathias Goeritz',
          year: '?',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 19, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 1 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1973.jpg',
          title: 'Untitled',
          artist: 'Johannes Jan Schoonhoven',
          year: '1973',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 20, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 2 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/source-1967.jpg',
          title: 'Source',
          artist: 'Tony Smith',
          year: '1967',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 20, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 2 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1966-1.jpg',
          title: 'Untitled',
          artist: 'Gego',
          year: '1966',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 20, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-tree-1964.jpg',
          title: 'The Tree',
          artist: 'Agnes Martin',
          year: '1964',
          rule: {
            "monday": [ 14, 19, 25, 2 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 20, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-may-20-1950.jpg',
          title: 'Untitled (May 20)',
          artist: 'Myron Stout',
          year: '1950',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 2 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 20, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/spazio-luce-1963.jpg',
          title: 'Spazio Luce',
          artist: 'Antonio Calderara',
          year: '1963',
          rule: {
            "monday": [ 16, 20, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 2 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1977.jpg',
          title: 'Untitled',
          artist: 'Ruth Vollmer',
          year: '1977',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 20, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 2 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/diario(2).jpg',
          title: 'Diario',
          artist: 'Bice Lazzari',
          year: '?',
          rule: {
            "monday": [ 19, 24, 30, 4 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 21, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 3 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/number-15-1961.jpg',
          title: 'Number 15',
          artist: 'John McLaughlin',
          year: '1961',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 30, 4 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 21, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 3 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-2004.jpg',
          title: 'Untitled',
          artist: 'Tea Jorjadze',
          year: '2004',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 30, 4 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 21, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/doug-joe-and-genevieve-from-the-garden-of-delights-1998.jpg',
          title: 'Doug, Joe and Genevieve (from The Garden of Delights)',
          artist: 'Inigo Manglano-Ovalle',
          year: '1998',
          rule: {
            "monday": [ 15, 20, 26, 3 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 30, 4 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 21, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/eclipsed-time-1989-95.jpg',
          title: 'Eclipsed Time',
          artist: 'Maya Lin',
          year: '1989 - 1995',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 3 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 30, 4 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 21, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1994.jpg',
          title: 'Untitled',
          artist: 'Jessica Stockholder',
          year: '1994',
          rule: {
            "monday": [ 17, 21, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 3 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 30, 4 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/my-colorful-family-1998.jpg',
          title: 'My Colorful Family',
          artist: 'Charles Long',
          year: '1998',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 21, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 3 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-warm-water-1988.jpg',
          title: '"Untitled" (Warm Water)',
          artist: 'Felix Gonzalez-Torres',
          year: '1988',
          rule: {
            "monday": [ 20, 25, 1, 5 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 22, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 4 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-event-of-a-thread-2013.jpg',
          title: 'the event of a thread',
          artist: 'Ann Hamilton',
          year: '2013',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 1, 5 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 22, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 4 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/probably-best-seen-in-a-dark-room-with-the-t-v-on-1999.jpg',
          title: 'Probably Best Seen in a Dark Room with the T.V. On',
          artist: 'Tony Feher',
          year: '1999',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 1, 5 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 22, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/hackney-road-drawing-2004.jpg',
          title: 'Hackney Road Drawing',
          artist: 'David Batchelor',
          year: '2004',
          rule: {
            "monday": [ 16, 21, 27, 4 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 1, 5 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 22, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/cloud-gate-2004.jpg',
          title: 'Cloud Gate',
          artist: 'Anish Kapoor',
          year: '2004',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 4 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 1, 5 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 22, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/field-1989.jpg',
          title: 'Field',
          artist: 'Antony Gormley',
          year: '1989',
          rule: {
            "monday": [ 18, 22, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 4 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 1, 5 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/if-the-shoe-fits-1981.jpg',
          title: 'If The Shoe Fits',
          artist: 'Richard Deacon',
          year: '1981',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 22, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 4 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1994-2.jpg',
          title: 'Untitled',
          artist: 'Alison Wilding',
          year: '1994',
          rule: {
            "monday": [ 21, 26, 2, 6 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 23, 30, 5 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 5 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/88-va-17-1988.jpg',
          title: '88. VA 17',
          artist: 'Jurgen Partenheimer',
          year: '1988',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 2, 6 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 23, 30, 5 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 5 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/a-little-cosmic-rhythm-2007.jpg',
          title: 'A Little Cosmic Rhythm',
          artist: 'Alice Aycock',
          year: '2007',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 2, 6 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 23, 30, 5 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/particle-memory-1995.jpg',
          title: 'Particle Memory',
          artist: 'Lita Albuquerque',
          year: '1995',
          rule: {
            "monday": [ 17, 22, 28, 5 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 2, 6 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 23, 30, 5 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/east-end-1980.jpg',
          title: 'East End',
          artist: 'Valerie Jaudon',
          year: '1980',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 5 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 2, 6 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 23, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/tt-1994.jpg',
          title: 'TT',
          artist: 'Sean Scully',
          year: '1994',
          rule: {
            "monday": [ 19, 23, 30, 5 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 5 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 2, 6 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/pom-pom-2006.jpg',
          title: 'Pom Pom',
          artist: 'Phyllida Barlow',
          year: '2006',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 23, 30, 5 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 5 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/ladder-1981.jpg',
          title: 'Ladder',
          artist: 'Harmony Hammond',
          year: '1981',
          rule: {
            "monday": [ 22, 27, 3, 7 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 24, 1, 6 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 29, 6 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/ink-splash-2010.jpg',
          title: 'Ink Splash',
          artist: 'El Anatsui',
          year: '2010',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 3, 7 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 24, 1, 6 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 29, 6 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/wrapped-and-differed-space-1975.jpg',
          title: 'Wrapped and Differed Space',
          artist: 'Kishio Suga',
          year: '1975',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 3, 7 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 24, 1, 6 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/combinatory-system-1973-1.jpg',
          title: 'Combinatory system',
          artist: 'Florin Maxa',
          year: '1973',
          rule: {
            "monday": [ 18, 23, 29, 6 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 3, 7 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 24, 1, 6 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-green-power-1975.jpg',
          title: 'Untitled/Green Power',
          artist: 'David Hammons',
          year: '1975',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 29, 6 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 3, 7 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 24, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/phase-drawing-1-topology-14-1968.jpg',
          title: 'Phase - Drawing 1 (Topology 14)',
          artist: 'Nobuo Sekine',
          year: '1968',
          rule: {
            "monday": [ 20, 24, 1, 6 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 29, 6 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 3, 7 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/five-marching-men-1985.jpg',
          title: 'Five Marching Men',
          artist: 'Bruce Nauman',
          year: '1985',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 24, 1, 6 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 29, 6 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/contraband-1969.jpg',
          title: 'Contraband',
          artist: 'Lynda Benglis',
          year: '1969',
          rule: {
            "monday": [ 23, 28, 4, 8 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 25, 2, 7 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 30, 7 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/interior-sphere-piece-1985.jpg',
          title: 'Interior Sphere Piece',
          artist: 'Jacqueline Winsor',
          year: '1985',
          rule: {
            "monday": [ 24, 29, 4, 10 ],
            "tuesday": [ 23, 28, 4, 8 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 25, 2, 7 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 30, 7 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/waferboard-4-1996.jpg',
          title: 'Waferboard 4',
          artist: 'Richard Tuttle',
          year: '1996',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 29, 4, 10 ],
            "wednesday": [ 23, 28, 4, 8 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 25, 2, 7 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/cutglass-7-1975.jpg',
          title: 'Cutglass 7',
          artist: 'Keith Sonnier',
          year: '1975',
          rule: {
            "monday": [ 19, 24, 30, 7 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 29, 4, 10 ],
            "thursday": [ 23, 28, 4, 8 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 25, 2, 7 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/i-part-of-sabine-d-region-southwest-mare-tranquilitatis-from-lithographs-based-on-geologic-maps-1972.jpg',
          title: 'I Part of Sabine D Region, Southwest Mare Tranquilitatis from Lithographs Based on Geologic Maps of Lunar Orbiter and Apollo Landing Sites',
          artist: 'Nancy Graves',
          year: '1972',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 30, 7 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 29, 4, 10 ],
            "friday": [ 23, 28, 4, 8 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 25, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/pittsburgh-1985.jpg',
          title: 'Pittsburgh',
          artist: 'Richard Serra',
          year: '1985',
          rule: {
            "monday": [ 21, 25, 2, 7 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 30, 7 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 29, 4, 10 ],
            "saturday": [ 23, 28, 4, 8 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/24-yellow-columns-1982.jpg',
          title: '24 Yellow Columns',
          artist: 'Franz Erhard Walther',
          year: '1982',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 25, 2, 7 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 30, 7 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 29, 4, 10 ],
            "sunday": [ 23, 28, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1969.jpg',
          title: 'Untitled',
          artist: 'Bill Bollinger',
          year: '1969',
          rule: {
            "monday": [ 24, 29, 5, 9 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 26, 3, 8 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 1, 8 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/black-painting-1972.jpg',
          title: 'Black Painting',
          artist: 'Gary Kuehn',
          year: '1972',
          rule: {
            "monday": [ 25, 30, 5, 11 ],
            "tuesday": [ 24, 29, 5, 9 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 26, 3, 8 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 1, 8 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/device-to-root-out-evil-1997.jpg',
          title: 'Device to Root Out Evil',
          artist: 'Dennis Oppenheim',
          year: '1997',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 30, 5, 11 ],
            "wednesday": [ 24, 29, 5, 9 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 26, 3, 8 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/dance-of-the-crows-2012.jpg',
          title: 'Dance of the Crows',
          artist: 'Fusun Onur',
          year: '2012',
          rule: {
            "monday": [ 20, 25, 1, 8 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 30, 5, 11 ],
            "thursday": [ 24, 29, 5, 9 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 26, 3, 8 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/pittura-n-4-1994.jpg',
          title: 'Pittura n° 4',
          artist: 'Pino Pinelli',
          year: '1994',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 1, 8 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 30, 5, 11 ],
            "friday": [ 24, 29, 5, 9 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 26, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1972-2.jpg',
          title: 'Untitled',
          artist: 'Richard Van Buren',
          year: '1972',
          rule: {
            "monday": [ 22, 26, 3, 8 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 1, 8 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 30, 5, 11 ],
            "saturday": [ 24, 29, 5, 9 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/shadow-double-shadow-of-a-woman-1997.jpg',
          title: 'Shadow (Double Shadow of a Woman)',
          artist: 'Takamatsu Jiro',
          year: '1979',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 26, 3, 8 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 1, 8 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 30, 5, 11 ],
            "sunday": [ 24, 29, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1966.jpg',
          title: 'Untitled',
          artist: 'Eva Hesse',
          year: '1966',
          rule: {
            "monday": [ 25, 30, 6, 10 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 27, 4, 9 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 2, 9 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 1, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/japanese-tree-frog-cup-1968.jpg',
          title: 'Japanese Tree Frog Cup',
          artist: 'Kenneth Price',
          year: '1968',
          rule: {
            "monday": [ 26, 1, 6, 12 ],
            "tuesday": [ 25, 30, 6, 10 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 27, 4, 9 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 2, 9 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/lost-space-1964.jpg',
          title: 'Lost space',
          artist: 'Guy Mees',
          year: '1964',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 6, 12 ],
            "wednesday": [ 25, 30, 6, 10 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 27, 4, 9 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/convergence-i-2001.jpg',
          title: 'Convergence I',
          artist: 'Sheila Hicks',
          year: '2001',
          rule: {
            "monday": [ 21, 26, 2, 9 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 6, 12 ],
            "thursday": [ 25, 30, 6, 10 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 27, 4, 9 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/round-wooden-bar.jpg',
          title: 'Round Wooden Bar',
          artist: 'Andre Cadere',
          year: '?',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 2, 9 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 6, 12 ],
            "friday": [ 25, 30, 6, 10 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 27, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/accomplishments-1964.jpg',
          title: 'Accomplishments',
          artist: 'James Lee Byars',
          year: '1964',
          rule: {
            "monday": [ 23, 27, 4, 9 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 2, 9 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 1, 6, 12 ],
            "saturday": [ 25, 30, 6, 10 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/arena-v-1978.jpg',
          title: 'Arena V',
          artist: 'Dorothea Rockburne',
          year: '1978',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 27, 4, 9 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 2, 9 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 6, 12 ],
            "sunday": [ 25, 30, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-2010.jpg',
          title: 'Untitled',
          artist: 'Robert Morris',
          year: '2010',
          rule: {
            "monday": [ 26, 1, 7, 11 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 28, 5, 10 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 3, 10 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 2, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/berlin-star-2008.jpg',
          title: 'Berlin Star',
          artist: 'Otto Piene',
          year: '2008',
          rule: {
            "monday": [ 27, 2, 7, 13 ],
            "tuesday": [ 26, 1, 7, 11 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 28, 5, 10 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 3, 10 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/arrival-2008.jpg',
          title: 'Arrival',
          artist: 'Stephen Antonakos',
          year: '2008',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 2, 7, 13 ],
            "wednesday": [ 26, 1, 7, 11 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 28, 5, 10 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/sterreich-tisch-1969.jpg',
          title: 'Österreich - Tisch',
          artist: 'Karl Prantl',
          year: '1969',
          rule: {
            "monday": [ 22, 27, 3, 10 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 7, 13 ],
            "thursday": [ 26, 1, 7, 11 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 28, 5, 10 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/trenchant-sphere-1967.jpg',
          title: 'Trenchant Sphere',
          artist: 'Ruth Vollmer',
          year: '1967',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 3, 10 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 7, 13 ],
            "friday": [ 26, 1, 7, 11 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 28, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-wild-1950.jpg',
          title: 'The Wild',
          artist: 'Barnett Newman',
          year: '1950',
          rule: {
            "monday": [ 24, 28, 5, 10 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 3, 10 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 2, 7, 13 ],
            "saturday": [ 26, 1, 7, 11 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/idol-4-1956.jpg',
          title: 'Idol 4',
          artist: 'William Turnbull',
          year: '1956',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 28, 5, 10 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 3, 10 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 7, 13 ],
            "sunday": [ 26, 1, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-after-nature-tree-trunks-1959.jpg',
          title: 'Untitled (After Nature: Tree Trunks)',
          artist: 'Charlotte Posenenske',
          year: '1959',
          rule: {
            "monday": [ 27, 2, 8, 12 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 29, 6, 11 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 28, 4, 11 ],
            "saturday": [ 29, 4, 10, 15 ],
            "sunday": [ 28, 3, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1959vv.jpg',
          title: 'Untitled',
          artist: 'Ruth Vollmer',
          year: '1959',
          rule: {
            "monday": [ 28, 3, 8, 14 ],
            "tuesday": [ 27, 2, 8, 12 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 29, 6, 11 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 28, 4, 11 ],
            "sunday": [ 29, 4, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/die-fahne-hoch-1959.jpg',
          title: 'Die Fahne Hoch!',
          artist: 'Frank Stella',
          year: '1959',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 28, 3, 8, 14 ],
            "wednesday": [ 27, 2, 8, 12 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 29, 6, 11 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 28, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/disegno-geometrico-1960.jpg',
          title: 'Disegno geometrico',
          artist: 'Giulio Paolini',
          year: '1960',
          rule: {
            "monday": [ 23, 28, 4, 11 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 28, 3, 8, 14 ],
            "thursday": [ 27, 2, 8, 12 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 29, 6, 11 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/number-13-1961.jpg',
          title: 'Number 13',
          artist: 'John McLaughlin',
          year: '1961',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 28, 4, 11 ],
            "wednesday": [ 29, 4, 10, 15 ],
            "thursday": [ 28, 3, 8, 14 ],
            "friday": [ 27, 2, 8, 12 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 29, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/box-with-the-sound-of-its-own-making-1961.jpg',
          title: 'Box with the Sound of Its Own Making',
          artist: 'Robert Morris',
          year: '1961',
          rule: {
            "monday": [ 25, 29, 6, 11 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 28, 4, 11 ],
            "thursday": [ 29, 4, 10, 15 ],
            "friday": [ 28, 3, 8, 14 ],
            "saturday": [ 27, 2, 8, 12 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/number-17-1962.jpg',
          title: 'Number 17',
          artist: 'John McLaughlin',
          year: '1962',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 29, 6, 11 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 28, 4, 11 ],
            "friday": [ 29, 4, 10, 15 ],
            "saturday": [ 28, 3, 8, 14 ],
            "sunday": [ 27, 2, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/tau-1962.jpg',
          title: 'Tau',
          artist: 'Tony Smith',
          year: '1962',
          rule: {
            "monday": [ 28, 3, 9, 13 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 30, 7, 12 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 29, 5, 12 ],
            "saturday": [ 30, 5, 11, 16 ],
            "sunday": [ 29, 4, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/garden-elements-1962.jpg',
          title: 'Garden Elements',
          artist: 'Noguchi Isamu',
          year: '1962',
          rule: {
            "monday": [ 29, 4, 9, 15 ],
            "tuesday": [ 28, 3, 9, 13 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 30, 7, 12 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 29, 5, 12 ],
            "sunday": [ 30, 5, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/night-sea-1963.jpg',
          title: 'Night Sea',
          artist: 'Agnes Martin',
          year: '1963',
          rule: {
            "monday": [ 30, 5, 11, 16 ],
            "tuesday": [ 29, 4, 9, 15 ],
            "wednesday": [ 28, 3, 9, 13 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 30, 7, 12 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 29, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1963.jpg',
          title: 'Untitled',
          artist: 'John McLaughlin',
          year: '1963',
          rule: {
            "monday": [ 24, 29, 5, 12 ],
            "tuesday": [ 30, 5, 11, 16 ],
            "wednesday": [ 29, 4, 9, 15 ],
            "thursday": [ 28, 3, 9, 13 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 30, 7, 12 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/no-2-1964.jpg',
          title: 'No. 2',
          artist: 'Mark Rothko',
          year: '1964',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 29, 5, 12 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 29, 4, 9, 15 ],
            "friday": [ 28, 3, 9, 13 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 30, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/number-27-1964.jpg',
          title: 'Number 27',
          artist: 'John McLaughlin',
          year: '1964',
          rule: {
            "monday": [ 26, 30, 7, 12 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 29, 5, 12 ],
            "thursday": [ 30, 5, 11, 16 ],
            "friday": [ 29, 4, 9, 15 ],
            "saturday": [ 28, 3, 9, 13 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/cluster-about-hemisphere-1964.jpg',
          title: 'Cluster About Hemisphere',
          artist: 'Ruth Vollmer',
          year: '1964',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 30, 7, 12 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 29, 5, 12 ],
            "friday": [ 30, 5, 11, 16 ],
            "saturday": [ 29, 4, 9, 15 ],
            "sunday": [ 28, 3, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-negative-way-10-1964.jpg',
          title: 'The Negative Way #10',
          artist: 'Paul Brach',
          year: '1964',
          rule: {
            "monday": [ 29, 4, 10, 14 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 1, 8, 13 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 30, 6, 13 ],
            "saturday": [ 1, 6, 12, 17 ],
            "sunday": [ 30, 5, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/mirror-mirror-table-table-1964.jpg',
          title: 'Mirror/Mirror - Table/Table',
          artist: 'Richard Artschwager',
          year: '1964',
          rule: {
            "monday": [ 30, 5, 10, 16 ],
            "tuesday": [ 29, 4, 10, 14 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 1, 8, 13 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 30, 6, 13 ],
            "sunday": [ 1, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/b11-box-b-lide-09-1964.jpg',
          title: 'B11 Box Bólide 09',
          artist: 'Helio Oiticica',
          year: '1964',
          rule: {
            "monday": [ 1, 6, 12, 17 ],
            "tuesday": [ 30, 5, 10, 16 ],
            "wednesday": [ 29, 4, 10, 14 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 1, 8, 13 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 30, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1965.jpg',
          title: 'Untitled',
          artist: 'Robert Ryman',
          year: '1965',
          rule: {
            "monday": [ 25, 30, 6, 13 ],
            "tuesday": [ 1, 6, 12, 17 ],
            "wednesday": [ 30, 5, 10, 16 ],
            "thursday": [ 29, 4, 10, 14 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 1, 8, 13 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/fountain-1965.jpg',
          title: 'Fountain',
          artist: 'Richard Tuttle',
          year: '1965',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 30, 6, 13 ],
            "wednesday": [ 1, 6, 12, 17 ],
            "thursday": [ 30, 5, 10, 16 ],
            "friday": [ 29, 4, 10, 14 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 1, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/sprayed-picture-1965-1(1).jpg',
          title: 'Sprayed Picture',
          artist: 'Charlotte Posenenske',
          year: '1965',
          rule: {
            "monday": [ 27, 1, 8, 13 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 30, 6, 13 ],
            "thursday": [ 1, 6, 12, 17 ],
            "friday": [ 30, 5, 10, 16 ],
            "saturday": [ 29, 4, 10, 14 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/spazio-luce-1965.jpg',
          title: 'Spazio Luce',
          artist: 'Antonio Calderara',
          year: '1965',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 1, 8, 13 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 30, 6, 13 ],
            "friday": [ 1, 6, 12, 17 ],
            "saturday": [ 30, 5, 10, 16 ],
            "sunday": [ 29, 4, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/primary-light-group-red-green-blue-1965.jpg',
          title: 'Primary Light Group: Red, Green, Blue',
          artist: 'Jo Baer',
          year: '1964 - 1965',
          rule: {
            "monday": [ 30, 5, 11, 15 ],
            "tuesday": [ 29, 2, 10, 15 ],
            "wednesday": [ 28, 2, 9, 14 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 1, 7, 14 ],
            "saturday": [ 2, 7, 13, 18 ],
            "sunday": [ 1, 6, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/turquoise-gray-upside-down-t-1966.jpg',
          title: 'Turquoise-Gray Upside Down T',
          artist: 'Gianni Piacentino',
          year: '1966',
          rule: {
            "monday": [ 1, 6, 11, 17 ],
            "tuesday": [ 30, 5, 11, 15 ],
            "wednesday": [ 29, 2, 10, 15 ],
            "thursday": [ 28, 2, 9, 14 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 7, 14 ],
            "sunday": [ 2, 7, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/tango-tangles-1966.jpg',
          title: 'Tango Tangles',
          artist: 'Tony DeLap',
          year: '1966',
          rule: {
            "monday": [ 2, 7, 13, 18 ],
            "tuesday": [ 1, 6, 11, 17 ],
            "wednesday": [ 30, 5, 11, 15 ],
            "thursday": [ 29, 2, 10, 15 ],
            "friday": [ 28, 2, 9, 14 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 1, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/tegn-iii-1966.jpg',
          title: 'Tegn III',
          artist: 'Jan Groth',
          year: '1966',
          rule: {
            "monday": [ 26, 1, 7, 14 ],
            "tuesday": [ 2, 7, 13, 18 ],
            "wednesday": [ 1, 6, 11, 17 ],
            "thursday": [ 30, 5, 11, 15 ],
            "friday": [ 29, 2, 10, 15 ],
            "saturday": [ 28, 2, 9, 14 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1967.jpg',
          title: 'Untitled',
          artist: 'Eva Hesse',
          year: '1967',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 7, 14 ],
            "wednesday": [ 2, 7, 13, 18 ],
            "thursday": [ 1, 6, 11, 17 ],
            "friday": [ 30, 5, 11, 15 ],
            "saturday": [ 29, 2, 10, 15 ],
            "sunday": [ 28, 2, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/rothko-chapel-1967.jpg',
          title: 'Rothko Chapel',
          artist: 'Mark Rothko',
          year: '1964 - 1967',
          rule: {
            "monday": [ 28, 2, 9, 14 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 7, 14 ],
            "thursday": [ 2, 7, 13, 18 ],
            "friday": [ 1, 6, 11, 17 ],
            "saturday": [ 30, 5, 11, 15 ],
            "sunday": [ 29, 2, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/relief-series-b-1967-2(1).jpg',
          title: 'Relief, Series B',
          artist: 'Charlotte Posenenske',
          year: '1967',
          rule: {
            "monday": [ 29, 2, 10, 15 ],
            "tuesday": [ 28, 2, 9, 14 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 7, 14 ],
            "friday": [ 2, 7, 13, 18 ],
            "saturday": [ 1, 6, 11, 17 ],
            "sunday": [ 30, 5, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1967-.jpg',
          title: 'Untitled',
          artist: 'Michel Parmentier',
          year: '1967',
          rule: {
            "monday": [ 1, 6, 12, 16 ],
            "tuesday": [ 30, 3, 11, 16 ],
            "wednesday": [ 29, 3, 10, 15 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 2, 8, 15 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/novemberuntitled-1967--/.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1967',
          rule: {
            "monday": [ 2, 7, 12, 18 ],
            "tuesday": [ 1, 6, 12, 16 ],
            "wednesday": [ 30, 3, 11, 16 ],
            "thursday": [ 29, 3, 10, 15 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 8, 15 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/nile-1967.jpg',
          title: 'Nile',
          artist: 'Phillip King',
          year: '1967',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 12, 18 ],
            "wednesday": [ 1, 6, 12, 16 ],
            "thursday": [ 30, 3, 11, 16 ],
            "friday": [ 29, 3, 10, 15 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 2, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-absolutely-naked-fragrance-1967.jpg',
          title: 'The Absolutely Naked Fragrance',
          artist: 'John McCracken',
          year: '1967',
          rule: {
            "monday": [ 27, 2, 8, 15 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 12, 18 ],
            "thursday": [ 1, 6, 12, 16 ],
            "friday": [ 30, 3, 11, 16 ],
            "saturday": [ 29, 3, 10, 15 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/room-19-1968.jpg',
          title: 'Room 19',
          artist: 'Imi Knoebel',
          year: '1968',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 2, 8, 15 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 12, 18 ],
            "friday": [ 1, 6, 12, 16 ],
            "saturday": [ 30, 3, 11, 16 ],
            "sunday": [ 29, 3, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/3-inch-high-33-foot-long-epoxy-paint-band-1968.jpg',
          title: '3 inch high 33 foot long Epoxy Paint Band',
          artist: 'Robert Huot',
          year: '1968',
          rule: {
            "monday": [ 29, 3, 10, 15 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 8, 15 ],
            "thursday": [ 3, 8, 14, 19 ],
            "friday": [ 2, 7, 12, 18 ],
            "saturday": [ 1, 6, 12, 16 ],
            "sunday": [ 30, 3, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/hereditarius-no-1-68-a-1968.jpg',
          title: 'Hereditarius No.1-68-A',
          artist: 'Park Seo-Bo',
          year: '1968',
          rule: {
            "monday": [ 30, 3, 11, 16 ],
            "tuesday": [ 29, 3, 10, 15 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 8, 15 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 12, 18 ],
            "sunday": [ 1, 6, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/blue-day-glo-corner-piece-1968.jpg',
          title: 'Blue Day-glo Corner Piece',
          artist: 'Fred Sandback',
          year: '1968',
          rule: {
            "monday": [ 2, 7, 13, 17 ],
            "tuesday": [ 1, 4, 12, 17 ],
            "wednesday": [ 30, 4, 11, 16 ],
            "thursday": [ 29, 4, 10, 15 ],
            "friday": [ 28, 3, 9, 16 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1968.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1968',
          rule: {
            "monday": [ 3, 8, 13, 19 ],
            "tuesday": [ 2, 7, 13, 17 ],
            "wednesday": [ 1, 4, 12, 17 ],
            "thursday": [ 30, 4, 11, 16 ],
            "friday": [ 29, 4, 10, 15 ],
            "saturday": [ 28, 3, 9, 16 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/rad-4-1968.jpg',
          title: 'RAD 4',
          artist: 'Johannes Jan Schoonhoven',
          year: '1968',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 13, 19 ],
            "wednesday": [ 2, 7, 13, 17 ],
            "thursday": [ 1, 4, 12, 17 ],
            "friday": [ 30, 4, 11, 16 ],
            "saturday": [ 29, 4, 10, 15 ],
            "sunday": [ 28, 3, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1969-Rothko.jpg',
          title: 'Untitled',
          artist: 'Mark Rothko',
          year: '1969',
          rule: {
            "monday": [ 28, 3, 9, 16 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 13, 19 ],
            "thursday": [ 2, 7, 13, 17 ],
            "friday": [ 1, 4, 12, 17 ],
            "saturday": [ 30, 4, 11, 16 ],
            "sunday": [ 29, 4, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/broken-obelisk(1).jpg',
          title: 'Broken Obelisk',
          artist: 'Barnett Newman',
          year: '1963 - 1969',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 28, 3, 9, 16 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 13, 19 ],
            "friday": [ 2, 7, 13, 17 ],
            "saturday": [ 1, 4, 12, 17 ],
            "sunday": [ 30, 4, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/r-m-i-1969.jpg',
          title: 'R - M - I',
          artist: 'Yves Gaucher',
          year: '1969',
          rule: {
            "monday": [ 30, 4, 11, 16 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 28, 3, 9, 16 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 13, 19 ],
            "saturday": [ 2, 7, 13, 17 ],
            "sunday": [ 1, 4, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/yellow-painting-1969.jpg',
          title: 'Yellow Painting',
          artist: 'Peter Joseph',
          year: '1969',
          rule: {
            "monday": [ 1, 4, 12, 17 ],
            "tuesday": [ 30, 4, 11, 16 ],
            "wednesday": [ 29, 4, 10, 15 ],
            "thursday": [ 28, 3, 9, 16 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 13, 19 ],
            "sunday": [ 2, 7, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/586-69-gerundetes-rot-1969.jpg',
          title: '586/69 (Gerundetes Rot)',
          artist: 'Rupprecht Geiger',
          year: '1969',
          rule: {
            "monday": [ 3, 8, 14, 18 ],
            "tuesday": [ 2, 5, 13, 18 ],
            "wednesday": [ 1, 5, 12, 17 ],
            "thursday": [ 30, 5, 11, 16 ],
            "friday": [ 29, 4, 10, 17 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/reticul-rea-installation-view-1969.jpg',
          title: 'Reticulárea (installation view)',
          artist: 'Gego',
          year: '1969',
          rule: {
            "monday": [ 4, 9, 14, 20 ],
            "tuesday": [ 3, 8, 14, 18 ],
            "wednesday": [ 2, 5, 13, 18 ],
            "thursday": [ 1, 5, 12, 17 ],
            "friday": [ 30, 5, 11, 16 ],
            "saturday": [ 29, 4, 10, 17 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/dis-play-1970.jpg',
          title: 'Dis-Play',
          artist: 'Keith Sonnier',
          year: '1970',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 14, 20 ],
            "wednesday": [ 3, 8, 14, 18 ],
            "thursday": [ 2, 5, 13, 18 ],
            "friday": [ 1, 5, 12, 17 ],
            "saturday": [ 30, 5, 11, 16 ],
            "sunday": [ 29, 4, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/b-w-vi-1970.jpg',
          title: 'B.W. VI',
          artist: 'Yves Gaucher',
          year: '1970',
          rule: {
            "monday": [ 29, 4, 10, 17 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 14, 20 ],
            "thursday": [ 3, 8, 14, 18 ],
            "friday": [ 2, 5, 13, 18 ],
            "saturday": [ 1, 5, 12, 17 ],
            "sunday": [ 30, 5, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/Gaucher.jpg',
          title: 'Tegn I',
          artist: 'Jan Groth',
          year: '1970',
          rule: {
            "monday": [ 30, 5, 11, 16 ],
            "tuesday": [ 29, 4, 10, 17 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 14, 20 ],
            "friday": [ 3, 8, 14, 18 ],
            "saturday": [ 2, 5, 13, 18 ],
            "sunday": [ 1, 5, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/g-kx-69-1970.jpg',
          title: 'G-KX-69',
          artist: 'Victor Bonato',
          year: '1970',
          rule: {
            "monday": [ 1, 5, 12, 17 ],
            "tuesday": [ 30, 5, 11, 16 ],
            "wednesday": [ 29, 4, 10, 17 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 14, 20 ],
            "saturday": [ 3, 8, 14, 18 ],
            "sunday": [ 2, 5, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1970-7.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 2, 5, 13, 18 ],
            "tuesday": [ 1, 5, 12, 17 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 29, 4, 10, 17 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 14, 20 ],
            "sunday": [ 3, 8, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/sur-les-murs-1971.jpg',
          title: 'Sur les Murs',
          artist: 'Daniel Buren',
          year: '1971',
          rule: {
            "monday": [ 4, 9, 15, 19 ],
            "tuesday": [ 3, 6, 14, 19 ],
            "wednesday": [ 2, 6, 13, 18 ],
            "thursday": [ 1, 6, 12, 17 ],
            "friday": [ 30, 5, 11, 18 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/sun-flower-1971.jpg',
          title: 'Sun Flower',
          artist: 'Anne Truitt',
          year: '1971',
          rule: {
            "monday": [ 5, 10, 15, 21 ],
            "tuesday": [ 4, 9, 15, 19 ],
            "wednesday": [ 3, 6, 14, 19 ],
            "thursday": [ 2, 6, 13, 18 ],
            "friday": [ 1, 6, 12, 17 ],
            "saturday": [ 30, 5, 11, 18 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/no-3-1971.jpg',
          title: 'No. 3',
          artist: 'Bernard Cohen',
          year: '1971',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 15, 21 ],
            "wednesday": [ 4, 9, 15, 19 ],
            "thursday": [ 3, 6, 14, 19 ],
            "friday": [ 2, 6, 13, 18 ],
            "saturday": [ 1, 6, 12, 17 ],
            "sunday": [ 30, 5, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/blok-1971.jpg',
          title: 'Blok',
          artist: 'Nanda Vigo',
          year: '1971',
          rule: {
            "monday": [ 30, 5, 11, 18 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 15, 21 ],
            "thursday": [ 4, 9, 15, 19 ],
            "friday": [ 3, 6, 14, 19 ],
            "saturday": [ 2, 6, 13, 18 ],
            "sunday": [ 1, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/reticul-rea-cuadrada-horizontal-71-10-1971.jpg',
          title: 'Reticulárea cuadrada horizontal 71/10',
          artist: 'Gego',
          year: '1971',
          rule: {
            "monday": [ 1, 6, 12, 17 ],
            "tuesday": [ 30, 5, 11, 18 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 15, 21 ],
            "friday": [ 4, 9, 15, 19 ],
            "saturday": [ 3, 6, 14, 19 ],
            "sunday": [ 2, 6, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/cubic-bar-of-wood-1971.jpg',
          title: 'Cubic Bar of Wood',
          artist: 'Andre Cadere',
          year: '1971',
          rule: {
            "monday": [ 2, 6, 13, 18 ],
            "tuesday": [ 1, 6, 12, 17 ],
            "wednesday": [ 30, 5, 11, 18 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 15, 21 ],
            "saturday": [ 4, 9, 15, 19 ],
            "sunday": [ 3, 6, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1972.jpg',
          title: 'Untitled',
          artist: 'Jean Degottex',
          year: '1972',
          rule: {
            "monday":[ 3, 6, 14, 19 ],
            "tuesday": [ 2, 6, 13, 18 ],
            "wednesday": [ 1, 6, 12, 17 ],
            "thursday": [ 30, 5, 11, 18 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 15, 21 ],
            "sunday": [ 4, 9, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/triangle-circle-square-1972.jpg',
          title: 'Triangle, Circle, Square',
          artist: 'Walter De Maria',
          year: '1972',
          rule: {
            "monday":[ 5, 10, 16, 20 ],
            "tuesday": [ 4, 7, 15, 20 ],
            "wednesday": [ 3, 7, 14, 19 ],
            "thursday": [ 2, 7, 13, 18 ],
            "friday": [ 1, 6, 12, 19 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/ripe-wheat-1972.jpg',
          title: 'Ripe Wheat',
          artist: 'Warren Rohrer',
          year: '1972',
          rule: {
            "monday":[ 6, 11, 16, 22 ],
            "tuesday": [ 5, 10, 16, 20 ],
            "wednesday": [ 4, 7, 15, 20 ],
            "thursday": [ 3, 7, 14, 19 ],
            "friday": [ 2, 7, 13, 18 ],
            "saturday": [ 1, 6, 12, 19 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/pearl-frame-vehicle-with-violet-blue-triangle-tank-1973.jpg',
          title: 'Pearl Frame Vehicle with Violet-Blue Triangle Tank',
          artist: 'Gianni Piacentino',
          year: '1973',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 16, 22 ],
            "wednesday": [ 5, 10, 16, 20 ],
            "thursday": [ 4, 7, 15, 20 ],
            "friday": [ 3, 7, 14, 19 ],
            "saturday": [ 2, 7, 13, 18 ],
            "sunday": [ 1, 6, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/soft-neon-1973.jpg',
          title: 'Soft Neon',
          artist: 'Perle Fine',
          year: '1973',
          rule: {
            "monday": [ 1, 6, 12, 19 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 16, 22 ],
            "thursday": [ 5, 10, 16, 20 ],
            "friday": [ 4, 7, 15, 20 ],
            "saturday": [ 3, 7, 14, 19 ],
            "sunday": [ 2, 7, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-14-part-roller-drawing-1973.jpg',
          title: 'Untitled (14-part roller drawing)',
          artist: 'Richard Serra',
          year: '1973',
          rule: {
            "monday": [ 2, 7, 13, 18 ],
            "tuesday": [ 1, 6, 12, 19 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 16, 22 ],
            "friday": [ 5, 10, 16, 20 ],
            "saturday": [ 4, 7, 15, 20 ],
            "sunday": [ 3, 7, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1973__.jpg',
          title: 'Untitled',
          artist: 'Sean Scully',
          year: '1973',
          rule: {
            "monday": [ 3, 7, 14, 19 ],
            "tuesday": [ 2, 7, 13, 18 ],
            "wednesday": [ 1, 6, 12, 19 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 16, 22 ],
            "saturday": [ 5, 10, 16, 20 ],
            "sunday": [ 4, 7, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/white-wheat-1973.jpg',
          title: 'White Wheat',
          artist: 'Warren Rohrer',
          year: '1973',
          rule: {
            "monday": [ 4, 7, 15, 20 ],
            "tuesday": [ 3, 7, 14, 19 ],
            "wednesday": [ 2, 7, 13, 18 ],
            "thursday": [ 1, 6, 12, 19 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 16, 22 ],
            "sunday": [ 5, 10, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1974__.jpg',
          title: 'Untitled',
          artist: 'John McLaughlin',
          year: '1974',
          rule: {
            "monday": [ 6, 11, 17, 21 ],
            "tuesday": [ 5, 8, 16, 21 ],
            "wednesday": [ 4, 8, 15, 20 ],
            "thursday": [ 3, 8, 14, 19 ],
            "friday": [ 2, 7, 13, 20 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/spears-1974.jpg',
          title: 'Spears',
          artist: 'Moshe Kupferman',
          year: '1974',
          rule: {
            "monday": [ 7, 12, 17, 23 ],
            "tuesday": [ 6, 11, 17, 21 ],
            "wednesday": [ 5, 8, 16, 21 ],
            "thursday": [ 4, 8, 15, 20 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 13, 20 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/a-pair-of-unbeyond-1974.jpg',
          title: 'A pair of unbeyond',
          artist: 'Kishio Suga',
          year: '1974',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 17, 23 ],
            "wednesday": [ 6, 11, 17, 21 ],
            "thursday": [ 5, 8, 16, 21 ],
            "friday": [ 4, 8, 15, 20 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/round-wooden-bar-in-red-blue-orange-green-yellow-and-violet-1975.jpg',
          title: 'Round Wooden Bar in Red, Blue, Orange, Green, Yellow and Violet',
          artist: 'Andre Cadere',
          year: '1975',
          rule: {
            "monday": [ 2, 7, 13, 20 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 17, 23 ],
            "thursday": [ 6, 11, 17, 21 ],
            "friday": [ 5, 8, 16, 21 ],
            "saturday": [ 4, 8, 15, 20 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/indian-yellow-1975.jpg',
          title: 'Indian Yellow',
          artist: 'Marcia Hafif',
          year: '1975',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 13, 20 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 17, 23 ],
            "friday": [ 6, 11, 17, 21 ],
            "saturday": [ 5, 8, 16, 21 ],
            "sunday": [ 4, 8, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/espai-horizontal-amb-nou-horizontal-1976.jpg',
          title: 'Espai horizontal amb nou horizontal',
          artist: 'Joan Hernandez Pijuan',
          year: '1976',
          rule: {
            "monday": [ 4, 8, 15, 20 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 13, 20 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 17, 23 ],
            "saturday": [ 6, 11, 17, 21 ],
            "sunday": [ 5, 8, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-hill-1976.jpg',
          title: 'The Hill',
          artist: 'Horia Damian',
          year: '1976',
          rule: {
            "monday": [ 5, 8, 16, 21 ],
            "tuesday": [ 4, 8, 15, 20 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 13, 20 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 17, 23 ],
            "sunday": [ 6, 11, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1976.jpg',
          title: 'Untitled',
          artist: 'Robert Ryman',
          year: '1976',
          rule: {
            "monday": [ 7, 12, 18, 22 ],
            "tuesday": [ 6, 9, 17, 22 ],
            "wednesday": [ 5, 9, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 21 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-sculptural-study-six-part-construction-detail-1977.jpg',
          title: 'Untitled (Sculptural Study, Six-part Construction) (detail)',
          artist: 'Fred Sandback',
          year: '1977',
          rule: {
            "monday": [ 8, 13, 18, 24 ],
            "tuesday": [ 7, 12, 18, 22 ],
            "wednesday": [ 6, 9, 17, 22 ],
            "thursday": [ 5, 9, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 21 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/evers-1977.jpg',
          title: 'Evers',
          artist: 'Christopher Wilmarth',
          year: '1977',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 18, 24 ],
            "wednesday": [ 7, 12, 18, 22 ],
            "thursday": [ 6, 9, 17, 22 ],
            "friday": [ 5, 9, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/blues-greens-1978.jpg',
          title: 'Blues-Greens',
          artist: 'Joan Hernandez Pijuan',
          year: '1978',
          rule: {
            "monday": [ 3, 8, 14, 21 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 18, 24 ],
            "thursday": [ 7, 12, 18, 22 ],
            "friday": [ 6, 9, 17, 22 ],
            "saturday": [ 5, 9, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/hastings-visit-to-the-great-plains-1979.jpg',
          title: 'Hastings Visit to the Great Plains',
          artist: 'Sheila Hicks',
          year: '1979',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 21 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 18, 24 ],
            "friday": [ 7, 12, 18, 22 ],
            "saturday": [ 6, 9, 17, 22 ],
            "sunday": [ 5, 9, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1979(1).jpg',
          title: 'Untitled',
          artist: 'Myron Stout',
          year: '1979',
          rule: {
            "monday": [ 5, 9, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 21 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 18, 24 ],
            "saturday": [ 7, 12, 18, 22 ],
            "sunday": [ 6, 9, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-whim-of-tituba-1979.jpg',
          title: 'The Whim of Tituba',
          artist: 'Tony DeLap',
          year: '1979',
          rule: {
            "monday": [ 6, 9, 17, 22 ],
            "tuesday": [ 5, 9, 16, 21 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 14, 21 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 18, 24 ],
            "sunday": [ 7, 12, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/colonel-1980.jpg',
          title: 'Colonel',
          artist: 'Lyman Kipp',
          year: '1980',
          rule: {
            "monday": [ 8, 13, 19, 23 ],
            "tuesday": [ 7, 10, 18, 23 ],
            "wednesday": [ 6, 10, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 22 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/black-lightining-garden-1981.jpg',
          title: 'Black Lightining (Garden)',
          artist: 'Ronald Bladen',
          year: '1981',
          rule: {
            "monday": [ 9, 14, 19, 25 ],
            "tuesday": [ 8, 13, 19, 23 ],
            "wednesday": [ 7, 10, 18, 23 ],
            "thursday": [ 6, 10, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 22 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/the-white-cube-1982.jpg',
          title: 'The White Cube',
          artist: 'Stephen Antonakos',
          year: '1982',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 19, 25 ],
            "wednesday": [ 8, 13, 19, 23 ],
            "thursday": [ 7, 10, 18, 23 ],
            "friday": [ 6, 10, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/grille-color-branc-ii-1983.jpg',
          title: 'Grille-Color Branc II',
          artist: 'Jean Degottex',
          year: '1983',
          rule: {
            "monday": [ 4, 9, 15, 22 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 19, 25 ],
            "thursday": [ 8, 13, 19, 23 ],
            "friday": [ 7, 10, 18, 23 ],
            "saturday": [ 6, 10, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/ligne-rouge-ii-n-19-1984.jpg',
          title: 'Ligne rouge II n°19',
          artist: 'Genevieve Asse',
          year: '1984',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 22 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 19, 25 ],
            "friday": [ 8, 13, 19, 23 ],
            "saturday": [ 7, 10, 18, 23 ],
            "sunday": [ 6, 10, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/vermillion-diary-no-4-1984.jpg',
          title: 'Vermillion Diary No. 4',
          artist: 'Frederic Matys Thursz',
          year: '1984',
          rule: {
            "monday": [ 6, 10, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 22 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 19, 25 ],
            "saturday": [ 8, 13, 19, 23 ],
            "sunday": [ 7, 10, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/edge-3-1985.jpg',
          title: 'Edge 3',
          artist: 'Warren Rohrer',
          year: '1985',
          rule: {
            "monday": [ 7, 10, 18, 23 ],
            "tuesday": [ 6, 10, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 22 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 19, 25 ],
            "sunday": [ 8, 13, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/86-3-15q-1986.jpg',
          title: '86-3-15Q',
          artist: 'Angelo de Sousa',
          year: '1986',
          rule: {
            "monday": [ 9, 14, 20, 24 ],
            "tuesday": [ 8, 11, 19, 24 ],
            "wednesday": [ 7, 11, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 23 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/creueta-del-coll-1987.jpg',
          title: 'Creueta del Coll',
          artist: 'Ellsworth Kelly',
          year: '1987',
          rule: {
            "monday": [ 10, 15, 20, 26 ],
            "tuesday": [ 9, 14, 20, 24 ],
            "wednesday": [ 8, 11, 19, 24 ],
            "thursday": [ 7, 11, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 23 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/enamel-on-wood-blue-green-1989.jpg',
          title: 'Enamel on Wood: Blue Green',
          artist: 'Marcia Hafif',
          year: '1989',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 20, 26 ],
            "wednesday": [ 9, 14, 20, 24 ],
            "thursday": [ 8, 11, 19, 24 ],
            "friday": [ 7, 11, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/nine-singular-forms-1990.jpg',
          title: 'Nine Singular Forms',
          artist: 'Callum Innes',
          year: '1990',
          rule: {
            "monday": [ 5, 10, 16, 23 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 20, 26 ],
            "thursday": [ 9, 14, 20, 24 ],
            "friday": [ 8, 11, 19, 24 ],
            "saturday": [ 7, 11, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-4.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: 'xx cent.',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 23 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 20, 26 ],
            "friday": [ 9, 14, 20, 24 ],
            "saturday": [ 8, 11, 19, 24 ],
            "sunday": [ 7, 11, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/courtyard-xiii-1991.jpg',
          title: 'Courtyard XIII',
          artist: 'Katsuhito Nishikawa',
          year: '1991',
          rule: {
            "monday": [ 7, 11, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 23 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 20, 26 ],
            "saturday": [ 9, 14, 20, 24 ],
            "sunday": [ 8, 11, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/yin-yang-1992-1.jpg',
          title: 'Yin-Yang',
          artist: 'Victor Bonato',
          year: '1992',
          rule: {
            "monday": [ 8, 11, 19, 24 ],
            "tuesday": [ 7, 11, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 23 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 20, 26 ],
            "sunday": [ 9, 14, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/dark-love-1993.jpg',
          title: 'Dark Love',
          artist: 'Pat Lipsky',
          year: '1993',
          rule: {
            "monday": [ 10, 15, 21, 25 ],
            "tuesday": [ 9, 12, 20, 25 ],
            "wednesday": [ 8, 12, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 24 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/pittura-bl-g-1993.jpg',
          title: 'Pittura BL.G.',
          artist: 'Pino Pinelli',
          year: '1993',
          rule: {
            "monday": [ 11, 16, 21, 27 ],
            "tuesday": [ 10, 15, 21, 25 ],
            "wednesday": [ 9, 12, 20, 25 ],
            "thursday": [ 8, 12, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 24 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1994-3.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1994',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 21, 27 ],
            "wednesday": [ 10, 15, 21, 25 ],
            "thursday": [ 9, 12, 20, 25 ],
            "friday": [ 8, 12, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/horizontal-painting-in-7-vertical-parts-1996.jpg',
          title: 'Horizontal Painting in 7 Vertical Parts',
          artist: 'Alan Charlton',
          year: '1996',
          rule: {
            "monday": [ 6, 11, 17, 24 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 21, 27 ],
            "thursday": [ 10, 15, 21, 25 ],
            "friday": [ 9, 12, 20, 25 ],
            "saturday": [ 8, 12, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/parva-xxxviii-1996.jpg',
          title: 'Parva XXXVIII',
          artist: 'Anne Truitt',
          year: '1996',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 24 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 21, 27 ],
            "friday": [ 10, 15, 21, 25 ],
            "saturday": [ 9, 12, 20, 25 ],
            "sunday": [ 8, 12, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/oh-1996.jpg',
          title: 'Oh!',
          artist: 'Grazia Varisco',
          year: '1996',
          rule: {
            "monday": [ 8, 12, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 24 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 21, 27 ],
            "saturday": [ 10, 15, 21, 25 ],
            "sunday": [ 9, 12, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-1997-1.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1997',
          rule: {
            "monday": [ 9, 12, 20, 25 ],
            "tuesday": [ 8, 12, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 24 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 21, 27 ],
            "sunday": [ 10, 15, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/exposed-painting-olive-green-1998.jpg',
          title: 'Exposed Painting, Olive Green',
          artist: 'Callum Innes',
          year: '1998',
          rule: {
            "monday": [ 11, 16, 22, 26 ],
            "tuesday": [ 10, 13, 21, 26 ],
            "wednesday": [ 9, 13, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 25 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/magnetic-love-affair-1998.jpg',
          title: 'Magnetic Love Affair',
          artist: 'Sheila Hicks',
          year: '1998',
          rule: {
            "monday": [ 12, 17, 22, 28 ],
            "tuesday": [ 11, 16, 22, 26 ],
            "wednesday": [ 10, 13, 21, 26 ],
            "thursday": [ 9, 13, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 25 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/zobop-installation-view-1999-1.jpg',
          title: 'Zobop (installation view)',
          artist: 'Jim Lambie',
          year: '1999',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 22, 28 ],
            "wednesday": [ 11, 16, 22, 26 ],
            "thursday": [ 10, 13, 21, 26 ],
            "friday": [ 9, 13, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/traces-2000.jpg',
          title: 'Traces',
          artist: 'Yves Gaucher',
          year: '2000',
          rule: {
            "monday": [ 7, 12, 18, 25 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 22, 28 ],
            "thursday": [ 11, 16, 22, 26 ],
            "friday": [ 10, 13, 21, 26 ],
            "saturday": [ 9, 13, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/senza-titolo-sottosopra-2000.jpg',
          title: 'Senza Titolo, Sottosopra',
          artist: 'Ettore Spalletti',
          year: '2000',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 25 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 22, 28 ],
            "friday": [ 11, 16, 22, 26 ],
            "saturday": [ 10, 13, 21, 26 ],
            "sunday": [ 9, 13, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/untitled-2001a.jpg',
          title: 'Untitled',
          artist: 'Edward Krasinski',
          year: '2001',
          rule: {
            "monday": [ 9, 13, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 25 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 22, 28 ],
            "saturday": [ 11, 16, 22, 26 ],
            "sunday": [ 10, 13, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/this-is-not-a-landscape-2002.jpg',
          title: 'This Is Not a Landscape',
          artist: 'Fernando Calhau',
          year: '2002',
          rule: {
            "monday": [ 10, 13, 21, 26 ],
            "tuesday": [ 9, 13, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 25 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 22, 28 ],
            "sunday": [ 11, 16, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/work-no-275-small-things-2003.jpg',
          title: 'Work No. 275 (Small Things)',
          artist: 'Martin Creed',
          year: '2003',
          rule: {
            "monday": [ 12, 17, 23, 27 ],
            "tuesday": [ 11, 14, 22, 27 ],
            "wednesday": [ 10, 14, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 26 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/20-pearls-1-2003.jpg',
          title: '20 Pearls (1)',
          artist: 'Richard Tuttle',
          year: '2003',
          rule: {
            "monday": [ 13, 18, 23, 29 ],
            "tuesday": [ 12, 17, 23, 27 ],
            "wednesday": [ 11, 14, 22, 27 ],
            "thursday": [ 10, 14, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 26 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/20-pearls-8-2003.jpg',
          title: '20 Pearls (8)',
          artist: 'Richard Tuttle',
          year: '2003',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 23, 29 ],
            "wednesday": [ 12, 17, 23, 27 ],
            "thursday": [ 11, 14, 22, 27 ],
            "friday": [ 10, 14, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/gray-wood-2003.jpg',
          title: 'Gray Wood',
          artist: 'Alex Hay',
          year: '2003',
          rule: {
            "monday": [ 8, 13, 19, 26 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 23, 29 ],
            "thursday": [ 12, 17, 23, 27 ],
            "friday": [ 11, 14, 22, 27 ],
            "saturday": [ 10, 14, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/shared-space-2004.jpg',
          title: 'Shared Space',
          artist: 'Genevieve Asse',
          year: '2004',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 26 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 23, 29 ],
            "friday": [ 12, 17, 23, 27 ],
            "saturday": [ 11, 14, 22, 27 ],
            "sunday": [ 10, 14, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/peinture-130-x-81-cm-20-03-2004-2004.jpg',
          title: 'Peinture 130 x 81 cm, 20-03-2004',
          artist: 'Pierre Soulages',
          year: '2004',
          rule: {
            "monday": [ 10, 14, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 26 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 23, 29 ],
            "saturday": [ 12, 17, 23, 27 ],
            "sunday": [ 11, 14, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/plaza-2005.jpg',
          title: 'Plaza',
          artist: 'Jim Lambie',
          year: '2005',
          rule: {
            "monday": [ 11, 14, 22, 27 ],
            "tuesday": [ 10, 14, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 26 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 23, 29 ],
            "sunday": [ 12, 17, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/exposed-painting-dioxazine-violet-2006.jpg',
          title: 'Exposed Painting Dioxazine Violet',
          artist: 'Callum Innes',
          year: '2006',
          rule: {
            "monday": [ 13, 18, 24, 28 ],
            "tuesday": [ 12, 15, 23, 28 ],
            "wednesday": [ 11, 15, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 27 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/ecriture-no-070201-2007.jpg',
          title: 'Ecriture No. 070201',
          artist: 'Park Seo-Bo',
          year: '2007',
          rule: {
            "monday": [ 14, 19, 24, 30 ],
            "tuesday": [ 13, 18, 24, 28 ],
            "wednesday": [ 12, 15, 23, 28 ],
            "thursday": [ 11, 15, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 27 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/past-time-2007.jpg',
          title: 'Past Time',
          artist: 'Alex Hay',
          year: '2007',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 24, 30 ],
            "wednesday": [ 13, 18, 24, 28 ],
            "thursday": [ 12, 15, 23, 28 ],
            "friday": [ 11, 15, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/kiwa-2008.jpg',
          title: 'KIWA',
          artist: 'Jurgen Partenheimer',
          year: '2008',
          rule: {
            "monday": [ 9, 14, 20, 27 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 24, 30 ],
            "thursday": [ 13, 18, 24, 28 ],
            "friday": [ 12, 15, 23, 28 ],
            "saturday": [ 11, 15, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/photo-souvenir-westwind-vent-d-ouest-travail-situ-2010.jpg',
          title: 'Photo-souvenir: Westwind (Vent d’ouest), travail situé',
          artist: 'Daniel Buren',
          year: '2010',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 27 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 24, 30 ],
            "friday": [ 13, 18, 24, 28 ],
            "saturday": [ 12, 15, 23, 28 ],
            "sunday": [ 11, 15, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/sculpture-in-front-of-burgo-empreendimento.jpg',
          title: 'Sculpture in front of Burgo Empreendimento',
          artist: 'Angelo de Sousa',
          year: 'xx - xxi cent.',
          rule: {
            "monday": [ 11, 15, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 27 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 24, 30 ],
            "saturday": [ 13, 18, 24, 28 ],
            "sunday": [ 12, 15, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/november/https://uploads8.wikiart.org/images/david-batchelor/slugfest-2012.jpg',
          title: 'Slugfest',
          artist: 'David Batchelor',
          year: '2012',
          rule: {
            "monday": [ 12, 15, 23, 28 ],
            "tuesday": [ 11, 15, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 27 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 24, 30 ],
            "sunday": [ 13, 18, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_arts_id_seq', (SELECT MAX(id) FROM november_arts));");
    });
};
