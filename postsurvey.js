define(['questAPI'], function(Quest) {

    const API = new Quest();

    API.addPagesSet('surveyPage', {
        header: 'Final Questions',
        progressBar: '<%= pagesMeta.number %> of <%= pagesMeta.outOf %>',
        submitText: 'Continue',
        prev: false
    });

    API.addQuestionsSet('requiredSelect', {
        type: 'selectOne',
        required: true
    });

    API.addQuestionsSet('agreementItem', {
        type: 'selectOne',
        required: true,
        answers: [
            {text: 'Strongly disagree', value: 1},
            {text: 'Disagree', value: 2},
            {text: 'Somewhat disagree', value: 3},
            {text: 'Neither agree nor disagree', value: 4},
            {text: 'Somewhat agree', value: 5},
            {text: 'Agree', value: 6},
            {text: 'Strongly agree', value: 7}
        ]
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
            header: 'Video Experience',
            questions: [
                {
                    inherit: 'requiredSelect',
                    name: 'video_played_completely',
                    stem: 'Did the video play completely from beginning to end?',
                    answers: [
                        {text: 'Yes', value: 1},
                        {text: 'No', value: 0},
                        {text: 'I am not sure', value: 9}
                    ]
                },

                {
                    inherit: 'requiredSelect',
                    name: 'video_attention',
                    stem: 'How much attention did you pay to the video?',
                    answers: [
                        {text: 'None', value: 1},
                        {text: 'A little', value: 2},
                        {text: 'A moderate amount', value: 3},
                        {text: 'A lot', value: 4},
                        {text: 'Complete attention', value: 5}
                    ]
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Video Experience',
            questions: [
                {
                    inherit: 'agreementItem',
                    name: 'video_insect_focused',
                    stem: 'The video was primarily focused on insects.'
                },

                {
                    inherit: 'agreementItem',
                    name: 'video_informative',
                    stem: 'The video was informative.'
                },

                {
                    inherit: 'agreementItem',
                    name: 'video_interesting',
                    stem: 'The video was interesting.'
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Current Attitudes',
            questions: [
                {
                    inherit: 'requiredSelect',
                    name: 'post_insect_attitude',
                    stem: 'Overall, how negative or positive are your feelings toward insects?',
                    answers: [
                        {text: 'Extremely negative', value: 1},
                        {text: 'Moderately negative', value: 2},
                        {text: 'Slightly negative', value: 3},
                        {text: 'Neither negative nor positive', value: 4},
                        {text: 'Slightly positive', value: 5},
                        {text: 'Moderately positive', value: 6},
                        {text: 'Extremely positive', value: 7}
                    ]
                },

                {
                    inherit: 'requiredSelect',
                    name: 'post_mammal_attitude',
                    stem: 'Overall, how negative or positive are your feelings toward mammals?',
                    answers: [
                        {text: 'Extremely negative', value: 1},
                        {text: 'Moderately negative', value: 2},
                        {text: 'Slightly negative', value: 3},
                        {text: 'Neither negative nor positive', value: 4},
                        {text: 'Slightly positive', value: 5},
                        {text: 'Moderately positive', value: 6},
                        {text: 'Extremely positive', value: 7}
                    ]
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Current Attitudes',
            questions: [
                {
                    inherit: 'agreementItem',
                    name: 'insect_ecological_importance',
                    stem: 'Insects are important to healthy ecosystems.'
                },

                {
                    inherit: 'agreementItem',
                    name: 'insect_conservation_support',
                    stem: 'Protecting insect populations is important.'
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Current Reactions to Insects',
            questions: [
                {
                    inherit: 'fearItem',
                    name: 'post_insect_fear_1',
                    stem: 'I feel nervous when an insect is close to me.'
                },

                {
                    inherit: 'fearItem',
                    name: 'post_insect_fear_2',
                    stem: 'I avoid places where I expect to encounter insects.'
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Current Reactions to Insects',
            questions: [
                {
                    inherit: 'fearItem',
                    name: 'post_insect_fear_3',
                    stem: 'I would feel frightened if an insect landed on me.'
                },

                {
                    inherit: 'fearItem',
                    name: 'post_insect_fear_4',
                    stem: 'Seeing an insect inside a building makes me uncomfortable.'
                }
            ]
        },

        {
            inherit: 'surveyPage',
            header: 'Current Reactions to Insects',
            questions: [
                {
                    inherit: 'fearItem',
                    name: 'post_insect_fear_5',
                    stem: 'I worry about being bitten or stung when insects are nearby.'
                },

                {
                    inherit: 'fearItem',
                    name: 'post_insect_fear_6',
                    stem: 'I try to move away when I notice an insect near me.'
                }
            ]
        }

    ]);

    return API.script;
});
