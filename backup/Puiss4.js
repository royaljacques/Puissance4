class Puissance4 {
    constructor() {
        this.collone = 7;
        this.ligne = 6;
        this.player = 1;
    }

    newGame() {
        let p = 0;
        for (let i = 0; i < this.ligne; ++i) {
            let newDiv = document.create('div');
            for (let o = 0; o < this.collone; ++o) {
                let canvas = document.create('canvas');
                canvas.setAttribute('id', 'canevas_' + p)
                canvas.setAttribute('class', 'canevas')
                canvas.style.backgroundColor = 'white'
                ++p;
                newDiv.appendChild(canvas)
            }
            document.getElementById('puissance-grid').appendChild(newDiv)
        }
    }

    clique(element) {
        if (element instanceof HTMLCanvasElement) {
            let numberCanevas = element.id.split('_')

            if (numberCanevas[1] > 7) {
                return;
            }
            this.getbottom(Number(numberCanevas[1]) + 35, this.player === 1 ? 'yellow' : 'red')
            this.player === 1 ? this.player = 2 : this.player = 1;
        }
    }

    getbottom(numberCanevas, color) {
        if (numberCanevas < 0) {
            alert("Tu ne peux pas en rajouter plus")
            return;
        }
        let targetCanevase = Number(numberCanevas);
        let test = document.getElementById('canevas_' + targetCanevase)
        if (test.style.backgroundColor === 'yellow' || test.style.backgroundColor === 'red') {
            return this.getbottom(numberCanevas - 7, color)
        }
        test.style.backgroundColor = color
    }
    getbottomHover(numberCanevas, color) {
        if (numberCanevas < 0) {
            alert("Tu ne peux pas en rajouter plus")
            return;
        }
        let targetCanevase = Number(numberCanevas);

        let test = document.getElementById('canevas_' + targetCanevase)
        if (test.style.backgroundColor === 'yellow' || test.style.backgroundColor === 'red') {
            return this.getbottom(numberCanevas - 7, color)
        }
        test.style.backgroundColor = color
    }
    getWin(target){
        this.getHorizontal(target);
    }
    getHorizontal(target){
        if (target instanceof HTMLCanvasElement){

            let numberCanevas = target.id.split('_');
            if (numberCanevas[1] > 7) {
                return true;
            }
            let numbercanbottome = Number(numberCanevas[1]) + 35;
            let test1 = document.getElementById('canevas_' + numbercanbottome)
            let BaseColor = test1.style.backgroundColor;
            let numberStreak = 0;
            for (let i = 0; i <= 4; ++i){
                let test = document.getElementById('canevas_' + numbercanbottome)
                if (numbercanbottome >= 42){
                    return;
                }else {
                    let color = test.style.backgroundColor;
                    if (color === 'white'){
                        return;
                    }else {
                        if (color === BaseColor){
                            ++numberStreak;
                        }
                    }
                    ++numbercanbottome
                }
                console.log(numberStreak)
            }

        }
    }
    getRighStreak(target){
        $.streak = 0;
        console.log(target)
        $.targetnbrt = target.id.split('_')[1]
        for (let i = 0; i < 4; ++i){
            if ($.targetnbrt > 42){
                return;
            }
            $.color = document.getElementById('canevas_' + $.targetnbrt).style.backgroundColor
            $.playerColor =this.player === 1 ? 'yellow' : 'red';
            if ($.color === $.playerColor){
                $.streak++;
                if ($.streak >= 4){
                    console.log("gagné")
                }
            }
            ++$.targetnbrt;
        }
    }
}

$.game = new Puissance4();
$.game.newGame();

document.addEventListener('click', (event) => {
    $.game.clique(event.target)
    $.game.getWin(event.target)
})
$(document).ready(function () {//obligé de load la page car il faut attendre que scrpit html est fini de charger
    for (let i = 0; i < 7;++i){
        $("#canevas_"+i).hover(function (data) {
            let numberCanevas = data.target.id.split('_')
            if (numberCanevas[1] > 7) {
                return;
            }
            $.game.getbottomHover(Number(numberCanevas[1]) + 35, "blue")
            $(this).css('background-color', $.game.player)
        }, function (data) {
            let numberCanevas = data.target.id.split('_')
            if (numberCanevas[1] > 7) {
                return;
            }
            if (data.target.style.backgroundColor === 'yellow' || data.target.style.backgroundColor === 'red') {

            }else {
                $.game.getbottomHover(Number(numberCanevas[1]) + 35, 'white')
            }
        });
    }


})

