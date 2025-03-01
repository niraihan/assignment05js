// theme Button
const button = document.getElementById("btn-theme");
const themes = [
    { bg: "bg-teal-500" },
    { bg: "bg-gray-800" },
    { bg: "bg-blue-500" },
    { bg: "bg-green-500"   },
    { bg: "bg-red-500" },
    {bg:"bg-yellow-600"}
];

let currentThemeIndex = 0;

button.addEventListener("click",function () {
    document.body.className = `transition-all duration-500 ${themes[currentThemeIndex].bg} }`;
    

    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
});