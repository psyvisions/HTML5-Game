    window.game.encoded=function(){console.log('encoded fired');$.ajax({
        url:window.homeurl+'/encode.php?id='+$('#game').attr('data-crypto-id'),
        beforeSend:function(){
            $('#loading').attr('style','width:24%');
        },
        success:function(data){
            $('#loading').attr('style','width:75%');
            $('#game').append(data);
            window.game.fin();
        }
    })};