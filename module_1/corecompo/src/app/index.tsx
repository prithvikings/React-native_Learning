
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList,
} from 'react-native';

/* -------------------------------------------------------
   1. FOOD DATA

   This data will be displayed in a horizontal FlatList.
   Each item has a unique ID, name, description, and
   whether it is vegetarian.
------------------------------------------------------- */

const food = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Delicious pizza',
    veg: false,
  },
  {
    id: 2,
    name: 'Burger',
    description: 'Juicy burger',
    veg: false,
  },
  {
    id: 3,
    name: 'Salad',
    description: 'Fresh salad',
    veg: true,
  },
  {
    id: 4,
    name: 'Pasta',
    description: 'Tasty pasta',
    veg: false,
  },
  {
    id: 5,
    name: 'Sushi',
    description: 'Fresh sushi',
    veg: true,
  },
];

/* -------------------------------------------------------
   2. SECTION DATA

   SectionList expects an array of sections.
   Each section contains:
   - title: the section heading
   - data: the items belonging to that section

   Example:
   Leafy Greens
     -> Spinach
     -> Kale
     -> Lettuce
------------------------------------------------------- */

const vegSection = [
  {
    title: 'Leafy Greens',
    data: [
      {
        id: 1,
        name: 'Spinach',
        description: 'Rich in iron',
        veg: true,
      },
      {
        id: 2,
        name: 'Kale',
        description: 'High in vitamins',
        veg: true,
      },
      {
        id: 3,
        name: 'Lettuce',
        description: 'Low in calories',
        veg: true,
      },
    ],
  },
  {
    title: 'Root Vegetables',
    data: [
      {
        id: 4,
        name: 'Carrot',
        description: 'Good for eyesight',
        veg: true,
      },
      {
        id: 5,
        name: 'Beetroot',
        description: 'Rich in antioxidants',
        veg: true,
      },
      {
        id: 6,
        name: 'Potato',
        description: 'Versatile and filling',
        veg: true,
      },
    ],
  },
  {
    title: 'Onions',
    data: [
      {
        id: 7,
        name: 'Onion',
        description: 'Pungent and flavorful',
        veg: true,
      },
    ],
  },
];

/* -------------------------------------------------------
   3. MAIN COMPONENT

   SectionList is the MAIN vertical scrolling container.

   Why?
   FlatList and SectionList already manage scrolling
   and virtualized rendering. Wrapping a vertical list
   inside a vertical ScrollView can cause warnings and
   performance problems.

   We use:
   - ListHeaderComponent for content above the sections
   - renderItem for individual vegetable cards
   - renderSectionHeader for section headings
------------------------------------------------------- */

const Index = () => {
  return (
    <SectionList
      // The SectionList occupies the available screen space.
      style={styles.list}

      // Adds padding around the list content.
      contentContainerStyle={styles.container}

      // Supplies the grouped vegetable data.
      sections={vegSection}

      // Gives each vegetable a stable, unique key.
      keyExtractor={(item) => item.id.toString()}

      /* -------------------------------------------------
         4. LIST HEADER

         Everything inside this component appears BEFORE
         the vegetable sections.

         It replaces the need for an outer ScrollView.
      ------------------------------------------------- */

      ListHeaderComponent={
        <View>
          {/* Main screen heading */}
          <Text style={styles.title}>
            React Native Styling
          </Text>

          {/* A simple card */}
          <View style={styles.card}>
            <Text style={styles.cardText}>
              Inside the card
            </Text>
          </View>

          {/* -------------------------------------------
              5. HORIZONTAL FOOD LIST

              FlatList supports horizontal scrolling
              natively, so we do NOT wrap it in a
              horizontal ScrollView.

              The parent SectionList scrolls vertically.
              This FlatList scrolls horizontally.
          ------------------------------------------- */}

          <FlatList
            horizontal
            data={food}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.foodList}

            // Renders each food item as a card.
            renderItem={({ item }) => (
              <View style={styles.cardfood}>
                <Text style={styles.cardTextfood}>
                  {item.name}
                </Text>

                <Text style={styles.cardTextfooddes}>
                  {item.description}
                </Text>
              </View>
            )}
          />

          {/* Heading displayed before the sections */}
          <Text style={styles.vegetableTitle}>
            Vegetables
          </Text>
        </View>
      }

      /* -------------------------------------------------
         6. SECTION ITEMS

         Called once for each vegetable item.

         The item object contains the data for that
         particular vegetable.
      ------------------------------------------------- */

      renderItem={({ item }) => (
        <View style={styles.vegetableCard}>
          <Text style={styles.cardTextfood}>
            {item.name}
          </Text>

          <Text style={styles.cardTextfooddes}>
            {item.description}
          </Text>
        </View>
      )}

      /* -------------------------------------------------
         7. SECTION HEADERS

         The section object contains its title and data.
         We display the title above its vegetable cards.
      ------------------------------------------------- */

      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>
          {section.title}
        </Text>
      )}
    />
  );
};

export default Index;

/* -------------------------------------------------------
   8. STYLESHEET

   StyleSheet.create() organizes styles in one place.
   This makes the component easier to maintain and reuse.
------------------------------------------------------- */

const styles = StyleSheet.create({
  // Main list fills the available parent space.
  list: {
    flex: 1,
  },

  // Padding around the complete screen content.
  container: {
    padding: 16,
    paddingBottom: 30,
  },

  // Main screen title.
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  // Centered introductory card.
  card: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },

  cardText: {
    fontSize: 16,
  },

  // Spacing around the horizontal food list.
  foodList: {
    paddingVertical: 10,
  },

  // Individual food cards.
  cardfood: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    minWidth: 130,
  },

  // Individual vegetable cards.
  vegetableCard: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },

  cardTextfood: {
    fontSize: 18,
  },

  cardTextfooddes: {
    fontSize: 14,
    color: '#555',
  },

  // Heading above the vegetable sections.
  vegetableTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },

  // Headings such as Leafy Greens and Root Vegetables.
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
