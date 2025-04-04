const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list =  document.querySelector('ul');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = 'Delete Chapter';
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });    
}

function setChapterList(){
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

button.addEventListener('click', function() {
    // Check if the input is empty; if it is not empty, then ...
    if (input.value.trim() !== '') {
        // Call displayList with the input.value argument
        displayList(input.value);

        // Push the input.value into the chaptersArray
        chaptersArray.push(input.value);

        // Update the localStorage with the new array by calling a function named setChapterList
        setChapterList();

        // Set the input.value to nothing
        input.value = '';

        // Set the focus back to the input.
        input.focus();
    }
    // if (input.value.trim() !== '') {
    //     const li = document.createElement('li');
    //     const deleteButton = document.createElement('button');
    //     li.textContent = input.value;
    //     deleteButton.textContent = '❌';
    //     deleteButton.ariaLabel = 'Delete Chapter';
    //     li.append(deleteButton);
    //     list.append(li);

    //     deleteButton.addEventListener('click', function() {
    //         list.removeChild(li);
    //         input.focus();
    //     });

    //     input.value = '';
    // }

    // input.focus();
});

