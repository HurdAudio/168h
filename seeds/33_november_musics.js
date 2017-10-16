'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=843813690/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/ethiopiques-box7',
          a_string: 'ETHIOPIQUES BOX7&quot; by VARIOUS ARTIST',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 27, 8, 19, 21 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3841544019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/ethiopian-hit-parade-volume-1',
          a_string: 'Ethiopian Hit Parade Volume 1 by Various Artists',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 28, 9, 20, 22 ],
            "saturday": [ 27, 8, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2829339155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/almeyehu-esh-t-ethiopian-urban-modern-music-vol-2',
          a_string: 'ALMEYEHU ESHÉTÉ - ETHIOPIAN URBAN MODERN MUSIC VOL.2 by ALMEYEHU ESHÉTÉ',
          rule: {
            "monday": [ 27, 8, 19, 21 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=734007773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/getatchew-mekurya-ethiopian-urban-modern-music-vol-5',
          a_string: 'GETATCHEW MEKURYA - ETHIOPIAN URBAN MODERN MUSIC VOL. 5 by GETATCHEW MEKURYA',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 27, 8, 19, 21 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3478976100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/mulatu-astatke-ethio-jazz',
          a_string: 'MULATU ASTATKE - ETHIO JAZZ by MULATU ASTATKE',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 22 ],
            "wednesday": [ 27, 8, 19, 21 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3946190093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/tlahoun-g-ss-ss-ethiopian-urban-modern-music-vol-4',
          a_string: 'TLAHOUN GÉSSÉSSÉ - ETHIOPIAN URBAN MODERN MUSIC VOL. 4 by TLAHOUN GÉSSÉSSÉ',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 27, 8, 19, 21 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1576491176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-ethiopian-modern-instrumentals-hits',
          a_string: 'VARIOUS ARTISTS - ETHIOPIAN MODERN INSTRUMENTALS HITS by VARIOUS ARTISTS',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1900915377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-ethiopian-soul-and-groove-vol-1',
          a_string: 'VARIOUS ARTISTS - ETHIOPIAN SOUL AND GROOVE VOL.1 by Various Artists',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4217537268/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-heavenly-ethiopiques',
          a_string: 'VARIOUS ARTISTS - HEAVENLY ETHIOPIQUES by VARIOUS ARTISTS',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 22 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=315745298/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-more-ethiopian-soul-and-groove',
          a_string: 'VARIOUS ARTISTS - MORE ETHIOPIAN SOUL AND GROOVE by Various Artists',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2223744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hoodnaorchestra.bandcamp.com/album/alem-single-feat-demisu-belete-adyabo-ensemble',
          a_string: 'ALEM single feat. Demisu Belete &amp; ADYABO Ensemble by Hoodna Orchestra',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 28, 9, 20, 22 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1465697662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://korruptflozferti.bandcamp.com/album/southern-roads',
          a_string: 'SOUTHERN ROADS by Ozferti',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1684187707/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akalewube.bandcamp.com/album/akal-wub',
          a_string: 'Akalé Wubé by Akalé Wubé',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1788037664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akalewube.bandcamp.com/album/mata',
          a_string: 'Mata by Akalé Wubé',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1294737427/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://akalewube.bandcamp.com/album/sost',
          a_string: 'Sost by Akalé Wubé',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=183419789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://afrosocialclub.bandcamp.com/album/sittin-on-a-bomb-2',
          a_string: 'Sittin&#39; On A Bomb by AFRO SOCIAL CLUB',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1783154732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ifafrobeat.bandcamp.com/album/if-ijex-funk-fr-be-t',
          a_string: 'IFÁ- IJEX∆ FUNK ∆FRØBE∆T by IFÁ',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3085119662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mbamina.bandcamp.com/album/experimental',
          a_string: 'Experimental by M&#39;Bamina',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3565525565/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/tche-belew',
          a_string: 'Tche Belew by Hailu Mergia',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1110063954/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/space-echo-the-mystery-behind-the-cosmic-sound-of-cabo-verde-finally-revealed',
          a_string: 'Space Echo - The Mystery Behind the Cosmic Sound of Cabo Verde Finally Revealed! by Various',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4282536159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ostinatorecords.bandcamp.com/album/sweet-as-broken-dates-lost-somali-tapes-from-the-horn-of-africa',
          a_string: 'Sweet As Broken Dates: Lost Somali Tapes from the Horn of Africa by Various Artists',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1785825889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikaelseifu.bandcamp.com/album/yarada-lij-ep',
          a_string: 'Yarada Lij EP by Mikael Seifu',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2396887058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopianrecords.bandcamp.com/album/in-my-sleep-ep-12-vinyl',
          a_string: 'In My Sleep EP 12&quot; Vinyl by E.R.',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=349085208/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kemiandyamlu.bandcamp.com/album/addis-radio-5',
          a_string: 'ADDIS RADIO by Kemi + Yamlu',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3198595199/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tramprecords.bandcamp.com/album/the-best-of-tramp-45s-vol-1',
          a_string: 'The Best of Tramp 45s - Vol.1 by Tramp Rec.',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1114446073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotcasarecords.bandcamp.com/album/itadi-k-bonney',
          a_string: 'ITADI K.BONNEY by Itadi  K.Bonney',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4239780782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotcasarecords.bandcamp.com/album/love-peace-happiness',
          a_string: 'Love Peace &amp; Happiness by Orlando Julius &amp; Ashiko',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3075585632/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackflower1.bandcamp.com/album/artifacts',
          a_string: 'Artifacts by Black Flower',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2800805288/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andrewkleinmusic.bandcamp.com/album/new-dirty',
          a_string: 'New Dirty by Dirty Money Music',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3061013425/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/best-woman-limited-edition',
          a_string: 'Best Woman (Limited Edition) by Vincent Ahehehinnou',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_musics_id_seq', (SELECT MAX(id) FROM november_musics));");
    });
};
