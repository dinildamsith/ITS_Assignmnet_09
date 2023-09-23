const items = $('.item');
const start = $('.start');
const stop = $('.stop');
let count = 7;
let lightCount = 0;
let direction = 'Right';
let intervalId;

start.on('click', () => {
    $('audio')[0].play();

    intervalId = setInterval(() => {
        items.css('background', 'white');

        if (direction === 'Right') {
            lightCount++
            items.eq(lightCount-1).css('background', '#ffc2d1');
            items.eq(lightCount).css('background', 'red');
            items.eq(lightCount+1).css('background', '#ff8fab');
            if (lightCount === count - 1){
                direction = 'Left';
            }
        }else{
            lightCount--
            if (lightCount === 0){
                direction = 'Right';
                items.eq(lightCount+1).css('background', '#ffc2d1');
                items.eq(lightCount).css('background', 'red');
            }else {
                items.eq(lightCount+1).css('background', '#ffc2d1');
                items.eq(lightCount).css('background', 'red');
                items.eq(lightCount-1).css('background', '#ff8fab');
            }



        }
    },75);

});

stop.on('click', () => {
    clearInterval(intervalId);
    $('audio')[0].pause();
});