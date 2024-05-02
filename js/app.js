$(document).ready(function(){

    var classActive = 'active'

    // Ação para deixar o primeiro item já ativo no Menu.
    $('.animais .tab-menu a').first().addClass(classActive);
    $('.animais .item').first().addClass(classActive);
    //

    // Função para animação do Menu
    $('.animais .tab-menu a').click(function(e){
        e.preventDefault();
        var itemId = $(this).attr('href');

        //Removemos o 'active' para troca de menu
        $('.animais .tab-menu a').removeClass(classActive);
        $('.animais .item').removeClass(classActive);

        // adicionamos a classe conforme o click
        $(this).addClass(classActive);
        $(itemId).addClass(classActive);
    });

    // Ação para deixar o primeiro item já ativo no Menu.
    $('.florestas .tab-menu a').first().addClass(classActive);
    $('.florestas .item').first().addClass(classActive);
    //

    // Função para animação do Menu
    $('.florestas .tab-menu a').click(function(e){
        e.preventDefault();
        var itemId = $(this).attr('href');

        //Removemos o 'active' para troca de menu
        $('.florestas .tab-menu a').removeClass(classActive);
        $('.florestas .item').removeClass(classActive);

        // adicionamos a classe conforme o click
        $(this).addClass(classActive);
        $(itemId).addClass(classActive);
    });
});