$(document).ready(function () {
    $("#start-test").on("click", function () {
        // Simulated random values for the animation
        let downloadSpeed = Math.floor(Math.random() * 1000 + 1);
        let uploadSpeed = Math.floor(Math.random() * 1000 + 1);

        // Map speeds to angles for both download and upload meters
        let downloadRotation = (downloadSpeed / 1000) * 252;
        let uploadRotation = (uploadSpeed / 1000) * 252;

        // Animate the needles for both meters
        $("#download-needle").css("transform", `rotate(${downloadRotation}deg)`);
        $("#upload-needle").css("transform", `rotate(${uploadRotation}deg)`);

        // Simulate actual speed test result
        setTimeout(function () {
            $.get("/speedtest", function (data) {
                downloadSpeed = data.download_speed;
                uploadSpeed = data.upload_speed;

                // Update needle positions and labels
                downloadRotation = (downloadSpeed / 1000) * 252;
                uploadRotation = (uploadSpeed / 1000) * 252;

                $("#download-needle").css("transform", `rotate(${downloadRotation}deg)`);
                $("#upload-needle").css("transform", `rotate(${uploadRotation}deg)`);

                // Update speed text
                $("#download-speed").text(downloadSpeed.toFixed(2) + " Mbps");
                $("#upload-speed").text(uploadSpeed.toFixed(2) + " Mbps");
            });
        }, 2000);
    });
});