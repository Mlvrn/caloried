// Calculate nutrients based on serving size and quantity
export const calculateAdjustedNutrients = (foodDetails, selectedServingSize, servingCount) => {
  if (!foodDetails || !foodDetails.nutrients) {
    return {};
  }

  const defaultServingWeight = foodDetails?.servingWeight;
  let multiplier;

  if (defaultServingWeight) {
    const selectedServingWeight =
      foodDetails?.altMeasures?.find((measure) => measure.serving_weight.toString() === selectedServingSize)
        ?.serving_weight || defaultServingWeight;

    multiplier = (selectedServingWeight * servingCount) / defaultServingWeight;
  } else {
    multiplier = servingCount;
  }

  const adjustedNutrients = {};
  Object.keys(foodDetails?.nutrients).forEach((nutrientKey) => {
    const originalValue = foodDetails?.nutrients[nutrientKey]?.value;
    adjustedNutrients[nutrientKey] = {
      value: Math.round(originalValue * multiplier),
      dv: foodDetails?.nutrients[nutrientKey]?.dv,
    };
  });

  return adjustedNutrients;
};

export const calculateTotalNutrients = (meals) => {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  if (Array.isArray(meals)) {
    meals.forEach((meal) => {
      meal.foodLogs.forEach((foodLog) => {
        totalCalories += foodLog.food.calories * foodLog.quantity;
        totalProtein += foodLog.food.protein * foodLog.quantity;
        totalCarbs += foodLog.food.carbs * foodLog.quantity;
        totalFat += foodLog.food.fat * foodLog.quantity;
      });
    });
  }
  return { totalCalories, totalProtein, totalCarbs, totalFat };
};

export const calculateNutrientPercentage = (nutrientValue, calories, multiplier) => {
  if (!calories || !nutrientValue) return 0;
  return Math.round(((nutrientValue * multiplier) / calories) * 100);
};

export const calculateAge = (dob) => {
  const birthday = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
};

export const calculateMacronutrientCalories = (protein, carbs, fat) => ({
  proteinCalories: protein * 4,
  carbsCalories: carbs * 4,
  fatCalories: fat * 9,
});

export const calculateDistributionPercentage = (distribution) => {
  const total = distribution?.reduce((acc, current) => acc + current.value, 0);

  return distribution?.map((item) => ({
    ...item,
    quantity: item.value,
    value: total > 0 ? ((item.value / total) * 100).toFixed(1) : 0,
  }));
};

export const getTickValues = (data) => {
  const values = data.map((d) => d.y);

  const maxValue = Math.max(...values);
  const minValue = Math.min(...values) - maxValue;

  const tickValues = [];
  for (let i = minValue; i <= maxValue; i++) {
    tickValues.push(i);
  }
  return tickValues;
};
