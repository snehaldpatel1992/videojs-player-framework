videojs.options.flash.swf = "/node_modules/video.js/dist/video-js.swf";


var vjsObject = videojs(document.getElementById('video_element'), {
    controls: true,

    plugins: {
        videoJsResolutionSwitcher: {
            default: '480',
            dynamicLabel: true
        }
    }

}, function(){
    // Player (this) is initialized and ready.

});

vjsObject.videoJsResolutionSwitcher();

// here's an example of generating thumbnails from a sprited image:

vjsObject.thumbnails({
    0: {
        src: 'node_modules/videojs-thumbnails/thumbnails.png',
        style: {
            left: '-60px',
            width: '600px',
            height: '68px',
            clip: 'rect(0, 120px, 68px, 0)'
        }
    },
    10: {
        style: {
            left: '-180px',
            clip: 'rect(0, 240px, 68px, 120px)'
        }
    },
    20: {
        style: {
            left: '-300px',
            clip: 'rect(0, 360px, 68px, 240px)'
        }
    },
    30: {
        style: {
            left: '-420px',
            clip: 'rect(0, 480px, 68px, 360px)'
        }
    },
    40: {
        style: {
            left: '-540px',
            clip: 'rect(0, 600px, 68px, 480px)'
        }
    }
});





