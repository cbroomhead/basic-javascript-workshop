var quotes =[
"You must be the change you wish to see in the world.",
"Live as if you were to die tomorrow; learn as if you were to live forever.",
"Happiness is when what you think, what you say, and what you do are in harmony.",
"An eye for eye only ends up making the whole world blind.",
"The weak can never forgive. Forgiveness is the attribute of the strong.",
"First they ignore you, then they laugh at you, then they fight you, then you win.",
"Strength does not come from physical capacity. It comes from an indomitable will.",
"The best way to find yourself is to lose yourself in the service of others.",
"You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
"A man is but the product of his thoughts; what he thinks, he becomes."
];
var fortuneTeller = function(){
   var n = Math.floor(Math.random() *10);
   return quotes[n];
};

console.log(fortuneTeller());