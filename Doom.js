var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://artplayer.org/assets/sample/video.mp4',
    title: 'One More Time One More Chance',
    poster: 'https://artplayer.org/assets/sample/poster.jpg',
    volume: 0.5,
    isLive: false,
    muted: false,
    autoplay: false,
    pip: true,
    autoSize: true,
    autoMini: true,
    screenshot: true,
    setting: true,
    loop: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    subtitleOffset: true,
    miniProgressBar: true,
    localVideo: false,
    localSubtitle: true,
    networkMonitor: false,
    mutex: true,
    light: true,
    backdrop: true,
    theme: '#ffad00',
    lang: navigator.language.toLowerCase(),
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    contextmenu: [
        {
            html: 'Custom menu',
            click: function (contextmenu) {
                console.info('You clicked on the custom menu');
                contextmenu.show = false;
            },
        },
    ],
    quality: [
        {
            default: true,
            name: 'SD 480P',
            url: 'https://artplayer.org/assets/sample/video.mp4',
        },
        {
            name: 'HD 720P',
            url: 'https://artplayer.org/assets/sample/video.mp4',
        },
    ],
    subtitle: {
        url: 'https://artplayer.org/assets/sample/subtitle.srt',
        style: {
            color: '#03A9F4',
        },
    },
    
    icons: {
        loading: '<svg class="gegga">
      <defs>
        <filter id="gegga">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
            result="inreGegga"
          />
          <feComposite in="SourceGraphic" in2="inreGegga" operator="atop" />
        </filter>
      </defs>
    </svg>
<svg class="snurra" width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="linjärGradient">
          <stop class="stopp1" offset="0" />
          <stop class="stopp2" offset="1" />
        </linearGradient>
        <linearGradient
          y2="160"',
        state: '<img src="https://artplayer.org/assets/img/state.png">',
    },
});
