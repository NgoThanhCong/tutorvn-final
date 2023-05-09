import React from "react";

const Test = () =>
{
    return <div class="max-w-2xl mx-auto">

    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose gend</option>
          <option value="male">Male</option>
          <option value="famale">Famale</option>
        
      </select>
  
    
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>

    
  </div>
  
  
};

export default Test;
