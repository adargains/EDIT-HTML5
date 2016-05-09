
$(document).ready(function () {
            $('.detalhes-produto .wrapper .detalhes-imagem ul li').click(function (e) {
                e.preventDefault();
                var imgSrc = $(this).find('img').attr('src');
                $('.detalhes-imagem > img').attr('src', imgSrc);
            });
        });
