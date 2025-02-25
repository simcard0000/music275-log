const notesInfo = [
    {
        "title": "Lab 1: Taking Recordings - January 16, 2025",
        "contentSource": "./notes/lab1.md"
    },
    {
        "title": "Repertoire Assignment - February 6, 2025",
        "contentSource": "./notes/repertoire-assignment.md"
    },
    {
        "title": "Midterm Composition - February 25, 2025",
        "contentSource": "./notes/midterm.md"
    }
]

var parentDiv = document.getElementById("labNotesDropdowns")
let notesContent = [];

for (let i = 0; i < notesInfo.length; i++) {
    let item = notesInfo[i];
    let noteBefore = '<details open><summary class="figtree">' + item.title + '</summary>'
    let note = '<md-block class="figtree" src="' + item.contentSource + '">The note with the title: ' + item.title + ' was not found.</md-block>';
    let noteAfter = "</details>"
    notesContent.push(noteBefore + note + noteAfter)
}

parentDiv.insertAdjacentHTML(
    "beforeend",
    notesContent.join('')
)