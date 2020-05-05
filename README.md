# weatherdashboard

This weather dashboard allows users to search using the ‘search city’ bar. Once the user has inputed their search city the local weather display will appear. Included in the display are the following metrics:
  -Name of the city
  -Date
  -Weather Icon, indicating the weather at that location
  -Current temperature 
  -Humidity
  -Wind Speed
  -UV Index 
      -Green UV Index: favorable conditions
      -Orange UV Index: moderate conditions
      -Red UV Index: severe conditions

NOTES FOR OTHER DEVELOPERS
The dashboard was built using Bootstrap's grid system. This is linked under the <head> tag at the beginning of the document. 

There are 4 Javascript files that can be found in the 'script-libraries' folder. The names of the three files are: script.js, script2.js, forlooptest.js and Moment.js

"script.js" is the primary Javascript code. It is written vanilla javascript. 

"script2.js" is the origional code, before turning search(City) into a function

"Moment.js" is a time styling library. It is how the weather display provides the current date.

"forlooptest" is the "trial and error" script page. If something new needed to be added or attempted it was done here, then transferred to "script.js."

All 4 libraries are linked in the script tags on HTML. 


NOTES FOR GRADER
Local storage was attempted and can be seen at the bottom of the "script.js." Thinking process behind it:
-Make local storage an array
-Using a for loop (with .lenght would allow storage to contract based on the number of searches)
-Creating a new list element then appending the values of the index to each element