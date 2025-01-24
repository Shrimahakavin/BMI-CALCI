// Select form and output elements
const bmiForm = document.getElementById('bmiForm');
const bmiResult = document.getElementById('bmiResult');
const recommendations = document.getElementById('recommendations');

// Recipe and exercise data
const data = {
    obese: {
        title: "For Obese Individuals",
        recipes: [
            "2 Idlis, 1 Boiled Egg, 1 Glass of Milk",
            "Chapati with Mixed Dal and Salad",
            "Vegetable Stir-Fry with Chapati"
        ],
        exercises: [
            "Marching in Place",
            "Chair Squats",
            "Wall Push-Ups"
        ]
    },
    normal: {
        title: "For Normal Weight Individuals",
        recipes: [
            "Oats with Fruits and Nuts",
            "Grilled Chicken Salad",
            "Grilled Fish with Quinoa"
        ],
        exercises: [
            "Jumping Jacks",
            "Push-Ups",
            "Plank Holds"
        ]
    },
    underweight: {
        title: "For Underweight Individuals",
        recipes: [
            "Banana Pancakes with Honey",
            "Butter Chicken with Rice",
            "Paneer Curry with Chapati"
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

    // Get user input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate input
    if (weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine category
    let category = "";
    if (bmi < 18.5) {
        category = "underweight";
    } else if (bmi < 24.9) {
        category = "normal";
    } else {
        category = "obese";
    }

    // Display BMI
    bmiResult.textContent = `Your BMI is ${bmi}.`;

    // Display recommendations
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
