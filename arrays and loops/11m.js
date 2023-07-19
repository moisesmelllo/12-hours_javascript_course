function countWords(words) {
    const counter = {}

    for (let i = 0; i < words.length; i++) {
        let word = words[i]

        if (!counter[word]) {
            counter[word] = 1
        } else {
            counter[word]++
        }
    }
    console.log(counter)
}

countWords(['eu', 'memu', 'eu'])