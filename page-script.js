const notesInfo = [
    {
        "title": "Lab 1: Taking Recordings - January 16, 2025",
        "contentSource": "./notes/lab1.md",
        "contentType": "MD"
    },
    {
        "title": "Repertoire Assignment - February 6, 2025",
        "contentSource": "./notes/MUSIC 275 Repertoire Assignment.pdf",
        "contentType": "PDF"
    },
    {
        "title": "Midterm Composition - February 25, 2025",
        "contentSource": "./notes/MUSIC 275 Midterm Statement.pdf",
        "contentType": "PDF"
    }
]

var parentDiv = document.getElementById("labNotesDropdowns")
let notesContent = [];

for (let i = 0; i < notesInfo.length; i++) {
    let item = notesInfo[i];
    let noteBefore = '<details><summary class="figtree">' + item.title + '</summary>'
    let note = '';
    if (item.contentType == "MD") {
        note = '<md-block class="figtree" src="' + item.contentSource + '">The note with the title: ' + item.title + ' was not found.</md-block>';
    } else if (item.contentType == "PDF") {
        note = '<br><object data="' + item.contentSource + '" type="application/pdf"><embed src="' + item.contentSource + '" type="application/pdf" /></object>';
    }
    let noteAfter = "</details>"
    notesContent.push(noteBefore + note + noteAfter)
}

parentDiv.insertAdjacentHTML(
    "beforeend",
    notesContent.join('')
)