const chapterScroll = document.getElementsByClassName('chapterScroll')[0];
const chooseChapter = document.getElementsByClassName('chooseChapter')[0];
const imgCont = document.getElementsByClassName('imgCont')[0];

const chapters = [
    {ch:'Chapter 1', link:''}, 
    {ch:'Chapter 2', link:''}, 
    {ch:'Chapter 3', link:''}, 
    {ch:'Chapter 4', link:''}, 
    {ch:'Chapter 5', link:''}, 
    {ch:'Chapter 7', link:''}, 
    {ch:'Chapter 8', link:''}, 
    {ch:'Chapter 9', link:''}, 
    {ch:'Chapter 10', link:''}
]
const imgs= [
    '', 
    '', 
    '', 
    '',
    '',
    '',
    '',
    '', 
    '', 
    '', 
    ''
]

let v =0;

for(let i= 0;i<imgs.length;i++){
    const imgPlace = document.createElement('img');
    imgPlace.classList.add('imgPlace');
    imgCont.append(imgPlace);
    imgPlace.src = imgs[i];
}

const scrollClick = ()=>{
  if (v===0){
    for (let i =0;i<chapters.length;i++) {
    const chapterCont = document.createElement('div');
    chapterCont.classList.add('chapterCont');
    chapterScroll.append(chapterCont);
    
    const chapterTag = document.createElement('a');
    chapterTag.classList.add('chapterTag');
    chapterCont.append(chapterTag);
    chapterTag.innerHTML=chapters[i].ch;
    
    chapterScroll.classList.add('scrolled');
    
    chapterTag.href='https://www.google.com'
    v=1;
    
  }
  }else{
    chapterScroll.innerHTML='';
    v=0;
  }

}

chooseChapter.addEventListener('click', scrollClick);

