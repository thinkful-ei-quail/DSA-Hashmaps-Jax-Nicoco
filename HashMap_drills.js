const HashMap = require('./HashMap');

// function main() {
//     const lotr = new HashMap();
//     HashMap.MAX_LOAD_RATIO = 0.5
//     HashMap.SIZE_RATIO = 3
//     lotr.set("Hobbit", "Bilbo")
//     lotr.set("Hobbit", "Frodo")
//     lotr.set("Wizard", "Gandalf")
//     lotr.set("Human", "Aragorn")
//     lotr.set("Elf", "Legolas")
//     lotr.set("Maiar", "The Necromancer")
//     lotr.set("Maiar", "Sauron")
//     lotr.set("RingBearer", "Gollum")
//     lotr.set("LadyOfLight", "Galadriel")
//     lotr.set("HalfElven", "Arwen")
//     lotr.set("Ent", "Treebeard")
//     console.log(lotr)
// }
// main()

//two different has maps, so two different values console logs, str1 is being replaced with the value of string 3, and str2 is being replaced with the value of str4.
// const WhatDoesThisDo = function(){
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new HashMap();
//     map1.set(str1,10);
//     map1.set(str2,20);
//     let map2 = new HashMap();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3,20);
//     map2.set(str4,10);

//     console.log(map1.get(str1));
//     console.log(map2.get(str3));
// }
// WhatDoesThisDo()


// console.log(5%9) //5
// console.log(28%9) //1
// console.log(19%9) //1
// console.log(15%9) //6
// console.log(20%9) //2
// console.log(33%9) //6
// console.log(12%9) //3
// console.log(17%9) //8
// console.log(10%9) //1

// function deleteDuplicateChars(str) {
//     const chars = new HashMap();
//     let newString = '';
//     for (let i = 0; i < str.length; i++) {
//         try {
//             chars.get(str[i]);
//         } catch (e) {
//             newString += str[i];
//             chars.set(str[i], true);
//         }
//     }
//     return newString;
// }

// console.log(deleteDuplicateChars('google'));


//5. Any permutation a palindrome
function palindrome(str) {
    if(str.length < 2) {
        return false
    }
    let pal = new HashMap()
    for(let i = 0; i < str.length; i++) {
        try {
            pal.delete(str[i])
        } catch (e) {
            pal.set(str[i])
        }
    }
    if(pal.length <=1) {
        return true
    } else {
        return false
    }
}
console.log(palindrome('racecar'))
console.log(palindrome('moon'))
console.log(palindrome('acecarr'))

// 6. Anagram grouping

function anagram(arr) {
    let anagramMap = new HashMap()
    
}