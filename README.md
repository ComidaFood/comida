# comida

<b>IMPORTANT:</b> DO NOT EDIT THE .exe FILES!!!

The following is a description of the tables used in the backend.

Users will have:
- ID
- USERNAME
- PASSWORD

and optional parameters:
- FIRSTNAME
- LASTNAME

Recipes will be split into two tables:
- Ingredients list
- Steps list

Ingredients list has:
- ID (recipe ID)
- NAME (name of ingredient)
- QUANTITY (amount of ingredient as a number)
- UNITS (units used, such as cups, teaspoons, millileters)

Steps list has:
- ID (recipe ID)
- STEPINDEX (e.g. step #1 or step #4)
- TEXT (the step actually written out)

A recipe can also be tied to the ID of the user who created it, which could be its own table.
