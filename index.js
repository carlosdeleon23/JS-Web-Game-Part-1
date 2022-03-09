function newImage(assets, left, bottom){

    let generalImage = document.createElement('img')
generalImage.src = assets
generalImage.style.position = 'fixed'
generalImage.style.left = left
generalImage.style.bottom = bottom
document.body.append(generalImage)

}

function newItem(assets, left, bottom){

    let generalItem = document.createElement('img')
generalItem.src = assets
generalItem.position = 'fixed'
generalItem.left = left
generalItem.bottom = bottom
document.body.append(generalItem)

generalItem.addEventListener('dblclick', function(){
    generalItem.remove()
})
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')