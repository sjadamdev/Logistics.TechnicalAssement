# Logistics.TechnicalAssement

This repo contains the orignal Technical Assement files, including Exercise.docx, Wireframe.png, and logistics-uk-fullstack-exercise.zip

The React Application is located in subfolder of this repository, please run following three commands to run the application:

cd .\logistics-uk-fullstack-exercise\logistics-technical-assessment
npm install
npm start


Application Key Requirements from Exercise.docx:
1. Follow example Wireframe.png for page lay out
2. Header Section:
	* Display a header bar containing the Logistics UK logo.
3. Sidebar Menu:
	* Display a side menu with links from the menu.json data file.
4. Main Content Area:
	* The main content area should contain the driver listing.
	* The driver data should come from the drivers.json file.
	* Each driver should have a row displaying:
		--Driver forename and surname
		--Vehicle registration
		--Total activity duration (sum of minutes from their activities for the week).
		--A box for each day of the week (Mon-Sun) should be shown next to each driver:
			If the driver has activities on that day, the box should be green.
			If the driver has no activities for a day, the box should be white.

Bonus Tasks Completed:
* Add a search box to the page, and upon typing in the input field, the driver list should be filtered down based on matching forename, surname, or registration.
* Add routing to the application and create holding pages for the menu items.

Bonus Tasks Remaining:
* Split the total activity time in the listing into totals groups by individual activity types (drive, rest etc...)
