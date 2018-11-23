var planets = {
    mars: 3.7,
    jupiter: 24.81,
    earth: 9.81,
    venus: 8.87,
    mercury: 3.7,
    saturn: 10.44,
    uranus: 8.87    
};
var planet, weight;


document.querySelector('.planet').style.display = 'none';
planet = prompt ('In what planet do you live?');
weight = prompt('What is your weight in kilograms on earth?');


if (planets[planet] ===  undefined)
{
    alert('You need to input a valid planet') ;
        }else
        {
planetaryWeight (weight, planet);
document.getElementById('planet').src = planet + '.png';
document.getElementById('planet').style.display = 'block'
planetaryWeight(weight, planet);


        }


function planetaryWeight (weight, planet){
    var yourWeightis = 0;
    yourWeightis = Math.floor(weight / 9.81 * planets[planet]);
    return document.getElementById('weightTxt').innerHTML = 'Your weight on ' + planet + ' is: ' + yourWeightis + ' Kg';
}

