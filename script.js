var player = 'o';
function atualizarPlacar(){
    if(player == 'o'){
        $('.placar img').attr('src', 'o.png')
    } else{
        $('.placar img').attr('src', 'x.png')
    }
}

function winning(){
    var a1 = $('.a1').attr('used-square');
    var a2 = $('.a2').attr('used-square');
    var a3 = $('.a3').attr('used-square');

    var b1 = $('.b1').attr('used-square');
    var b2 = $('.b2').attr('used-square');
    var b3 = $('.b3').attr('used-square');

    var c1 = $('.c1').attr('used-square');
    var c2 = $('.c2').attr('used-square');
    var c3 = $('.c3').attr('used-square');

    var winner = '';
    var gameover = false;

    for(var i = 0; i <= 1; i++){
        if(i==0){
            var op = 'o';
        }else{
            var op = 'x';
        }
        if(a1 == op && b1 == op && c1 == op){
            winner = op;
        }
        else if(a2 == op && b2 == op && c2 == op){
            winner = op;
        }
        else if(a3 == op && b3 == op && c3 == op){
            winner = op;
        }
        else if(a1 == op && a2 == op && a3 == op){
            winner = op;
        }
        else if(b1 == op && b2 == op && b3 == op){
            winner = op;
        }
        else if(c1 == op && c2 == op && c3 == op){
            winner = op;
        }
        else if(a1 == op && b2 == op && c3 == op){
            winner = op;
        }
        else if(a3 == op && b2 == op && c1 == op){
            winner = op;
        }
    }
    //console.log(winner);

    if(winner != ''){
          if(winner == 'o'){
            $('.winner').html('O ganhador foi: O');
          }else{
            $('.winner').html('O ganhador foi: X');
          }
          gameover = true;
    }
    else if(a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != '' ){
        $('.winner').html('DEU VEIA!!');
        gameover = true;
    }

    if(gameover == true){
           $('.area').off('click');
           var timer = setTimeout(function(){
           $('button').trigger('click');},
            2000);//autoclick
        }
    $('button').bind('click',function(){
        gameover = false;
        $('.area').html('');
        $('.area').attr('used-square','');
        $('.winner').html('');
        main();
        clearTimeout(timer);
        //console.log(gameover);
    });

}
function main(){
    $('.area').on('click', function(){
        if($(this).find('img').length == 0){
            if(player == 'o'){
                $(this).html('<img  src="o.png" border="0" height="50"/>');
                $(this).attr('used-square', 'o');
                player = 'x';
            }else{
                $(this).html('<img  src="x.png" border="0" height="50"/>');
                $(this).attr('used-square', 'x');
                player = 'o';
            }
            atualizarPlacar();
            winning();
        }
    });
}

$(function(){
    atualizarPlacar();
    main();
});