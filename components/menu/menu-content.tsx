"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Flame } from "lucide-react"

const menuCategories = [
  { id: "starters", label: "Starters" },
  { id: "pasta", label: "Pasta" },
  { id: "pizza", label: "Pizza" },
  { id: "mains", label: "Mains" },
  { id: "desserts", label: "Desserts" },
  { id: "cafe", label: "Cafe" },
]

const menuItems: Record<
  string,
  {
    name: string
    description: string
    price: string
    isSpecial?: boolean
    isVegetarian?: boolean
  }[]
> = {
  starters: [
    {
      name: "Bruschetta al Pomodoro",
      description:
        "Toasted ciabatta topped with fresh tomatoes, basil, garlic, and extra virgin olive oil",
      price: "395",
      isVegetarian: true,
    },
    {
      name: "Carpaccio di Manzo",
      description:
        "Thinly sliced raw beef with arugula, parmesan shavings, and truffle oil",
      price: "695",
      isSpecial: true,
    },
    {
      name: "Caprese Salad",
      description:
        "Buffalo mozzarella, vine tomatoes, fresh basil, balsamic reduction",
      price: "495",
      isVegetarian: true,
    },
    {
      name: "Arancini",
      description:
        "Crispy risotto balls filled with mozzarella, served with marinara sauce",
      price: "425",
      isVegetarian: true,
    },
    {
      name: "Calamari Fritti",
      description:
        "Lightly fried calamari rings with garlic aioli and lemon wedge",
      price: "575",
    },
    {
      name: "Antipasto Misto",
      description:
        "Selection of cured meats, cheeses, olives, and grilled vegetables",
      price: "895",
      isSpecial: true,
    },
  ],
  pasta: [
    {
      name: "Spaghetti Carbonara",
      description:
        "Classic Roman pasta with pancetta, egg yolk, pecorino, and black pepper",
      price: "625",
      isSpecial: true,
    },
    {
      name: "Penne Arrabbiata",
      description:
        "Penne in spicy tomato sauce with garlic, chili flakes, and fresh parsley",
      price: "525",
      isVegetarian: true,
    },
    {
      name: "Truffle Tagliatelle",
      description:
        "Handmade pasta with porcini mushrooms, black truffle, and parmesan cream",
      price: "895",
      isSpecial: true,
    },
    {
      name: "Lasagna Bolognese",
      description:
        "Layered pasta with beef ragù, béchamel sauce, and melted mozzarella",
      price: "695",
    },
    {
      name: "Ravioli di Ricotta e Spinaci",
      description:
        "Ricotta and spinach filled ravioli in sage butter sauce",
      price: "625",
      isVegetarian: true,
    },
    {
      name: "Linguine al Frutti di Mare",
      description:
        "Linguine with prawns, mussels, clams, and calamari in white wine sauce",
      price: "995",
      isSpecial: true,
    },
    {
      name: "Gnocchi al Pesto",
      description:
        "Potato gnocchi with homemade basil pesto, pine nuts, and parmesan",
      price: "575",
      isVegetarian: true,
    },
    {
      name: "Fettuccine Alfredo",
      description:
        "Fettuccine in creamy parmesan sauce with a hint of nutmeg",
      price: "545",
      isVegetarian: true,
    },
  ],
  pizza: [
    {
      name: "Margherita",
      description:
        "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
      price: "595",
      isVegetarian: true,
    },
    {
      name: "Quattro Formaggi",
      description:
        "Mozzarella, gorgonzola, parmesan, and goat cheese on white base",
      price: "745",
      isVegetarian: true,
      isSpecial: true,
    },
    {
      name: "Diavola",
      description:
        "Spicy salami, tomato sauce, mozzarella, and chili flakes",
      price: "695",
    },
    {
      name: "Prosciutto e Funghi",
      description:
        "Parma ham, mushrooms, mozzarella, and tomato sauce",
      price: "795",
    },
    {
      name: "Vegetariana",
      description:
        "Grilled zucchini, bell peppers, eggplant, olives, and cherry tomatoes",
      price: "645",
      isVegetarian: true,
    },
    {
      name: "Tartufo",
      description:
        "Black truffle paste, mozzarella, wild mushrooms, and parmesan",
      price: "1095",
      isSpecial: true,
    },
    {
      name: "Capricciosa",
      description:
        "Ham, mushrooms, artichokes, olives, mozzarella, and tomato sauce",
      price: "745",
    },
    {
      name: "Calzone",
      description:
        "Folded pizza with ricotta, ham, mushrooms, and mozzarella",
      price: "695",
    },
  ],
  mains: [
    {
      name: "Ossobuco alla Milanese",
      description:
        "Braised veal shank with gremolata, served with saffron risotto",
      price: "1495",
      isSpecial: true,
    },
    {
      name: "Pollo alla Parmigiana",
      description:
        "Breaded chicken breast with tomato sauce, mozzarella, and parmesan",
      price: "795",
    },
    {
      name: "Branzino al Forno",
      description:
        "Oven-baked sea bass with herbs, capers, and roasted vegetables",
      price: "1195",
    },
    {
      name: "Bistecca alla Fiorentina",
      description:
        "Grilled T-bone steak Tuscan style with rosemary and olive oil",
      price: "1895",
      isSpecial: true,
    },
    {
      name: "Saltimbocca alla Romana",
      description:
        "Veal escalopes with prosciutto and sage in white wine sauce",
      price: "995",
    },
    {
      name: "Melanzane alla Parmigiana",
      description:
        "Layered eggplant with tomato sauce, mozzarella, and parmesan",
      price: "645",
      isVegetarian: true,
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      description:
        "Espresso-soaked ladyfingers, mascarpone cream, cocoa dusting",
      price: "425",
      isSpecial: true,
    },
    {
      name: "Panna Cotta",
      description:
        "Vanilla cream pudding with mixed berry compote",
      price: "375",
    },
    {
      name: "Cannoli Siciliani",
      description:
        "Crispy pastry shells filled with sweet ricotta and chocolate chips",
      price: "395",
    },
    {
      name: "Affogato",
      description:
        "Vanilla gelato drowned in hot espresso",
      price: "325",
    },
    {
      name: "Torta al Cioccolato",
      description:
        "Warm chocolate lava cake with vanilla gelato",
      price: "475",
      isSpecial: true,
    },
    {
      name: "Gelato Selection",
      description:
        "Three scoops of artisanal Italian gelato",
      price: "295",
    },
  ],
  cafe: [
    {
      name: "Classic Cheeseburger",
      description: "Angus beef patty with cheddar cheese, lettuce, tomato, pickles, and special sauce on brioche bun",
      price: "495",
      isSpecial: true,
    },
    {
      name: "BBQ Bacon Burger",
      description: "Smoky BBQ sauce, crispy bacon, caramelized onions, and melted gouda cheese",
      price: "595",
    },
    {
      name: "Mushroom Swiss Burger",
      description: "Sautéed mushrooms, Swiss cheese, garlic aioli on toasted sesame bun",
      price: "545",
    },
    {
      name: "Veggie Burger",
      description: "House-made black bean patty with avocado, sprouts, and chipotle mayo",
      price: "445",
      isVegetarian: true,
    },
    {
      name: "Pepperoni Pizza Slice",
      description: "Classic New York style slice with pepperoni and mozzarella",
      price: "245",
    },
    {
      name: "BBQ Chicken Pizza Slice",
      description: "Grilled chicken, red onions, cilantro with tangy BBQ sauce",
      price: "275",
      isSpecial: true,
    },
    {
      name: "Loaded Fries",
      description: "Crispy fries topped with cheese sauce, bacon bits, and jalapeños",
      price: "325",
    },
    {
      name: "Chicken Wings",
      description: "Crispy wings tossed in choice of buffalo, honey garlic, or BBQ sauce",
      price: "495",
    },
  ],
}

export function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("starters")

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12 lg:mb-16"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 lg:px-6 py-2 lg:py-3 text-sm tracking-wider uppercase transition-all duration-300 rounded-sm ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Special Note for Pizza */}
        {activeCategory === "pizza" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-8 text-primary"
          >
            <Flame className="w-5 h-5" />
            <span className="text-sm tracking-wider">
              All pizzas are wood-fired in our traditional Italian oven
            </span>
            <Flame className="w-5 h-5" />
          </motion.div>
        )}

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid gap-6">
              {menuItems[activeCategory].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        {item.isSpecial && (
                          <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs tracking-wider uppercase rounded">
                            Chef&apos;s Special
                          </span>
                        )}
                        {item.isVegetarian && (
                          <span className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
                            V
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-serif text-xl text-primary whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs tracking-wider uppercase rounded">
              Chef&apos;s Special
            </span>
            <span>Signature dishes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
              V
            </span>
            <span>Vegetarian</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
