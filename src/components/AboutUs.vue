<template>
    <section class="about-us">
      <div class="container">
        <h2 class="heading">About Us</h2>
        <div class="content">
          <p>We are a team dedicated to bringing you the best [your product/service] in the industry. With years of experience and a passion for excellence, we strive to exceed your expectations and provide unparalleled service.</p>
          <p>Our journey began in [year], with a vision to [vision/goals]. Since then, we have grown and evolved, but our core values and commitment to quality have remained unchanged.</p>
          <p>Thank you for choosing us. We look forward to serving you and being a part of your [journey/experience].</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    // Any component logic goes here
  }
  </script>
  
  <style scoped>
  .about-us {
    background-color: #646464; /* Light background for a clean look */
    padding: 40px 0;
    color: #333; /* Dark text for contrast */
  }
  
  .container {
    max-width: 960px; /* Slightly wider container for better layout */
    margin: auto;
    padding: 0 20px;
  }
  
  .heading {
    font-size: 28px; /* Larger heading for emphasis */
    color: #ffffff; /* Slightly darker than the text for hierarchy */
    margin-bottom: 30px; /* More space below the heading */
    text-align: left; /* Align left for a more traditional, professional look */
  }
  
  .content {
    text-align: left; /* Align text left for readability */
    font-size: 16px; /* Ideal for readability */
    line-height: 1.75; /* More line height for better readability */
    color: #ffffff;
  }
  
  .content p {
    margin-bottom: 20px; /* Increased spacing between paragraphs */
  }
  </style>
  