# TODO App

## App appearance and functioning.

I visit "/". App loads with the following elements:
* H1 with title "Tasks"
* H2 with title "To do"
* an empty UL element with aria-label "To do"
* a text input labeled "Enter a task." Label is programmatically associated with text input.
* a submit button.
* H2 with title "Done"
* Another empty UL element with aria-label "Done"

When I enter my task in the text input and either click "Submit" or press enter:
* The input is cleared.
* A LI child element appears at the end of my "To do" UL element.
* Inside this LI element are a P element containing the text of the task I just entered, and 4 buttons:
  1) A checkmark button with accessible text reading "Mark as complete."
  2) A x button with accessible text reading "Delete task."
  3) A up arrow button with accessible text reading "Move task up."
  4) A down arrow button with accessible text reading "Move task down."

The buttons should have the following functionality:
1) When I press the checkmark button, the LI element it contains should disappear from the "To do" UL. A new LI element should appear at the end of the "Done" UL. This element should contain a P element with the text of the task I just completed.
2) When I press the x button, the LI element it contains should just disappear.
3) When I press the up arrow button, the LI element it contains should move up by one, unless it is the first child, in which case nothing should happen.
4) When I press the down arrow button, the LI element it contains should move down by one, unless it is the last child, in which case nothing should happen.

## PHP Needs
* Route that points "/" to serve the app page.
* View containing the html elements described in the previous section.

## JS Needs
* A js file that adds the interactive functionality described.
