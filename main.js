// TODO Add tests 

function maybeDoAction(action) {
    if (isActiveState()) {
        action();
    }
}

function search() {
    searchTerm = document.getElementById("searchTerm").value;
    searchableText = document.getElementById("searchableText").value;

    document.getElementById("searchResults").value = validateSearch(searchTerm, searchableText);
}

function validateSearch(searchTerm, searchableText) {
    if (!searchTerm || !searchableText) {
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
    lastFoundIndex = searchableText.indexOf(searchTerm, startingSearchIndex);

    while (lastFoundIndex != -1) {
        indicies.push(lastFoundIndex);
        startingSearchIndex = lastFoundIndex + searchTerm.length;
        lastFoundIndex = searchableText.indexOf(searchTerm, startingSearchIndex)
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

    // TODO What happens if new max is set below current foo and value is decremented or incremented?
    // If it can't be decremented, it'd be impossible to get it back down (unless you change the max foo)
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

function isActiveState() {
    return document.getElementById("flipButton").src === possibleSources.makeInactiveImage;
}

function flipState() {
    newSrc = isActiveState() ? possibleSources.makeActiveImage : possibleSources.makeInactiveImage;
    document.getElementById("flipButton").src = newSrc;
}
