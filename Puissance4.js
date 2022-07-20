class puissance4 {
    constructor(col = 6, row = 7) {
        this.row = 7;
        this.col = 6;
        this.score_player1 = 0;
        this.score_player2 = 0;
        this.player = 1;
    }

    initGame() {
        let p = 1
        for (let i = 0; i < this.row; ++i) {
            this.newDiv = document.createElement('div');
            this.newDiv.id = "remove";
            for (let o = 0; o < this.col; ++o) {
                let canvas = document.createElement('canvas');
                canvas.setAttribute('id', 'canevas_' + p)
                canvas.setAttribute('class', 'canevas')
                canvas.style.backgroundColor = 'white'
                ++p;
                this.newDiv.appendChild(canvas)
            }
            document.getElementById('puissance-grid').appendChild(this.newDiv)
        }
        $('#puissance-grid').append('<button id="rejouer">Rejouer</button>');
    }

    playGame(event) {
        let target = event.target
        if (target instanceof HTMLCanvasElement) {
            $.nbrTarget = target.id.split('_')[1]
            if ($.nbrTarget > 7) {
                return;
            }
            //this.generateAnim(event.x, event.y, target.x, target.y)
            this.getBootomMax(Number($.nbrTarget) + 36, this.player === 1 ? 'yellow' : 'red');
            this.player === 1 ? this.player = 2 : this.player = 1;
        }
    }


    getBootomMax(target, color) {
        if (target < 1) {
            alert("Tu ne peux pas en rajouter plus")
            return;
        }
        $.newTarget = document.getElementById('canevas_' + target);
        $.color = $.newTarget.style.backgroundColor;
        if ($.color === 'yellow' || $.color === 'red') {
            return this.getBootomMax(target - 6, color)
        }
        $.newTarget.style.backgroundColor = color;
    }

    getbottomHover(numberCanevas, color) {
        if (numberCanevas < 0) {
            alert("Tu ne peux pas en rajouter plus")
            return;
        }
        let targetCanevase = Number(numberCanevas);

        let test = document.getElementById('canevas_' + targetCanevase)
        if (test.style.backgroundColor === 'yellow' || test.style.backgroundColor === 'red') {
            return this.getbottomHover(numberCanevas - 6, color)
        }
        test.style.backgroundColor = color
    }

    getStreakHorizontal() {
        $.colorStreak1 = 1
        $.baseColor1 = 'white'
        for (let i = 1; i < 6; ++i) {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor1) {
                $.baseColor1 = $.color;
                $.colorStreak1 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak1++;
                    if ($.colorStreak1 >= 4) {
                        $.colorStreak1 = 0
                        $.baseColor1 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        }
        $.colorStreak2 = 1
        $.baseColor2 = 'white'
        for (let i = 7; i < 12; ++i) {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor2) {
                $.baseColor2 = $.color;
                $.colorStreak2 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak2++;
                    if ($.colorStreak2 >= 4) {
                        $.colorStreak2 = 0
                        $.baseColor2 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        }

        $.colorStreak2 = 1
        $.baseColor2 = 'white'
        for (let i = 13; i < 18; ++i) {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor3) {
                $.baseColor3 = $.color;
                $.colorStreak3 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak3++;
                    if ($.colorStreak3 >= 4) {
                        $.colorStreak3 = 0
                        $.baseColor3 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        }
        $.colorStreak3 = 1
        $.baseColor3 = 'white'

        for (let i = 19; i < 24; ++i) {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor4) {
                $.baseColor4 = $.color;
                $.colorStreak4 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak4++;
                    if ($.colorStreak4 >= 4) {
                        $.colorStreak4 = 0
                        $.baseColor4 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        }
        $.colorStreak4 = 1
        $.baseColor4 = 'white'
        for (let i = 25; i < 30; ++i) {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor5) {
                $.baseColor5 = $.color;
                $.colorStreak5 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak5++;
                    if ($.colorStreak5 >= 4) {
                        $.colorStreak5 = 0
                        $.baseColor5 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        }
        $.colorStreak6 = 1
        $.baseColor6 = 'white'
        for (let i = 31; i < 36; ++i) {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor6) {
                $.baseColor6 = $.color;
                $.colorStreak6 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak6++;
                    if ($.colorStreak6 >= 4) {
                        $.colorStreak6 = 0
                        $.baseColor6 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        }
        $.colorStreak7 = 1
        $.baseColor7 = 'white'
        for (let i = 37; i < 42; ++i) {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor6) {
                $.baseColor7 = $.color;
                $.colorStreak7 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak6++;
                    if ($.colorStreak7 >= 4) {
                        $.colorStreak7 = 0
                        $.baseColor7 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        }
    }

    getVerticalStreak() {
        let col1 = [1, 7, 13, 19, 25, 31, 37];
        let col2 = [2, 8, 14, 20, 26, 32, 38];
        let col3 = [3, 9, 15, 21, 27, 33, 39];
        let col4 = [4, 10, 16, 22, 28, 34, 40];
        let col5 = [5, 11, 17, 23, 29, 35, 41];
        let col6 = [6, 12, 18, 24, 30, 36, 42];
        $.baseColor1 = 'white'
        $.colorStreak1 = 1;
        col1.forEach(t => {
            $.newTarget = document.getElementById('canevas_' + t);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor1) {
                $.baseColor1 = $.color;
                $.colorStreak1 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak1++;
                    if ($.colorStreak1 >= 4) {
                        $.colorStreak1 = 0
                        $.baseColor1 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor2 = 'white'
        $.colorStreak2 = 1;
        col2.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor2) {
                $.baseColor2 = $.color;
                $.colorStreak2 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak2++;
                    if ($.colorStreak2 >= 4) {
                        $.colorStreak2 = 0
                        $.baseColor2 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor3 = 'white'
        $.colorStreak3 = 1;
        col3.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor3) {
                $.baseColor3 = $.color;
                $.colorStreak3 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak3++;
                    if ($.colorStreak3 >= 4) {
                        $.colorStreak3 = 0
                        $.baseColor3 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor4 = 'white'
        $.colorStreak4 = 1;
        col4.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor4) {
                $.baseColor4 = $.color;
                $.colorStreak4 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak4++;
                    if ($.colorStreak4 >= 4) {
                        $.colorStreak4 = 0
                        $.baseColor4 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor5 = 'white'
        $.colorStreak5 = 1;
        col5.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor5) {
                $.baseColor5 = $.color;
                $.colorStreak5 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak4++;
                    if ($.colorStreak5 >= 4) {
                        $.colorStreak5 = 0
                        $.baseColor5 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor6 = 'white'
        $.colorStreak6 = 1;
        col6.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor6) {
                $.baseColor6 = $.color;
                $.colorStreak6 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak6++;
                    if ($.colorStreak6 >= 4) {
                        $.colorStreak6 = 0
                        $.baseColor6 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
    }

    getDiagonal1() {
        let diag1 = [1, 8, 15, 22, 28, 34];
        let diag2 = [2, 9, 16, 23, 30];
        let diag3 = [3, 10, 17, 24];
        let diag4 = [7, 14, 21, 28, 35, 42];
        let diag5 = [13, 20, 27, 34, 41];
        let diag6 = [19, 26, 33, 40];
        $.baseColor1 = 'white'
        $.colorStreak1 = 1;
        diag1.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor1) {
                $.baseColor1 = $.color;
                $.colorStreak1 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak1++;
                    if ($.colorStreak1 >= 4) {
                        $.colorStreak1 = 0
                        $.baseColor1 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor2 = 'white'
        $.colorStreak2 = 1;
        diag2.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor2) {
                $.baseColor2 = $.color;
                $.colorStreak2 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak2++;
                    if ($.colorStreak2 >= 4) {
                        $.colorStreak2 = 0
                        $.baseColor2 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor3 = 'white'
        $.colorStreak3 = 1;
        diag3.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor3) {
                $.baseColor3 = $.color;
                $.colorStreak3 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak3++;
                    if ($.colorStreak3 >= 4) {
                        $.colorStreak3 = 0
                        $.baseColor3 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor4 = 'white'
        $.colorStreak4 = 1;
        diag4.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor4) {
                $.baseColor4 = $.color;
                $.colorStreak4 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak4++;
                    if ($.colorStreak4 >= 4) {
                        $.colorStreak4 = 0
                        $.baseColor4 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor5 = 'white'
        $.colorStreak5 = 1;
        diag5.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor5) {
                $.baseColor5 = $.color;
                $.colorStreak5 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak5++;
                    if ($.colorStreak5 >= 4) {
                        $.colorStreak5 = 0
                        $.baseColor5 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor6 = 'white'
        $.colorStreak6 = 1;
        diag6.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor6) {
                $.baseColor6 = $.color;
                $.colorStreak6 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak6++;
                    if ($.colorStreak6 >= 4) {
                        $.colorStreak6 = 0
                        $.baseColor6 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })


    }

    getDiagonal2() {
        let diag1 = [39, 34, 29, 24];
        let diag2 = [38, 33, 28, 23, 18]
        let diag3 = [37, 32, 27, 22, 17, 12];
        let diag4 = [31, 26, 21, 16, 11, 6];
        let diag5 = [25, 20, 15, 10, 5];
        let diag6 = [19, 14, 9, 4];
        $.baseColor1 = 'white'
        $.colorStreak1 = 1;
        diag1.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor1) {
                $.baseColor1 = $.color;
                $.colorStreak1 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak1++;
                    if ($.colorStreak1 >= 4) {
                        $.colorStreak1 = 0
                        $.baseColor1 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor2 = 'white'
        $.colorStreak2 = 1;
        diag2.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor2) {
                $.baseColor2 = $.color;
                $.colorStreak2 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak2++;
                    if ($.colorStreak2 >= 4) {
                        $.colorStreak2 = 0
                        $.baseColor2 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor3 = 'white'
        $.colorStreak3 = 1;
        diag3.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor3) {
                $.baseColor3 = $.color;
                $.colorStreak3 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak3++;
                    if ($.colorStreak3 >= 4) {
                        $.colorStreak3 = 0
                        $.baseColor3 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor4 = 'white'
        $.colorStreak4 = 1;
        diag4.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor4) {
                $.baseColor4 = $.color;
                $.colorStreak4 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak4++;
                    if ($.colorStreak4 >= 4) {
                        $.colorStreak4 = 0
                        $.baseColor4 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor5 = 'white'
        $.colorStreak5 = 1;
        diag5.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor5) {
                $.baseColor5 = $.color;
                $.colorStreak5 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak5++;
                    if ($.colorStreak5 >= 4) {
                        $.colorStreak5 = 0
                        $.baseColor5 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
        $.baseColor6 = 'white'
        $.colorStreak6 = 1;
        diag6.forEach(i => {
            $.newTarget = document.getElementById('canevas_' + i);
            $.color = $.newTarget.style.backgroundColor;
            if ($.color !== $.baseColor6) {
                $.baseColor6 = $.color;
                $.colorStreak6 = 1;
            } else {
                if ($.color === "white") {
                } else {
                    $.colorStreak6++;
                    if ($.colorStreak6 >= 4) {
                        $.colorStreak6 = 0
                        $.baseColor6 = 'white'
                        if ($.color === 'red') {
                            this.score_player2++;
                        } else {
                            this.score_player1++;
                        }
                        this.winGame($.color)
                    }
                }
            }
        })
    }


    winGame(color) {
        let divCasseCouille = document.querySelectorAll('#remove');
        if (confirm("La couleur " + color + " a gagnée")) {
            this.player = 1;
            divCasseCouille.forEach(div => {
                document.getElementById('puissance-grid').removeChild(div);
            })
            document.getElementById('puissance-grid').removeChild(document.querySelectorAll("button")[0])
            this.initGame();
        }
    }
}

$.game = new puissance4();
$.game.initGame();
$(document).ready(function (data) {
    document.addEventListener('click', (event) => {
        $.game.playGame(event);
    })

    for (let i = 1; i < 7; ++i) {
        $("#canevas_" + i).hover(function (data) {
            let numberCanevas = data.target.id.split('_')
            if (numberCanevas[1] > 7) {
                return;
            }
            $.game.getbottomHover(Number(numberCanevas[1]) + 36, $.game.player === 1 ? '#fffc85' : '#ab0808')
            $(this).css('background-color', $.game.player)
        }, function (data) {
            let numberCanevas = data.target.id.split('_')
            if (numberCanevas[1] > 6) {
                return;
            }
            if (data.target.style.backgroundColor === 'yellow' || data.target.style.backgroundColor === 'red') {
            } else {
                $.game.getbottomHover(Number(numberCanevas[1]) + 36, 'white')
            }
        });
    }

    function initclick(){
        let restart = document.getElementById('rejouer');
        restart.addEventListener('click', event =>{
            let divCasseCouille = document.querySelectorAll('#remove');
            this.player = 1;
            divCasseCouille.forEach(div => {
                document.getElementById('puissance-grid').removeChild(div);
            })
            document.getElementById('puissance-grid').removeChild(document.querySelectorAll("button")[0])
            $.game.initGame();
            initclick();
        })
    }

    initclick();

    setInterval(() => {

        $.game.getStreakHorizontal()
        $.game.getVerticalStreak();
        $.game.getDiagonal1();
        $.game.getDiagonal2();
        document.getElementById("player2").innerHTML = "Points du joueur 1: " + $.game.score_player2;
        document.getElementById("player1").innerHTML = "Points du joueur 1: " + $.game.score_player1;
    }, 10);
})





