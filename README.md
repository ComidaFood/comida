# comida

Users will have:
- ID
- USERNAME
- PASSWORD

and optional parameters:
- FIRST NAME
- LAST NAME

Recipes will be split into two tables:
- Ingredients list
- Steps list

Ingredients list has:
- ID (recipe ID)
- NAME (name of ingredient)
- QUANTITY (amount of ingredient as a number)
- UNITS (units used, such as cups, teaspoons, millileters)

Steps list has:
- INDEX (e.g. step #1 or step #4)
- TEXT (the step actually written out)

A recipe can also be tied to the ID of the user who created it
