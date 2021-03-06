    window.game={
        volume:3,
        triggers:{},
        level:1,
        name:'',
        leftkey:function(){console.log('Fired: Left key');},
        upkey:function(){console.log('Fired: Up key');},
        rightkey:function(){console.log('Fired: Right key');},
        downkey:function(){console.log('Fired: Down key');},
        spacekey:function(){console.log('Fired: Space key/bar');},
        spacebar:function(){game.spacekey();}, // Just an alias to the spacekey function.
        setDefaults:function(){
            if ( !window.d.r('volume') ) d.w('volume',3);
            if ( !window.d.r('level') ) d.w('level',1);
            if ( !window.d.r('name') ) d.w('name','');
        },
        loadSettings:function(){
            window.game.setDefaults();
            window.game.volume=window.d.r('volume');
            window.game.level=window.d.r('level');
            window.game.name=window.d.r('name');
        },
        init:function(){
            $('#game').html(''); // Remove the loading IMG.
            window.game.loadSettings(); // Load all of the settings
            $('#game').append('<i id="volume" class=""></i>');
            window.game.refreshVolume();
            window.game.triggers.volume();
            // Volume is set up. Now would be a good time to setup the background music, but I'll implement that later.
            // For now I'll just go to the home screen (if the name is "")
            if (window.game.name=='') $('#game').append('<form style="text-align:center;padding-top:135px" class="form-inline" id="nameinputform"><label for="nameinput" style="padding-right:5%">Your Name</label><input type="text" id="nameinput" name="nameinput" placeholder="Type in here" /><p style="margin-top:5%"><a href="" onclick="window.game.play()" class="btn btn-primary btn-large" style="">Play &raquo;</a></p></form>');
            else window.game.play();
        },
        mute:function(){
            if (window.game.volume==3) window.game.volume=1;
            else window.game.volume=3;
            window.game.refreshVolume();
        },
        refreshVolume:function(){
            $('i#volume').attr('class','icon-volume-'+(window.game.volume==1?'off':(window.game.volume==2?'down':'up')));
        },
        play:function(){
            // Play the game.
            d.w('name',$('#nameinput').val());
            window.game.loadSettings();
            $('#nameinputform').remove();
            $('#game').append('<img id="player" src="img/player/0.png" alt>');
        }
    };