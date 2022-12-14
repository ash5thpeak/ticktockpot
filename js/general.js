window.onload = function() {
    document.getElementById(footerDate.id).innerText = getDateYear();

}

function getDateYear(e)
{
    return new Date().getFullYear();
}
