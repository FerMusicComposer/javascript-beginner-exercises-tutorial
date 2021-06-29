function sing() {
    const lyric = "let it be";
    const verse1 = "whisper words of wisdom, "
    const verse2 = "there will be an answer, "
    
    let songLyric = '';

    for (let i = 1; i <= 10; i++) {

        if (i === 5) {
            songLyric += verse1
        }
        else if (i === 10) {
            songLyric += verse2
        }

        songLyric += i != 10 ? lyric + ', ' : lyric
    }

    return songLyric

    // let isInSecondVerse = false;
    // const lyric = "let it be";
    // const verse1 = "whisper words of wisdom, "
    // const verse2 = "there will be an answer, "

    // let songLyric = '';

    // let repetitions = 1;

    // for (let i = 1; i <= 10; i++) {

    //     if (repetitions === 5 && isInSecondVerse === false) {
    //         songLyric += verse1
    //         repetitions = 1
    //         isInSecondVerse = true
    //     }
    //     else if (repetitions === 6) {
    //         songLyric += verse2
    //     }

    //     songLyric += i != 10 ? lyric + ', ' : lyric
    //     repetitions++
  
    // }

    // return songLyric

    // for (let i = 1; i <=4; i++) {
    //     if (i === 4 && !isInSecondVerse) { 
    //         songLyric = lyric += verse1;
    //     }
    //     return songLyric;
    //         for (let j = 1; i <= 9; i++) {
    //             if (i === 9 && !isInSecondVerse) 
    //             return songLyric += verse2; 
    //                 for (i === 9; i < 10; i++){
    //                     return songLyric += lyric;
    //         }
    //     }
    //     return songLyric;
    // }
    
}

//Your code above ^^^

console.log(sing());