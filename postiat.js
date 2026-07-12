define(
    [
        'pipAPI',
        'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'
    ],
    function(APIConstructor, iatExtension) {

        let API = new APIConstructor();
        let global = API.getGlobal();

        return iatExtension({

            category1: {
                name: 'Insects',

                title: {
                    media: {word: 'Insects'},
                    css: {
                        color: '#31940F',
                        'font-size': '1.8em'
                    },
                    height: 4
                },

                stimulusMedia: [
                    {word: 'Bee'},
                    {word: 'Wasp'},
                    {word: 'Mosquito'},
                    {word: 'Butterfly'},
                    {word: 'Beetle'},
                    {word: 'Ant'}
                ],

                stimulusCss: {
                    color: '#31940F',
                    'font-size': '2.3em'
                }
            },

            category2: {
                name: 'Mammals',

                title: {
                    media: {word: 'Mammals'},
                    css: {
                        color: '#31940F',
                        'font-size': '1.8em'
                    },
                    height: 4
                },

                stimulusMedia: [
                    {word: 'Dog'},
                    {word: 'Cat'},
                    {word: 'Horse'},
                    {word: 'Rabbit'},
                    {word: 'Deer'},
                    {word: 'Dolphin'}
                ],

                stimulusCss: {
                    color: '#31940F',
                    'font-size': '2.3em'
                }
            },

            attribute1: {
                name: 'Unpleasant',

                title: {
                    media: {word: 'Unpleasant'},
                    css: {
                        color: '#0000FF',
                        'font-size': '1.8em'
                    },
                    height: 4
                },

                stimulusMedia: [
                    {word: global.negWords[0]},
                    {word: global.negWords[1]},
                    {word: global.negWords[2]},
                    {word: global.negWords[3]},
                    {word: global.negWords[4]},
                    {word: global.negWords[5]},
                    {word: global.negWords[6]},
                    {word: global.negWords[7]}
                ],

                stimulusCss: {
                    color: '#0000FF',
                    'font-size': '2.3em'
                }
            },

            attribute2: {
                name: 'Pleasant',

                title: {
                    media: {word: 'Pleasant'},
                    css: {
                        color: '#0000FF',
                        'font-size': '1.8em'
                    },
                    height: 4
                },

                stimulusMedia: [
                    {word: global.posWords[0]},
                    {word: global.posWords[1]},
                    {word: global.posWords[2]},
                    {word: global.posWords[3]},
                    {word: global.posWords[4]},
                    {word: global.posWords[5]},
                    {word: global.posWords[6]},
                    {word: global.posWords[7]}
                ],

                stimulusCss: {
                    color: '#0000FF',
                    'font-size': '2.3em'
                }
            },

            isTouch: global.$isTouch
        });
    }
);
