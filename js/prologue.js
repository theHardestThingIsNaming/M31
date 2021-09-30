function loadContent() {
    var beginButton = document.getElementById('begin_button');
    beginButton.style.display = 'none';
    var content = document.getElementById('content');
    content.style.display = 'block';

    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 30,
        deleteSpeed: 5,
    });

    typewriter
        .pauseFor(500)
        .callFunction(() => {
            document.getElementById('music').innerHTML = '<audio id="opening" src="audio/opening.mpg" type="audio/mpg" loop>Audio tag not supported</audio>';
            var x = document.getElementById("opening");
            x.play();
        })
        .pauseFor(2500)
        .typeString(`<i>Chancellor:</i>  "Citizens of the Union... It is finally time to breach the gap, to activate the deep-gate. `)
        .pauseFor(300)
        .typeString('On this historic date, the Union will make its next step.. no..')
        .pauseFor(500)
        .deleteChars(11)
        .typeString('<strong>leap</strong> into the great unknown.. ')
        .pauseFor(1000)
        .typeString('Witness the sacrifice of NC-167, as the Solar Spike beings its terrible work."')
        .pauseFor(1000)
        .callFunction(() => {
            document.getElementById('chancellor').classList = "hidden"
            document.getElementById('supernova').classList = 'fade-in-image';
        })
        .pauseFor(9000)
        .callFunction(() => {
            document.getElementById('supernova').classList = "hidden"
            document.getElementById('supernova-blast').classList = 'fade-in-image';
        })
        .typeString('<br\><br\><i>Chancellor:</i> "Worry not, for within the fires of destruction, we forge a way for our beloved Union to reach beyond. To grasp at new stars and worlds once denied to us by the 2.5 millions lightyears of cold dead space...."')
        .callFunction(() => {
            document.getElementById('supernova-blast').classList = 'hidden';
            document.getElementById('chancellor').classList = "fade-in-image"
        })
        .pauseFor(300)
        .typeString('<br\><br\><i>Chancellor:</i> "With its dying light, NC-167 will ignite the DeepGate"')
        .start();
    
        sleep(40000).then(() => {
            document.getElementById('next').innerHTML = '<button type="button" class="button button_next" id="continue_button" onclick="loadP2()">Continue</button>';    
        });
}

function loadP2(){
        let content = document.getElementById('content');
        document.getElementById('content').classList = 'fade-out-image';
        sleep(2500).then(()=>{
            content.style.display = 'none';
            document.getElementById('content_002').classList = 'fade-in-image';
        })
        var app_002 = document.getElementById('app_002');

        var typewriter_002 = new Typewriter(app_002, {
            loop: false,
            delay: 30,
            deleteSpeed: 5,
        });

        typewriter_002
        .pauseFor(5000)
        .typeString(`<i>Chancellor:</i>  "The Unions flagship 'Nova prospectus' will be manned by over 100,000 Union souls. Filled with the brightest minds that the Union has produced. The crew aboard 'Nova prospectus' will mainly comprise of specialists from the felids of Science, Military, Mining and Support staff.`)
        .pauseFor(300)
        .typeString('<br\><br\><i>Chancellor:</i> "It will be there mission, to first! Establish a base of operations, and second; Setup a worm-whole relay node to allow sustainable access back and forth to M31."')
        .typeString('<br\><br\><i>Chancellor:</i> "Using this mechanism the Union will spread throughout the Universe"')
        .start();

        sleep(35000).then(() => {
            document.getElementById('next_002').innerHTML = '<button type="button" class="button button_next" id="continue_button_002" onclick="loadP3()">Continue</button>';    
        });   
}

function loadP3(){
        var app_002 = document.getElementById('app_002');
        document.getElementById('app_002').innerHTML = '';
        document.getElementById('continue_button_002').remove();
        
        var typewriter_002 = new Typewriter(app_002, {
            loop: false,
            delay: 30,
            deleteSpeed: 5,
        });

        typewriter_002
        .pauseFor(2000)
        .typeString(`<i>Chancellor:</i>  "Now we come to the moment of truth.. ".`)
        .pauseFor(300)
        .typeString(`<br\><br\><i>Chancellor:</i> "After decades of construction and planning, watch as 'Nova prospectus' makes its final approach towards the Deep-Gate"`)
        .typeString('<br\><br\><i>Chancellor:</i> "The future of this great Union rests on the success of this mission. Godspeed and a safe passage across the expanse!"')
        .start();

        sleep(40000).then(() => {
            document.getElementById('next_002').innerHTML = '<button type="button" class="button button_next" id="continue_button" onclick="loadP4()">Continue</button>';    
        });   
}