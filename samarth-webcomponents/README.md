# Samarth Web Components
This repository is a collection of all the common web components of Samarth platform

The projects which want to reuse the webcomponents can refer to this repository via their bower.json and point to appropriate branch on the git  

## How to use the webcomponents folder while still developing the webcomponent 

1. In folder or Go to Folder of Samarth-Webcomponents project and run the below command 
	
	$ bower link
	
	The above will create link to the folder, name of the link will be same as defined in bower.json, which for this project it is "samarth-webcomponents", this will remembered by bower through out the system

2. Now go to the folder of your project, where you want to use the Samarth-Webcomponents and run below command to use the link, which will symbolically link to the project folder of Samarth Web components, so that you can immediately use the updated code of the webcomponents 

	$ bower link samarth-webcomponents 
	
