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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
          theme: 'Ethiopian & Pan-African',
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
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2967572183/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jahbarimiller.bandcamp.com/album/black-empire-state-of-mind',
          a_string: 'Black Empire State of Mind by Jabari Miller',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3695819054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://builtforslow.bandcamp.com/album/daegu-to-addis',
          a_string: 'Daegu to Addis by Built For Slow',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1655954080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://petitesplanetes.bandcamp.com/album/gamo-gamo-tribal-songs-from-the-south-now-ethiopia-series',
          a_string: 'GAMO GAMO - tribal songs from the south (Now Ethiopia series) by Collection Petites Planètes',
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
          id: 34,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3411352510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/love-and-peace',
          a_string: 'Love and Peace by Girma Yifrashewa',
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
          id: 35,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2650405408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ukandanz.bandcamp.com/album/lantchi-biy-end-y-rusalem',
          a_string: 'Lantchi Biyé / Endè Yèrusalem by ukandanz',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4271251597/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://korruptflozferti.bandcamp.com/album/ozferti-addis-aboumbap',
          a_string: 'OZFERTI - Addis Aboumbap by OZFERTI',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4080868344/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nicolasbachet.bandcamp.com/album/la-machine',
          a_string: 'La Machine by Georges',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 2, 13, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2324241850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theex.bandcamp.com/album/moa-anbessa',
          a_string: 'Moa Anbessa by Getatchew Mekuria &amp; The Ex',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=53661427/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theex.bandcamp.com/album/yanbessaw-tezeta',
          a_string: 'Y&#39;Anbessaw Tezeta by Getatchew Mekuria &amp; The Ex &amp; Friends',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=176442819/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/hailu-mergia-his-classical-instrument-shemonmuanaye',
          a_string: 'Hailu Mergia &amp; His Classical Instrument: Shemonmuanaye by Hailu Mergia',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4183200316/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dur-durband.bandcamp.com/album/volume-5',
          a_string: 'Volume 5 by Dur-Dur Band',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 2, 13, 24, 26 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=352960671/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://atakak.bandcamp.com/album/obaa-sima',
          a_string: 'Obaa Sima by Ata Kak',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3288639573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundwayrecords.bandcamp.com/album/doing-it-in-lagos',
          a_string: 'Doing It In Lagos by Various Artists',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3724293024/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamonyeabor.bandcamp.com/album/world-psychedelic-classics-5-who-is-william-onyeabor',
          a_string: 'World Psychedelic Classics 5: Who is William Onyeabor? by William Onyeabor',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 3, 14, 25, 27 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1173588631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamonyeabor.bandcamp.com/album/atomic-bomb',
          a_string: 'Atomic Bomb by William Onyeabor',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 3, 14, 25, 27 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2615103004/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ebotaylor.bandcamp.com/album/my-love-and-music',
          a_string: 'My Love And Music by Ebo Taylor',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 3, 14, 25, 27 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=312515085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://patthomasstrut.bandcamp.com/album/pat-thomas-kwashibu-area-band',
          a_string: 'Pat Thomas &amp; Kwashibu Area Band by Pat Thomas &amp; Kwashibu Area Band',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 3, 14, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1448801674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/congolese-funk-afrobeat-psychedelic-rumba-1969-1978',
          a_string: 'Congolese Funk, Afrobeat &amp; Psychedelic Rumba 1969-1978 by Verckys et l´Orchestre Vévé',
          rule: {
            "monday": [ 3, 14, 25, 27 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1850315784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trengarecords.bandcamp.com/album/survivor',
          a_string: 'Survivor by KINSHASA',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3589615262/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://generalrestinpeace.bandcamp.com/album/general-rest-in-peace',
          a_string: 'General Rest In Peace by General Rest In Peace',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2862333556/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billlaswell.bandcamp.com/album/baptism-of-solitude',
          a_string: 'Baptism of Solitude by Paul Bowles',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 4, 15, 26, 28 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2785465227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackjesusexperience.bandcamp.com/album/cradle-of-humanity',
          a_string: 'Cradle Of Humanity by Mulatu Astatke and Black Jesus Experience',
          rule: {
            "monday": [ 8, 19, 30, 2 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 4, 15, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2264294519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/nihiloxica',
          a_string: 'Nihiloxica by Nihiloxica',
          rule: {
            "monday": [ 4, 15, 26, 28 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3065842028/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/boutiq-electroniq',
          a_string: 'Boutiq Electroniq by Disco Vumbi',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 4, 15, 26, 28 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=561865359/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thedwarfsofeastagouza.bandcamp.com/album/bes',
          a_string: 'Bes by The Dwarfs of East Agouza',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 4, 15, 26, 28 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391212862/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nadahelshazly.bandcamp.com/album/ahwar',
          a_string: 'Ahwar by Nadah El Shazly',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=650672193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://salahragab.bandcamp.com/album/egyptian-jazz',
          a_string: 'Egyptian Jazz by Salah Ragab and The Cairo Jazz Band',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4255676975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://radats.bandcamp.com/album/are-you-fine',
          a_string: 'Are You Fine? by The Radats',
          rule: {
            "monday": [ 5, 16, 27, 29 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2125753369/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sorcerers.bandcamp.com/album/the-sorcerers',
          a_string: 'The Sorcerers by The Sorcerers',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 5, 16, 27, 29 ],
            "wednesday": [ 9, 20, 1, 3 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=551674705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mulatuastatke.bandcamp.com/album/inspiration-information-3',
          a_string: 'Inspiration Information 3 by Mulatu Astatke &amp; The Heliocentrics',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 5, 16, 27, 29 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 6, 17, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=631756506/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://delesosimi.bandcamp.com/album/you-no-fit-touch-am',
          a_string: 'You No Fit Touch Am by Dele Sosimi',
          rule: {
            "monday": [ 6, 17, 28, 30 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 6, 17, 28, 30 ],
            "thursday": [ 5, 16, 27, 29 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425242751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/amara-toure-1973-1980',
          a_string: 'Amara Touré 1973-1980 by Amara Touré',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 6, 17, 28, 30 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 6, 17, 28, 30 ],
            "saturday": [ 5, 16, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=113320682/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://radiocobiana.org/album/music-of-guinea-bissau',
          a_string: 'Music of Guinea-Bissau by cobiana.org',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2588959421/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://demonspawnblackcauldron.bandcamp.com/album/deep-cave',
          a_string: 'Deep Cave by DemonSpawnBlackCauldron',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1978678839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://demonspawnblackcauldron.bandcamp.com/album/ancient-spell',
          a_string: 'Ancient Spell by DemonSpawnBlackCauldron',
          rule: {
            "monday": [ 8, 19, 30, 2 ],
            "tuesday": [ 7, 18, 29, 1 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=116760391/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shellachead.bandcamp.com/album/the-lost-45s-of-sudan-shellachead-annual-2015',
          a_string: 'The Lost 45s of Sudan (ShellacHead Annual 2015) by ShellacHead',
          rule: {
            "monday": [ 9, 20, 1, 5 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 7, 18, 29, 1 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4244495855/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lukaproductions.bandcamp.com/album/fasokan',
          a_string: 'Fasokan by Luka Productions',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 5 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 7, 18, 29, 1 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3800859858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sahelsounds.bandcamp.com/album/music-from-saharan-cellphones',
          a_string: 'Music from Saharan Cellphones by sahelsounds',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 5 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 7, 18, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1860561171/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matasunarecords.bandcamp.com/album/liberated-thoughts',
          a_string: 'Liberated Thoughts by Dem Juju Poets',
          rule: {
            "monday": [ 7, 18, 29, 1 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 5 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425963612/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yemialade.bandcamp.com/album/black-magic',
          a_string: 'Black Magic by Yemi Alade',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3674292384/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://talnational.bandcamp.com/album/zoy-zoy',
          a_string: 'Zoy Zoy by Tal National',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2636845978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocafloja.bandcamp.com/album/cumb',
          a_string: 'Cumbé by Bocafloja',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 6 ],
            "wednesday": [ 9, 20, 1, 3 ],
            "thursday": [ 8, 19, 30, 2 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=663657428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anbessaorchestra.bandcamp.com/album/ep',
          a_string: 'EP by Anbessa Orchestra',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 6 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 8, 19, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1734701675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackjesusexperience.bandcamp.com/album/migration',
          a_string: 'Migration by Black Jesus Experience',
          rule: {
            "monday": [ 8, 19, 30, 2 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 6 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4001451639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://terriehesselsterprecords.bandcamp.com/album/birabiro',
          a_string: 'Birabiro by Fendika',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 8, 19, 30, 2 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=446475182/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonyallenafrica70.bandcamp.com/album/afrodiscobeat-disco-afro-reedit',
          a_string: 'AFRODISCOBEAT DISCO AFRO REEDIT by Tony Allen &amp; Africa 70',
          rule: {
            "monday": [ 10, 21, 2, 6 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 8, 19, 30, 2 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2605573170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://strut.bandcamp.com/album/black-times-2',
          a_string: 'Black Times by Seun Kuti &amp; Egypt 80',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=367449847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://airafriquerecords.bandcamp.com/album/its-a-worldwide-thing',
          a_string: 'It&#39;s A Worldwide Thing by Air Afrique Records Presents',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2495786626/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonovancooper.bandcamp.com/album/suite-abyssinia',
          a_string: 'Suite Abyssinia by Jonovan Cooper',
          rule: {
            "monday": [ 9, 20, 1, 3 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 7 ],
            "saturday": [ 10, 21, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=207919215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hailumergia.bandcamp.com/album/lala-belu',
          a_string: 'Lala Belu by Hailu Mergia',
          rule: {
            "monday": [ 10, 21, 2, 4 ],
            "tuesday": [ 9, 20, 1, 3 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=492184070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiocali.bandcamp.com/album/ethio-cali-live-at-the-blue-whale',
          a_string: 'ETHIO CALI - LIVE AT THE BLUE WHALE by ETHIO CALI',
          rule: {
            "monday": [ 11, 22, 3, 7 ],
            "tuesday": [ 10, 21, 2, 4 ],
            "wednesday": [ 9, 20, 1, 3 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=187392738/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pasteurlappe.bandcamp.com/album/we-the-people',
          a_string: 'We, The People by Pasteur Lappe',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 7 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 9, 20, 1, 3 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3298491083/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://preschmedia.bandcamp.com/album/aktion-celebration-lp-cd-1977-2017',
          a_string: 'AKTION - Celebration LP/CD (1977) 2017 by Aktion',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 7 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 9, 20, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2776328381/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lesfillesdeillighadad.bandcamp.com/album/les-filles-de-illighadad',
          a_string: 'Les Filles de Illighadad by Les Filles de Illighadad',
          rule: {
            "monday": [ 10, 21, 2, 4 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2034543457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://triodakali-kronosquartet.bandcamp.com/album/ladilikan',
          a_string: 'Ladilikan by Trio Da Kali and Kronos Quartet',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 10, 21, 2, 4 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2571275524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/africa-airways-four-disco-funk-touchdown-1976-1983',
          a_string: 'Africa Airways Four (Disco Funk Touchdown 1976 - 1983) by Various Artists',
          rule: {
            "monday": [ 12, 23, 4, 8 ],
            "tuesday": [ 11, 22, 3, 5 ],
            "wednesday": [ 10, 21, 2, 4 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1625314783/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ekambibrillant.bandcamp.com/album/african-funk-experimentals-1975-1982',
          a_string: 'African Funk Experimentals (1975-1982) by Ekambi Brillant',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 8 ],
            "wednesday": [ 11, 22, 3, 5 ],
            "thursday": [ 10, 21, 2, 4 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=865898643/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kinnara-desila--afrovisionary-creations.bandcamp.com/album/afronoise',
          a_string: 'AFRONOISE by 緊那羅：DESI LA     (formerly la  bruha desi la)',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 8 ],
            "thursday": [ 11, 22, 3, 5 ],
            "saturday": [ 10, 21, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4253929906/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://markbarrott.bandcamp.com/album/ifeel-060-mark-barrott-music-for-presence',
          a_string: 'IFEEL 060: Mark Barrott - Music For Presence by Mark Barrott',
          rule: {
            "monday": [ 10, 21, 2, 4 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 8 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3804425697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hobotruffles.bandcamp.com/album/ode-to-ghana-2',
          a_string: 'Ode To Ghana by Various Artists',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 10, 21, 2, 4 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'ttps://bandcamp.com/EmbeddedPlayer/album=2997763874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://awapoulo.bandcamp.com/album/poulo-warali',
          a_string: 'Poulo Warali by Awa Poulo',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 6 ],
            "wednesday": [ 11, 22, 3, 5 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3276720701/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skkakraba.bandcamp.com/album/songs-of-paapieye',
          a_string: 'Songs of Paapieye by SK Kakraba',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 6 ],
            "thursday": [ 11, 22, 3, 5 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1152424761/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djkatapila.bandcamp.com/album/trotro',
          a_string: 'Trotro by DJ Katapila',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 9 ],
            "thursday": [ 12, 23, 4, 6 ],
            "saturday": [ 11, 22, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4159491463/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sufyvn.bandcamp.com/album/ascension-ep',
          a_string: 'Ascension EP by Sufyvn',
          rule: {
            "monday": [ 11, 22, 3, 5 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 9 ],
            "saturday": [ 12, 23, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4257423428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sufyvn.bandcamp.com/album/pseudarhythm-vol-2',
          a_string: 'Pseudarhythm, Vol. 2 by Sufyvn',
          rule: {
            "monday": [ 12, 23, 4, 6 ],
            "tuesday": [ 11, 22, 3, 5 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1992463230/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sufyvn.bandcamp.com/album/m-e-r-o-e',
          a_string: 'M E R O E by Sufyvn',
          rule: {
            "monday": [ 13, 24, 5, 9 ],
            "tuesday": [ 12, 23, 4, 6 ],
            "wednesday": [ 11, 22, 3, 5 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3174009808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joekingkologbo.bandcamp.com/album/sugar-daddy',
          a_string: 'Sugar Daddy by Joe King Kologbo &amp; The High Grace',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 9 ],
            "wednesday": [ 12, 23, 4, 6 ],
            "thursday": [ 11, 22, 3, 5 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1426588846/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundwayrecords.bandcamp.com/album/nigeria-rock-special-psychedelic-afro-rock-jazz-funk-in-1970s-nigeria',
          a_string: 'Nigeria Rock Special: Psychedelic Afro-Rock &amp; Jazz Funk in 1970s Nigeria by Various Artists',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 7 ],
            "saturday": [ 12, 23, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=642050011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://antibalas.bandcamp.com/album/where-the-gods-are-in-peace',
          a_string: 'Where the Gods are in Peace by Antibalas',
          rule: {
            "monday": [ 12, 23, 4, 6 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=41582321/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olvidorecords.bandcamp.com/album/furaha-wenye-gita',
          a_string: 'Furaha Wenye Gita by George Mukabi',
          rule: {
            "monday": [ 13, 24, 5, 7 ],
            "tuesday": [ 12, 23, 4, 6 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2087877827/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olvidorecords.bandcamp.com/album/usiende-ukalale-omutibo-from-rural-kenya',
          a_string: 'Usiende Ukalale: Omutibo From Rural Kenya by Various Artists',
          rule: {
            "monday": [ 14, 25, 6, 10 ],
            "tuesday": [ 13, 24, 5, 7 ],
            "wednesday": [ 12, 23, 4, 6 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2389863539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://olvidorecords.bandcamp.com/album/country-music-of-western-kenya-45s-from-the-archive-of-shem-tupe',
          a_string: 'Country Music of Western Kenya: 45s from the archive of Shem Tupe by Shem Tupe, Justo Osala, Enos Okola',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 10 ],
            "wednesday": [ 13, 24, 5, 7 ],
            "thursday": [ 12, 23, 4, 6 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1504707769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djkatapila.bandcamp.com/album/aroo-ep',
          a_string: 'Aroo EP by DJ Katapila',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 10 ],
            "thursday": [ 13, 24, 5, 7 ],
            "saturday": [ 12, 23, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4095482276/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djkatapila.bandcamp.com/album/trotro-12',
          a_string: 'Trotro 12&quot; by DJ Katapila',
          rule: {
            "monday": [ 12, 23, 4, 6 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 10 ],
            "saturday": [ 13, 24, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1966281918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://professorrhythm.bandcamp.com/album/bafana-bafana',
          a_string: 'Bafana Bafana by Professor Rhythm',
          rule: {
            "monday": [ 14, 25, 6, 8 ],
            "tuesday": [ 13, 24, 5, 7 ],
            "wednesday": [ 17, 28, 9, 13 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784148788/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://basabasa.bandcamp.com/album/homowo',
          a_string: 'Homowo by Basa Basa',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 8 ],
            "wednesday": [ 13, 24, 5, 7 ],
            "thursday": [ 17, 28, 9, 13 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=246458167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sahelsounds.bandcamp.com/album/music-from-saharan-cellphones-volume-2',
          a_string: 'Music from Saharan Cellphones: Volume 2 by sahelsounds',
          rule: {
            "monday": [ 16, 27, 8, 12 ],
            "tuesday": [ 15, 26, 7, 11 ],
            "wednesday": [ 14, 25, 6, 8 ],
            "thursday": [ 13, 24, 5, 7 ],
            "saturday": [ 17, 28, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1882782082/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammansani.bandcamp.com/album/unreleased-tapes-1981-1984',
          a_string: 'Unreleased Tapes 1981-1984 by Mamman Sani',
          rule: {
            "monday": [ 17, 28, 9, 13 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 11 ],
            "thursday": [ 14, 25, 6, 8 ],
            "saturday": [ 13, 24, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3845062399/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://strut.bandcamp.com/album/last-band-standing',
          a_string: 'Last Band Standing by Orchestre Les Mangelepa',
          rule: {
            "monday": [ 13, 24, 5, 7 ],
            "tuesday": [ 17, 28, 9, 13 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 11 ],
            "saturday": [ 14, 25, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2624113698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/gulu-city-anthems',
          a_string: 'Gulu City Anthems by Otim Alpha',
          rule: {
            "monday": [ 14, 25, 6, 8 ],
            "tuesday": [ 13, 24, 5, 7 ],
            "wednesday": [ 17, 28, 9, 13 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2306200836/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nyegenyegetapes.bandcamp.com/album/afromutations',
          a_string: 'Afromutations by Riddlore',
          rule: {
            "monday": [ 15, 26, 7, 11 ],
            "tuesday": [ 14, 25, 6, 8 ],
            "wednesday": [ 13, 24, 5, 7 ],
            "thursday": [ 17, 28, 9, 13 ],
            "saturday": [ 16, 27, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3519940361/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://livyekemezie.bandcamp.com/album/friday-night',
          a_string: 'Friday Night by Livy Ekemezie',
          rule: {
            "monday": [ 17, 28, 9, 13 ],
            "tuesday": [ 16, 27, 8, 12 ],
            "wednesday": [ 15, 26, 7, 9 ],
            "thursday": [ 14, 25, 6, 8 ],
            "saturday": [ 18, 29, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3176947686/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odionlivingstone.bandcamp.com/album/at-last',
          a_string: 'At Last by Grotto',
          rule: {
            "monday": [ 18, 29, 10, 14 ],
            "tuesday": [ 17, 28, 9, 13 ],
            "wednesday": [ 16, 27, 8, 12 ],
            "thursday": [ 15, 26, 7, 9 ],
            "saturday": [ 14, 25, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Ethiopian & Pan-African',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2471447217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odionlivingstone.bandcamp.com/album/mind-twister',
          a_string: 'Mind Twister by Apples',
          rule: {
            "monday": [ 14, 25, 6, 8 ],
            "tuesday": [ 18, 29, 10, 14 ],
            "wednesday": [ 17, 28, 9, 13 ],
            "thursday": [ 16, 27, 8, 12 ],
            "saturday": [ 15, 26, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_musics_id_seq', (SELECT MAX(id) FROM november_musics));");
    });
};
