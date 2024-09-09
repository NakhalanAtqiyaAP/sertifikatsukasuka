document.getElementById("certificateForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const achievement = document.getElementById("achievementInput").value;

    if (name && achievement) {
        createCertificateImage(name, achievement);
    }
});

function createCertificateImage(name, achievement) {
    const canvas = document.createElement("canvas");
    canvas.width = 800; 
    canvas.height = 600; 
    const context = canvas.getContext("2d");

    const background = new Image();
    background.src = "certificates/certificate_template.png";
    background.onload = function () {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        
        context.font = "italic 36px 'Brush Script MT', cursive"; 
        context.fillStyle = "#000"; 
        context.textAlign = "center";
        context.fillText(name, canvas.width / 2, 300); 

        context.font = "bold 16px Arial";
        context.fillText(achievement, canvas.width / 2, 360);

        const certificateImage = document.getElementById("certificateImage");
        certificateImage.src = canvas.toDataURL("image/png");

        const downloadLink = document.getElementById("downloadLink");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.style.display = "inline";
    };
}
