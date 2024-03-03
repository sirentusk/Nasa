// Load JSON data //

const fs = require('fs');
const data = fs.readFileSync("NEOWISE_Dataset.json", "utf8");

// Parse JSON data into objects
const neoData = JSON.parse(data);
Step 2: Basic functions

// Retrieve NEO information //
function getNeoInfo(index) {
    return neoData[index];
}

// Retrieve NEO information based on specific property
function getNeoByProperty(property, value) {
    return neoData.filter(neo => neo[property] === value);
}

// Display NEO information
function displayNeoInfo(index) {
    const neo = getNeoInfo(index);
    console.table(neo);
}

// Display information on all NEOs
function displayAllNeoInfo() {
    console.table(neoData);
}

// Display information on NEOs that meet criteria
function displayNeoByCriteria(criteria) {
    const filteredNeos = neoData.filter(neo => {
        // Add your filtering criteria here
        // Example: return neo.class === criteria;
    });
    console.table(filteredNeos);
}

// Measure maximum, minimum, and average values for NEO orbits
function measureOrbitValues() {
    // Add your logic here
}

// Determine NEO characteristics based on class or PHA
function determineNeoCharacteristics(classType) {
    // Add your logic here
}

// Rearrange NEO data into JSON output
function rearrangeNeoData() {
    // Add your logic here
}

// Export rearranged data
function exportNeoData() {
    const rearrangedData = rearrangeNeoData();
    const jsonRearrangedData = JSON.stringify(rearrangedData);
    fs.writeFileSync("Rearranged_NEO_Data.json", jsonRearrangedData);
}

// Jest unit tests

// Test getNeoInfo
test('Retrieve NEO information by index', () => {
    expect(getNeoInfo(0)).toEqual(neoData[0]);
});

// Test getNeoByProperty
test('Retrieve NEO information by property', () => {
    expect(getNeoByProperty('class', 'Aten')).toHaveLength(1);
});

// Test displayNeoInfo
test('Display NEO information', () => {
    const consoleSpy = jest.spyOn(console, 'table');
    displayNeoInfo(0);
    expect(consoleSpy).toHaveBeenCalled();
});
