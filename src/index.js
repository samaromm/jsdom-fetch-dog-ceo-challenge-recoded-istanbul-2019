console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',function(){
  fetchDogs()
  fetchBreed()
})

function fetchDogs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
	.then(json => addingDog(json))
}

function fetchBreed(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
	.then(json => addingBreed(json))
}


function addingDog(json){
  let forImg = document.querySelector('#dog-image-container')
  let a= json['message']
  for(let ele of a){
    let photo = document.createElement('img')
    photo.src=ele
    forImg.appendChild(photo)
  }
}

function addingBreed(json){
  let forUl = document.querySelector('#dog-breeds')
  let a= json['message']
  for(let ele in a){
    let x=a[ele]
    if(x!==0){
    for(let wh of x){
      let list = document.createElement('li')
      list.innerText=ele+' ' +wh
      forUl.appendChild(list)
    }}
    
  }
}
