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

// Maximum, minimum, and average values for NEO orbits
function measureOrbitValues() {
    const orbitValues = neoData.map(neo => neo.period_yr); // Assuming you want to measure the period_yr property
    const maxOrbit = Math.max(...orbitValues);
    const minOrbit = Math.min(...orbitValues);
    const avgOrbit = orbitValues.reduce((sum, value) => sum + value, 0) / orbitValues.length;
    return { maxOrbit, minOrbit, avgOrbit };
}

// NEO characteristics based on class or PHA
function determineNeoCharacteristics(classType) {
    const neoCharacteristics = neoData.filter(neo => neo.orbit_class === classType || (neo.pha && neo.orbit_class === classType));
    return neoCharacteristics;
}

// Rearrange NEO data into JSON output
function rearrangeNeoData() {
    const neoClasses = {};
    neoData.forEach(neo => {
        if (!neoClasses[neo.orbit_class]) {
            neoClasses[neo.orbit_class] = [];
        }
        neoClasses[neo.orbit_class].push(neo);
    });
    return neoClasses;
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
