//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('input[type="button"]');
    button.addEventListener('click', function() {
        var select = document.getElementById('colorSelect');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== -1) {
            select.remove(selectedIndex);
        }
    });
});