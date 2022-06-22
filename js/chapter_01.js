function startContent() {
    chapter_1_page_1();
    // chapter_1_page_2();
    // chapter_1_page_3();
}

function chapter_1_page_1() {
    let typewriter = new Typewriter(document.getElementById("typewriter_tag"), {
        loop: false,
        delay: 0,
        deleteSpeed: 5,
    });

    typewriter
        .callFunction(() => {
            document.getElementById("content_01").classList.add("darker");
        })
        .pauseFor(3000)
        .pasteString(
            `<i class="nova">Nova:</i> "Mission status unclear.. discarding plan .. falling back to direct command"`
        )
        .pasteString(
            `<br\><br\><i class="nova">Nova:</i> "Waking Commander Andrea McKay to assume control"`
        )
        .pasteString(
            `<br\><br\>Commander McKay's suspended animation pod began the reanimation procedure. Slowly the gel within the pod raised its temperature from minus 40 to a comfortable 36.7 degrees. Several mechanical arms sprung into action, replacing the ice-cold saline within her veins with freshly synthesized blood, sending electrical signals into her spine and brain, bringing her organ function back online. McKay's breathing tubes were pulled from her lungs, causing her body to jerk with protest. Finally, a mechanical arm issued McKay with a mild stimulant to rouse her from her dreamless sleep. Within a few minutes McKay slowly opened her eyes and began assessing her situation.`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Nova.." McKay barked horsily, "..provide situation report." `
        )
        .pasteString(
            `<br\><br\><i class="nova">Nova:</i> "Commander we have successfully arrived at the target location. The crew and the ship remain fully intact. Primary mission has been derailed due to unexpected parameters" `
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Unexpected parameters?" `
        )
        .pasteString(
            `<br\><br\><i class="nova">Nova:</i> "When syncing the ships time against the view of the MilkyWay, it appears that the present time is -1.11 galactic years from our expected arrival date." `
        )
        .pasteString(
            `<br\><br\>Commander McKay was still adjusting to the after effects of the reanimation procedure. Her head was pounding, stomach uneasy and her breathing was laboured. McKay leaned over the side of the pod and proceeded to throw up thoroughly.`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "That's better...". Command McKay took a moment to breath and wipe her chin clear of any remanence of vomit. "Nova, whats your degree of certainty that we're -1.11 galactic years in the past?`
        )
        .pasteString(
            `<br\><br\><i class="nova">Nova:</i> "Based of the star charts there is no doubt to the Novas current time and location, Commander." `
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "That would place us over 250 million years before the Unions founding". McKay took a moment to settled herself. This was not one of the possibilities she had expected going into this mission. Death, a damaged Nova, mutiny. She had accepted or planned for all these scenarios, but this was definitely something new. The Chancellor will lose his damn mind if he ever finds out... But never mind that now, first things first, her crew was alive and the Nova is intact. Albeit in the past... We're alive and in a new galaxy.`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Nova wake up all section leaders, give them some time to compose themselves and have them meet on the ships helm. I'll inform them of the situation."`
        )
        .pasteString(`<br\><br\><i class="nova">Nova:</i> "Yes Commander." `)
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Oh and Nova," McKay taking a look at the puddle of stomach acid and saline lying around her pod. "One more thing, have this mess cleaned up. Wouldn't want to show that bunch of vultures any weakness. ."`
        )
        .pasteString(
            `<br\><br\>Nova started the reanimation procedure for all twelve Section Leaders. They woke in much the same way commander McKay had, vomiting in confusion as they pulled themselves out of their pods to wash and dress. They had all been through this before, the procedure was something that you had to stomach at least once in order to get past the qualification rounds to join the Nova. It was hard on the body, and Samantha Ki, head of Biotech was hit harder than most. She was a small woman and had a delicate digestive system at the best of times. 'I should really add some stomach stabilizers into this damn procedure...' she thought to herself as she continued to dry wretch beside her pod. After several minutes had passed she managed to stand upright. 'Wait.. What's going on here?? Biotech was scheduled to wake up together..", but as far as she could see it was only her standing there in her post vomit euphoria. And as if that thought alone was enough to prompt it, the daemon Nova spoke.`
        )
        .pasteString(
            `<br\><br\><i class="nova">Nova:</i> "Samantha Ki, Commander McKay has requested the section leaders to make their way to the ships briefing room." `
        )
        .pasteString(
            `<br\><br\><i class="sam">Samantha:</i> "Roger that, how much time to I have?" `
        )
        .pasteString(
            `<br\><br\><i class="nova">Nova:</i> "Five of the twelve section leaders have arrived in the briefing room. The rest are currently showering." `
        )
        .pasteString(
            `<br\><br\>"Frack me.. I'm late already..". Samantha jogged to the showers. Shortly after she emerged cleansed of saline and bile, she spent a brief few minutes dressing and composing herself using the post animation pack she had prepped pre launch. Samantha moved double time towards the ships briefing room`
        )
        .pasteString(
            `<br\><br\>The doors slid open just as Samantha slowed her stride from a hurried jog, down to a steady walk.'`
        )
        .callFunction(() => {
            document.getElementById("next").innerHTML =
                '<button type="button" class="button button_next" id="continue_button" onclick="chapter_1_page_2()">Continue</button>';
        })
        .start();
}

function chapter_1_page_2() {
    document.getElementById("next").innerHTML = "";
    document.body.style.backgroundImage = "url('img/01/breifingroom.jpeg')";

    let typewriter = new Typewriter(document.getElementById("typewriter_tag"), {
        loop: false,
        delay: 0,
        deleteSpeed: 5,
    });

    typewriter
        .callFunction(() => {
            document.getElementById("content_01").classList.remove("darker");
        })
        .callFunction(() => {
            document.getElementById("content_01").classList.add("darker");
        })
        .pauseFor(3000)
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Now that Professor. Ki, has joined us we can begin. Please hold any questions till after the brief."`
        )
        .pasteString(
            `<br\><br\>Samantha, found her chair and set her focus on the Commander. She made a point not to scan the room to look at the other section leaders. Let them think that this was a victory over her, she would soon establish a steady footing. 'Something has to be wrong for us to break away from the schedule, but what?!'.  Any worry she had at giving a bad first impression was readily being replaced with a mounting curiosity about the situation that they've found themselves in.`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "As of now, I have taken the decision to only wake the section leaders. Our primary mission has been thoroughly derailed. This is due to an unexpected side affect encountered while traveling through the DeepGate.."`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "We are in no present danger. The ship and its crew are intact and had made it safely to M31. But.. the stars are not where we expected. According to Nova, we aren't 'when' we're supposed to be. It seems we have managed to travel 250 million standard years into the past"`
        )
        .pasteString(
            `<br\><br\>The Commander took a brief pause from her sit-rep as she read the expressions of the section leaders. Samantha had a weak stomach but a great poker face. While she started running the various scenarios in her head, she held to a neutral expression, remaining unreadable, calm and collected.`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Making our primary directive, 'The construction of a wormhole relay node to the Union' presently, impossible. Needless to say we have several new challenges ahead of us. Prof Hynes, I'd like to hear from you first. How did this happen and what can we do to get back to the Union?"`
        )
        .pasteString(
            `<br\><br\>The rooms gaze shifted noticeably to Prof Hynes. He was in his late 50's,a stout man with plump features, and completely grey at this point. Prof Hynes was Section Leader of Physics, a visionary in his field. He was deeply involved with both the creation of the wormhole relay node network, as well as the DeepGate. The room waited for several breaths before Hynes stood and began to speak.`
        )
        .pasteString(
            `<br\><br\><i class="hynes">Hynes:</i> "Let me be clear, as I know you must have as many questions as I do, and I do not wish to add to the confusion. Traveling into the past is impossible, and is not an idea which we will entertain. Physics allows no travel contrary to that of the arrow of time. The only known exception to this rule, are the smallest units found at the quantum layer. But even those infinitesimally small vibrations into the past hardly count as time travel.". Hynes, seeing that the room was not going to oppose him on this point decided to proceed. "Now that brings us to the question; 'why the present alignment of stars have us supposedly 1.1 galactic years in the past?'. There is only one theory which could allow for the absurdity of our situation. I posit that the DeepGate has navigated the Nova across the branches of existence into a sister Universe. The arrow of time could be ever so slower here, or the events which formed the M31 cluster occurred with less momentum, slowing the spin of M31 over billions of standard years. The DeepGate maths never suggested such an event could occur.... but here we find ourselves..."`
        )
        .pasteString(
            `<br\><br\>Prof.Hynes began to sit back down, but stopped half way to his chair and stood upright to address the leadership. He looked far more grave than he had previously and spoke with more feeling in his voice..`
        )
        .pasteString(
            `<br\><br\><i class="hynes">Hynes:</i> "We don't make it back home."<br\><br\>The room waited for more from Hynes, something to explain his statement. When no explanation was coming Commander McKay roused the older man out of this stooper.`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Could you walk the rest of us through that Professor?"`
        )
        .pasteString(
            `<br\><br\><i class="hynes">Hynes:</i> ".... sure", Hynes quickly collected himself and said. "We don't make it back home to the Union. We will live out the rest of our lives here in M31. How do I know this? Its quite simple really. Jumping back to the Union is all but impossible. To do so the math that got us here would need to be reversible, we don't know that it is. We would have to be able to distinguish our Universe from the infinite others in existence. Even setting that aside, we would need all the inputs to this unknown reversible function to be perfect. The mass of the sun would need to match that of the one we extinguished back in the Milkyway. Aligning the construction of a DeepGate with the mass of a sun that we don't have is one thing. But even the contents of the Nova would need to be just as they were, down to the smallest detail. The atoms from the skin shed in the shower could be enough to change any jump into that yet another sister Universe." Hynes was waving his hand as if to dismiss these notions from consideration. "No. We don't make it back." Hynes found his seat, his mind seemed to be else where. Already trying to unravel the physics behind all this.`
        )
        .pasteString(
            `<br\><br\><i class="mckay">McKay:</i> "Thank you Professor, that was most insightful". McKays composure was very matter of fact.  "The Nova appears to be further from the Union than I expected, and currently that can not be helped... Lets focus on the next steps. Nova can you bring up the closest K to M class planets which would allow for an initial settlement."`
        )
        .callFunction(() => {
            document.getElementById("next").innerHTML =
                '<button type="button" class="button button_next" id="continue_button" onclick="chapter_1_page_3()">Continue</button>';
        })
        .start();
}

function chapter_1_page_3() {
    document.getElementById("next").innerHTML = "";

    let typewriter = new Typewriter(document.getElementById("typewriter_tag"), {
        loop: false,
        delay: 0,
        deleteSpeed: 5,
    });

    typewriter
        .callFunction(() => {
            document.getElementById("content_01").classList.remove("darker");
        })
        .callFunction(() => {
            document.getElementById("content_01").classList.add("block");
        })
        .pauseFor(2000)
        .pasteString(
            `<i class="nova">Nova: </i> "Given the current stock of reserves, there are three solar systems within range which contain one or more habitable planets. The closest of which is 6 months travel. System 'A' contains an ice covered mid sized planet. This planet has a degrading orbit and is stuck in an ever worsening ice age, as it slowly drifts further from its sun. As it stands the planet on its current course will remain habitable for roughly another 167 standard years."`
        )
        .pasteString(`
            <div id="system_a">
                <button type="button" class="button button_next" onclick="releave_gif('system_a', 'img/01/systemA.gif')">System A</button>
            </div>`)
        .pasteString(
            `<br\><br\><i class="nova">Nova: </i> "System B, would take 19 months of travel, and contains a trio of potential planets. Two Class K and one M planet. Due to the distances involved certainty on the planets classification can not be guaranteed, and sits at 78% probability"`
        )
        .pasteString(`
            <div id="system_b">
                <button type="button" class="button button_next" onclick="releave_gif('system_b', 'img/01/systemB.gif')">System B</button>
            </div>`)
        .pasteString(
            `<br\><br\><i class="nova">Nova: </i> "System C is 6 standard years travel and would nearly exhaust the ships reserves. System C contains one M class planet and looks to have a large mineral content, as well as a breathable atmosphere"`
        )
        .pasteString(`
        <div id="system_c">
            <button type="button" class="button button_next" onclick="releave_gif('system_c', 'img/01/systemC.gif')">System C</button>
        </div>`)
        .pasteString(
            `<br\><br\><i class="mckay">McKay: </i> "Thank you Nova." Commander McKay shifted her focus to Samantha. 'That woman is unflappable.. she is taking this situation as if was the same as hearing the morning weather report.' Samantha thought to herself.  "Doctor Ki, you designed the suspended animation pods. How long can they keep going for if we needed to keep most of the crew in status during the trip?"`
        )
        .pasteString(
            `<br\><br\><i class="sam">Samantha: </i> When speaking within an area of her expertise, Samantha's confidence in herself was solid as rock. Standing tall and formal, she addressed the room. "The Pods were designed to with stand the effects of DeepGate travel.. long term containment was not a consideration, nor was it tested for. The pods are filled with a thermal gel, keeping the users bio material on the brink of absolute motionlessness. The gel however, has a limited shelf life, and will lose its effectiveness with each passing week." Samantha had the rooms undevided attension. Reading their expressions she knew now was a good time to regain some of the momentum. "Nova, bring up a chart of the shelve life of the thermal gel, and overlay that with the expected loss in bodily function in terms of brain, organ and muscular damage. Now highlight the cross section using a weighted average of the expected disability incurred over time. Great, now add the times to reach each of the systems"`
        )
        .pasteString(`
        <div id="brainDamage">
            <button type="button" class="button button_next" onclick="releave_gif('brainDamage', 'img/01/brainDamage.gif')">Status Damage</button>
        </div>`)
        .pasteString(
            `<br\><br\> The chart displayed removed System C as an option. Just under 10% of the ships crew would be able to survive the reanimation process. System B's 19 months of status would result in mild brain damage to over 30% of the crew. With the crews population mostly being high functioning individuals, this would be a tremendous blow to the crew themselves and to Novas chances of setting up a colony here in M31`
        )
        .callFunction(() => {
            document.getElementById("next").innerHTML =
                '<button type="button" class="button button_next" id="continue_button" onclick="chapter_1_page_4()">Continue</button>';
        })
        .start();
}