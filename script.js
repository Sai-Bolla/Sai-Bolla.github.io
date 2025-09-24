function showSidebar(){
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex';
}

function hideSidebar(){
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none';
}

function themeToggle(){
    var theme = document.body;
    theme.classList.toggle("darkMode")

}

function underConstruction(){
    alert(" Under Construction! \n 🧱🚧🏗️👷👷‍♀️🧑‍🏭🛠️🔩⚒️🔨")
}