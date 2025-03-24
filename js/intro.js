function c(){
    let color="#";
    let a="abcdef123456789";
    for(i=0;i<6;i++){
        let code=Math.floor(Math.random()*10);
        color+=a[code]
    }
    document.body.style.backgroundColor=color
}