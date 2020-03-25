
window.addEventListener("DOMContentLoaded", function(event) {

            const apiList1 = document.querySelector('#card1');
            const apiList2 = document.querySelector('#card2');
            const apiList3 = document.querySelector('#card3');
            const apiList4 = document.querySelector('#card4');

            var ajx = new XMLHttpRequest();
            ajx.open('GET', 'https://arfp.eu/dataset/cards.json', true);
            ajx.onload = function() {
                if (this.status === 200) {
                    var json = JSON.parse(this.responseText);
                    var maxAttack = getMax(json, "attack");
                    var maxArmor  = getMax (json,"armor");
                    var maxPlayed = getMax (json,"played");
                    var maxVictory = getMax (json,"victory");

                          apiList1.innerHTML +='<h1>'+maxAttack.id+'  '+maxAttack.name+'</h1>'

                          apiList1.innerHTML += '<h5>'+'Played :  ' + maxAttack.played +' | '+'Victoire : '+ maxAttack.victory+'</h5>'

                          apiList1.innerHTML += '<h2>'+'Power  :'+maxAttack.power+'</h2>'
                          apiList1.innerHTML +='<h2>'+'Attaque :'+maxAttack.attack+'</h2>'
                          apiList1.innerHTML +='<h2>'+'Defense :'+maxAttack.armor+'</h2>'

                          apiList2.innerHTML +='<h1>'+maxArmor.id+'  '+maxArmor.name+'</h1>'
                          apiList2.innerHTML += '<h5>'+'Played :  ' + maxArmor.played +' | '+'Victoire : '+ maxArmor.victory+'</h5>'

                          apiList2.innerHTML += '<h2>'+'Power  :'+maxArmor.power+'</h2>'
                          apiList2.innerHTML +='<h2>'+'Attaque :'+maxArmor.attack+'</h2>'
                          apiList2.innerHTML +='<h2>'+'Defense :'+maxArmor.armor+'</h2>'


                          apiList3.innerHTML +='<h1>'+maxPlayed.id+'  '+maxPlayed.name+'</h1>'
                          apiList3.innerHTML += '<h5>'+'Played :  ' + maxPlayed.played +' | '+'Victoire : '+ maxPlayed.victory+'</h5>'

                          apiList3.innerHTML += '<h2>'+'Power  :'+maxPlayed.power+'</h2>'
                          apiList3.innerHTML +='<h2>'+'Attaque :'+maxPlayed.attack+'</h2>'
                          apiList3.innerHTML +='<h2>'+'Defense :'+maxPlayed.armor+'</h2>'


                          apiList4.innerHTML +='<h1>'+maxVictory.id+'  '+maxVictory.name+'</h1>'
                          apiList4.innerHTML += '<h5>'+'Played :  ' + maxVictory.played +' | '+'Victoire : '+ maxVictory.victory+'</h5>'

                          apiList4.innerHTML += '<h2>'+'Power  :'+maxVictory.power+'</h2>'
                          apiList4.innerHTML +='<h2>'+'Attaque :'+maxVictory.attack+'</h2>'
                          apiList4.innerHTML +='<h2>'+'Defense :'+maxVictory.armor+'</h2>'



                }
            };

            ajx.send();



        });

        function getMax(arr, prop) {
            var max;
            for (var i=0 ; i<arr.length ; i++) {
                if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
                    max = arr[i];
            }
            return max;
        }
