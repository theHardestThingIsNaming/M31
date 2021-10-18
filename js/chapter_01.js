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
        .typeString(`<br\><br\><i class="nova">Nova</i> "Waking Commander Andrea McKay to assume control"`)
        .pauseFor(300)
        .typeString(`<br\><br\>Commander McKay's suspended animation pod began the reanimation procedure. Slowly the gel within the pod raised its temperature from minus 40 to a comfortable 36.7 degrees. Several mechanical arms sprung into action, replacing the ice-cold saline within her veins with freshly synthesized blood, sending electrical signals into her spine and brain, bringing her organ function back online. McKay's breathing tubes were pulled from her lungs, and now that her body was self sustaining under its own power, she was finally issues with a mild stimulant to rouse her from her dreamless state of suspended animation. Within a few minutes McKay slowly opened her eyes, assessing her situation.`)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="mckay">McKay</i> "Nova.. provide situation report." `)
        .pauseFor(300)
        .typeString(`<br\><br\><i class="nova">Nova</i> "Commander we have arrived to the target location. The crew and the ship remain fully operational. Primary " `)
        .start();
}