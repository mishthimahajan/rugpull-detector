function getReport() {
    // Here, you'd make an API call to fetch the data based on the token address.
    // For now, we will simulate the data with placeholders.

    // Sample data that you would normally get from the API.
    const sampleData = {
        riskScore: "High(78/100)",
        liquidity: "$500,000(partially)",
        ownership: "80% centralized(verified)",
        topWallet: "42%"
    };

    // Set the content for each slide
    document.getElementById("riskScore").innerText = sampleData.riskScore;
    document.getElementById("liquidity").innerText = sampleData.liquidity;
    document.getElementById("ownership").innerText = sampleData.ownership;
    document.getElementById("topWallet").innerText = sampleData.topWallet;

    // Show the slides
    showSlide("riskSlide");
    setTimeout(() => showSlide("liquiditySlide"), 3000);
    setTimeout(() => showSlide("ownershipSlide"), 6000);
    setTimeout(() => showSlide("topWalletSlide"), 9000);
}

function showSlide(slideId) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.style.opacity = "0"; // Hide all slides
    });
    
    const activeSlide = document.getElementById(slideId);
    activeSlide.style.opacity = "1"; // Show the active slide
}
