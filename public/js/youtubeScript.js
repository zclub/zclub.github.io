// 2. This code loads the IFrame Player API code asynchronously.
//	Приведенный в данном разделе код загружает код JavaScript API проигрывателя 
//	IFrame. Для загрузки кода API в примере используется модификация DOM, 
//	чтобы загрузка кода выполнялась асинхронно. (Атрибут <script> тега async, 
//	который также позволяет загружать данные асинхронно, поддерживается не всеми 
//	современными браузерами. Подробнее об этом рассказано в статье Переполнение стека.)
 
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	  
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//	Функция onYouTubeIframeAPIReady выполняется сразу после загрузки кода API 
//	проигрывателя. В этой части кода определяется глобальная переменная player, 
//	которая относится к встраиваемому проигрывателю, после чего функция создает 
//	объект проигрывателя видео.
	  
    var player;	  
    function onYouTubeIframeAPIReady() 
	{
        player = new YT.Player('player', 
		{
			height: '390',
			width: '640',		
			playerVars: 
			{
				'list': 'PLCDSjSW2i3OxiphDMAGDrhDUrGe-JXg1A',
				'listType': 'playlist'
			},
			events: 
			{
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange,
			}
        });
    }

// 4. The API will call this function when the video player is ready.
//	Функция onPlayerReady выполняется при активации события onReady. 
//	В этом примере функция обозначает, что проигрыватель должен начать 
//	воспроизведение видео после того, как он готов к работе. функция будет 
//	выполняться, когда вызывается событие.
	  
    function onPlayerReady(event) {
		event.target.playVideo();
    }
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
	  
	  //	Два первых видео играет по 3 сек каждое, третье видео играет полностью.
	   	
	function nextVideo() 
	{
		player.nextVideo();
	}	
	for(var i=0; i<2; ++i) 
	{
		function onPlayerStateChange(event) 
		{
			if (event.data == YT.PlayerState.PLAYING) 
			{
			  setTimeout(nextVideo, 4000);
			}
		}
	}
	  

	
    
