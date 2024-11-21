# Career Compass Website

Welcome to **Career Compass Website**, a platform designed to guide users on their career paths, offering personalized career advice, resume reviews, counseling sessions, and more. We provide a seamless, intuitive experience for users seeking to make informed decisions about their professional futures.

**Live Site URL:** [https://career-compass-371c8.web.app/](https://career-compass-371c8.web.app/)

## Technologies Used

- **Frontend:** 
  - **React.js**: A JavaScript library for building user interfaces, enabling the development of a dynamic, single-page application.
  - **React Router**: Used for handling routing within the React application, ensuring smooth transitions between pages without page reloads.
  - **Tailwind CSS**: A utility-first CSS framework for building responsive, customizable user interfaces.
  - **DaisyUI**: A component library built on top of Tailwind CSS for easy-to-use, customizable UI elements.
  - **React Helmet**: A library for managing the document head, allowing us to dynamically set the page title and meta tags for each page.
  - **AOS (Animate On Scroll)**: A library for adding animation effects when elements come into view as the user scrolls down the page.

- **Authentication:**
  - **Firebase Auth**: Firebase is used for handling user authentication, providing features like email/password login and Google login.
  - **Firebase Config & Environment Variables**: Firebase keys are securely stored using environment variables for confidentiality.

- **Deployment:**
  - **Firebase Hosting**: The application is hosted on Firebase, ensuring fast and reliable performance with real-time updates.
  
## Key Features

1. **User Authentication**: Secure login and registration system using Firebase Authentication with email/password or Google login options.
2. **Dynamic Routing with React Router**: Navigation across different pages such as Home, Service Details, and My Profile is made smooth using React Router.
3. **User Profile Management**: After logging in, users can view and update their profile information (name, photoURL) using Firebase's `updateProfile()` method.
4. **Service Details Page**: A protected route that provides detailed information about career counseling services. Users must be logged in to access this page.
5. **Comments/Feedback**: Users can submit feedback on the services they have received through a simple comment section on the Service Details page.
6. **Dynamic Page Titles**: Each page has a dynamic title using React Helmet, improving SEO and user experience.
7. **Responsive Design**: The website is fully responsive, ensuring a seamless experience on mobile, tablet, and desktop devices.
8. **AOS Animations**: Smooth animations when users scroll down the page, enhancing the overall UI/UX experience.
9. **Error and Success Notifications**: Toast messages or SweetAlert notifications are used to inform users about the success or failure of their actions (e.g., logging in, updating profile).
10. **Forget Password Feature**: A functional forget password feature redirects users to Gmail for password reset requests.

## Layout Structure

- **Navbar**: 
  - Displays the website name and links to the Home and My Profile pages.
  - If the user is logged in, the navbar shows the user's profile picture, with the option to log out. If not logged in, a login button is shown.
  
- **Main Section**: 
  - Displays dynamic content based on the active route, including service listings and detailed information on selected services.

- **Footer**: 
  - Contains relevant information and links to contact, terms of service, privacy policy, and other useful sections.

## Header Section

- **Slider**: 
  - A carousel (DaisyUI) with at least 3 slides showcasing the various career counseling services.
  
## Service Cards 
  - Displays the services in a card layout with key information (service name, pricing, counselor, etc.). Each card contains a "Learn More" button that redirects users to the Service Details page.

## Service Details Page

- A protected route where users can see full details about a specific service.
- Users can submit comments and feedback related to the service.
- If the user is not logged in, they will be redirected to the login page.

## Authentication Pages

- **Login Page**: 
  - Users can log in using their email/password or Google account.
  
- **Register Page**: 
  - New users can sign up with their name, email, photo URL, and password. Password validation is enforced (uppercase, lowercase, and minimum length of 6 characters).
  
- **Forget Password**: 
  - A form to reset the password. Clicking the reset button redirects the user to Gmail.

## Features in My Profile

- **Edit Profile**: 
  - After logging in, users can view and edit their profile information (name, photo URL).
  - Changes are saved using Firebase's `updateProfile()` method.

- **Show/Hide Password**: 
  - Users can toggle password visibility on the registration page.

## Environment Variables

- Firebase config keys are securely stored in environment variables to ensure they are not exposed in the codebase.

## Additional Features

- **404 Page**: 
  - A custom error page for unmatched routes.

- **Extra Route**: 
  - A protected private route relevant to the user experience, requiring login for access. the page Stay on Shop Now button on navbar, when user click any book it goes to a privet routes, is user not logged in he/she can access the page and redirect to the login page.

