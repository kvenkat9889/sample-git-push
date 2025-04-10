# Step 1: Set the base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all other files into the container
COPY . .

# Step 6: Expose the port that your API will run on (3000 in your case)
EXPOSE 3000

# Step 7: Define the command to run the API
CMD ["npm", "start"]

