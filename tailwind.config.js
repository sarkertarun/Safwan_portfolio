/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor': "#00413D",
        
       'fontColor': "#00413D",
        
        'btnbgColor':"#E5745D",
        'bgColor': "#F9F4F1",


       


        
      },
            
      fontFamily: {
        'openSans' :["Open Sans"],
        'paprika': ["Paprika"],
        'roboto':["Roboto"],
        'work':["Work Sans"],
        'nunito':["Nunito"]
      },
      maxWidth: {
        "container": "1180px",
      },
     

    },
  },
  plugins: [],
}

