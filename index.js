let bigGreenTree = document.createElement('img')
let regularTree = document.createElement('img')
let pillar = document.createElement('img')
let box = document.createElement('img')
let crate = document.createElement('img')
let well = document.createElement('img')

// PINE TREE 
function newImage(bigGreenTree) {
    bigGreenTree.src = 'assets/pine-tree.png'
    bigGreenTree.style.position = 'fixed'
    bigGreenTree.style.left = '450px'
    bigGreenTree.style.bottom = '200px'
    document.body.append(bigGreenTree)
} 

newImage(bigGreenTree)
// PINE TREE

// initial code 
let link = document.createElement('img')
link.src = 'assets/green-character.gif'
link.style.position = 'fixed'
link.style.left = '100px'
link.style.bottom = '100px'
document.body.append(link)
// initial code

// REGULAR TREE
function newTree(regularTree) {
    regularTree.src = 'assets/tree.png'
    regularTree.style.position = 'fixed'
    regularTree.style.left = '200px'
    regularTree.style.bottom = '300px'
    document.body.append(regularTree)
} 

newTree(regularTree)
// REGULAR TREE

// Pillar
function imageThree(pillar) {
    pillar.src = 'assets/pillar.png'
    pillar.style.position = 'fixed'
    pillar.style.left = '350px'
    pillar.style.bottom = '100px'
    document.body.append(pillar)
} 

imageThree(pillar)
// Pillar

// crate
function imageFour(crate) {
    crate.src = 'assets/crate.png'
    crate.style.position = 'fixed'
    crate.style.left = '150px'
    crate.style.bottom = '200px'
    document.body.append(crate)
} 

imageFour(crate)
// crate

// WELL
function imageFive(well) {
    well.src = 'assets/well.png'
    well.style.position = 'fixed'
    well.style.left = '500px'
    well.style.bottom = '425px'
    document.body.append(well)
} 

imageFive(well)
// WELL

// SWORD

function newItem (imageURL, left, bottom) {
    let misc = document.createElement ('img')
    misc.src = imageURL
    misc.style.position = 'fixed'
    misc.style.left = left+'px'
    misc.style.bottom = bottom+'px'
    document.body.append(misc)
    misc.addEventListener('dblclick', function() {
        misc.remove()
    })
}
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
// SWORD


