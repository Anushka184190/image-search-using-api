const searchForm=document.querySelector('form');
const searchInput=document.querySelector('.search-input');
const imagesContainer=document.querySelector('.images-container')
const accessKey='gJ4qAHngQjkjsZqfqyW830y90y9sWaEp4bmZO7fNcTw';
const secreatKey='_IY2IOz7-RH4JmT-9a8R6oJKuf3Nteqvsp0La1Z4fWc';
const fetchImages=async(query)=>{
    const url=`https://api.unsplash.com/photos/?query=${query}&per_page=28&client_id=${accessKey}`;
    const response = await fetch(url);
    const data= await response.json();
    data.forEach(photo => {
        const imageElement=document.createElement('div');
        imageElement.innerHTML=`<img src="${photo.urls.regular}">`
        imagesContainer.appendChild(imageElement);
    });
}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputText=searchInput.value;
    console.log(inputText);
    if(inputText!==' ')
    {
        fetchImages(inputText);
    }
    else{
        imagesContainer.innerHTML=`<h2>please enter search query<h2>`
    }
})