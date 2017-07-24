'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blocktypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('blocktypes').insert([
        {
          id: 1,
          user_id: 1,
          type: 'sleep',
          keys: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          type: 'exercise',
          keys: {
            "keys": "['exertionString']",
            "exertionStringValues": "['aerobic', 'free weights', 'lower', 'other', 'upper', 'walking']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          type: 'administrative',
          keys: {
            "keys": "['adminType']",
            "adminTypeValues": "['bills', 'chores', 'emails', 'errands', 'planning']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          type: 'coding',
          keys: {
            "keys": "['project']",
            "projectValues": "['educational', 'personal', 'professional']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          type: 'job search',
          keys: {
            "keys": "['resources']",
            "resourcesValues": "['emails', 'linkedIn', 'indeed', 'zipRecruiter', 'talent', 'stackOverflow']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          type: 'job',
          keys: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          type: 'education',
          keys: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          type: 'meal',
          keys: {
            "keys": "['mealType']",
            "mealTypeValues": "['breakfast', 'brunch', 'lunch', 'dinner', 'snack', 'social']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          type: 'break',
          keys: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          type: 'reading',
          keys: {
            "keys": "['readingType']",
            "readingTypeValues": "['reading list', 'tech reading', 'blogs/periodicals']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          type: 'podcast',
          keys: {
            "keys": "['podcastType', 'podcastURL']",
            "podcastTypeValues": "['tech', 'music', 'books', 'beer', 'politics']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          type: 'interview',
          keys: {
            "keys": "['companyName', 'onsite', 'companyURL']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          type: 'appointment',
          keys: {
            "keys": "['appointmentType']",
            "appointmentTypeValues": "['dentist', 'doctor', 'haircut', 'physical therapy', 'legal']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          type: 'meeting',
          keys: {
            "keys": "['attendees', 'objective']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          type: 'onsite event',
          keys: {
            "keys": "['eventType']",
            "eventTypeValues": "['film', 'concert', 'sporting event', 'theater', 'meetup', 'party']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          type: 'offsite event',
          keys: {
            "keys": "['eventType', 'streamingURL']",
            "eventTypeValues": "['film', 'series', 'live stream', 'sporting event', 'online attendance']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          type: 'creative',
          keys: {
            "keys": "['creativeType']",
            "creativeTypeValues": "['writing', 'composing', 'blogging']"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('blocktypes_id_seq', (SELECT MAX(id) FROM blocktypes));");
    });
};
