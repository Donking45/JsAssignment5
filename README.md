# Drug Inventory Utilities

This repository contains JavaScript functions and operations for managing and querying a drug inventory system. It uses a predefined array of drug objects with properties like name, category, dosage, stock, and manufacturer.


## Features

- List all drug name- Filter drugs by category
- Get drugs that require or don’t require prescriptions
- Find drugs with low stock
- Format drug names and dosages
- Count drugs by manufacturer
- List manufacturer names alongside drug names
- Get drug names in lowercase


## Sample Data

The dataset includes 20 different drugs with details like:
- `name`: Name of the drug
- `category`: Drug category (e.g., Analgesic, Antibiotic)
- `dosageMg`: Dosage in milligrams
- `isPrescriptionOnly`: Boolean flag for prescription requirement
- `stock`: Available stock
- `manufacturer`: Drug manufacturer


## How to Use

Just include the `drugs` array and the related functions in your JavaScript file or script environment, and call them as needed:


```javascript
console.log(getDrugsByCategory("Antibiotic"));
console.log(countDrugsByManufacturer("GSK"));
