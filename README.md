# Toguz-Korgool | AIU Frontend Final Project

Toguz Korgool – Traditional Kyrgyz intellectual game.

Toguz Korgool belongs to the mancala family, whose name derives from the word “move” or “movement”.
This project is the representation Toguz Korgool game, user will play Toguz Korgool with computer. For more information or rules of the game refer to this website [ToguzKorgool](http://worldnomadgames.com/en/sport/Toguz-korgool/)

Here are some screenshots:

![Alt text](/screenshots/front1.png?raw=true)
![Alt text](/screenshots/front2.png?raw=true)
![Alt text](/screenshots/front3.png?raw=true)
## Directory Structure

- **`public/`**: Contains static assets like images, fonts, and files served by the web server.
- **`screenshots/`**: Stores visual snapshots of your app for reference or documentation.
- **`src`**: The heart of your application, containing all source code written in React and JavaScript.

node_modules: Houses all dependencies installed through npm.
public: Contains static assets like images, fonts, and files served by the web server.
screenshots: Stores visual snapshots of your app for reference or documentation.
src: The heart of your application, containing all source code written in React and JavaScript.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## How to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/xNazim/frontend-final.git
   cd frontend-final
   npm install
   npm start

## Deployment

This application is configured for deployment using GitHub Actions and AWS services. The deployment workflow includes the following steps:

- **Install AWS CLI v2:** Installs the AWS Command Line Interface version 2.
- **Node.js Setup:** Sets up Node.js version 16.x.
- **Install Dependencies:** Installs the project dependencies using npm.
- **Build Application:** Builds the React application for production.
- **Upload App to S3 Bucket:** Syncs the build files with the specified S3 bucket.
- **Create CloudFront Cache Invalidation:** Invalidates the CloudFront cache to ensure the latest version of the application is served to users.

The deployment workflow can be triggered manually using the GitHub Actions workflow_dispatch event or automatically upon pushing changes to the `master` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.