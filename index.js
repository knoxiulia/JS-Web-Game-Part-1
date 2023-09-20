let bigGreenTree = document.createElement('img')
let regularTree = document.createElement('img')

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
function imageThree(regularTree) {
    regularTree.src = 'assets/pillar.png'
    regularTree.style.position = 'fixed'
    regularTree.style.left = '350px'
    regularTree.style.bottom = '100px'
    document.body.append(regularTree)
} 

imageThree(regularTree)
// Pillar

