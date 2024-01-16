# Chip Component Project Documentation

## Overview

Welcome to the Chip Component project! This project is a React application that demonstrates a user interface for picking users using chips. The selected users are displayed as chips, and you can search for users by name or email.

## Live Deployment

The live version of this project is hosted on Vercel and is accessible at [https://chip-component-silk.vercel.app/](https://chip-component-silk.vercel.app/). Feel free to explore the application and interact with its features.

## About Vercel

[Vercel](https://vercel.com/) is a cloud platform for frontend developers that enables easy deployment and hosting of web applications. It offers seamless integration with popular frontend frameworks and provides a straightforward process for deploying projects directly from your Git repository.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Code Structure](#code-structure)
- [Styling](#styling)
- [Dependencies](#dependencies)
- [Contact](#contact)

## Project Structure

The project structure is organized as follows:

- `src/`
  - `components/`: Contains React components (`ChipComponent` and `UserChip`).
  - `App.tsx`: Entry point of the application.
  - `ChipComponent.css`: Styles for the `ChipComponent`.
  - `index.tsx`: Entry file for rendering the React application.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/nebociel/chip-component.git`.
2. Navigate to the project directory: `cd chip-component-project`.
3. Install dependencies: `npm install` or `yarn install`.
4. Run the development server: `npm run dev` or `yarn dev`.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- Pick users by searching their names or emails.
- Display selected users as chips.
- Remove selected users by clicking on the "X" icon in the chip.
- Stylish and user-friendly interface.

## Code Structure

### ChipComponent.tsx

- Main component managing the state and rendering.
- Fetches user data from the JSONPlaceholder API.
- Handles user input, selection, and chip removal.

### UserChip.tsx

- Renders a single user chip.
- Displays user image, name, and email (optional).
- Provides a removal button.

### App.tsx

- Entry file rendering the `ChipComponent`.

### ChipComponent.css

- Styles for the `ChipComponent` and related elements.

## Styling

The styling is done using CSS modules to keep the styles scoped to each component. The color scheme is light and clean, providing a pleasant user interface.

## Dependencies

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/): Promise-based HTTP client for making API requests.

## Contact

If you have any questions or need further assistance, feel free to reach out to the project owner:

- **Project Owner:** Akash Kumar Chaubey
- **Email:** akashchaubey443@gmail.com

Thank you for your interest in this project! Happy coding!
