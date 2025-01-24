const bmiForm = document.getElementById('bmiForm');
const bmiResult = document.getElementById('bmiResult');
const recommendations = document.getElementById('recommendations');
const data = {
    obese: {
        title: "For Obese Individuals",
        recipes: [
            "BREAK FAST:"
            "2 Idlis, 1 Boiled Egg, 1 Glass of Milk without sugar",
            "Chapati with Mixed Dal and Salad any fruit juice without sugar",
            "Vegetable Stir-Fry with Chapati"
            "LUNCH:",
            "A bowl of rice with egg or panner or chichen gravy with same bowl of vegetables as you wish",
            "A millet raci with greens",
            "Red rice with vegetables and sprouts",
            "EVENING SNACKS:",
            "AVUL,GROUND NUTS,TENDER COCOUNT",
            "DINNER:",
            "2 DOSA WITH COUCUNUT CHUTNEY",
            "2 CHAPPATHI WITH EGG OR CHICKEN OR PANNER KURUMA OR GRAVY",
            "VEGETABLE SOUP",
            "A TURMERIC MILK BEORE A NIGHT",
        ],
        exercises: [
            "Marching in Place",
            "Chair Squats",
            "Wall Push-Ups"
            "Jumping Jacks",
            "Push-Ups",
            "Plank Holds"
            "SITUPS 4X15 SETS",
            "WALLSIT 4X15 SETS",
            "LUNGUES 10 REP",
            "MOUNTAIN CLIMBERS",
            "LEG RICES"
        ]
    },
    normal: {
        title: "For Normal Weight Individuals",
        recipes: [
           "BREAK FAST:"
            "2 Idlis, 1 Boiled Egg, 1 Glass of Milk without sugar",
            "Chapati with Mixed Dal and Salad any fruit juice without sugar",
            "Vegetable Stir-Fry with Chapati"
            "LUNCH:",
            "A bowl of rice with egg or panner or chichen gravy with same bowl of vegetables as you wish",
            "A millet raci with greens",
            "Red rice with vegetables and sprouts",
            "EVENING SNACKS:",
            "AVUL,GROUND NUTS,TENDER COCOUNT",
            "DINNER:",
            "2 DOSA WITH COUCUNUT CHUTNEY",
            "2 CHAPPATHI WITH EGG OR CHICKEN OR PANNER KURUMA OR GRAVY",
            "VEGETABLE SOUP",
            "A TURMERIC MILK BEORE A NIGHT",
        ],
        exercises: [
            "Jumping Jacks",
            "Push-Ups",
            "Plank Holds"
            "SQUATS 4X15 SETS",
            "SITUPS 4X15 SETS",
            "WALLSIT 4X15 SETS",
            "LUNGUES 10 REP"
        ]
    },
    underweight: {
        title: "For Underweight Individuals",
        recipes: [
            "PREBREAKFAST:",
            "RAGI KANGI",
            "A HAND FULL OF SOAKED ALMONDS",
            "BREAK FAST:",
            "3 DOSA WITH COUCUNUT CHUTNEY WITH NATU KHOZHI EGG OMELETE AND A GLASS OF MILK",
            "3 CHAPPATHI WITH PANNER OR CHICKEN OR EGG GRAVY WITH GREEN GRAM ",
            "RAGI KALI WITH OMELETE AND A FRUIT JUICE",
            "POORI WITH POTATO AND FINISH IT WITH A JUICE"
            "LUNCH",
            "A RICE WITH GHREE WITH SAMBAR AND GREENS",
            "A RICE WITH CHICKEN OR MUTTON KOLAMBU END YPUR LUNCH WITH CURD RICE",
            "A RICE WIYH GHEE ADD PULIKULAMBU ADD YOUR FAVORITE VEGGIES AS A SIDEISH END YOUR LUNCH WITH RASAM",
            "DINNER",
            "MILLET PONGAL WITH VEGETABLES END YPUR DINNER WITH BUTTEMILK(MOR)",
            "A RAGI DOSA WITH COUNUT CHUTNEY OR GRAVY AS YOUR WISH",
            "UPMA OR ARISIPARPU SADHAM WITH EGG AND A GLASS OF MILK",
        ],
        exercises: [
            "Yoga for Strength",
            "Bodyweight Squats",
            "Light Cardio (Cycling)"
        ]
    }
};

// Calculate BMI and display recommendations
bmiForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const weight = parseFloat(weightInput.value);
    const heightInCm = parseFloat(heightInput.value);
    const heightInMeters = heightInCm / 100; 
    console.log("Weight (kg):", weight);
    console.log("Height (cm):", heightInCm);
    console.log("Height (m):", heightInMeters);
    if (!weight || weight <= 0 || !heightInCm || heightInCm <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    console.log("BMI:", bmi);
    let category = "";
    if (bmi < 18.5) {
        category = "underweight";
    } else if (bmi < 24.9) {
        category = "normal";
    } else {
        category = "obese";
    }
    bmiResult.textContent = `Your BMI is ${bmi}.`;
    const { title, recipes, exercises } = data[category];
    recommendations.innerHTML = `
        <div class="recommendation-category">
            <h3>${title}</h3>
            <h4>Recipes:</h4>
            <ul>${recipes.map(recipe => `<li>${recipe}</li>`).join("")}</ul>
            <h4>Exercises:</h4>
            <ul>${exercises.map(exercise => `<li>${exercise}</li>`).join("")}</ul>
        </div>
    `;
});
