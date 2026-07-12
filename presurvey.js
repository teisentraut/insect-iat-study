define(['questAPI'], function(Quest) {

    const API = new Quest();

    API.addPagesSet('surveyPage', {
        header: 'Background Questions',
        progressBar: '<%= pagesMeta.number %> of <%= pagesMeta.outOf %>',
        submitText: 'Continue',
        prev: false
    });

    API.addQuestionsSet('requiredSelect', {
        type: 'selectOne',
        required: true
    });

    API.addQuestionsSet('fearItem', {
        type: 'selectOne',
        required: true,
        answers: [
            {text: 'Not at all true of me', value: 1},
            {text: 'Slightly true of me', value: 2},
            {text: 'Moderately true of me', value: 3},
            {text: 'Very true of me', value: 4},
            {text: 'Extremely true of me', value: 5}
        ]
    });

    API.addSequence([

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'age_group',
                stem: 'What is your age?',
                answers: [
                    {text: '18–24', value: '18_24'},
                    {text: '25–34', value: '25_34'},
                    {text: '35–44', value: '35_44'},
                    {text: '45–54', value: '45_54'},
                    {text: '55–64', value: '55_64'},
                    {text: '65 or older', value: '65_plus'},
                    {text: 'Prefer not to answer', value: 'no_answer'}
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'education_level',
                stem: 'What is the highest level of education you have completed?',
                answers: [
                    {
                        text: 'Less than a high school diploma',
                        value: 'less_than_high_school'
                    },
                    {
                        text: 'High school diploma or GED',
                        value: 'high_school'
                    },
                    {
                        text: 'Some college, but no degree',
                        value: 'some_college'
                    },
                    {
                        text: 'Associate degree',
                        value: 'associate'
                    },
                    {
                        text: "Bachelor's degree",
                        value: 'bachelors'
                    },
                    {
                        text: "Master's degree",
                        value: 'masters'
                    },
                    {
                        text: 'Doctoral or professional degree',
                        value: 'doctoral_professional'
                    },
                    {
                        text: 'Prefer not to answer',
                        value: 'no_answer'
                    }
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'location_region',
                stem: 'In which geographic region do you currently live?',
                answers: [
                    {
                        text: 'Northeastern United States',
                        value: 'us_northeast'
                    },
                    {
                        text: 'Midwestern United States',
                        value: 'us_midwest'
                    },
                    {
                        text: 'Southern United States',
                        value: 'us_south'
                    },
                    {
                        text: 'Western United States',
                        value: 'us_west'
                    },
                    {
                        text: 'U.S. territory',
                        value: 'us_territory'
                    },
                    {
                        text: 'Outside the United States',
                        value: 'outside_us'
                    },
                    {
                        text: 'Prefer not to answer',
                        value: 'no_answer'
                    }
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'biology_education',
                stem: 'How much formal education or training have you received in biology?',
                answers: [
                    {
                        text: 'No formal biology education or training',
                        value: 0
                    },
                    {
                        text: 'High school biology only',
                        value: 1
                    },
                    {
                        text: 'One college-level biology course',
                        value: 2
                    },
                    {
                        text: 'Several college-level biology courses',
                        value: 3
                    },
                    {
                        text: 'A degree, certification, or extensive training in biology',
                        value: 4
                    },
                    {
                        text: 'Professional experience in a biology-related field',
                        value: 5
                    },
                    {
                        text: 'Prefer not to answer',
                        value: 9
                    }
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'insect_education',
                stem: 'How much formal education or training have you received specifically about insects?',
                answers: [
                    {
                        text: 'No formal insect education or training',
                        value: 0
                    },
                    {
                        text: 'Brief insect content in a class or training',
                        value: 1
                    },
                    {
                        text: 'One course involving insects',
                        value: 2
                    },
                    {
                        text: 'Several courses involving insects',
                        value: 3
                    },
                    {
                        text: 'Extensive training or research involving insects',
                        value: 4
                    },
                    {
                        text: 'Professional experience involving insects',
                        value: 5
                    },
                    {
                        text: 'Prefer not to answer',
                        value: 9
                    }
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'occupation',
                stem: 'Which category best describes your current primary occupation?',
                answers: [
                    {
                        text: 'Student',
                        value: 'student'
                    },
                    {
                        text: 'Education or research',
                        value: 'education_research'
                    },
                    {
                        text: 'Agriculture, natural resources, or environmental work',
                        value: 'agriculture_environment'
                    },
                    {
                        text: 'Healthcare',
                        value: 'healthcare'
                    },
                    {
                        text: 'Business, administration, or office work',
                        value: 'business_office'
                    },
                    {
                        text: 'Service, hospitality, or retail',
                        value: 'service_retail'
                    },
                    {
                        text: 'Skilled trade, manufacturing, or construction',
                        value: 'trade_manufacturing'
                    },
                    {
                        text: 'Not currently employed',
                        value: 'not_employed'
                    },
                    {
                        text: 'Retired',
                        value: 'retired'
                    },
                    {
                        text: 'Other',
                        value: 'other'
                    },
                    {
                        text: 'Prefer not to answer',
                        value: 'no_answer'
                    }
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'outdoor_frequency',
                stem: 'How often do you spend time outdoors for work or recreation?',
                answers: [
                    {
                        text: 'Never or almost never',
                        value: 1
                    },
                    {
                        text: 'Less than once a month',
                        value: 2
                    },
                    {
                        text: 'Several times a month',
                        value: 3
                    },
                    {
                        text: 'Several times a week',
                        value: 4
                    },
                    {
                        text: 'Daily or almost daily',
                        value: 5
                    }
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            questions: [{
                inherit: 'requiredSelect',
                name: 'sting_bite_experience',
                stem: 'Have you ever had a memorable negative experience involving an insect bite or sting?',
                answers: [
                    {
                        text: 'No',
                        value: 0
                    },
                    {
                        text: 'Yes, but it was minor',
                        value: 1
                    },
                    {
                        text: 'Yes, and it was moderately serious',
                        value: 2
                    },
                    {
                        text: 'Yes, and it was very serious',
                        value: 3
                    },
                    {
                        text: 'Prefer not to answer',
                        value: 9
                    }
                ]
            }]
        },

        {
            inherit: 'surveyPage',
            header: 'Reactions to Insects',
            questions: [
                {
                    inherit: 'fearItem',
                    name: 'insect_fear_1',
                    stem: 'I feel nervous when an insect is close to me.'
                },
                {
                    inherit: 'fearItem',
                    name: 'insect_fear_2',
                    stem: 'I avoid places where I expect to encounter insects.'
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Reactions to Insects',
            questions: [
                {
                    inherit: 'fearItem',
                    name: 'insect_fear_3',
                    stem: 'I would feel frightened if an insect landed on me.'
                },
                {
                    inherit: 'fearItem',
                    name: 'insect_fear_4',
                    stem: 'Seeing an insect inside a building makes me uncomfortable.'
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Reactions to Insects',
            questions: [
                {
                    inherit: 'fearItem',
                    name: 'insect_fear_5',
                    stem: 'I worry about being bitten or stung when insects are nearby.'
                },
                {
                    inherit: 'fearItem',
                    name: 'insect_fear_6',
                    stem: 'I try to move away when I notice an insect near me.'
                }
            ]
        }

    ]);

    return API.script;
});
