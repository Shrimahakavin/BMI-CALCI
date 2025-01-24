const bmiForm = document.getElementById('bmiForm');
const bmiResult = document.getElementById('bmiResult');
const recommendations = document.getElementById('recommendations');
const data = {
    obese: {
        title: "For Obese Individuals",
        recipes: [
            "<strong>BREAKFAST:</strong> <span style='font-size: small;'>2 Idlis, 1 Boiled Egg, 1 Glass of Milk without sugar</span>",
            "<span style='font-size: small;'>Chapati with Mixed Dal and Salad any fruit juice without sugar</span>",
            "<span style='font-size: small;'>Vegetable Stir-Fry with Chapati</span>",
            "<strong>LUNCH:</strong> <span style='font-size: small;'>A bowl of rice with egg or panner or chichen gravy with same bowl of vegetables as you wish</span>",
            "<span style='font-size: small;'>A millet raci with greens</span>",
            "<span style='font-size: small;'>Red rice with vegetables and sprouts</span>",
            "<strong>EVENING SNACKS:</strong> <span style='font-size: small;'>AVUL, GROUND NUTS, TENDER COCOUNT</span>",
            "<strong>DINNER:</strong> <span style='font-size: small;'>2 DOSA WITH COCONUT CHUTNEY</span>",
            "<span style='font-size: small;'>2 CHAPPATHI WITH EGG OR CHICKEN OR PANNER KURUMA OR GRAVY</span>",
            "<span style='font-size: small;'>VEGETABLE SOUP</span>",
            "<span style='font-size: small;'>A TURMERIC MILK BEFORE A NIGHT</span>"
        ],
        exercises: [
            "Marching in Place",
            "Chair Squats",
            "Wall Push-Ups",
            "Jumping Jacks",
            "Push-Ups",
            "Plank Holds",
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
            "<strong>BREAKFAST:</strong> <span style='font-size: small;'>2 Idlis, 1 Boiled Egg, 1 Glass of Milk without sugar</span>",
            "<span style='font-size: small;'>Chapati with Mixed Dal and Salad any fruit juice without sugar</span>",
            "<span style='font-size: small;'>Vegetable Stir-Fry with Chapati</span>",
            "<strong>LUNCH:</strong> <span style='font-size: small;'>A bowl of rice with egg or panner or chichen gravy with same bowl of vegetables as you wish</span>",
            "<span style='font-size: small;'>A millet raci with greens</span>",
            "<span style='font-size: small;'>Red rice with vegetables and sprouts</span>",
            "<strong>EVENING SNACKS:</strong> <span style='font-size: small;'>AVUL, GROUND NUTS, TENDER COCOUNT</span>",
            "<strong>DINNER:</strong> <span style='font-size: small;'>2 DOSA WITH COCONUT CHUTNEY</span>",
            "<span style='font-size: small;'>2 CHAPPATHI WITH EGG OR CHICKEN OR PANNER KURUMA OR GRAVY</span>",
            "<span style='font-size: small;'>VEGETABLE SOUP</span>",
            "<span style='font-size: small;'>A TURMERIC MILK BEFORE A NIGHT</span>"
        ],
        exercises: [
            "Jumping Jacks",
            "Push-Ups",
            "Plank Holds",
            "SQUATS 4X15 SETS",
            "SITUPS 4X15 SETS",
            "WALLSIT 4X15 SETS",
            "LUNGUES 10 REP"
        ]
    },
    underweight: {
        title: "For Underweight Individuals",
        recipes: [
            "<strong>PREBREAKFAST:</strong> <span style='font-size: small;'>RAGI KANGI</span>",
            "<span style='font-size: small;'>A HAND FULL OF SOAKED ALMONDS</span>",
            "<strong>BREAKFAST:</strong> <span style='font-size: small;'>3 DOSA WITH COCONUT CHUTNEY WITH NATU KHOZHI EGG OMELETTE AND A GLASS OF MILK</span>",
            "<span style='font-size: small;'>3 CHAPPATHI WITH PANNER OR CHICKEN OR EGG GRAVY WITH GREEN GRAM</span>",
            "<span style='font-size: small;'>RAGI KALI WITH OMELETTE AND A FRUIT JUICE</span>",
            "<span style='font-size: small;'>POORI WITH POTATO AND FINISH IT WITH A JUICE</span>",
            "<strong>LUNCH:</strong> <span style='font-size: small;'>A RICE WITH GHEE WITH SAMBAR AND GREENS</span>",
            "<span style='font-size: small;'>A RICE WITH CHICKEN OR MUTTON KOLAMBU AND YOUR LUNCH WITH CURD RICE</span>",
            "<span style='font-size: small;'>A RICE WITH GHEE ADD PULIKULAMBU ADD YOUR FAVORITE VEGGIES AS A SIDE DISH AND END YOUR LUNCH WITH RASAM</span>",
            "<strong>DINNER:</strong> <span style='font-size: small;'>MILLET PONGAL WITH VEGETABLES AND YOUR DINNER WITH BUTTERMILK (MOR)</span>",
            "<span style='font-size: small;'>A RAGI DOSA WITH COCONUT CHUTNEY OR GRAVY AS YOUR WISH</span>",
            "<span style='font-size: small;'>UPMA OR ARISIPARPU SADHAM WITH EGG AND A GLASS OF MILK</span>"
        ],
        exercises: [
            "Yoga for Strength",
            "Bodyweight Squats",
            "Light Cardio (Cycling)"
        ]
    }
};

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

