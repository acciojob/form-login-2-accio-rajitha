//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            let formInfo = '';
            for (const [key, value] of formData.entries()) {
                formInfo += `${key}: ${value} `;
            }
            alert(formInfo);
        });