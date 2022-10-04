function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
history.scrollRestoration = "manual";
window.onload = scrollToBottom;
      

function topFunction() {
    document.documentElement.scrollTop = 0;
} 
