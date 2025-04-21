const drugs = [
    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
   ];
   
// 1. Get all drugs that are antibotics

// forEach loops through each drug
drugs.forEach(function(drug) {

    // Checks for the category
    if (drug.category === "Antibiotic")
    {
        console.log(drug.name) // Prints name of each drug
    }
})

// 2. Return an array of drug names in lowercase

// Creates new array of drugs converted to lowercase
let convertedNames = drugs.map(drug =>
    drug.name.toLowerCase()
);

// Prints lowercase names
console.log(convertedNames)

// 3. Write a function that accepts a category and returns 
// all drugs under that category

// Defines a function
function getDrugsByCategory(category) {

    // Compares the drug category
    return drugs.filter(drug => drug.category === category)
}

const antibotics = getDrugsByCategory("Antibiotic");
console.log(antibotics);

// 4. Log each drug's name and its manufacturer
drugs.forEach(drug => {
    console.log(`${drug.name} - ${drug.manufacturer}`);
});

// Creates new array of objects with selected properties
// drugName and manufacturerName
const mappedDrugs = drugs.map(function(drug){
    return {
        drugName: drug.name,
        manufacturerName: drug.manufacturer
    }
    
})

// Prints new array
console.log(mappedDrugs)

// 5. Return all drugs that require a prescription

// Filter menthod creates new array
const prescriptionDrugs = drugs.filter( drug =>

    // Checks if it is true
     drug.isPrescriptionOnly);

// Prints resulting array     
console.log(prescriptionDrugs)

// 6. Return a new array, each item should follow the format
// "Drug: [name] - [dosageMg]mg"

// The array method creates a new array
const namedDrugs = drugs.map(drug =>

    // returns a string in this format
    `Drug: ${drug.name} - ${drug.dosageMg}mg`
);
 // Prints the resulting array
console.log(namedDrugs)

// 7. Write a function that returns all drugs with a stock
// less than 50

// Defines the function
function getLowStorageDrugs() {

    // Use filter method to return array of drugs
    return drugs.filter(drug =>
         drug.stock < 50); // Checks if drug is below 50
}

const lowStorageDrugs = getLowStorageDrugs();
console.log(lowStorageDrugs);

// 8. Return all drugs that are not prescription only

// Use the filter method to create a new array with
// non-prescription drugs
const nonPrescriptionDrugs = drugs.filter( drug => 

    // The exclamation mark(!) checks for drugs where
    // isPrescriptionOnly is false
    !drug.isPrescriptionOnly);

// Log the resulting array of non-prescription
// drugs to the console
console.log(nonPrescriptionDrugs)

// 9. Write  a function that takes a manufacturer name and returns how many drugs
// are from that company

// Define a function that takes a manufacturer name as an argument
function drugsCountByManufacturer(manufacturerName) {

    // Use the filter method to return an array of drugs
    return drugs.filter(drug => drug.manufacturer === manufacturerName)
    
    // Get the number of matched items by checking the length
    // of the filtered array
    .length;
}

const gskCount = drugsCountByManufacturer("GSK");
console.log(gskCount);

// 10. Use forEach() to count how many drugs are Analgesics

//Initialize a counter variable to keep track of how
//many drugs are Analgesics
let count = 0;

// Use forEach to loop through each item in the drugs array
drugs.forEach(function(drug) {
    // Check if the category of the current drug is "Analgesics"
    if (drug.category === "Analgesics"){
        // if true, increment the counter by 1
        count++;
    }
});

// After the loop, log the total number
// of Analgesics to the console
console.log(`Total Analgesics: ${count}`); 