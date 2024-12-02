# GitHub Profile Viewer  

## **Overview**  

The **GitHub Profile Viewer** is a web application that allows users to search for and view public details about any GitHub user. By entering a GitHub username, users can retrieve information such as the user’s avatar, name, bio, and public repositories.  

---

## **Features**  

1. **Search Functionality**:  
   - Input field for entering a GitHub username.  
2. **User Details Display**:  
   - Shows the user's avatar, name, bio, location, and GitHub profile link.  
3. **Repository List**:  
   - Displays the user's public repositories with links to each repository.  
4. **Responsive Design**:  
   - Fully optimized for all devices, including desktops, tablets, and smartphones.  

---

## **Technologies Used**  

1. **HTML**: For structuring the web application.  
2. **CSS**: For styling and layout of the app.  
3. **JavaScript**: For fetching and displaying GitHub profile data using the GitHub API.  

---

## **How It Works**  

1. Users enter a GitHub username in the input field.  
2. The app fetches the user data using the GitHub API:  
   - API URL: `https://api.github.com/users/{username}`  
3. The profile details, such as avatar, name, and repositories, are displayed dynamically on the page.  

---

## **Setup Instructions**  

1. Clone this repository to your local machine:  
   ```bash
   git clone https://github.com/wazirkazimi/Github-Profile-Viewer.git
