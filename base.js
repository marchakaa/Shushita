document.querySelector(".profile").addEventListener('click', function(e) {
    curr_theme = document.documentElement.className;
    const setTheme = theme => document.documentElement.className = theme;
    console.log(curr_theme)
    if (curr_theme == '') {
        setTheme('contrast');
    } else if (curr_theme == 'contrast') {
        setTheme('black')
    }  else if (curr_theme == 'black') {
        setTheme('pink')
    } else {
        setTheme('');
    }
});