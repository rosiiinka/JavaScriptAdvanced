function initializeTable() {
    initializeTable();
    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        if (country.val().trim() == '' || capital.val().trim() == '') {
            return;
        }
        addCountryCapital(country.val().trim(), capital.val().trim());
        country.val('');
        capital.val('');
    }
    function addCountryCapital(country, capital) {
        $('#countriesTable')
            .append($('<tr>')
                .append($('<td>').text(country))
                .append($('<td>').text(capital))
                .append($('<td>')
                    .append($('<a href="#">[Up]</a>')
                        .click(moveItemUp))
                    .append(' ')
                    .append($('<a href="#">[Down]</a>')
                        .click(moveItemDown))
                    .append(' ')
                    .append($('<a href="#">[Delete]</a>')
                        .click(deleteItem))
                )
            );
        fixActionLinks();
    }
    function moveItemUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.prev().insertAfter(row);
            fixActionLinks();
            row.fadeIn();
        });
    }
    function moveItemDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.next().insertBefore(row);
            fixActionLinks();
            row.fadeIn();
        });
    }
    function fixActionLinks() {
        let rows = $('#countriesTable')
            .find('tr')
            .toArray();
        rows.splice(0, 2);
        $(rows).find('td a')
            .css('display', 'inline');
        $(rows[0]).find('td a:contains("Up")')
            .css('display', 'none');
        $(rows[rows.length - 1]).find('td a:contains("Down")')
            .css('display', 'none');
    }
    function deleteItem() {
        $(this).parent().parent().fadeOut(function () {
            fixActionLinks();
        });
    }
    function initializeTable() {
        addCountryCapital('Bulgaria', 'Sofia');
        addCountryCapital('Germany', 'Berlin');
        addCountryCapital('Russia', 'Moscow');
        $('#createLink').click(createCountry);
    }
}
