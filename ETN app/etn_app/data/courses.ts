export type Course = {
  id: string;
  name: string;
  fee: number;
  description: string;
};

// Six-Month Courses, this is where we store our data
export const sixMonthCourses: Course[] = [
  {
    id: "1",
    name: "First Aid",
    fee: 1500,
    description: `Purpose: To provide first aid awareness and basic life support
Content:
- Wounds and bleeding
- Burns and fractures
- Emergency scene management
- CPR
- Respiratory distress e.g., choking`,
  },
  {
    id: "2",
    name: "Sewing",
    fee: 1500,
    description: `Purpose: To provide alterations and new garment tailoring services
Content:
- Types of stitches
- Threading a sewing machine
- Sewing buttons, zips, hems and seams
- Alterations
- Designing and sewing new garments`,
  },
  {
    id: "3",
    name: "Landscaping",
    fee: 1500,
    description: `Purpose: To provide landscaping services for gardens
Content:
- Indigenous & exotic plants
- Garden structures
- Plant balance & aesthetics
- Layout design`,
  },
  {
    id: "4",
    name: "Life Skills",
    fee: 1500,
    description: `Purpose: To provide skills to navigate life
Content:
- Banking
- Basic labour law
- Reading & writing literacy
- Numeric literacy`,
  },
];

// Six-Week Courses
export const sixWeekCourses: Course[] = [
  {
    id: "101",
    name: "Cooking",
    fee: 750,
    description: `Purpose: To prepare and cook nutritious family meals
Content:
- Nutrition basics
- Proteins, carbs & veggies
- Meal planning
- Recipes
- Cooking techniques`,
  },
  {
    id: "102",
    name: "Garden Maintenance",
    fee: 750,
    description: `Purpose: To provide garden care skills
Content:
- Watering rules
- Pruning & propagation
- Planting techniques`,
  },
  {
    id: "103",
    name: "Child Minding",
    fee: 750,
    description: `Purpose: To provide child & baby care
Content:
- Baby needs (0–6 months)
- Toddler needs
- Educational toys`,
  },
];
