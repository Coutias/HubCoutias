(function() {
    function showToast() {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showToast();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); showToast(); }
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) { e.preventDefault(); showToast(); }
        if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) { e.preventDefault(); showToast(); }
        if (e.ctrlKey && e.shiftKey && (
            e.key === 'I' || e.key === 'i' || e.keyCode === 73 ||
            e.key === 'J' || e.key === 'j' || e.keyCode === 74 ||
            e.key === 'C' || e.key === 'c' || e.keyCode === 67
        )) { e.preventDefault(); showToast(); }
    });
})();
