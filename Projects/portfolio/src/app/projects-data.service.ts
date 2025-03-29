import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
   pdata  = [
  {
    "id": 1,
    "title": "Interactive Data Visualization Dashboard",
    "description": "Developed a dynamic dashboard using Angular and D3.js to visualize complex datasets. Implemented interactive charts, filters, and real-time updates to provide actionable insights. Focused on user experience and data storytelling.",
    "technologies": [ "Angular", "TypeScript", "D3.js", "NgRx", "REST API", "Material UI" ],
    "image": "path/to/dashboard_screenshot.png",
    "live_demo": "https://data-dashboard-example.com",
    "github_repo": "https://github.com/yourusername/data-dashboard",
    "tags": [ "Data Visualization", "Dashboard", "Interactive", "Frontend" ],
    "highlight": true,
    "creative_aspect": "Leveraged custom D3.js integrations within Angular to create unique and engaging chart types beyond standard libraries. Focused on smooth transitions and intuitive user interactions for data exploration."
  },
  {
    "id": 2,
    "title": "Collaborative Real-time Whiteboard Application",
    "description": "Built a real-time collaborative whiteboard application using Angular and WebSockets. Enabled multiple users to draw, annotate, and share ideas simultaneously. Implemented features like shape drawing, text input, and undo/redo functionality.",
    "technologies": [ "Angular", "TypeScript", "WebSockets", "Socket.IO", "Canvas API", "RxJS", "Styled Components" ],
    "image": "path/to/whiteboard_screenshot.png",
    "live_demo": "https://realtime-whiteboard.netlify.app",
    "github_repo": "https://github.com/yourusername/collaborative-whiteboard",
    "tags": [ "Real-time", "Collaboration", "WebSockets", "Frontend" ],
    "highlight": true,
    "creative_aspect": "Designed a custom drawing engine using the Canvas API, optimizing for smooth real-time updates and minimal latency. Implemented a unique user presence indicator and intuitive collaboration controls."
  },
  {
    "id": 3,
    "title": "Personalized Recipe Recommendation Engine",
    "description": "Developed a recipe recommendation engine that suggests recipes based on user preferences, dietary restrictions, and available ingredients. Utilized Angular for the frontend and integrated with a backend API for recipe data and recommendations.",
    "technologies": [ "Angular", "TypeScript", "REST API", "NgRx", "Tailwind CSS" ],
    "image": "path/to/recipe_app_screenshot.png",
    "live_demo": "https://recipe-recommender-app.com",
    "github_repo": "https://github.com/yourusername/recipe-recommender",
    "tags": [ "Recommendation Engine", "API Integration", "Frontend" ],
    "highlight": false,
    "creative_aspect": "Implemented a visually appealing and intuitive interface for filtering and exploring recipes. Incorporated features like user ratings and reviews to personalize recommendations further. Focused on a delightful user experience for discovering new recipes."
  },
  {
    "id": 4,
    "title": "Interactive 3D Product Showcase",
    "description": "Created an interactive 3D product showcase using Angular and a 3D rendering library (e.g., Three.js or Babylon.js). Allowed users to rotate, zoom, and explore product features in a visually engaging way.",
    "technologies": [ "Angular", "TypeScript", "Three.js", "GLTF/GLB", "CSS3 Animations" ],
    "image": "path/to/product_showcase_screenshot.png",
    "live_demo": "https://3d-product-showcase.com",
    "github_repo": "https://github.com/yourusername/3d-product-showcase",
    "tags": [ "3D", "Interactive", "Frontend", "Visualization" ],
    "highlight": false,
    "creative_aspect": "Integrated smooth 3D model loading and interactive controls within the Angular framework. Experimented with lighting and animations to highlight product details effectively. Focused on creating a memorable and immersive shopping experience."
  },
  {
    "id": 5,
    "title": "Gamified Learning Platform",
    "description": "Designed and developed a gamified learning platform using Angular, incorporating elements like points, badges, and leaderboards to enhance user engagement. Focused on making learning interactive and fun.",
    "technologies": [ "Angular", "TypeScript", "REST API", "NgRx", "Material UI", "Gamification Principles" ],
    "image": "path/to/learning_platform_screenshot.png",
    "live_demo": "https://gamified-learning.netlify.app",
    "github_repo": "https://github.com/yourusername/gamified-learning-platform",
    "tags": [ "Gamification", "Learning Platform", "Frontend" ],
    "highlight": false,
    "creative_aspect": "Developed engaging game mechanics and visual feedback within the Angular application to motivate learners. Designed a user-friendly interface that seamlessly integrates learning content with gamified elements."
  }
  ];
  isSignin = false;
  constructor() { }
}
