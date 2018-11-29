// TODO Add tests

function search() {
    searchTerm = document.getElementById("searchTerm").value;
    searchableText = document.getElementById("searchableText").value;

    document.getElementById("searchResults").value = validateSearch(searchTerm, searchableText);
}

function validateSearch(searchTerm, searchableText) {
    if (!searchTerm || !searchableText) {
        // TODO Do I need to check all inpput fields like max Foo
        if (!searchTerm && ! searchableText) {
            return "All search fields are empty.";
        } else if (!searchTerm) {
            return "Search term is empty.";
        } else {
            return "Searchable text is empty.";
        }
    } else {
        results = searchBy(searchTerm, searchableText);
        return results.length ? results : "No matching text was found.";
    }
}

function searchBy(searchTerm, searchableText) {
    startingSearchIndex = 0;
    indicies = [];

    while (searchableText.indexOf(searchTerm, startingSearchIndex) != -1) {
        // TODO Can I only make that call once per loop or is that the fencepost problem?
        indicies.push(searchableText.indexOf(searchTerm,startingSearchIndex));
        startingSearchIndex += searchTerm.length;
    }

    return indicies;
}

// Because Javascript doesn't allow operators to be passed in directly
function addOne(n) {
    return n + 1;
}

function subtractOne(n) {
    return n - 1;
}

function updateNumber(mathOperator) {
    oldCount = document.getElementById("fooCounter").value;
    newCount = mathOperator(parseInt(oldCount));
    maxCount = parseInt(document.getElementById("maxFoo").value);
    maxCount = isNaN(maxCount) ? Number.MAX_SAFE_INTEGER : maxCount;

    // TODO What happens if new max is set below current foo and value is incremented?
    if (newCount <= maxCount) { 
        updateNumberField(mathOperator, "fooCounter");
    } else {
        updateNumberField(mathOperator, "barCounter");
    }
}

function updateNumberField(mathOperator, fieldId) {
    oldCount = document.getElementById(fieldId).value;
    newCount = mathOperator(parseInt(oldCount));
    document.getElementById(fieldId).value = newCount;
}

// Made global so can set state initially
possibleSources = {
    makeActiveImage : "http://addplaybuttontoimage.way4info.net/Images/Icons/25.png",
    makeInactiveImage : "http://pluspng.com/img-png/pause-button-png-pause-flat-button-png-512.png"
}

function flipState() {
    // TODO Make page inactive (intiially and after click)
    newSrc = document.getElementById("flipButton").src === possibleSources.makeActiveImage ? possibleSources.makeInactiveImage : possibleSources.makeActiveImage;
    document.getElementById("flipButton").src = newSrc;
}
