# CSPortfolio
This website portfolio contains all the work and learnings I have from the past three years working as a Software Engineer Apprentice. For security reasons, I won't include any actual text in this repository only fake text.

## Preview Video of Finished Product
https://github.com/user-attachments/assets/a715c52f-2ea5-4e10-bd9b-cbe1f12b2ae8

## Why did I decide to build it?
I chose to build this project as a way to consolidate and showcase the knowledge I’ve gained throughout my apprenticeship. Additionally, I wanted to practice developing a portfolio website, and I saw this as a valuable and engaging challenge to enhance my skills.

## Technologies Used
- **Programming Language**: JavaScript
- **Templating Engine**: EJS
- **Styling**: CSS
- **Backend**: Node.js, Express.js

## Challenges I faced whilst building it
One of the significant challenges I faced during this project was managing the complexity of routing. Initially, I had all routes defined within the main JavaScript file, which quickly became overwhelming and difficult to debug. To streamline this, I experimented with different approaches and eventually decided to split the routes by year, organising them into separate files for each year of my apprenticeship. This modular structure made the codebase far easier to manage and debug, as each file now focused on a specific section of the application.  

Another challenge was dealing with repeated components, such as cards, that were being reused across the site. Some of these cards had the same structure and styling but only varied in content, such as images or text. Writing duplicate code for each card would have been inefficient and cumbersome. To address this, I created reusable components within EJS partials, which allowed me to pass variables (such as images and text) into the template dynamically. Although I realised that using a frontend framework like React would have made managing these components more intuitive, I found it valuable to solve this problem within the EJS environment. This approach allowed me to achieve the same functionality, even if it required more manual effort.
