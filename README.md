# Add at least 3 Project features

- In this project, when we click on the Select button then, the selected Course name will be added into the bookmark.

- Same as, all the credit hour of each selected course's  will be added together and will be displayed in the total credit hour section of the bookmark.

- When the 'select' button is clicked, the prices of all the selected courses will be added together. The total cost will be displayed in a bookmark, and the remaining credit of 20 credits will also be shown in the bookmark.


# Discuss how you managed the state in your assignment project.

- The first state of my project, i have used to store the array of object of converted json file using fetch & useEffect for controlling the asynchronous data. 

- Here i have stored the courses data and after mapping i have passed the data into the course component and after receiving as a props there which is destructured and displayed on the user interface. 

- Secondly, i have used the second state which is used to store the total credit hours of the courses. And from the purpose of storing the total credit hours i have displayed the credit hours in the bookmark as well.

- Thirdly and fourthly i have used two states, to store the total remaining credit hours and total prices of the courses. By using these two states i have displayed both remaining credit hours & total prices in the bookmark.