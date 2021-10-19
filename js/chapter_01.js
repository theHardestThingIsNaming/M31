function startContent() {
    var content01 = document.getElementById('content_01');

    var typewriter = new Typewriter(content01, {
        loop: false,
        delay: 3,
        deleteSpeed: 5,
    });

    typewriter
        .pauseFor(2500)
        .typeString(`<i class="nova">Nova:</i> "Mission status unclear.. discarding plan .. falling back to direct command"`)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "Waking Commander Andrea McKay to assume control"`)
        .pauseFor(300)
        .typeString(`<br\><br\>Commander McKay's suspended animation pod began the reanimation procedure. Slowly the gel within the pod raised its temperature from minus 40 to a comfortable 36.7 degrees. Several mechanical arms sprung into action, replacing the ice-cold saline within her veins with freshly synthesized blood, sending electrical signals into her spine and brain, bringing her organ function back online. McKay's breathing tubes were smoothly pulled from her lungs, causing her body to jerk with protest. Finally, a mechanical arm issued McKay with a mild stimulant to rouse her from her dreamless sleep. Within a few minutes McKay slowly opened her eyes and began assessing her situation.`)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Nova.." McKay barked horsily, "..provide situation report." `)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "Commander we have successfully arrived to the target location. The crew and the ship remain fully intact. Primary mission has been derailed due to unexpected parameters" `)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Unexpected parameters?" `)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "When syncing the ships time against the view of the MilkyWay, it appears that the present time is -1.11 galactic years." `)
        .pauseFor(300)
        .typeString(`<br\><br\>Commander McKay was still adjusting to the after effects of the reanimation procedure. Her head was pounding, stomach uneasy and breathing laboured. McKay leaned over the side of the pod and proceeded to throw up thoroughly.`)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Thats better... minus 1.11 galactic years in the past. Putting us over 250 million years before the Unions founding". McKay took a moment to settled herself. This was not one of the possibilities she had expected going into this mission. Death, a damaged Nova, mutiny. She had accepted all these scenarios, but this was definitely something new. The Chancellor is going to shit his pants if he ever finds out. She and her crew were alive, the Nova is intact, albeit in the past. But we're alive. `)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Nova wake up all section leaders, give them some time to compose themselves and have them meet on the ships helm. I'll inform them of the situation."`)
        .typeString(`<br\><br\><i class="nova">Nova:</i> "Yes Commander." `)
        .typeString(`<br\><br\><i class="mckay">McKay:</i> "Oh and Nova," McKay taking a look at the puddle of stomach acid and saline lying around her pod. "One more thing, have this mess cleaned up. Wouldn't want to show that bunch of vultures any weakness. ."`)
        .start();
}