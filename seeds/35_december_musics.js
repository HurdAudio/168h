'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3057480238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hhaabb.bandcamp.com/album/hab',
          a_string: 'HAB by HAB',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3742352136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hermetopascoal.bandcamp.com/album/viajando-com-o-som-the-lost-76-vice-versa-studio-session',
          a_string: 'Viajando Com O Som (The Lost &#39;76 Vice-Versa Studio Session) by Hermeto Pascoal',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 3, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3080218267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://selomundomelhor.bandcamp.com/album/projeto-cru',
          a_string: 'Projeto Cru by Projeto Cru',
          rule: {
            "monday": [ 3, 9, 15, 21 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1775467947/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/conta',
          a_string: '&quot;conta&quot; by M.TAKARA',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 3, 9, 15, 21 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2940843005/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://graxa.bandcamp.com/album/a-concorr-ncia-demais',
          a_string: 'A concorrência é demais! by Graxa',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 3, 9, 15, 21 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=535551876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ubiquitycompilations.bandcamp.com/album/brasil-do-brazil',
          a_string: 'Brasil do Brazil by Various Artists',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 3, 9, 15, 21 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384877798/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sinewave1.bandcamp.com/album/para-uso-recreativo',
          a_string: 'Para Uso Recreativo by Sick',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2370054641/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/tom-z',
          a_string: 'Tom Zé by Tom Ze',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2340267301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/va-the-sea',
          a_string: 'VA - The Sea by TBTCI',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 4, 10, 16, 22 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=808439901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/oquadro',
          a_string: 'OQuadro by OQuadro',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 4, 10, 16, 22 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1811681915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/piano-solos',
          a_string: 'Piano Solos by Guilherme Arantes',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 4, 10, 16, 22 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1742007145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/as-ganhadeiras-de-itapu',
          a_string: 'As Ganhadeiras de Itapuã by As Ganhadeiras de Itapuã',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 4, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2962010502/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomze.bandcamp.com/album/grande-liquida-o',
          a_string: 'Grande Liquidação by Tom Ze',
          rule: {
            "monday": [ 4, 10, 16, 22 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3738045895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vvaaschemarecords.bandcamp.com/album/freedom-jazz-dance',
          a_string: 'Freedom Jazz Dance by VVAA',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1526212277/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djcaptainplanet.bandcamp.com/album/esperanto-slang',
          a_string: 'Esperanto Slang by Captain Planet',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3108741675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/rain-music',
          a_string: '&quot;rain music&quot; by NATHAN BELL',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 5, 11, 17, 23 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=808439901/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coaxodosapo.bandcamp.com/album/oquadro',
          a_string: 'OQuadro by OQuadro',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 5, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3433381281/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anthonywilson.bandcamp.com/album/campo-belo',
          a_string: 'Campo Belo by Anthony Wilson',
          rule: {
            "monday": [ 5, 11, 17, 23 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3926834623/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/ibu-selva-ngo-bo-sontg-pa-ttr019',
          a_string: 'Ibu Selva - Ngo-bo Sontg-pa (TTR019) by Tropical Twista Records',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 5, 11, 17, 23 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=219486560/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/na-boca-dos-outros',
          a_string: '&quot;na boca dos outros&quot; by KIKO DINUCCI',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 5, 11, 17, 23 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=49193070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/m-takara-h-diaz-vs-leila',
          a_string: 'M.TAKARA &amp; H.DIAZ vs LEILA by DESMONTA',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 6, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1478386499/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://godsandpunks.bandcamp.com/album/into-the-dunes-of-doom',
          a_string: 'Into the Dunes of Doom by Gods &amp; Punks',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 6, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3177769465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://voodoohop.bandcamp.com/album/voodoohop-entropia-coletiva-i',
          a_string: 'Voodoohop: Entropia Coletiva I by voodoohop',
          rule: {
            "monday": [ 6, 12, 18, 24 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 6, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3859908011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblogthatcelebratesitself.bandcamp.com/album/highwire-days-the-psychedelic-furs-reverence',
          a_string: 'Highwire Days, The Psychedelic Furs´ Reverence by TBTCI',
          rule: {
            "monday": [ 6, 13, 19, 25 ],
            "tuesday": [ 6, 12, 18, 24 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3292168400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frentebolivarista.bandcamp.com/album/yeahman-transborda',
          a_string: 'YEAHMAN - Transborda by YEAHMAN',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 6, 13, 19, 25 ],
            "wednesday": [ 6, 12, 18, 24 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3395021422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chicodub.bandcamp.com/album/hy-brazil-vol-10-new-music-from-brazil-2016',
          a_string: 'Hy Brazil Vol 10: New Music From Brazil 2016 by Chico Dub',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 6, 13, 19, 25 ],
            "thursday": [ 6, 12, 18, 24 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=305968330/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lealmeida.bandcamp.com/album/paraleloplasmos',
          a_string: 'Paraleloplasmos by Lê Almeida',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 6, 13, 19, 25 ],
            "saturday": [ 6, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3665504977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayarecords.bandcamp.com/album/el-viejo-hombre-de-los-andes',
          a_string: 'El Viejo Hombre de los Andes by EVHA',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 7, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=324600694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frentebolivarista.bandcamp.com/album/el-b-ho-cumbias-de-oro',
          a_string: 'El Búho - Cumbias de Oro by Frente Edits III',
          rule: {
            "monday": [ 7, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1918340155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayarecords.bandcamp.com/album/marimba-del-pacifico',
          a_string: 'Marimba Del Pacifico by Rio Mira',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 7, 14, 20, 26 ],
            "wednesday": [ 7, 13, 19, 25 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1707231046/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tiredofpeople.bandcamp.com/album/we-can-get-along-zzz02',
          a_string: 'We Can Get Along [ZZZ02] by SonoTWS',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 7, 14, 20, 26 ],
            "thursday": [ 7, 13, 19, 25 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3601625332/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deafkidspunx.bandcamp.com/album/over-the-days-somewhat-damaged-ep',
          a_string: 'Over The Days... Somewhat Damaged EP by DEAFKIDS',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 7, 14, 20, 26 ],
            "saturday": [ 7, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=604321203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yantrayantra.bandcamp.com/album/drones-e-excurs-es-de-guitarras-rumo-ao-desconhecido',
          a_string: 'Drones e Excursões de Guitarras Rumo ao Desconhecido by YANTRA',
          rule: {
            "monday": [ 7, 13, 19, 25 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 7, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1050637797/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artolindsay.bandcamp.com/album/encyclopedia-of-arto-2',
          a_string: 'Encyclopedia Of Arto by Arto lindsay',
          rule: {
            "monday": [ 7, 14, 20, 26 ],
            "tuesday": [ 7, 13, 19, 25 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=974602156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fusca.bandcamp.com/album/fusca',
          a_string: 'Fusca by Fusca',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 8, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=964486644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomn.bandcamp.com/album/t-mn',
          a_string: 'TŌMN by Tōmn',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 8, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1157765245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonidotrpico.bandcamp.com/album/sonido-tr-pico-vol-i',
          a_string: 'Sonido Trópico Vol. I by Sonido Trópico',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 10, 16, 22, 28 ],
            "thursday": [ 8, 15, 21, 27 ],
            "saturday": [ 8, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1176199692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/kurup-maca-ba-ttr003',
          a_string: 'Kurup - Macaúba (TTR003) by Kurup',
          rule: {
            "monday": [ 8, 14, 20, 26 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 10, 16, 22, 28 ],
            "saturday": [ 8, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=598875439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tropicaltwistarecords.bandcamp.com/album/v-a-hystereof-nica-vol-1-ttr021',
          a_string: 'V/A - Hystereofônica Vol. 1 (TTR021) by Tropical Twista Records',
          rule: {
            "monday": [ 8, 15, 21, 27 ],
            "tuesday": [ 8, 14, 20, 26 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 10, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1581814353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/pessoas-n-o-2',
          a_string: 'pessoas não by HAB',
          rule: {
            "monday": [ 10, 16, 22, 28 ],
            "tuesday": [ 8, 15, 21, 27 ],
            "wednesday": [ 8, 14, 20, 26 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1162580739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/gua-pedra',
          a_string: 'água pedra by VALÉRIO',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 10, 16, 22, 28 ],
            "wednesday": [ 8, 15, 21, 27 ],
            "thursday": [ 8, 14, 20, 26 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1224343038/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/m-takara-3-1',
          a_string: 'M.TAKARA 3 + 1 by DESMONTA',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 9, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2759140048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rkzrecs.bandcamp.com/album/undergraduated-music',
          a_string: 'Undergraduated Music by Aquiles Guimarães',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 9, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1748905093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/split-10-hab-m-takara',
          a_string: 'split 10&quot; [hab​/​m​.​takara] by DESMONTA',
          rule: {
            "monday": [ 9, 16, 22, 28 ],
            "tuesday": [ 9, 15, 21, 27 ],
            "wednesday": [ 13, 19, 25, 31 ],
            "thursday": [ 12, 18, 24, 30 ],
            "saturday": [ 11, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=594839715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://desmonta.bandcamp.com/album/rec-loop',
          a_string: 'rec/loop by PSILOSAMPLES',
          rule: {
            "monday": [ 11, 17, 23, 29 ],
            "tuesday": [ 9, 16, 22, 28 ],
            "wednesday": [ 9, 15, 21, 27 ],
            "thursday": [ 13, 19, 25, 31 ],
            "saturday": [ 12, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4027940168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tigersmilkrecords.bandcamp.com/album/andina-huayno-carnaval-and-cumbia-the-sound-of-the-peruvian-andes-1968-1978-5',
          a_string: 'ANDINA: Huayno, Carnaval and Cumbia - The Sound of the Peruvian Andes 1968​-​1978 by Tigers Milk Records',
          rule: {
            "monday": [ 12, 18, 24, 30 ],
            "tuesday": [ 11, 17, 23, 29 ],
            "wednesday": [ 9, 16, 22, 28 ],
            "thursday": [ 9, 15, 21, 27 ],
            "saturday": [ 13, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=518360247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatitxdiscos.bandcamp.com/album/uno',
          a_string: 'UNO by Varios',
          rule: {
            "monday": [ 13, 19, 25, 31 ],
            "tuesday": [ 12, 18, 24, 30 ],
            "wednesday": [ 11, 17, 23, 29 ],
            "thursday": [ 9, 16, 22, 28 ],
            "saturday": [ 9, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'brazil and pan-south american',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=4248090408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuallimusic.com/album/birds-of-bliss',
          a_string: 'Birds of Bliss by Cualli',
          rule: {
            "monday": [ 9, 15, 21, 27 ],
            "tuesday": [ 13, 19, 25, 31 ],
            "wednesday": [ 12, 18, 24, 30 ],
            "thursday": [ 11, 17, 23, 29 ],
            "saturday": [ 9, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_musics_id_seq', (SELECT MAX(id) FROM december_musics));");
    });
};
