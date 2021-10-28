

function startContent() {
    chapter_1_page_1();
    // chapter_1_page_2();
}

function chapter_1_page_1(){
    
    let typewriter = new Typewriter(document.getElementById('typewriter_tag'), {
        loop: false,
        delay: 0,
        deleteSpeed: 5,
    });

    typewriter
        .pauseFor(2500)
        .typeString(`<i class="nova">Nova:</i> "Mission status unclear.. discarding plan .. falling back to direct command"`)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "Waking Commander Andrea McKay to assume control"`)
        .pauseFor(300)
        .pasteString(`<br\><br\>Commander McKay's suspended animation pod began the reanimation procedure. Slowly the gel within the pod raised its temperature from minus 40 to a comfortable 36.7 degrees. Several mechanical arms sprung into action, replacing the ice-cold saline within her veins with freshly synthesized blood, sending electrical signals into her spine and brain, bringing her organ function back online. McKay's breathing tubes were pulled from her lungs, causing her body to jerk with protest. Finally, a mechanical arm issued McKay with a mild stimulant to rouse her from her dreamless sleep. Within a few minutes McKay slowly opened her eyes and began assessing her situation.`)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Nova.." McKay barked horsily, "..provide situation report." `)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "Commander we have successfully arrived to the target location. The crew and the ship remain fully intact. Primary mission has been derailed due to unexpected parameters" `)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Unexpected parameters?" `)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "When syncing the ships time against the view of the MilkyWay, it appears that the present time is -1.11 galactic years." `)
        .pauseFor(300)
        .pasteString(`<br\><br\>Commander McKay was still adjusting to the after effects of the reanimation procedure. Her head was pounding, stomach uneasy and her breathing was laboured. McKay leaned over the side of the pod and proceeded to throw up thoroughly.`)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Thats better... minus 1.11 galactic years in the past. Putting us over 250 million years before the Unions founding". McKay took a moment to settled herself. This was not one of the possibilities she had expected going into this mission. Death, a damaged Nova, mutiny. She had accepted all these scenarios, but this was definitely something new. The Chancellor is going to shit his pants if he ever finds out. She and her crew were alive, the Nova is intact, albeit in the past. But we're alive. `)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Nova wake up all section leaders, give them some time to compose themselves and have them meet on the ships helm. I'll inform them of the situation."`)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "Yes Commander." `)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Oh and Nova," McKay taking a look at the puddle of stomach acid and saline lying around her pod. "One more thing, have this mess cleaned up. Wouldn't want to show that bunch of vultures any weakness. ."`)
        .callFunction(() => {
            document.getElementById('next').innerHTML = '<button type="button" class="button button_next" id="continue_button" onclick="chapter_1_page_2()">Continue</button>';
        })
        .start();
}

function chapter_1_page_2(){
    document.getElementById('next').innerHTML = "";
    let typewriter = new Typewriter(document.getElementById('typewriter_tag'), {
        loop: false,
        delay: 0,
        deleteSpeed: 5,
    });
    typewriter
        .pasteString(`Nova started the reanimation procedure for all twelve Section Leaders. They woke in much the same way commander McKay had, vomiting in confusion as they pulled themselves out of their pods to wash and dress. They had all been through this before, the procedure was something that you had to stomach at least once in order to get past the qualification rounds to join the Nova. It was hard on the body, and Samantha Ki, head of Biotech was hit harder than most. She was a small woman and had a delicate digestive system at the best of times. 'I should really add some stomach stabilizers into this damn procedure...' she thought to herself as she continued to dry wretch beside her pod. After several minutes had passed she managed to stand upright. 'Wait.. What's going on here?? Biotech was scheduled to wake up together..", but as far as she could see it was only her standing there in her post vomit euphoria. And as if that thought alone was enough to prompt it, the daemon Nova spoke.`)
        .pasteString(`<br\><br\><i class="nova">Nova:</i> "Samantha Ki, Commander Mckay has requested the section leaders on the ships helm." `)
        .pasteString(`<br\><br\><i class="sam">Samantha:</i> "Roger that, how much time to I have?" `)
        .pasteString(`<br\><br\><i class="nova">Nova:</i> "Five of the twelve section leaders have arrived in the ships helm. The rest are currently showering." `)
        .pasteString(`<br\><br\>'Frack me..'. Samantha jogged to the showers. Shortly after she emerged cleansed of saline and bile, she spent a brief few minutes dressing and composing herself using the post animation pack she had prepped pre launch. 'I can't be last to arrive'`)
        .pasteString(`<br\><br\>The doors of the ships helm slid open just as Samantha slowed her stride from a hurried jog, down to a steady walk.'`)
        .pasteString(`<br\><br\><i class="mckay">McKay:</i> "Now that Professor. Ki, has joined us we can begin. Please hold any questions till after the brief."`)
        .pasteString(`<br\><br\>Samantha, found her chair and focused on the Commander. She made a point not to scan the room to look at the other section leaders. Let them think that this was a victory over her, she would soon establish a steady footing. 'Something has to be wrong for us to break away from the schedule, but what?!'.  Any worry she had at giving a bad first impression was readily being replaced with a mounting curiosity as to the situation that they've found themselves in.`)
        .pasteString(`<br\><br\><i class="mckay">McKay:</i> "As of now, I have taken the decision to only wake the section leaders. Our primary mission has been thoroughly derailed. This is due to an unexpected side affect encountered while traveling through the DeepGate.."`)
        .pasteString(`<br\><br\><i class="mckay">McKay:</i> "We are in no present danger. The ship and its crew are intact and had made it safely to M31. But.. the stars are not where we expected. According to Nova, we aren't 'when' we're supposed to be. It seems we have managed to travel 250 million standard years into the past"`)
        .pasteString(`<br\><br\>The Commander took a brief pause from her sit-rep as she read the expressions of the section leaders, to make sure the message was being received. Samantha had a weak stomach but a great poker face. While she started running the various scenarios in her head, she held to a neutral expression, remaining unreadable, calm and collected.`)
        .pasteString(`<br\><br\><i class="mckay">McKay:</i> "Making our primary directive, 'The construction of a wormhole relay node to the Union' presently, impossible. Needless to say we have several new challenges ahead of us. Prof Hynes, I'd like to hear from you first. How did this happen and what can we do to get back to the Union?"`)
        .pasteString(`<br\><br\>The rooms gaze shifted noticeably to Prof Hynes. He was in his late 50's,a stout man with plump features, and completely grey at this point. Prof Hynes was Section Leader of Physics, a visionary in several fields of physics and deeply involved with both the creation of the wormhole relay node network, as well as the DeepGate. The room waited for several breaths before Hynes stood and began to speak.`)
        .pasteString(`<br\><br\><i class="hynes">Hynes:</i> "Let me be clear, as i know you must have as many questions as I do, and I do not wish to add to the confusion. According to the known laws of physics.... traveling into the past... is all but impossible. Indeed, the DeepGate maths never suggested such an event could occur.... But here we find ourselves... I, don't believe there is a way back to the Union. If it were somehow possible, it would take A: several breakthrough's in our fundamental understanding of physics to achieve and B: the construction of another DeepGate. An effort that took the collective might of the Union, serval decades to achieve. As a result, it is my assessment that we are quite firmly stranded here."`)
        .start();
}

/*
 12 Section Leaders
    Military
        -> Air force , Engineering, Tactical, Security
    Science
        -> Biotech, Physics, Material sciences, 
    Mining
        -> Operations, Engineering
    Support Staff
        -> Operations, Medical 
*/