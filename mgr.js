define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


	//You can use the commented-out code to get parameters from the URL.
	//const queryString = window.location.search;
    //const urlParams = new URLSearchParams(queryString);
    //const pt = urlParams.get('pt');

	var API    = new Manager();
	//const subid = Date.now().toString(16)+Math.floor(Math.random()*10000).toString(16);
	init_data_pipe(API, 'BgBJQHJNGsbB',  {file_type:'csv'});	

    API.setName('mgr');
    API.addSettings('skip',true);

    //Randomly select which of two sets of category labels to use.
    let raceSet = API.shuffle(['a','b'])[0];
    let blackLabels = [];
    let whiteLabels = [];

    if (raceSet == 'a') {
        blackLabels.push('African Americans');
        whiteLabels.push('European Americans');
    } else {
        blackLabels.push('Black people');
        whiteLabels.push('White people');
    }

    API.addGlobal({
        raceiat:{},
        //YBYB: change when copying back to the correct folder
        baseURL: './images/',
        raceSet:raceSet,
        blackLabels:blackLabels,
        whiteLabels:whiteLabels,
        //Select randomly what attribute words to see. 
        //Based on Axt, Feng, & Bar-Anan (2021).
        posWords : API.shuffle([
            'Love', 'Cheer', 'Friend', 'Pleasure',
            'Adore', 'Cheerful', 'Friendship', 'Joyful', 
            'Smiling','Cherish', 'Excellent', 'Glad', 
            'Joyous', 'Spectacular', 'Appealing', 'Delight', 
            'Excitement', 'Laughing', 'Attractive','Delightful', 
            'Fabulous', 'Glorious', 'Pleasing', 'Beautiful', 
            'Fantastic', 'Happy', 'Lovely', 'Terrific', 
            'Celebrate', 'Enjoy', 'Magnificent', 'Triumph'
        ]), 
        negWords : API.shuffle([
            'Abuse', 'Grief', 'Poison', 'Sadness', 
            'Pain', 'Despise', 'Failure', 'Nasty', 
            'Angry', 'Detest', 'Horrible', 'Negative', 
            'Ugly', 'Dirty', 'Gross', 'Evil', 
            'Rotten','Annoy', 'Disaster', 'Horrific',  
            'Scorn', 'Awful', 'Disgust', 'Hate', 
            'Humiliate', 'Selfish', 'Tragic', 'Bothersome', 
            'Hatred', 'Hurtful', 'Sickening', 'Yucky'
        ])
    });

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Intro',
            header: 'Welcome'
        }],

consent: [{
    type: 'message',
    name: 'consent',
    templateUrl: 'consent.jst'
}],
		
presurvey: [{
    type: 'quest',
    name: 'presurvey',
    scriptUrl: 'presurvey.js'
}],
		
        preiat_instructions: [{
    type: 'message',
    name: 'preiat_instructions',
    templateUrl: 'preiat_instructions.jst',
    title: 'IAT Instructions',
    header: 'Insect–Mammal Implicit Association Test',
    buttonText: 'Start IAT'
}],

        explicits: [{
            type: 'quest',
            name: 'explicits',
            scriptUrl: 'explicits.js'
        }],

        preiat: [{
    type: 'time',
    name: 'preiat',
    scriptUrl: 'preiat.js'
}],


		
insect_video: [{
    type: 'message',
    name: 'insect_video',
    templateUrl: 'video.jst',

    data: {
        videoUrl: 'videos/insect-video.mp4'
    },

    load: function() {
        var video = document.getElementById('study-video');
        var proceed = document.getElementById('video-proceed');
        var errorMessage = document.getElementById('video-error');

        proceed.style.display = 'none';

        video.addEventListener('ended', function() {
            proceed.style.display = 'block';
        });

        video.addEventListener('error', function() {
            errorMessage.style.display = 'block';
        });
    }
}],

control_video: [{
    type: 'message',
    name: 'control_video',
    templateUrl: 'video.jst',

    data: {
        videoUrl: 'videos/control-video.mp4'
    },

    load: function() {
        var video = document.getElementById('study-video');
        var proceed = document.getElementById('video-proceed');
        var errorMessage = document.getElementById('video-error');

        proceed.style.display = 'none';

        video.addEventListener('ended', function() {
            proceed.style.display = 'block';
        });

        video.addEventListener('error', function() {
            errorMessage.style.display = 'block';
        });
    }
}],

postiat_instructions: [{
    type: 'message',
    name: 'postiat_instructions',
    templateUrl: 'postiat_instructions.jst',
    keys: [' ', 13]
}],

postiat: [{
    type: 'time',
    name: 'postiat',
    scriptUrl: 'postiat.js'
}],

		postsurvey: [{
    type: 'quest',
    name: 'postsurvey',
    scriptUrl: 'postsurvey.js'
}],

		
        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            //Uncomment the following if you want to end the study here.
            //last:true, 
            header: 'You have completed the study'
        }], 
        
        //Use if you want to redirect the participants elsewhere at the end of the study
        redirect:
        [{ 
			//Replace with any URL you need to put at the end of your study, or just remove this task from the sequence below
            type:'redirect', name:'redirecting', url: 'https://www.google.com/search' 
        }],
		
		//This task waits until the data are sent to the server.
        uploading: uploading_task({header: 'just a moment', body:'Please wait, sending data... '})
    });

    API.addSequence([
        {inherit: 'consent'},

{
    type: 'post',
    name: 'consent_record',
    data: {
        consent: 'agreed'
    }
},

{type: 'isTouch'},

{
    type: 'post',
    path: ['$isTouch']
},

{inherit: 'presurvey'},
{inherit: 'preiat_instructions'},
{inherit: 'preiat'},

{
    mixer: 'choose',

    data: [
        {
            mixer: 'wrapper',

            data: [
                {
                    type: 'post',
                    name: 'video_condition',

                    data: {
                        video_condition: 'experimental'
                    }
                },

                {
                    inherit: 'insect_video'
                }
            ]
        },

        {
            mixer: 'wrapper',

            data: [
                {
                    type: 'post',
                    name: 'video_condition',

                    data: {
                        video_condition: 'control'
                    }
                },

                {
                    inherit: 'control_video'
                }
            ]
        }
    ]
},
{inherit: 'postiat_instructions'},
{inherit: 'postiat'},
{inherit: 'postsurvey'},
{inherit: 'uploading'},
        {inherit: 'lastpage'},
        
    ]);

    return API.script;
});
