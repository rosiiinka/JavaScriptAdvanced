
let createBook = (function createBook() {
    let id = 1;
    return function (selector, titleName, authorName, isbn) {

        let fragment = document.createDocumentFragment();
        let collector = $(selector);

        let bookContainer = $("<div>");
        let titleParagraph = $("<p>");
        let authorParagraph = $("<p>");
        let isbnParagraph = $("<p>");
        let selectBtn = $("<button>Select</button>");
        let deselectBtn = $("<button>Deselect</button>");

        titleParagraph.text(titleName);
        authorParagraph.text(authorName);
        isbnParagraph.text(isbn);

        bookContainer.attr('id', 'book' + id);
        id++;
        titleParagraph.addClass('title');
        authorParagraph.addClass('author'); //autorParagraph.attr('class', author)
        isbnParagraph.addClass('isbn');

        selectBtn.on('click', function () {
            bookContainer.css("border", "2px solid blue");

        });

        deselectBtn.on('click', function () {
            bookContainer.css("border", "none");

        });

        bookContainer.append(titleParagraph)
            .append(authorParagraph)
            .append(isbnParagraph)
            .append(selectBtn)
            .append(deselectBtn);
        bookContainer.appendTo(fragment);
        collector.append(fragment);

    }
}())

