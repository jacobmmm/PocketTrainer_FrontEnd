# Step 1: Use an Nginx image as the base image
FROM nginx:alpine

# Step 2: Copy the React app build files to Nginx's default HTML directory
COPY build /usr/share/nginx/html

# Step 3: Expose port 80 for the application
EXPOSE 80

# Step 4: Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
