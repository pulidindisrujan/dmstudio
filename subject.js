const params = new URLSearchParams(window.location.search);

const subject = params.get("subject");

const subjectTitle = document.getElementById("subjectTitle");
const subjectHeader = document.getElementById("subjectHeader");
const subjectDescription = document.getElementById("subjectDescription");
const pdfList = document.getElementById("pdfList");

/* =========================
SUBJECT DATA
========================= */

const subjectData = {

Anatomy: {
    title: "Anatomy",
    description: "Select an Anatomy study material."
},

Physiology: {
    title: "Physiology",
    description: "Select a Physiology study material."
},

Biochemistry: {
    title: "Biochemistry",
    description: "Select a Biochemistry study material."
}

};

/* =========================
PDF LIBRARY
========================= */

const pdfLibrary = {

/* =========================
   ANATOMY
========================= */

Anatomy: [

    "1.disection",
    "2.steps for dissection",
    "3.upper limb (Anterior compartment&Axilla)",
    "4.pectoral region",
    "5.Deltoid muscle& scapular Region",
    "6.Axillary Vessels",
    "7.Front of the Arm",
    "8.Cubital Fossa",
    "9.Front of the Forearm",
    "10.Hand",
    "11.Back of Arm & Forearm",
    "12.Lungs",
    "13.Heart Part-I",
    "14.Heart Part-II",
    "15.Stomach",
    "16.Spleen",
    "17.Liver",
    "18.Kidney",
    "19.Urinary Bladder",
    "20.Testes",
    "21.Uterus",
    "22.Sagittal section of Female Pelvis",
    "23.Anterior compartment of Thigh",
    "24.Medial compartment of Thigh",
    "25.Posterior Compartment of Thigh",
    "26.Gluteal Region",
    "27.anterior & Lateral Compartment of Leg",
    "28.Skull Foramina",
    "29.Sagittal Section of Neck",
    "30.Larynx",
    "31.sagittal section of face",
    "32.Brain",
    "33.Sections of the Brain",
    "34.Important Topics",
    "35.Living Anatomy",
    "36.Introduction to Anatomy",
    "37.Bones",
    "38.Joints",
    "39.The pectoral Region",
    "40.The Breast",
    "41.Back & Scapular Region",
    "42.Axilla",
    "43.Brachial Plexus",
    "44.Front of Arm & Cubital Fossa",
    "45.Front of Forearm & carpal Tunnel Syndrome",
    "46.The Hand",
    "47.Median & Ulnar Nerve",
    "48.Back of Arm,Forearm & Radial Nerve",
    "49.Shoulder Joint",
    "50.Joints & Bones of the upper Limb",
    "51.Appendix",
    "52.Femoral Triangle & Anterior Compartment of Thigh",
    "53.Medial compartment Of Thigh",
    "54.Gluteal Region",
    "55.Posterior Compartmental Of Thigh & Popliteal Fossa",
    "56.The leg & Sole of Foot",
    "57.Venous Drainage & Arches of Foot",
    "58.Joints of Lower limb",
    "59.Appendix",
    "60.General Embrology part-1",
    "61.General Embrology part-II",
    "62.Intercostal Space",
    "63.Pleura & lungs",
    "64.Pericardium & Heart",
    "65.Mediastinum, Azygos Vein & Thoracic Duct",
    "66.Development of Heart",
    "67.Development of Blood vessels",
    "68.Appendix",
    "69.Posterior Abdominal Wall & Diaphram",
    "70.Portal Vein",
    "71.Rectus Sheath & Inguinal Canal",
    "72.Peritoneum",
    "73.Stomach & Duodenum",
    "74.Pancreas & Spleen",
    "75.Liver&Extrahepatic Biliary Apparatus",
    "76.Midgut & Hindgut",
    "77.Kidneys, Develpment of Renal Veins & IVC",
    "78.Orientation to Pelvis & Perineum",
    "79.Ureters, Urinary Bladder & Prostate",
    "80.Ovary & Uterus",
    "81.Rectum & Anal Canal",
    "82.The Perineum",
    "83.Appendix",
    "84.The Face",
    "85.Triangles of Neck",
    "86.Muscles of Mastication & Mandibular Nerve",
    "87.The Parotid Gland",
    "88.Thyroid Gland",
    "89.The AutonomicNervous System",
    "90.Larynx & Pharynx",
    "91.Extraocular Muscles & Tongue",
    "92.Lateral Wall of Nose & Middle Ear",
    "93.Development of HFN",
    "94.Appendix",
    "95.Interior of Skull & Dural Venous Sinuses",
    "96.surfaces of Brain & Funtional Areas",
    "97.Blood Supply of brain",
    "98.Third & lateral ventricle",
    "99.Fourth ventricle & Brain Stem",
    "100.Functional Components of Nucleus & Cranial Nerves",
    "101.White Matter of CNS,Basal Ganglia & Cerebellum",
    "102.Thalamus & Hypothalamus",
    "103.The Spinal Cord & Embrology of CNS",
    "104.Appendix",
    "105.Epithelium & Connective Tissue",
    "106.Cartilage & Bone",
    "107.Muscular System",
    "108.Glands",
    "109.Lymphoid Tissue",
    "110.Integumentary System",
    "111.GIT Part-I",
    "112.GIT Part-II",
    "113.Respiratory System",
    "114.Urinary System",
    "115.Male Reproductive System",
    "116.Female Reproductive System",
    "117.Endocrine Gland",
    "118.CNS and Special senses"

],

/* =========================
   PHYSIOLOGY
   122 IS INTENTIONALLY SKIPPED
========================= */

Physiology: [

    "1.Cranial Nerve Examination Part-I",
    "2.Cranial Nerve Examination Part-II",
    "3.Perimetry",
    "4.Ergography",
    "5.Spirometry",
    "6.Body Fluid Compartments Part-I",
    "7.Body Fluid Compartments Part-II",
    "8.Cell & Homeostasis",
    "9.Homeostasis",
    "10.Cell- The Physiological Perspective",
    "11.Cell Membrane Strucuture",
    "12.Transport through the Cell Membrane Part-I",
    "13.Transport through the Cell Membrane Part-II",
    "14.Transport Process Across Cell Membrane",
    "15.RBC- Erythropoiesis",
    "16.Fate of RBC, Jaundice",
    "17.Anemia, Blood Indices",
    "18.Immunity",
    "19.Hemostasis Part-I",
    "20.Hemostasis Part-II",
    "21.Blood Groups Part-I",
    "22.Blood Groups Part-II",
    "23.Hemoglobin",
    "24.RMP",
    "25.Action potential Part-I",
    "26.Action Potential Part-II",
    "27.Action Potential Part-III",
    "28.Action Potential Part-IV",
    "29.Neuron, Nerves, Nerve Fibres",
    "30.Nerve Injury, Wallerian Degeneration",
    "31.Muscle- Introuction",
    "32.Neuromuscular Juntion",
    "33.Excitation Contraction Coupling - Sketal & Cardiac Muscle",
    "34.Sarcomere",
    "35.Molecular basis of Contaction",
    "36.Energetics in Muscle - Types of Skeletal Muscle Fibers",
    "37.Factors Influencing Strength of Contraction of Muscle",
    "38.Smooth Muscle",
    "39.Introduction & Cells in CNS",
    "40.Neurotransmitters",
    "41.Synapse part-I",
    "42.Synapse Part-II",
    "43.Reflex",
    "44.Sensory System- Introduction & Laws",
    "45.Sensory System- Receptors",
    "46.Sensory system- Ascending Tracts",
    "47.Sensory system- Physiology of pain",
    "48.Motor system- Introduction",
    "49.Motor system- Descending Tracts",
    "50.Motor system- Cerebellum Part-I",
    "51.Motor system- Cerebellum Part-II",
    "52.Motor system- Basal Ganglia",
    "53.Motor system- Lower Motor Neuron",
    "54.Spinal Cord Injury- Brown Sequard Syndrome",
    "55.Higher Functions- Hypothalamus",
    "56.Cerebrum & Limbic system",
    "57.Learning & Memory, Sleep & EEG",
    "58.Repiratory Introduction",
    "59.Mechanism of Breathing Mechanics of Ventilation Part-I",
    "60.Mechanism of Breathing Part-II",
    "61.Lung Volumes & Capacities",
    "62.Timed Vital Capacity, PEFR, MMFR, EPP, Flow Volume Loops",
    "63.Dead space- Some ventilatory Indices, Non respiratory Functions of Respiratoty System",
    "64.Pulmonary Circulation- V by Q Ratio",
    "65.Respiratory Membrane, DLco",
    "66.Gas Transport- Oxygen Transport Part-I",
    "67.Gas Transport- Oxygen Transport part-II",
    "68.Gas Transport- Co2 Transport",
    "69.Neural Regulation of Breathing",
    "70.Chemical Regulation of Breathing",
    "71.Miscellaneous",
    "72.Respiratory changes during Excerise",
    "73.Cradic- Introduction",
    "74.Conducting System",
    "75.Conducting System part-II",
    "76.Conducting System part-III",
    "77.Conducting System part-IV",
    "78.Cardiac Cycle- Pressure Volume Changes",
    "79.LV PV Loops part-I",
    "80.LV PV Loops part-II",
    "81.LV PV Loops part-III",
    "82.Cardiac Cycle Events",
    "83.Heart Sounds",
    "84.ECG part-I",
    "85.ECG part-II",
    "86.ECG part-III",
    "87.Cardiac Output part-I",
    "88.Cardiac Output part-II",
    "89.Introduction to Circulation, Blood Vessel type",
    "90.Bloof Flow",
    "91.Capillary Circulation & Starling's Equilibrium",
    "92.Lymph & Edema",
    "93.Blood Pressure- Determinants, Types, Measurements",
    "94.Blood Pressure- Measurment of BP",
    "95.Regulation of Blood Pressure",
    "96.Coronary Circulation",
    "97.Circulatory Shock",
    "98.Miscellaneous- Cardiovascular changes During Exercise",
    "99.Digestion- Introduction",
    "100.Motility of Digestive Tract",
    "101.Secretions in Digestive Tract part-I",
    "102.Secretions in Digestive Tract part-II",
    "103.Excretion- Introduction",
    "104.Renal Circulation & Concept of Clearance",
    "105.GFR",
    "106.Tubular Functions",
    "107.Bladder Function",
    "108.Acid-Base Balance",
    "109.Concentrated Urine Formation",
    "110.Introduction- Mechanism of Hormone Action",
    "111.Pituitary Gland part-I",
    "112.Pituitary Gland part-II",
    "113.Thyroid Gland",
    "114.Adrenal Gland",
    "115.Endocrine Pancreas",
    "116.Ca++ Homeostasis",
    "117.Male Reproductive System",
    "118.Female Reproductive System",
    "119.Vision part-I",
    "120.Vision part-II",
    "121.Vision part-III",

    // 122 is missing

    "123.Hearing",
    "124.Taste & Olfaction",
    "125.General Physiology",
    "126.Muscle part-I",
    "127.Muscle part-II",
    "128.Membrane potential",
    "129.Nerve",
    "130.Blood",
    "131.CVS part-I (Properties of Cardiac Tissue)",
    "132.CVS part-II (Properties of Cardiac Tissue)",
    "133.CVS part-III (Cardiac Output)",
    "134.Cardiac Cycle part-I",
    "135.Cardiac Cycle part-II",
    "136.Blood Pressure",
    "137.Kidney Nephron & JG Apparatus",
    "138.Renal Tubular Functions",
    "139.Bladder Fuction, Micturition Reflex & Acid Base Physiology",
    "140.GFR & Clearance",
    "141.Pulmonary Circulation and Ventilation to Perfusion Ratio",
    "142.Regulations of Breathing",
    "143.Gas Transport in Blood",
    "144.Lung Volumes and Capacities",
    "145.Machanism of Breathing part-I",
    "146.Mechanism of Breathing part-II",
    "147.CNS part-I",
    "148.CNS part-II",
    "149.CNS part-III",
    "150.Endocrinology",
    "151.Endocrinology part-II"

],

/* =========================
   BIOCHEMISTRY
========================= */

Biochemistry: [

    "1.Important Spotters",
    "2.Specific Garvity of Urine",
    "3.Benedict's Test",
    "4.Tests for Protein- Heat Coagulation, SSA Test, Heller's Test",
    "5.Rothera's Test- Ketone Bodies",
    "6.Colorimeter",
    "7.Hay's Sulfur Test",
    "8.Glucose Estimation- GOD POD",
    "9.Urea Estimation by Berthelot Method",
    "10.Serum Creatinine Estimation by End-Point Method",
    "11.Estimation of Protein & Albumin",
    "12.Serum Creatinine Estimation by Jaffe's Method",
    "13.Bilirubin Estimation",
    "14.Cholestrol Estimation",
    "15.Introduction of Biochemistry & Important Topics",
    "16.Classification of AAs",
    "17.Structural classification of Proteins",
    "18.Fibrous Proteins- Collagen, Elastin",
    "19.Plasma Proteins & Disorders",
    "20.Digestion & Absorption of Proteins",
    "21.Ammonia Metabolism & Urea Cycle",
    "22.Phenylalanine, Tyrosine & Their Metabolism",
    "23.Tryptophan Metabolism",
    "24.Glycine Metabolism",
    "25.Sulfur containing AA Metabolism",
    "26.Amino Acids Linked to the TCA Cycle",
    "27.Branched Chain AA Metabolism & Disorders",
    "28.Carbohydrate Chemistry & Isomerism",
    "29.GAGs & Disorders",
    "30.Glycolysis & RL Cycle",
    "31.Glucose and Transport",
    "32.Glycogen Metabolism",
    "33.Fructose Metabolism & HFL",
    "34.HMP Shunt",
    "35.TCA Cycle",
    "36.Cori Cycle",
    "37.Glucose Alanine Cycle",
    "38.Gluconeogenesis",
    "39.Fate of Pyruvate & PDH",
    "40.ETC & Inhibitors",
    "41.Oxidative Phosphorylation & Uncouplers",
    "42.Fatty Acids- PUFA | EFA | TFA",
    "43.Phospholipids & Disorders",
    "44.Lipid Digestion & Absorption",
    "45.TAG Metabolism & HSL",
    "46.Beta Oxidation & Disorders",
    "47.Ketone Bodies- Significance",
    "48.Fatty Acid Synthesis",
    "49.Lipoprotein Metabolism & Disorders",
    "50.Cholesterol & Bile Acids",
    "51.Enzyme Inhibition km & Vmax",
    "52.Classification IUBMB",
    "53.Factors Affecting Activity",
    "54.Regulation of Enzyme Activity",
    "55.Isoenzymes & Diagnostic Uses",
    "56.Coenzyme Cofactor & Prosthetic Group",
    "57.Mechanism of Enzyme Action",
    "58.Porphyrias",
    "59.Abnormal Hb",
    "60.Bilirubin Metabolism & Jaundice",
    "61.Fat Soluable Vitamins",
    "62.Water Soluable Vitamins",
    "63.Major Elements",
    "64.Trace Elements",
    "65.PEM- Kwashiorkor, Marasmus",
    "66.Acid Base Disorders",
    "67.Free Radicals & Antioxidants",
    "68.Quality Control in Laboratory",
    "69.Mechanism of Hormone Action",
    "70.Integration of Metabolism & Starvation",
    "71.Purine Nucleotide Metabolism & Disorders",
    "72.Pyrimidine Nucleotide Metabolism & Disorders",
    "73.DNA Replication",
    "74.DNA Structure & Organization",
    "75.DNA Repair Mechanism",
    "76.Transcription",
    "77.Translation",
    "78.Lac Operon",
    "79.Regulation of Gene Expression",
    "80.Mutation",
    "81.Protein Sorting",
    "82.PCR, RFLP, Blotting Technique",
    "83.Chromatography & Electrophoresis",
    "84.Cancer, Carcinogenesis & Tumor Markers",
    "85.Enzymes(Quick Revision)",
    "86.Carbohydrate Chemistry and Metabolism (Quick Revision)",
    "87.Lipid Chemistry and Metabolism (Quick Revision)",
    "88.Protein Chemistry and Metabolism (Quick Revision)",
    "89.Biological Oxidation (Quick Revision)",
    "90.Hb Chemistry and Metabolism (Quick Revision)",
    "91.Vitamins (Quick Revision)",
    "92.Minerals (Quick Revision)",
    "93.Nucleotide chemistry and Metabolism (Quick Revision)",
    "94.Genetics (Quick Revision)"

]

};

/* =========================
SET SUBJECT INFORMATION
========================= */

if (subjectData[subject]) {

subjectTitle.textContent =
    subjectData[subject].title;

subjectHeader.textContent =
    subjectData[subject].title + " Study Library";

subjectDescription.textContent =
    subjectData[subject].description;

} else {

subjectTitle.textContent = "Subject Not Found";

subjectHeader.textContent = "MedStudy";

subjectDescription.textContent =
    "The requested subject could not be found.";

}

/* =========================
CREATE PDF LIST
========================= */

if (pdfLibrary[subject]) {

pdfLibrary[subject].forEach(function (pdfName) {

    const pdfItem = document.createElement("div");

    /*
       The number is used only for the
       actual filename.

       The number is NOT displayed
       on the website.
    */

    const dotIndex = pdfName.indexOf(".");

    const fileNumber =
        pdfName.substring(0, dotIndex);

    const cleanTitle =
        pdfName.substring(dotIndex + 1);

    pdfItem.textContent = cleanTitle;

    /*
       Folder names:
       Anatomy      -> 1.Anatomy
       Physiology   -> 2.Physiology
       Biochemistry -> 3.Biochemistry
    */

    let folder = "";

    if (subject === "Anatomy") {

        folder = "1.Anatomy";

    } else if (subject === "Physiology") {

        folder = "2.Physiology";

    } else if (subject === "Biochemistry") {

        folder = "3.Biochemistry";

    }

    /*
       Creates the exact PDF path.

       Example:

       2.Physiology/121.Vision part-III.pdf
       2.Physiology/123.Hearing.pdf
    */

    const pdfPath =
        folder + "/" +
        fileNumber + "." +
        cleanTitle +
        ".pdf";

    /*
       OPEN PDF IN NEW TAB
    */

    pdfItem.addEventListener("click", function () {

        const pdfUrl = encodeURI(pdfPath);

        window.open(pdfUrl, "_blank");

    });


    pdfList.appendChild(pdfItem);

});

}